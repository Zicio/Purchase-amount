import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    amountWithoutDiscount(): number {
        return this._items.reduce((a, b) => {
            return a + b.price;
        }, 0);
    }

    amountWithDiscount(discount: number): number {
        return this.amountWithoutDiscount() * (100 - discount) / 100;
    }

    deleteProduct(id: number): void {
        // const indexOfDeletedProduct = this._items.findIndex((item) => {item.id === id});
        // this._items.splice(indexOfDeletedProduct, 1);
        this._items = this._items.filter((item: Buyable) => item.id !== id);
    }
}