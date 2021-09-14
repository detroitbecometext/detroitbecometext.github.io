import { DataItem } from '../models/data-item';

export abstract class BaseDataService<T extends DataItem> {
    protected items: T[];

    constructor() {
        this.items = [];
    }

    /**
     * Get a list of all items.
     */
    public getAll(): T[] {
        return this.items;
    }

    /**
     * Get an item by its id.
     * @param id The id for the item.
     */
    public get(id: number): T {
        return this.items.find((i) => i.id === id);
    }
}
