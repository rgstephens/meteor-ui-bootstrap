gstephens:ui-bootstrap
======================

A meteor package wrap for [ui-bootstrap](https://angular-ui.github.io/bootstrap/)

Depends on [angular-meteor](https://github.com/Urigo/angular-meteor) 

versions
========
This version of the package wraps Angular Bootstrap v1.1.2

notes
=====
It's important to note that since UI Bootstrap v0.14.0 the directive and controller prefixes have changed. For example, references to **typeahead** must change to **uib-typeahead**.

A complete list of the prefix changes can be found in the [Migration guide for prefixes](https://github.com/angular-ui/bootstrap/wiki/Migration-guide-for-prefixes).

updating this package
=====================
To update this package, follow the approach described [here](https://gun.io/blog/how-to-github-fork-branch-and-pull-request/).

- cd \<build-dir>
- git clone https://github.com/rgstephens/meteor-ui-bootstrap
- bower install angular-bootstrap
- update package.js file details
- update README.md

Test in project

- cd \<project-dir>
- ln -s /Users/greg/meteor/meteor-ui-bootstrap/ packages/ui-bootstrap
- meteor remove gstephens:ui-bootstrap # if you already have package installed
- meteor add gstephens:ui-bootstrap
