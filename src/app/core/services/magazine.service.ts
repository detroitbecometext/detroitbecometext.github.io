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
        new Magazine(i++, MagazineType.CENTURY, '', '');
        this.magazines = [
            new Magazine(
                i++,
                MagazineType.CENTURY,
                'TECHADDICT',
                'CONNECTTHEDOTS'
            ),
            new Magazine(i++, MagazineType.CENTURY, 'CENTURY', 'NORTHPOLE'),
            new Magazine(i++, MagazineType.CENTURY, 'DNEWS', 'BEEDISASTER'),
            new Magazine(i++, MagazineType.CENTURY, 'CENTURY', 'TAINTEDLOVE'),
            new Magazine(i++, MagazineType.CENTURY, 'CENTURY', 'PULLTHEPLUG'),
            new Magazine(
                i++,
                MagazineType.CENTURY,
                'CENTURY',
                'WARRENINTROUBLE'
            ),
            new Magazine(
                i++,
                MagazineType.CENTURY,
                'CENTURY',
                'ANDROIDPRESIDENT'
            ),
            new Magazine(i++, MagazineType.CENTURY, 'CENTURY', 'KAMSKI'),
            new Magazine(i++, MagazineType.CENTURY, 'CENTURY', 'WW3'),
            new Magazine(
                i++,
                MagazineType.TECH_ADDICT,
                'TECHADDICT',
                'SECRETSANDROIDS'
            ),
            new Magazine(
                i++,
                MagazineType.TECH_ADDICT,
                'CENTURY',
                'PRICEONLIFE'
            ),
            new Magazine(
                i++,
                MagazineType.TECH_ADDICT,
                'TECHADDICT',
                'ANDROIDSPY'
            ),
            new Magazine(
                i++,
                MagazineType.TECH_ADDICT,
                'TECHADDICT',
                'ANDROIDASTRONAUTS'
            ),
            new Magazine(
                i++,
                MagazineType.TECH_ADDICT,
                'TECHADDICT',
                'IMMORTALS'
            ),
            new Magazine(
                i++,
                MagazineType.TECH_ADDICT,
                'TECHADDICT',
                'FORTUNETELLER'
            ),
            new Magazine(
                i++,
                MagazineType.TECH_ADDICT,
                'TECHADDICT',
                'BLEEDINGBLUE'
            ),
            new Magazine(
                i++,
                MagazineType.TECH_ADDICT,
                'TECHADDICT',
                'SPACETOURISM'
            ),
            new Magazine(
                i++,
                MagazineType.TECH_ADDICT,
                'TECHADDICT',
                'SPACERACE'
            ),
            new Magazine(
                i++,
                MagazineType.GREEN_EARTH,
                'CENTURY',
                'CLIMATECHANGEUP'
            ),
            new Magazine(
                i++,
                MagazineType.GREEN_EARTH,
                'GREENEARTH',
                'TIPPINGPOINT'
            ),
            new Magazine(
                i++,
                MagazineType.GREEN_EARTH,
                'GREENEARTH',
                'CLEANFOOD'
            ),
            new Magazine(
                i++,
                MagazineType.ALL_SPORTS,
                'ALLSPORTS',
                'ANDROIDMLB'
            ),
            new Magazine(
                i++,
                MagazineType.ALL_SPORTS,
                'ALLSPORTS',
                'ANDROIDQB'
            ),
            new Magazine(
                i++,
                MagazineType.GOSSIPS_WEEKLY,
                'GOSSIP',
                'ANDROIDBAND'
            ),
            new Magazine(
                i++,
                MagazineType.GOSSIPS_WEEKLY,
                'GOSSIP',
                'ANDROIDSEX'
            ),
            new Magazine(
                i++,
                MagazineType.GOSSIPS_WEEKLY,
                'DNEWS',
                'FACETHEMUSIC'
            ),
            new Magazine(
                i++,
                MagazineType.DETROIT_TODAY,
                'DNEWS',
                'LIFEONTITAN'
            ),
            new Magazine(i++, MagazineType.DETROIT_TODAY, 'DNEWS', 'CARLDEAD'),
            new Magazine(
                i++,
                MagazineType.DETROIT_TODAY,
                'DNEWS',
                'LAWSOFROBOTIC'
            ),
            new Magazine(
                i++,
                MagazineType.DETROIT_TODAY,
                'DNEWS',
                'IVANOFFNIET'
            ),
            new Magazine(
                i++,
                MagazineType.DETROIT_TODAY,
                'DNEWS',
                'ANDROIDZOO'
            ),
            new Magazine(i++, MagazineType.DETROIT_TODAY, 'DNEWS', 'ONTHERUN'),
            new Magazine(i++, MagazineType.DETROIT_TODAY, 'DTIMES', 'REDICE'),
            new Magazine(
                i++,
                MagazineType.DETROIT_TODAY,
                'DNEWS',
                'ARCTICTENSIONS'
            ),
            new Magazine(
                i++,
                MagazineType.DETROIT_TODAY,
                'CENTURY',
                'ANDROIDSANDBRAIN'
            ),
            new Magazine(
                i++,
                MagazineType.DETROIT_TODAY,
                'DNEWS',
                'NEWSUPERPOWERS'
            ),
            new Magazine(i++, MagazineType.DETROIT_TODAY, 'DNEWS', 'USSIOWA'),
            new Magazine(i++, MagazineType.DETROIT_TODAY, 'DNEWS', 'GIANDROID'),
            new Magazine(i++, MagazineType.DETROIT_TODAY, 'DTIMES', 'WHOISIT'),
            new Magazine(
                i++,
                MagazineType.DETROIT_TODAY,
                'DNEWS',
                'MARKETSPREDICTION'
            ),
            new Magazine(i++, MagazineType.DETROIT_TODAY, 'DNEWS', 'HIGHWAY'),
            new Magazine(
                i++,
                MagazineType.DETROIT_TODAY,
                'DNEWS',
                'ANDROIDARSON'
            ),
            new Magazine(
                i++,
                MagazineType.DETROIT_TODAY,
                'DNEWS',
                'DETROITCHAOS'
            ),
            new Magazine(
                i++,
                MagazineType.DETROIT_TODAY,
                'DNEWS',
                'ANDROIDTERROR'
            ),
            new Magazine(i++, MagazineType.DETROIT_TODAY, 'DNEWS', 'DEFYUS'),
            new Magazine(i++, MagazineType.DETROIT_TODAY, 'DNEWS', 'CIVILWAR'),
            new Magazine(i++, MagazineType.CANADA, 'DNEWS', 'CANADA'),
        ];
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
