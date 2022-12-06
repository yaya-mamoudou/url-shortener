import { Component } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
	navbarState: boolean = true;
	toggleNavbar = () => {
		this.navbarState = !this.navbarState;
	};
}
