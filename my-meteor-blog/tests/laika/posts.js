var assert = require('assert');

suite('Adding posts', function() {
    test('from the server', function(done, server) {
        server.eval(function() {
            Posts.insert({title: 'hello title'});
            var docsCount = Posts.find().count();
            emit('docsCount', docsCount);
        
        }).once('docsCount', function(docsCount) {
            assert.equal(docsCount, 1);
            done();
        });
    });

    test('only from logged in clients', function(done, server, client1, client2) {
        server.eval(function() {
            Posts.find().observe({
                added: function(post) {
                  emit('post', post);
                }
            });

        }).once('post', function(post) {
            assert.equal(post.title, 'hello title');
            done();
        });

        client1.eval(function() {
            // first we need to login
            Meteor.loginWithPassword('johndoe@example.com', '1234', function(){

                Posts.insert({
                    title: 'hello title',
                    owner: Meteor.userId()
                });
            });
        });

        client2.eval(function() {

            Posts.insert({
                title: 'hello wrong title',
                owner: Meteor.userId()
            });
        });
    });
});