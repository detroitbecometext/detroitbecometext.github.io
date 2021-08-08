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
        this.magazines = [
            new Magazine(
                i++,
                MagazineType.CENTURY,
                'TECHADDICT',
                'CONNECTTHEDOTS',
                'TECHADDICT'
            ),
            new Magazine(
                i++,
                MagazineType.CENTURY,
                'CENTURY',
                'NORTHPOLE',
                'CENTURY'
            ),
            new Magazine(
                i++,
                MagazineType.CENTURY,
                'DNEWS',
                'BEEDISASTER',
                'DNEWS'
            ),
            new Magazine(
                i++,
                MagazineType.CENTURY,
                'CENTURY',
                'TAINTEDLOVE',
                'CENTURY'
            ),
            new Magazine(
                i++,
                MagazineType.CENTURY,
                'CENTURY',
                'PULLTHEPLUG',
                'CENTURY'
            ),
            new Magazine(
                i++,
                MagazineType.CENTURY,
                'CENTURY',
                'WARRENINTROUBLE',
                'CENTURY'
            ),
            new Magazine(
                i++,
                MagazineType.CENTURY,
                'CENTURY',
                'ANDROIDPRESIDENT',
                'CENTURY'
            ),
            new Magazine(
                i++,
                MagazineType.CENTURY,
                'CENTURY',
                'KAMSKI',
                'CENTURY'
            ),
            new Magazine(
                i++,
                MagazineType.CENTURY,
                'CENTURY',
                'WW3',
                'CENTURY'
            ),
            new Magazine(
                i++,
                MagazineType.TECH_ADDICT,
                'TECHADDICT',
                'SECRETSANDROIDS',
                'TECHADDICT'
            ),
            new Magazine(
                i++,
                MagazineType.TECH_ADDICT,
                'CENTURY',
                'PRICEONLIFE',
                'CENTURY'
            ),
            new Magazine(
                i++,
                MagazineType.TECH_ADDICT,
                'TECHADDICT',
                'ANDROIDSPY',
                'TECHADDICT'
            ),
            new Magazine(
                i++,
                MagazineType.TECH_ADDICT,
                'TECHADDICT',
                'ANDROIDASTRONAUTS',
                'TECHADDICT'
            ),
            new Magazine(
                i++,
                MagazineType.TECH_ADDICT,
                'TECHADDICT',
                'IMMORTALS',
                'TECHADDICT'
            ),
            new Magazine(
                i++,
                MagazineType.TECH_ADDICT,
                'TECHADDICT',
                'FORTUNETELLER',
                'TECHADDICT'
            ),
            new Magazine(
                i++,
                MagazineType.TECH_ADDICT,
                'TECHADDICT',
                'BLEEDINGBLUE',
                'TECHADDICT'
            ),
            new Magazine(
                i++,
                MagazineType.TECH_ADDICT,
                'TECHADDICT',
                'SPACETOURISM',
                'TECHADDICT'
            ),
            new Magazine(
                i++,
                MagazineType.TECH_ADDICT,
                'TECHADDICT',
                'SPACERACE',
                'TECHADDICT'
            ),
            new Magazine(
                i++,
                MagazineType.GREEN_EARTH,
                'CENTURY',
                'CLIMATECHANGEUP',
                'CENTURY'
            ),
            new Magazine(
                i++,
                MagazineType.GREEN_EARTH,
                'GREENEARTH',
                'TIPPINGPOINT',
                'GREENEARTH'
            ),
            new Magazine(
                i++,
                MagazineType.GREEN_EARTH,
                'GREENEARTH',
                'CLEANFOOD',
                'GREENEARTH'
            ),
            new Magazine(
                i++,
                MagazineType.ALL_SPORTS,
                'ALLSPORTS',
                'ANDROIDMLB',
                'ALLSPORTS'
            ),
            new Magazine(
                i++,
                MagazineType.ALL_SPORTS,
                'ALLSPORTS',
                'ANDROIDQB',
                'ALLSPORTS'
            ),
            new Magazine(
                i++,
                MagazineType.GOSSIPS_WEEKLY,
                'GOSSIP',
                'ANDROIDBAND',
                'GOSSIP'
            ),
            new Magazine(
                i++,
                MagazineType.GOSSIPS_WEEKLY,
                'GOSSIP',
                'ANDROIDSEX',
                'GOSSIP'
            ),
            new Magazine(
                i++,
                MagazineType.GOSSIPS_WEEKLY,
                'DNEWS',
                'FACETHEMUSIC',
                'DNEWS'
            ),
            new Magazine(
                i++,
                MagazineType.DETROIT_TODAY,
                'DNEWS',
                'LIFEONTITAN',
                'DNEWS'
            ),
            new Magazine(
                i++,
                MagazineType.DETROIT_TODAY,
                'DNEWS',
                'CARLDEAD',
                'DNEWS'
            ),
            new Magazine(
                i++,
                MagazineType.DETROIT_TODAY,
                'DNEWS',
                'LAWSOFROBOTIC',
                'DNEWS'
            ),
            new Magazine(
                i++,
                MagazineType.DETROIT_TODAY,
                'DNEWS',
                'IVANOFFNIET',
                'DNEWS'
            ),
            new Magazine(
                i++,
                MagazineType.DETROIT_TODAY,
                'DNEWS',
                'ANDROIDZOO',
                'DNEWS'
            ),
            new Magazine(
                i++,
                MagazineType.DETROIT_TODAY,
                'DNEWS',
                'ONTHERUN',
                'DNEWS'
            ),
            new Magazine(
                i++,
                MagazineType.DETROIT_TODAY,
                'DTIMES',
                'REDICE',
                'DNEWS'
            ),
            new Magazine(
                i++,
                MagazineType.DETROIT_TODAY,
                'DNEWS',
                'ARCTICTENSIONS',
                'DNEWS'
            ),
            new Magazine(
                i++,
                MagazineType.DETROIT_TODAY,
                'CENTURY',
                'ANDROIDSANDBRAIN',
                'CENTURY'
            ),
            new Magazine(
                i++,
                MagazineType.DETROIT_TODAY,
                'DNEWS',
                'NEWSUPERPOWERS',
                'DNEWS'
            ),
            new Magazine(
                i++,
                MagazineType.DETROIT_TODAY,
                'DNEWS',
                'USSIOWA',
                'DNEWS'
            ),
            new Magazine(
                i++,
                MagazineType.DETROIT_TODAY,
                'DNEWS',
                'GIANDROID',
                'DNEWS'
            ),
            new Magazine(
                i++,
                MagazineType.DETROIT_TODAY,
                'DTIMES',
                'WHOISIT',
                'DNEWS'
            ),
            new Magazine(
                i++,
                MagazineType.DETROIT_TODAY,
                'DNEWS',
                'MARKETSPREDICTION',
                'DNEWS'
            ),
            new Magazine(
                i++,
                MagazineType.DETROIT_TODAY,
                'DNEWS',
                'HIGHWAY',
                'DNEWS'
            ),
            new Magazine(
                i++,
                MagazineType.DETROIT_TODAY,
                'DNEWS',
                'ANDROIDARSON',
                'DNEWS'
            ),
            new Magazine(
                i++,
                MagazineType.DETROIT_TODAY,
                'DNEWS',
                'DETROITCHAOS',
                'DNEWS'
            ),
            new Magazine(
                i++,
                MagazineType.DETROIT_TODAY,
                'DNEWS',
                'ANDROIDTERROR',
                'DNEWS'
            ),
            new Magazine(
                i++,
                MagazineType.DETROIT_TODAY,
                'DNEWS',
                'DEFYUS',
                'DNEWS'
            ),
            new Magazine(
                i++,
                MagazineType.DETROIT_TODAY,
                'DNEWS',
                'CIVILWAR',
                'DNEWS'
            ),
            new Magazine(i++, MagazineType.CANADA, 'DNEWS', 'CANADA', 'DNEWS'),
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
