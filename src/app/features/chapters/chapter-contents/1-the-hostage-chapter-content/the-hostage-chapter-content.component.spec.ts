import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheHostageChapterContentComponent } from './the-hostage-chapter-content.component';

describe('TheHostageComponent', () => {
    let component: TheHostageChapterContentComponent;
    let fixture: ComponentFixture<TheHostageChapterContentComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [TheHostageChapterContentComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TheHostageChapterContentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
