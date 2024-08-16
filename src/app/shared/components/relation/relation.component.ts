import { CommonModule } from '@angular/common';
import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnInit,
	signal,
	WritableSignal,
} from '@angular/core';
import { RelationType } from '../../enums/relation-type.enum';
import { RelationName } from '../../enums/relation-name.enum';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
	selector: 'app-relation',
	standalone: true,
	imports: [CommonModule, TranslocoModule],
	templateUrl: './relation.component.html',
	styleUrl: './relation.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RelationComponent implements OnInit {
	@Input({ required: true }) public name: RelationName | null = null;
	@Input({ required: true }) public type: RelationType | null = null;

	public imageSource: WritableSignal<string> = signal('');
	public imageAlt: WritableSignal<string> = signal('');

	public up: WritableSignal<boolean> = signal(true);

	ngOnInit(): void {
		switch (this.type) {
			case RelationType.SmallUp:
				this.imageSource.set('images/slight_increase.png');
				this.imageAlt.set('slight_increase');
				this.up.set(true);
				break;
			case RelationType.LargeUp:
				this.imageSource.set('images/large_increase.png');
				this.imageAlt.set('large_increase');
				this.up.set(true);
				break;
			case RelationType.SmallDown:
				this.imageSource.set('images/slight_decrease.png');
				this.imageAlt.set('slight_decrease');
				this.up.set(false);
				break;
			case RelationType.LargeDown:
				this.imageSource.set('images/large_decrease.png');
				this.imageAlt.set('large_decrease');
				this.up.set(false);
				break;
			default:
				break;
		}
	}
}
