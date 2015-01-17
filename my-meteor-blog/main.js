// #Users and permissions -> Adding the accounts packages
Accounts.config({
    forbidClientAccountCreation: true
});

// # Users and Permissions -> Adding permissions
if(Meteor.isClient) {
	Meteor.subscribe("userRoles");
}

// Start the ReactiveTimer package
if(Meteor.isClient) {
    timer = new ReactiveTimer();
    timer.start(10);
}
