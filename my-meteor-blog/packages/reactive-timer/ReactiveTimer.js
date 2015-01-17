// #Advanced Reactivity -> Creating an advanced timer object
ReactiveTimer = (function () {

    // Constructor
    function ReactiveTimer() {
    	this._dependecy = new Tracker.Dependency;
    	this._intervalId = null;
    };

    ReactiveTimer.prototype.start = function(interval){
    	var _this = this;

    	// this._intervalId = Meteor.setInterval(function(){
     //        // rerun every "interval"
     //        _this._dependecy.changed();
     //    }, 1000 * interval);
    };

    ReactiveTimer.prototype.stop = function(){
        Meteor.clearInterval(this._intervalId);
    };

    ReactiveTimer.prototype.tick = function(){
        this._dependecy.depend();
    };

    return ReactiveTimer;
})();