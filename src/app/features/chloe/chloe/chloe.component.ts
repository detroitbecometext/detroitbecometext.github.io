import { Component, OnInit } from '@angular/core';

class Line {
    content: string;
    condition: string | null;
}

@Component({
    selector: 'app-chloe',
    templateUrl: './chloe.component.html',
    styleUrls: ['./chloe.component.scss'],
})
export class ChloeComponent implements OnInit {
    public lines: Line[];

    constructor() {
        this.lines = [];
    }

    ngOnInit(): void {}
}
