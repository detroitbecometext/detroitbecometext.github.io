import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appRelation]',
})
export class RelationDirective implements OnInit {
    @Input('appRelation') type:
        | 'small up'
        | 'small down'
        | 'large up'
        | 'large down' = 'small up';
    constructor(private renderer: Renderer2, private hostElement: ElementRef) {}

    ngOnInit(): void {
        this.renderer.addClass(this.hostElement.nativeElement, 'relation');
        this.type
            .split(' ')
            .forEach((value) =>
                this.renderer.addClass(this.hostElement.nativeElement, value)
            );

        const img = document.createElement('img');
        switch (this.type) {
            case 'small up':
                img.src = 'assets/images/slight_increase.png';
                img.alt = 'slight_increase';
                break;
            case 'large up':
                img.src = 'assets/images/large_increase.png';
                img.alt = 'large_increase';
                break;
            case 'small down':
                img.src = 'assets/images/slight_decrease.png';
                img.alt = 'slight_decrease';
                break;
            case 'large down':
                img.src = 'assets/images/large_decrease.png';
                img.alt = 'large_decrease';
                break;
            default:
                break;
        }

        this.renderer.appendChild(this.hostElement.nativeElement, img);
    }
}
