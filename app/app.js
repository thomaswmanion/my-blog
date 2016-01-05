require('../node_modules/angular2/bundles/angular2-polyfills.js');
require('../node_modules/rxjs/Rx.js');

require('./boot.ts');

if (module.hot) {
	module.hot.accept();
}
