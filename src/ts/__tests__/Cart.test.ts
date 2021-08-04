import Cart from '../service/Cart';
import Book from '../domain/Book';

test('new card should be empty', () => {
  const cart = new Cart();
  expect(cart.items.length).toBe(0);
});

test('should return amount', () => {
  const cart = new Cart();
  const book1 = new Book(1, 'Капитал', 'Карл Маркс', 3000, 600);
  const book2 = new Book(2, 'Капитал2', 'Карл Маркс', 3000, 600);
  cart.add(book1);
  cart.add(book2);
  expect(cart.amountWithoutDiscount()).toBe(6000);
  expect(cart.amountWithDiscount(5)).toBe(5700);
  cart.deleteProduct(2);
  expect(cart.items.length).toBe(1);
})

test('should delete product', () => {
  const cart = new Cart();
  const book1 = new Book(1, 'Капитал', 'Карл Маркс', 3000, 600);
  const book2 = new Book(2, 'Капитал2', 'Карл Маркс', 3000, 600);
  cart.add(book1);
  cart.add(book2);
  cart.deleteProduct(2);
  expect(cart.items.length).toBe(1);
})



