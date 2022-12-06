import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-stat-card',
	templateUrl: './stat-card.component.html',
	styleUrls: ['./stat-card.component.css'],
})
export class StatCardComponent {
	@Input() img: any;
	@Input() title!: string;
	@Input() description!: string;
}
