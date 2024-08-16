import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
	standalone: true,
	imports: [
		CommonModule,
		MatSidenavModule,
		RouterOutlet,
		SidenavComponent,
		HeaderComponent,
		FooterComponent,
	],
	templateUrl: './base-layout.component.html',
	styleUrl: './base-layout.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseLayoutComponent {}
