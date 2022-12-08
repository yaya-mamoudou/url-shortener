import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
	@Input() label!: string;
	@Input() type?: 'primary' | 'secondary' = 'primary';
	@Input() myClass?: any;
	@Input() onPress: () => void = () => {};
}
