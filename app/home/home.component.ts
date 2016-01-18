import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Article} from './article';
import {CategoryPipe} from './category.pipe';

let tom = require('./tom.jpg');
let morgan = require('./morgan.jpg');
let style = require('!!raw!sass!./home.scss');

@Component({
  selector: 'home',
  template: require('./home.html'),
  directives: [NgFor],
  styles: [style],
  pipes: [CategoryPipe]
})

export class Home {

  images:Object;
  articles: Array<Article>;
  curCategory: String

  constructor() {
    this.images = {
    	tom,
    	morgan
    };
    this.articles = [
    	new Article({
			title: 'Your Problem Solving Article',
			author: 'Tom Manion',
			date: new Date('4-13-2015'),
			description: 'Here we describe a way to find your answer to your question.',
			category: 'Tech'
	    })
    ];
    this.curCategory = 'All';
  }
}
