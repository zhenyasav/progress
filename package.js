Package.describe({
	name: 'zhenya:progress',
	version: '0.0.3',
	// Brief, one-line summary of the package.
	summary: 'Animated, responsive progress bar',
	// URL to the Git repository containing the source code for this package.
	git: 'https://github.com/zhenyasav/progress',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.0.3.1');
	
	api.use([
		'coffeescript', 
		'less', 
		'templating',
		'reactive-var'], 'client');

	api.addFiles([
		'progress.html',
		'progress.coffee',
		'progress.less'
		], 'client');
});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use('zhenya:progress');
});
