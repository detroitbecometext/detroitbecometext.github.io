import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { LanguagePickerService } from '@app/core/services/language-picker.service';

@Component({
    selector: 'app-lang-picker-toggle',
    templateUrl: './lang-picker-toggle.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LangPickerToggleComponent {
    @Input() switchCaretColor: boolean;

    constructor(public readonly languagePickerService: LanguagePickerService) {}
}
