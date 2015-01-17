
// #Controlling the data flow -> Publish data
// Meteor.subscribe('all-posts');

// #Controlling the data flow -> Publish only parts of data
// Meteor.subscribe('limited-posts');

// #Controlling the data flow -> Publish specific fields
// Meteor.subscribe('specificfields-posts');

// #Controlling the data flow -> Lazy load posts or how to change subscriptions
Session.setDefault('lazyloadLimit', 2);
Tracker.autorun(function(){
	Meteor.subscribe('lazyload-posts', Session.get('lazyloadLimit'));
});