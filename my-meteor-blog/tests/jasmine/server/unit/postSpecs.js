describe('Post', function () {

    beforeEach(function () {
        MeteorStubs.install();
    });

    afterEach(function () {
        MeteorStubs.uninstall();
    });

    it('should be correctly inserted', function() {

        spyOn(Posts, 'findOne').and.callFake(function() {
            // simulate return a found document;
            return {title: 'Some Tite'};
        });

        spyOn(Posts, 'insert');

        spyOn(Meteor, 'user').and.returnValue({_id: 4321, profile: {name: 'John'}});

        spyOn(global, 'moment').and.callFake(function() {
            // simulate return a the moment object;
            return {unix: function(){
                return 1234;
            }};
        });

        Meteor.call('insertPost', {
            title: 'My Title',
            description: 'Lorem ipsum',
            text: 'Lorem ipsum',
            slug: 'my-title'
        }, function(error, result){

            expect(error).toBe(null);

            // we check that the slug is returned
            expect(result).toContain('my-title');
            expect(result.length).toBeGreaterThan(8);

            // we check that the post is correct inserted
            expect(Posts.insert).toHaveBeenCalledWith({
                title: 'My Title',
                description: 'Lorem ipsum',
                text: 'Lorem ipsum',
                slug: result,
                timeCreated: 1234,
                owner: 4321,
                author: 'John'
            });
        });

    });
});