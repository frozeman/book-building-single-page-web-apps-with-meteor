Package.describe({
	name: "meteor-book:reactive-timer",
	summary: "A simple timer object, which can re-run reactive functions based on an interval",
	version: "0.0.1",
	// optional
	git: "https://github.com/frozeman/meteor-reactive-timer"
});

Package.onUse(function (api) {
	api.versionsFrom('METEOR@1.0');

	api.use('tracker', 'client');

	api.export('ReactiveTimer');

	api.addFiles('ReactiveTimer.js', 'client');
});