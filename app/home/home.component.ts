import {Component} from 'angular2/core';

@Component({
  selector: 'home',
  template: require('./home.html'),
  directives: []
})

export class Home {

  images:Object;

  constructor() {
    this.images = {
    };
  }

}
