import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    Input,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { TranslocoService } from '@ngneat/transloco';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';

interface ILanguage {
    lang: string;
    flag: string;
}

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
    @Input() sidenav: MatSidenav;

    public showFlagPanel: boolean;
    public activeFlag: string;
    public supportedLanguages: ILanguage[];
    private langToFlagMapping: Map<string, string>;

    constructor(
        private dialog: MatDialog,
        private translocoService: TranslocoService
    ) {}

    ngOnInit(): void {
        this.langToFlagMapping = new Map([
            ['en', 'us'],
            ['da', 'dk'],
            ['ja', 'jp'],
            ['ko', 'kp'],
            ['zh', 'cn'],
            ['el', 'gr'],
            ['cs', 'cz'],
        ]);

        this.translocoService.langChanges$.subscribe((lang) =>
            this.updateCurrentFlag(lang)
        );
        this.updateCurrentFlag(this.translocoService.getActiveLang());

        this.supportedLanguages = (this.translocoService.getAvailableLangs() as string[]).map(
            (l: string) => {
                return {
                    flag: this.langToFlagMapping.has(l)
                        ? this.langToFlagMapping.get(l)
                        : l,
                    lang: l,
                };
            }
        );
    }

    updateCurrentFlag(lang: string): void {
        this.activeFlag = this.langToFlagMapping.has(lang)
            ? this.langToFlagMapping.get(lang)
            : lang;
    }

    openDialog() {
        this.dialog.open(InfoDialogComponent, {
            height: '500px',
            width: '600px',
            maxHeight: '90vh',
            autoFocus: false,
        });
    }

    changeLanguage(lang: string) {
        this.translocoService.setActiveLang(lang);
    }
}
