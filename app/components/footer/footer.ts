import {Component} from 'angular2/core';

let template = require('./footer.html');

@Component({
  selector: 'footer-section',
  template: template
})

/**
 * @class Footer
 * @description Footer Component
 * @param Component Template injected
 * @returns exported component
 */
export class FooterSection {
	year: Number;
	constructor() {
		this.year = new Date().getFullYear();
	}
}
