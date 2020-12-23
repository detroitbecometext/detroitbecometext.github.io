import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    Input,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Link } from '@app/core/models';
import { DataService } from '@app/core/services';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnInit {
    @Input() sidenav: MatSidenav;
    public links: Link[];

    constructor(private dataService: DataService) {}

    ngOnInit(): void {
        this.links = this.dataService
            .getChapters()
            .map((c) => new Link(c.title, c.id));
    }
}
