
Tinytest.add('The timer set the _intervalId property', function (test) {
    var timer = new ReactiveTimer();
    timer.start(1);

    test.isTrue(timer._intervalId !== null);

    timer.stop();
});

Tinytest.addAsync('The timer run', function (test, expect) {
    var run = false,
        timer = new ReactiveTimer();
    timer.start(1);

    Tracker.autorun(function(c){
        timer.tick();

        if(!c.firstRun)
            run = true;
    });

    Meteor.setTimeout(function(){
        test.equal(run, true);
        timer.stop();

        expect();
    }, 1010);
});
