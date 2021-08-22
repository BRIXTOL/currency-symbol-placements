## @brixtol/currency-symbol-placements

Currency Symbol placements for [currency.js](https://github.com/scurker/currency.js). Mappings use ([ISO 4217](https://en.wikipedia.org/wiki/ISO_4217#Active_codes)) 3 letter currency codes and return the format pattern (`!#`) used by _currency.js_ where `!` is the currency symbol and `#` the amount.

This package is used by the [Brixtol Textiles](https://www.brixtoltextiles.com) internal API when dealing with currency conversion and presentation locales pertaining to i18n logics and has been open sourced from our [pnpm](https://pnpm.js.org/en/cli/install) monorepo workspace.

### Why?

We found the the vast majority of U.S commerce SaaS services were constantly getting currency symbol placements wrong. We use [currency.js](https://github.com/scurker/currency.js) to convert currencies in our [mithril.js](https://mithril.js.org/) applications and this package provides us with a wrapper for getting placements correct.

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
import { getCurrencyPlacement } from "@brixtol/currency-symbols-placements";

// Currency code SEK (Swedish Krona) - Kr
const SEK = getCurrencyPlacement("SEK"); // # !

// Currency code EUR (Euros) - €
const EUR = getCurrencyPlacement("eur"); // !#

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

> See the `package.json` for scripts and make sure you are using pnpm, because pnpm is dope and does dope shit.

### License

Licensed under [MIT](#LICENCE)

---

We [♡](https://www.brixtoltextiles.com/discount/4D3V3L0P3RS]) open source!
