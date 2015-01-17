// #Users and permissions -> Adding the accounts packages
Accounts.config({
    forbidClientAccountCreation: true
});

// # Users and Permissions -> Adding permissions
if(Meteor.isClient) {
	Meteor.subscribe("userRoles");
}

// if(Meteor.isClient) {
//     // #Advanced Reactivity -> Building a simple reactive object
//     ReactiveTimer = new Tracker.Dependency;

//     Meteor.setInterval(function(){
//         // re-run dependecies every 30s
//         ReactiveTimer.changed();
//     }, 10000);


//     Tracker.autorun(function(){
//         ReactiveTimer.depend();
//         console.log('Function re-run');
//     });
// }