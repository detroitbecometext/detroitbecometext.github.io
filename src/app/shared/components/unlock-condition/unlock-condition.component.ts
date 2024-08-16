import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UnlockType } from '../../enums/unlock-type.enum';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
	faLockOpen,
	faSkull,
	faHourglassEnd,
	faTv,
} from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-unlock-condition',
	standalone: true,
	imports: [CommonModule, FontAwesomeModule],
	templateUrl: './unlock-condition.component.html',
	styleUrl: './unlock-condition.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnlockConditionComponent {
	@Input({ required: true }) unlockType: UnlockType | null = null;
	@Input() bracketsOnlyAroundIcon: boolean = false;

	UnlockType = UnlockType;

	faLockOpen = faLockOpen;
	faSkull = faSkull;
	faHourglassEnd = faHourglassEnd;
	faTv = faTv;
}
