import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

type linksType = {
	short_link: string;
	original_link: string;
};

@Component({
	selector: 'app-shorten-form',
	templateUrl: './shorten-form.component.html',
	styleUrls: ['./shorten-form.component.css'],
})
export class ShortenFormComponent implements OnInit {
	constructor(private http?: HttpClient) {}
	private API_URL = 'https://api.shrtco.de/v2/shorten?';

	url: string = '';
	validation = { error: false, message: '' };
	links: linksType[] = [];

	ngOnInit() {
		this.getLinks();
	}

	submit = async () => {
		if (this.validate()) return;
		this.http?.get(`${this.API_URL}url=${this.url}`).subscribe(
			(res: any) => this.store(res.result),
			({ error }) => this.addError(true, error?.error?.split(',')[0])
		);
	};

	validate = () => {
		if (this.url?.length === 0) {
			this.addError(true, 'Please add a link');
			return false;
		}
		if (this.validation.error) {
			this.addError(false, '');
			return true;
		}
		return;
	};

	store = (data: {}) => {
		const { original_link, short_link }: any = data;
		let prevLinks: [] = JSON.parse(localStorage.getItem('short_links') || '[]');
		let newLinks: any = [{ original_link, short_link }, ...prevLinks];

		localStorage.setItem('short_links', JSON.stringify(newLinks));
		this.links = newLinks;
	};

	getLinks = () => {
		let prevLinks: [] = JSON.parse(localStorage.getItem('short_links') || '[]');
		this.links = prevLinks;
	};

	addError = (error: boolean, message: string) => {
		this.validation = { error, message };
	};
}
