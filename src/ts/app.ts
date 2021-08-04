import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
console.log(cart.items);
console.log(`${cart.amountWithoutDiscount()}`)
console.log(`${cart.amountWithDiscount(5)}`)
cart.deleteProduct(1008);
console.log(cart.items);