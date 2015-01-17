describe('Vistors', function() {
    it('should not see the create posts link', function () {
        var div = document.createElement('DIV');
        Blaze.render(Template.home, div);

        expect($(div).find('a.createNewPost')[0]).not.toBeDefined();
    });
});

describe('The Admin', function() {
    afterEach(function (done) {
        Meteor.logout(done);
    })

    it('should be able to login and see the create post link', function (done) {
        var div = document.createElement('DIV');
        Blaze.render(Template.home, div);

        Meteor.loginWithPassword('johndoe@example.com', '1234', function (err) {

            Tracker.afterFlush(function(){

                expect($(div).find('a.createNewPost')[0]).toBeDefined();
                expect(err).toBeUndefined();

                done();
            });

        });
    });
});

