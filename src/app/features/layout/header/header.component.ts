import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    Input,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
    @Input() sidenav: MatSidenav;

    constructor(private dialog: MatDialog) {}

    ngOnInit(): void {}

    openDialog() {
        this.dialog.open(InfoDialogComponent, {
            height: '500px',
            width: '600px',
            maxHeight: '90vh',
            autoFocus: false,
        });
    }
}
