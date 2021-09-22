import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { LanguagePickerService } from '@app/core/services/language-picker.service';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    @Input() sidenav: MatSidenav;

    constructor(
        private dialog: MatDialog,
        public readonly languagePickerService: LanguagePickerService
    ) {}

    openDialog() {
        this.dialog.open(InfoDialogComponent, {
            width: '600px',
            autoFocus: false,
        });
    }
}
