import {Component} from 'angular2/core';

let template = require('./navbar.html');

@Component({
  selector: 'navbar',
  template: template
})

/**
 * @class Navbar
 * @description Navbar Component
 * @param Component Template injected
 * @returns exports component
 */
export class Navbar {
  images: Object;
  constructor() {
    this.images = {
    };
  }
}
