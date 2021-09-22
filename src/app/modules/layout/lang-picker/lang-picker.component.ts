import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LanguagePickerService } from '@app/core/services/language-picker.service';

@Component({
    selector: 'app-lang-picker',
    templateUrl: './lang-picker.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LangPickerComponent {
    constructor(public readonly languagePickerService: LanguagePickerService) {}
}
