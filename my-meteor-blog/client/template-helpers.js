Template.registerHelper('formatTime', function(time, type){
	
	// #Advanced Reactivity -> Re-running functions
	// ReactiveTimer.depend();
	
	timer.tick();

	switch(type){
		case 'fromNow': 
	 		return moment.unix(time).fromNow();
		case 'iso':
			return moment.unix(time).toISOString();
		default:
			return moment.unix(time).format('LLLL');
	}
});