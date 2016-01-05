import {Component, Injectable} from 'angular2/core';
import {RouteConfig, RouterOutlet, ROUTER_DIRECTIVES} from 'angular2/router';
import {Home} from './home/home.component';

import {Navbar} from './components/navbar/navbar';
import {FooterSection} from './components/footer/footer';

let template = require('./app.html');

@Component({
  selector: 'my-app',
  template: template,
  directives: [ROUTER_DIRECTIVES, Navbar, FooterSection]
})
@RouteConfig([
  {path: '/home', name: 'Home', component: Home, useAsDefault: true}
])
export class AppComponent {

  images:Object;

  constructor() {
    this.images = {
    };
  }

}
