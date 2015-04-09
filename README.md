# install dependencies

	$ npm install
	$ bower install
	$ grunt init:dev
	$ grunt build:dev

# run development

start grunt concurrent watch task:

	$ grunt concurrent:dev
	
and point your browser to `build/index.html`, for instance starting up one simple server in the build dir

	$ python -m SimpleHTTPServer 8000

and then navigate your browser to [http://127.0.0.1:8000/build/index.html](http://127.0.0.1:8000/build/index.html)

# structure

* `ng-src` contains the source code of your app: index.html, js files, templates, less source code, fonts, icons...
* `vendor` is an intermediate directory where grunt will gather all external required files before copying them to `build`. Can be safely deleted, as `grunt init:dev` will recreate it again
* `build` is the resulting built application: all external js files in vendor.min.js and all application js files in app.js
* `node_modules` and `bower_components` are populated by `npm install` and `bower install` respectively. Can be safely deleted

 