import { Component } from '@angular/core';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
	navbarState: boolean = false;
	toggleNavbar = () => {
		this.navbarState = !this.navbarState;
	};
}
