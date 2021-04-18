import { MagazineType } from './magazine-type.enum';

export class Magazine {
    constructor(
        public readonly id: number,
        public readonly type: MagazineType
    ) {}
}
