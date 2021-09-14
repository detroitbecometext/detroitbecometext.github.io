import { Injectable } from '@angular/core';
import { GalleryItem } from '../models/gallery-item';
import { GalleryItemType } from '../models/gallery-item-type.enum';
import { BaseDataService } from './base-data-service';

type CharacterCostumes = {
    name: string;
    type: GalleryItemType;
    count: number;
    startAt?: number;
    unused?: boolean;
};

@Injectable({
    providedIn: 'root',
})
export class GalleryService extends BaseDataService<GalleryItem> {
    constructor() {
        super();

        let costumes: CharacterCostumes[] = [
            { name: 'CONNOR', type: GalleryItemType.Android, count: 3 },
            { name: 'HANK', type: GalleryItemType.Human, count: 4 },
            { name: 'KARA', type: GalleryItemType.Android, count: 7 },
            { name: 'ALICE', type: GalleryItemType.Human, count: 3 },
            {
                name: 'ALICE',
                type: GalleryItemType.Android,
                count: 4,
                startAt: 3,
            },
            { name: 'LUTHER', type: GalleryItemType.Android, count: 2 },
            { name: 'TODD', type: GalleryItemType.Human, count: 2 },
            { name: 'ROSE', type: GalleryItemType.Human, count: 1 },
            { name: 'ADAM', type: GalleryItemType.Human, count: 1 },
            { name: 'MARKUS', type: GalleryItemType.Android, count: 9 },
            { name: 'CARL', type: GalleryItemType.Human, count: 2 },
            { name: 'NORTH', type: GalleryItemType.Android, count: 4 },
            { name: 'SIMON', type: GalleryItemType.Android, count: 3 },
            { name: 'JOSH', type: GalleryItemType.Android, count: 2 },
            { name: 'AMANDA', type: GalleryItemType.Human, count: 1 },
            {
                name: 'AMANDA',
                type: GalleryItemType.Human,
                count: 2,
                startAt: 1,
                unused: true,
            },
            { name: 'KAMSKI', type: GalleryItemType.Human, count: 3 },
            { name: 'WARREN', type: GalleryItemType.Human, count: 1 },
            { name: 'CHLOE', type: GalleryItemType.Android, count: 2 },
            { name: 'DANIEL', type: GalleryItemType.Android, count: 1 },
            { name: 'ALLEN', type: GalleryItemType.Human, count: 1 },
            { name: 'JIMMY', type: GalleryItemType.Human, count: 1 },
            { name: 'BEN', type: GalleryItemType.Human, count: 1 },
            { name: 'CHRIS', type: GalleryItemType.Human, count: 1 },
            { name: 'FOWLER', type: GalleryItemType.Human, count: 1 },
            { name: 'GAVIN', type: GalleryItemType.Human, count: 1 },
            {
                name: 'GAVIN',
                type: GalleryItemType.Human,
                count: 2,
                startAt: 1,
                unused: true,
            },
            { name: 'PERKINS', type: GalleryItemType.Human, count: 1 },
            { name: 'CARLOS', type: GalleryItemType.Human, count: 1 },
            { name: 'CARLOSAND', type: GalleryItemType.Android, count: 1 },
            { name: 'PEDRO', type: GalleryItemType.Human, count: 1 },
            { name: 'SUMO', type: GalleryItemType.Human, count: 1 },
            { name: 'TRACI', type: GalleryItemType.Android, count: 3 },
            { name: 'RUPERT', type: GalleryItemType.Android, count: 1 },
            { name: 'BROADCAST', type: GalleryItemType.Android, count: 1 },
            { name: 'RALPH', type: GalleryItemType.Android, count: 2 },
            { name: 'ZLATKO', type: GalleryItemType.Human, count: 1 },
            { name: 'BEAR', type: GalleryItemType.Android, count: 1 },
            { name: 'JERRY', type: GalleryItemType.Android, count: 3 },
            { name: 'BUS.SUPERVISOR', type: GalleryItemType.Human, count: 1 },
            {
                name: 'SUPERMARKET.CLERK',
                type: GalleryItemType.Human,
                count: 1,
            },
            { name: 'MOTEL.CLERK', type: GalleryItemType.Human, count: 1 },
            { name: 'BAD.GUY', type: GalleryItemType.Android, count: 1 },
            { name: 'PREACHER', type: GalleryItemType.Human, count: 1 },
            { name: 'HOTDOG.SELLER', type: GalleryItemType.Human, count: 1 },
            { name: 'LEO', type: GalleryItemType.Human, count: 1 },
            { name: 'LUCY', type: GalleryItemType.Android, count: 1 },
            { name: 'PHILEAS', type: GalleryItemType.Android, count: 1 },
            { name: 'CARTLAND', type: GalleryItemType.Human, count: 1 },
            { name: 'BRINKLEY', type: GalleryItemType.Human, count: 1 },
            { name: 'WEBB', type: GalleryItemType.Human, count: 1 },
            { name: 'JOSS', type: GalleryItemType.Human, count: 1 },
            { name: 'SWAT', type: GalleryItemType.Human, count: 1 },
            { name: 'COPS', type: GalleryItemType.Human, count: 1 },
            { name: 'CSI', type: GalleryItemType.Human, count: 1 },
            { name: 'CYBERLIFE.GUARD', type: GalleryItemType.Human, count: 1 },
            {
                name: 'STRATFORDSECURITY',
                type: GalleryItemType.Human,
                count: 1,
            },
            { name: 'CYBERLIFE', type: GalleryItemType.Human, count: 1 },
            { name: 'SOLDIER', type: GalleryItemType.Human, count: 1 },
            { name: 'AND', type: GalleryItemType.Android, count: 5 },
            { name: 'ANDM.SEX', type: GalleryItemType.Android, count: 1 },
            { name: 'ANDW.SEX', type: GalleryItemType.Android, count: 1 },
            { name: 'AND.COP', type: GalleryItemType.Android, count: 1 },
            { name: 'ZLATKOAND', type: GalleryItemType.Android, count: 2 },
            { name: 'CITIZEN', type: GalleryItemType.Human, count: 4 },
            { name: 'KID', type: GalleryItemType.Human, count: 1 },
            { name: 'PIGEON', type: GalleryItemType.Human, count: 1 },
            {
                name: 'ANDRECEPTIONNIST',
                type: GalleryItemType.Android,
                count: 1,
                unused: true,
            },
            {
                name: 'GARY',
                type: GalleryItemType.Human,
                count: 1,
                unused: true,
            },
        ];

        let i = 1;
        for (let costume of costumes) {
            for (let j = costume.startAt ?? 0; j < costume.count; j++) {
                this.items.push(
                    new GalleryItem(
                        i++,
                        costume.type,
                        `GUI.GALLERY.${costume.name}.COSTUME0${j + 1}`,
                        costume.unused ?? false
                    )
                );
            }
        }
    }
}
