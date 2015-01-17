
// Template helpers
Template.home.helpers({
    // #Storing Data -> Querying a collection
    postsList: function(){
        return Posts.find({}, {sort: {timeCreated: -1}});
    }
});

// #Controlling the data flow -> Lazy load posts or how to change subscriptions
Template.home.events({
    'click button.lazyload': function(e, template){
        var currentLimit = Session.get('lazyloadLimit');

        Session.set('lazyloadLimit', currentLimit + 2);
    }
});