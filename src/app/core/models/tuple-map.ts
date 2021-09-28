export class TupleMap<K, V> implements Map<K, V> {
    private readonly internalMap: Map<string, V>;

    constructor(entries: [K, V][]) {
        this.internalMap = new Map(
            entries.map((kv) => [JSON.stringify(kv[0]), kv[1]])
        );
    }

    clear(): void {
        this.internalMap.clear();
    }

    delete(key: K): boolean {
        return this.internalMap.delete(JSON.stringify(key));
    }

    forEach(
        callbackfn: (value: V, key: K, map: Map<K, V>) => void,
        thisArg?: any
    ): void {
        this.internalMap.forEach((value, key) => {
            callbackfn.call(thisArg, value, JSON.parse(key), this);
        });
    }

    get(key: K): V {
        return this.internalMap.get(JSON.stringify(key));
    }

    has(key: K): boolean {
        return this.internalMap.has(JSON.stringify(key));
    }

    set(key: K, value: V): this {
        this.internalMap.set(JSON.stringify(key), value);
        return this;
    }

    get size() {
        return this.internalMap.size;
    }

    // No need to iterate on it for now, skip implementation

    entries(): IterableIterator<[K, V]> {
        throw new Error('Method not implemented.');
    }

    keys(): IterableIterator<K> {
        throw new Error('Method not implemented.');
    }

    values(): IterableIterator<V> {
        throw new Error('Method not implemented.');
    }

    [Symbol.iterator](): IterableIterator<[K, V]> {
        throw new Error('Method not implemented.');
    }

    [Symbol.toStringTag]: string;
}
