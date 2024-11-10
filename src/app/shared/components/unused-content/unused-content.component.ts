import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
	faCommentSlash,
	faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-unused-content',
	standalone: true,
	imports: [CommonModule, FontAwesomeModule, MatTooltipModule],
	templateUrl: './unused-content.component.html',
	styleUrl: './unused-content.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnusedContentComponent {
	faCommentSlash = faCommentSlash;
	faInfoCircle = faInfoCircle;
}
