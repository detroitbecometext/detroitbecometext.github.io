export class Magazine {
    constructor(
        public readonly id: number,
        public readonly image: string,
        public readonly type:
            | 'Century'
            | 'Tech Addict'
            | 'Green Earth'
            | 'All Sports'
            | 'Gossips Weekly'
            | 'Detroit Today'
            | 'Canada'
            | 'CyberLife'
    ) {
        this.image = 'assets/images/' + image;
    }
}
