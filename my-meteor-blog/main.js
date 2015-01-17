if(Meteor.isClient) {

    // #Sessions -> Re-running functions reactively
    // Tracker.autorun(function(c){
    //     var example = Session.get('mySessionExample'); 

    //     if(!c.firstRun) {
    //         if(Session.equals('mySessionExample', 'stop')) {
    //             alert('We stopped our reactive Function');
    //             c.stop();
    //         } else {
    //             alert(example);
    //         }
    //     }
    // });
}