if(Meteor.isClient) {
    Session.setDefault('lazyloadLimit', 2);
}


Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound',
    loadingTemplate: 'loading',

    // #Routes -> Changing the website title
    onAfterAction: function() {
        var data = Posts.findOne({slug: this.params.slug});

        if(_.isObject(data) && !_.isArray(data))
            document.title = 'My Meteor Blog - '+ data.title;
        else
            document.title = 'My Meteor Blog - '+ this.route.getName();
    }
});

Router.map(function() {
    
    // #Routes -> Setup the router
    this.route('Home', {
        path: '/',
        template: 'home',

        // #Routes -> Moving the posts subscription to the "Home" route
        subscriptions: function(){
            return Meteor.subscribe("lazyload-posts", Session.get('lazyloadLimit'));
        }
    });


    // #Routes -> Adding another routne
    this.route('About', {
        path: '/about',
        template: 'about'
    });


    // #Routes -> Setting up the post route
    this.route('Post', {
        path: '/posts/:slug',
        template: 'post',

        waitOn: function() {
            return Meteor.subscribe('single-post', this.params.slug);
        },

        data: function() {
            return Posts.findOne({slug: this.params.slug});
        }
    });
});