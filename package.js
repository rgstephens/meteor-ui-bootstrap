var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.

Package.describe({
    name: 'gstephens:ui-bootstrap',
    version: '1.1.2',
    summary: 'angular ui-bootstrap from bower package',
    git: 'https://github.com/rgstephens/meteor-ui-bootstrap',
    // By default, Meteor will default to using README.md for documentation.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('0.9.0');
    //api.use('ecmascript');
    api.use("angular", "client");
    api.addFiles('bower_components/angular-bootstrap/ui-bootstrap-csp.css', where);
    api.addFiles('bower_components/angular-bootstrap/ui-bootstrap-tpls.js', where);
});

Package.onTest(function (api) {
    api.use('ecmascript');
    api.use('tinytest');
    api.use('gstephens:ui-bootstrap');
    api.addFiles('ui-bootstrap-tests.js');
});
