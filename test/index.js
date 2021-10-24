import test from 'ava';
import { getCurrencyPlacement } from '../package/index';
import currency from 'currency.js';

test('Currency placement in SEK', (t) => {

  // Using with currency.js
  const format = currency('510', {
    separator: '.',
    decimal: '.',
    fromCents: false,
    symbol: 'kr',
    pattern: getCurrencyPlacement('SEK')
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
    pattern: getCurrencyPlacement('eur')
  }).format();

  t.is(format, '€510.00');

  t.pass();

});
