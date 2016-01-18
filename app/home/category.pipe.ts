import {Pipe, PipeTransform} from 'angular2/core';
import {Article} from './article';

@Pipe({ name: 'category' })
export class CategoryPipe implements PipeTransform {
	transform(articles: Array<Article>, args: string[]): any {
		let category:string = args[0];
		let newArgs:Array<Article> = [];
		articles.forEach(article => {
			if (article.category === category || category === 'All') {
				newArgs.push(article);
			}
		});
		return newArgs;
	}
}
