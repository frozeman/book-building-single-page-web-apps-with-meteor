
// #Security with allow and deny rules -> Adding posts using a method call
Meteor.methods({
    insertPost: function(postDocument) {

        if(this.isSimulation) {
            Session.set('saveButton', 'Saving...');

        } else {
            var user = Meteor.user();

            // ensure the user is logged in
            if (!user)
                throw new Meteor.Error(401, "You need to login to write a post");


            // prevent duplicate link names, we just add a random string like: "my-page-c5g"
            if(Posts.findOne({slug: postDocument.slug}))
                postDocument.slug = postDocument.slug +'-'+ Math.random().toString(36).substring(3);


            // add properties on the serverside
            postDocument.timeCreated = moment().unix();
            postDocument.author      = user.profile.name;
            postDocument.owner       = user._id;


            Posts.insert(postDocument);

            // this will be received as the second parameter of the method callback
            return postDocument.slug;
        }
    }
});