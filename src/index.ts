/* eslint-disable no-unused-vars */

import { LiteralUnion, AnyCase } from '@brixtol/tsutils';
import { CurrencyCodes } from '@brixtol/currency-codes';

type Placement = (
  /**
   * Symbol First, eg: $100
   */
  '!#' |
   /**
   * Symbol First Space, eg: $ 100
   */
  '! #' |
  /**
   * Symbol Last, eg: 100$
   */
  '#!' |
   /**
   * Symbol Last Spakce, eg: 100 $
   */
  '# !'
)

/**
 * Currency Placement
 *
 * Extracts the placement string from the IPlacements interface
 * which is use as the Return type reference
 */
type SymbolPlacements = { [K in CurrencyCodes]: Placement }

/**
 * Country Name
 *
 * Extracts the country name from the ICountries interface
 * which is use as the Return type reference
 */
export type CurrencyPlacement<ISO> = (
  ISO extends CurrencyCodes
  ? SymbolPlacements[ISO]
  : never
)

const Placements: SymbolPlacements = Object.freeze({
  AED: '# !', // 100 د.إ
  AFN: '#!', // ؋100
  ALL: '# !', // 100 L
  AMD: '#!', // 100֏
  ANG: '!#',
  AOA: '!#',
  ARS: '!#',
  AUD: '!#', // $100.00
  AWG: '!#',
  AZN: '!#',
  BAM: '!#',
  BBD: '!#',
  BDT: '!#',
  BGN: '!#',
  BHD: '!#',
  BIF: '!#',
  BMD: '!#',
  BND: '!#',
  BOB: '!#',
  BRL: '!#',
  BSD: '!#',
  BTC: '!#',
  BTN: '!#',
  BWP: '!#',
  BYR: '!#',
  BYN: '!#',
  BZD: '!#',
  CAD: '!#',
  CDF: '!#',
  CHF: '! #', // fr. 100
  CLP: '!#',
  CNY: '!#',
  COP: '!#',
  CRC: '!#',
  CUC: '!#',
  CUP: '!#',
  CVE: '!#',
  CZK: '# !', // 100 Kč
  DJF: '!#',
  DKK: '# !', // 100 kr
  DOP: '!#',
  DZD: '!#',
  EEK: '!#',
  EGP: '!#',
  ERN: '!#',
  ETB: '!#',
  ETH: '!#',
  EUR: '!#', // € 100
  FJD: '!#',
  FKP: '!#',
  GBP: '!#',
  GEL: '!#',
  GGP: '!#',
  GHC: '!#',
  GHS: '!#',
  GIP: '!#',
  GMD: '!#',
  GNF: '!#',
  GTQ: '!#',
  GYD: '!#',
  HKD: '!#',
  HNL: '!#',
  HRK: '!#',
  HTG: '!#',
  HUF: '!#',
  IDR: '!#',
  ILS: '!#',
  IMP: '!#',
  INR: '!#',
  IQD: '!#',
  IRR: '!#',
  ISK: '# !', // 100 kr
  JEP: '!#',
  JMD: '!#',
  JOD: '!#',
  JPY: '!#',
  KES: '!#',
  KGS: '!#',
  KHR: '!#',
  KMF: '!#',
  KPW: '!#',
  KRW: '!#',
  KWD: '! #',
  KYD: '!#',
  KZT: '!#',
  LAK: '!#',
  LBP: '!#',
  LKR: '!#',
  LRD: '!#',
  LSL: '!#',
  LTC: '!#',
  LTL: '!#',
  LVL: '!#',
  LYD: '!#',
  MAD: '!#',
  MDL: '!#',
  MGA: '!#',
  MKD: '!#',
  MMK: '!#',
  MNT: '!#',
  MOP: '!#',
  MRO: '!#',
  MRU: '!#',
  MUR: '!#',
  MVR: '!#',
  MWK: '!#',
  MXN: '!#',
  MYR: '!#',
  MZN: '!#',
  NAD: '!#',
  NGN: '!#',
  NIO: '!#',
  NOK: '# !', // 100 kr
  NPR: '!#',
  NZD: '!#',
  OMR: '!#',
  PAB: '!#',
  PEN: '!#',
  PGK: '!#',
  PHP: '!#',
  PKR: '!#',
  PLN: '!#',
  PYG: '!#',
  QAR: '!#',
  RMB: '!#',
  RON: '!#',
  RSD: '!#',
  RUB: '# !', // 100 ₽
  RWF: '!#',
  SAR: '!#',
  SBD: '!#',
  SCR: '!#',
  SDG: '!#',
  SEK: '# !',
  SGD: '!#',
  SHP: '!#',
  SLL: '!#',
  SOS: '!#',
  SRD: '!#',
  SSP: '!#',
  STD: '!#',
  STN: '!#',
  SVC: '!#',
  SYP: '!#',
  SZL: '!#',
  THB: '!#',
  TJS: '!#',
  TMT: '!#',
  TND: '!#',
  TOP: '!#',
  TRL: '!#',
  TRY: '# !', // 100 ₺
  TTD: '!#',
  TVD: '!#',
  TWD: '! #', // 元 100
  TZS: '!#',
  UAH: '!#',
  UGX: '!#',
  USD: '!#', // $100
  UYU: '!#',
  UZS: '!#',
  VEF: '!#',
  VND: '!#',
  VUV: '!#',
  WST: '!#',
  XAF: '!#',
  XBT: '!#',
  XCD: '!#',
  XOF: '!#',
  XPF: '!#',
  YER: '!#',
  ZAR: '!#',
  ZMK: '!#',
  ZMW: '!#',
  ZWD: '!#',
  ZWL: '!#'
});

/**
 * Get Currency Symbol placement
 *
 * Requires a 3 Letter (ISO) currency code to be passed
 * and returns the currency symbol placement. The placement
 * uses the `#` character to infer a number and `!` the symbol.
 *
 * > _Accepts either uppercase, lowercase or
 * or a combination of either_
 */
function getPlacement <ISO extends AnyCase<CurrencyCodes>> (
  code: LiteralUnion<ISO>
): CurrencyPlacement<Uppercase<ISO>> {

  const placement = Placements[code.toUpperCase()];

  if (!placement) throw new Error(`"${code}" is an invalid currency code`);

  return placement;

}

export { SymbolPlacements as IPlacements, Placements, getPlacement };
