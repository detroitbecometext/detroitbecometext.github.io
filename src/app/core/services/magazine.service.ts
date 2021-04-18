import { Injectable } from '@angular/core';
import { Magazine } from '../models';
import { MagazineType } from '../models/magazine-type.enum';

@Injectable({
    providedIn: 'root',
})
export class MagazineService {
    private magazines: Magazine[];

    constructor() {
        let i = 1;
        const magazinesByType: Map<MagazineType, number> = new Map([
            [MagazineType.CENTURY, 9],
            [MagazineType.TECH_ADDICT, 9],
            [MagazineType.GREEN_EARTH, 3],
            [MagazineType.ALL_SPORTS, 2],
            [MagazineType.GOSSIPS_WEEKLY, 3],
            [MagazineType.DETROIT_TODAY, 20],
            [MagazineType.CANADA, 1],
            [MagazineType.CYBERLIFE, 1],
        ]);
        this.magazines = [];
        for (let mapping of magazinesByType) {
            for (let j = 0; j < mapping[1]; j++) {
                this.magazines.push(new Magazine(i++, mapping[0]));
            }
        }
    }

    /**
     * Get a list of all magazines.
     */
    public getMagazines(): Magazine[] {
        return this.magazines;
    }

    public getMagazine(id: number): Magazine {
        return this.magazines.find((magazine) => magazine.id === id);
    }

    public getMagazineSubheadlinesCount(type: MagazineType): number {
        switch (type) {
            case MagazineType.CENTURY:
                return 7;
            case MagazineType.TECH_ADDICT:
                return 8;
            case MagazineType.GREEN_EARTH:
                return 5;
            case MagazineType.ALL_SPORTS:
                return 7;
            case MagazineType.GOSSIPS_WEEKLY:
                return 7;
            case MagazineType.DETROIT_TODAY:
                return 11;
            case MagazineType.CANADA:
                return 0;
            case MagazineType.CYBERLIFE:
                return 0;
        }
    }
}
