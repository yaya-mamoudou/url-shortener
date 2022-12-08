import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <<<< import it here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { StatsComponent } from './stats/stats.component';
import { StatCardComponent } from './stat-card/stat-card.component';
import { ShortenFormComponent } from './shorten-form/shorten-form.component';
import { PreFooterComponent } from './pre-footer/pre-footer.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		ButtonComponent,
		NavbarComponent,
		HeroComponent,
		StatsComponent,
		StatCardComponent,
		ShortenFormComponent,
		PreFooterComponent,
		FooterComponent,
	],
	imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
