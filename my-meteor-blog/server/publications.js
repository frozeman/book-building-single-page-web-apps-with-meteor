
// #Controlling the data flow -> Publish data
Meteor.publish('all-posts', function () {
	return Posts.find();
});


// #Controlling the data flow -> Publish only parts of data
Meteor.publish('limited-posts', function () {
	return Posts.find({}, {
		limit: 2,
		sort: {timeCreated: -1}
	});
});


// #Controlling the data flow -> Publish specific fields
Meteor.publish('specificfields-posts', function () {
	return Posts.find({}, {
		fields: {
			title: 1
		}
	});
});


// #Controlling the data flow -> Lazy load posts or how to change subscriptions
Meteor.publish('lazyload-posts', function (limit) {
	return Posts.find({}, {
		limit: limit,
		fields: {
			text: 0
		},
		sort: {timeCreated: -1}
	});
});