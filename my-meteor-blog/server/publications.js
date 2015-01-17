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

// #Routes -> Setting up the post route
Meteor.publish("single-post", function (slug) {
	return Posts.find({slug: slug});
});

// # Users and Permissions -> Adding permissions
Meteor.publish("userRoles", function () {
	if (this.userId) {
		return Meteor.users.find({_id: this.userId}, {fields: {roles: 1}});
	} else {
		this.ready();
	}
});