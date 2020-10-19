## @brixtol/currency-symbol-placements

Currency Symbol placements for [currency.js](https://github.com/scurker/currency.js). Mappings use ([ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes)) 3 letter currency codes and return the format pattern (`!#`) used by _currency.js_ where `!` is the currency symbol and `#` the amount.

This package is used by the [Brixtol Textiles](https://www.brixtoltextiles.com) internal API when dealing with currency conversion and presentation locales pertaining to i18n logics.

### Why?

We found ourselces having to adjust currency placements which the vast majority of U.S SaaS services were constantly getting it wrong, ie: prepending the symbol, not appending.

### Install

[pnpm](https://pnpm.js.org/en/cli/install)

```cli
pnpm i @brixtol/currency-symbol-placements
```

[npm](https://www.npmjs.com/)

```cli
npm install @brixtol/currency-symbol-placements
```

[Yarn](https://yarnpkg.com/)

```cli
yarn add @brixtol/currency-symbol-placements
```

### Usage

Pass in a currency code that is lowercase, uppercase or a mixture of both and the pattern replacement string is returned.

```javascript
import currency from "currency.js";
import symbol from "@brixtol/currency-symbols-placements";

// Currency code SEK (Swedish Krona) - Kr
const SEK = symbol("SEK"); // # !

// Currency code EUR (Euros) - €
const EUR = symbol("eur"); // !#

// Using with currency.js
currency("510.00", {
  separator: ".",
  decimal: ",",
  fromCents: true,
  pattern: SEK, // returning "# !" > "510.00 kr"
}).format();

// ....
```

### Related

Locale related mappings helpers:

- [@brixtol/currency-symbols](https://github.com/brixtol/currency-symbols)

Country code to currency code mappings:

- [@brixtol/currency-codes](https://github.com/brixtol/currency-codes)

### Contributing

Contributions are welcome! Currency symbol placements are a real mixed bag and generally do not adhere to official specifications on the matter. If the mapping placements are not accurate, please submit a PR with some foundations.

### License

Licensed under [MIT](#LICENCE)

---

We [♡](https://www.brixtoltextiles.com/discount/4D3V3L0P3RS]) open source!
