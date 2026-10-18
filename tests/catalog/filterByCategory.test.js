const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

test('category all returns every product', () => {
  const result = filterByCategory(products, 'all');
  expect(result.map(({ id }) => id)).toEqual([1, 2, 3, 4, 5, 6]);
});

test('filters products by category', () => {
  const result = filterByCategory(products, 'electronics');
  expect(result.map(({ id }) => id)).toEqual([1, 2]);
});

test('undefined category returns every product', () => {
  const result = filterByCategory(products, undefined);
  expect(result.map(({ id }) => id)).toEqual([1, 2, 3, 4, 5, 6]);
});

test('empty category returns every product', () => {
  const result = filterByCategory(products, '');
  expect(result.map(({ id }) => id)).toEqual([1, 2, 3, 4, 5, 6]);
});

test('filters products by books category', () => {
  const result = filterByCategory(products, 'books');
  expect(result.map(({ id }) => id)).toEqual([3, 6]);
});

test('filters products by home category', () => {
  const result = filterByCategory(products, 'home');
  expect(result.map(({ id }) => id)).toEqual([4, 5]);
});

test('filters products by clothes category', () => {
  const result = filterByCategory(products, 'clothes');
  expect(result).toEqual([]);
});

test('filters products by toys category', () => {
  const result = filterByCategory(products, 'toys');
  expect(result).toEqual([]);
});