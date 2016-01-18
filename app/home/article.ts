import {Utils} from '../utils';

export class Article {
	title: String;
	author: String;
	date: Date;
	description: String;
	category: String;
	constructor(data:any) {
		Utils.CopyProperties(data, this);
	}
}