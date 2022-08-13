import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ThemePickerService } from '@app/core/services/theme-picker.service';

@Component({
    selector: 'app-theme-toggle',
    templateUrl: './theme-toggle.component.html',
    styleUrls: ['./theme-toggle.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeToggleComponent {
    @Input() switchIconColor: boolean;

    constructor(public readonly themePickerService: ThemePickerService) {}
}
