import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Link } from '@app/core/models/link';
import { DataService } from '@app/core/services/data.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnInit {
  public links: Link[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.links = this.dataService
      .getChapters()
      .map((c) => new Link(c.title, c.id));

    console.log(this.links);
  }
}
