// #Sessions -> Making reactive functions template specific
Template.home.created = function(){

	this.autorun(function(){
        alert(Session.get('mySessionExample'));
    });
};

// Template.home.destroyed = function(){

// 	if(this.reactivefunction)
// 		this.reactivefunction.stop();
// };


// Template helpers
Template.home.helpers({

    // #Storing Data -> Querying a collection
    postsList: function(){
        return Posts.find({}, {sort: {timeCreated: -1}});
    },

    // #Sessions -> Using sessions in template helpers
    sessionExample: function(){
        return Session.get('mySessionExample');
    }
});


// #Controlling the data flow -> Lazy load posts or how to change subscriptions
Template.home.events({
	'click button.lazyload': function(e, template){
		var currentLimit = Session.get('lazyloadLimit');

		Session.set('lazyloadLimit', currentLimit + 2);
	}
});