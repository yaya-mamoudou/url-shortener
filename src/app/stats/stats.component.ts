import { Component } from '@angular/core';

type Stats = { img: string; title: string; description: string }[];

@Component({
	selector: 'app-stats',
	templateUrl: './stats.component.html',
	styleUrls: ['./stats.component.css'],
})
export class StatsComponent {
	statistics: Stats = stats;
}

const stats = [
	{
		img: 'assets/icon-brand-recognition.svg',
		title: 'Brand Recognition',
		description:
			"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content",
	},
	{
		img: 'assets/icon-detailed-records.svg',
		title: 'Detailed Records',
		description:
			'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions',
	},
	{
		img: 'assets/icon-fully-customizable.svg',
		title: 'Fully Customizable',
		description:
			'Imporve brand awareness and content discoverability through customizable links, superchanging audience engagement.',
	},
];
