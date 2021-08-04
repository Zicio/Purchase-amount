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
        let amount: number = 0;
        for (const item of this._items) {
            amount += item.price;
        }
        return amount;
    }

    amountWithDiscount(discount: number): number {
        let amount: number = 0;
        for (const item of this._items) {
            amount += item.price;
        }
        return amount * (100 - discount) / 100;
    }

    deleteProduct(id: number): void {
        const indexOfDeletedProduct = this._items.findIndex((item) => {item.id === id});
        this._items.splice(indexOfDeletedProduct, 1);
    }
}