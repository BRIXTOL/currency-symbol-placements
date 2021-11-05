import test from 'ava';
import { getPlacement } from '../package/index';
import currency from 'currency.js';

test('Currency code is invalid', (t) => {

  t.throws(() => getPlacement('SSS'), {
    message: '"SSS" is an invalid currency code'
  });

  t.pass();

});

test('Currency placement in SEK', (t) => {

  // Using with currency.js
  const format = currency('510', {
    separator: '.',
    decimal: '.',
    fromCents: false,
    symbol: 'kr',
    pattern: getPlacement('SEK')
  }).format();

  t.is(format, '510.00 kr');

  t.pass();

});

test('Currency placement EUR with lowercase code', (t) => {

  // Using with currency.js
  const format = currency('510', {
    separator: '.',
    decimal: '.',
    fromCents: false,
    symbol: '€',
    pattern: getPlacement('eur')
  }).format();

  t.is(format, '€510.00');

  t.pass();

});
