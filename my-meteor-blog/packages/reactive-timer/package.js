Package.describe({
	name: "meteor-book:reactive-timer",
	summary: "A simple timer object, which can re-run reactive functions based on an interval",
	version: "0.0.1",
	// optional
	git: "https://github.com/frozeman/meteor-reactive-timer"
});

Package.onUse(function (api) {
	api.versionsFrom('METEOR@0.9.4');

	api.use('tracker', 'client');

	api.export('ReactiveTimer');

	api.addFiles('ReactiveTimer.js', 'client');
});

Package.onTest(function (api) {
	api.use('meteor-book:reactive-timer', 'client');
	api.use('tinytest', 'client');

	api.addFiles('tests/tests.js', 'client');
});