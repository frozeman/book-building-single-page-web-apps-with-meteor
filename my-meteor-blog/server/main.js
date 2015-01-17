Meteor.startup(function(){

	console.log('Server started');


	// #Users and Permissions -> -> Creating the admin user
	if(Meteor.users.find().count() === 0) {

		console.log('Created Admin user');

		var userId = Accounts.createUser({
			username: 'johndoe',
			email: 'johndoe@example.com',
			password: '1234',
			profile: {
				name: 'John Doe'
			}
		});
		Meteor.users.update(userId, {$set: {
			roles: {admin: true},
		}})
	}
});