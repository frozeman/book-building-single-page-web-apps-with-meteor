
// Template helpers
Template.home.helpers({
    // #Storing Data -> Querying a collection
    postsList: function(){
    	return Posts.find({}, {sort: {timeCreated: -1}});
    }
});