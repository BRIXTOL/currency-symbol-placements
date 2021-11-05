declare type Placement = (
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

interface IPlacements {
  AED: Placement, // 100 د.إ
  AFN: Placement, // ؋100
  ALL: Placement, // 100 L
  AMD: Placement, // 100֏
  ANG: Placement,
  AOA: Placement,
  ARS: Placement,
  AUD: Placement, // $100.00
  AWG: Placement,
  AZN: Placement,
  BAM: Placement,
  BBD: Placement,
  BDT: Placement,
  BGN: Placement,
  BHD: Placement,
  BIF: Placement,
  BMD: Placement,
  BND: Placement,
  BOB: Placement,
  BRL: Placement,
  BSD: Placement,
  BTC: Placement,
  BTN: Placement,
  BWP: Placement,
  BYR: Placement,
  BYN: Placement,
  BZD: Placement,
  CAD: Placement,
  CDF: Placement,
  CHF: Placement,
  CLP: Placement,
  CNY: Placement,
  COP: Placement,
  CRC: Placement,
  CUC: Placement,
  CUP: Placement,
  CVE: Placement,
  CZK: Placement,
  DJF: Placement,
  DKK: Placement,
  DOP: Placement,
  DZD: Placement,
  EEK: Placement,
  EGP: Placement,
  ERN: Placement,
  ETB: Placement,
  ETH: Placement,
  EUR: Placement,
  FJD: Placement,
  FKP: Placement,
  GBP: Placement,
  GEL: Placement,
  GGP: Placement,
  GHC: Placement,
  GHS: Placement,
  GIP: Placement,
  GMD: Placement,
  GNF: Placement,
  GTQ: Placement,
  GYD: Placement,
  HKD: Placement,
  HNL: Placement,
  HRK: Placement,
  HTG: Placement,
  HUF: Placement,
  IDR: Placement,
  ILS: Placement,
  IMP: Placement,
  INR: Placement,
  IQD: Placement,
  IRR: Placement,
  ISK: Placement,
  JEP: Placement,
  JMD: Placement,
  JOD: Placement,
  JPY: Placement,
  KES: Placement,
  KGS: Placement,
  KHR: Placement,
  KMF: Placement,
  KPW: Placement,
  KRW: Placement,
  KWD: Placement,
  KYD: Placement,
  KZT: Placement,
  LAK: Placement,
  LBP: Placement,
  LKR: Placement,
  LRD: Placement,
  LSL: Placement,
  LTC: Placement,
  LTL: Placement,
  LVL: Placement,
  LYD: Placement,
  MAD: Placement,
  MDL: Placement,
  MGA: Placement,
  MKD: Placement,
  MMK: Placement,
  MNT: Placement,
  MOP: Placement,
  MRO: Placement,
  MRU: Placement,
  MUR: Placement,
  MVR: Placement,
  MWK: Placement,
  MXN: Placement,
  MYR: Placement,
  MZN: Placement,
  NAD: Placement,
  NGN: Placement,
  NIO: Placement,
  NOK: Placement,
  NPR: Placement,
  NZD: Placement,
  OMR: Placement,
  PAB: Placement,
  PEN: Placement,
  PGK: Placement,
  PHP: Placement,
  PKR: Placement,
  PLN: Placement,
  PYG: Placement,
  QAR: Placement,
  RMB: Placement,
  RON: Placement,
  RSD: Placement,
  RUB: Placement,
  RWF: Placement,
  SAR: Placement,
  SBD: Placement,
  SCR: Placement,
  SDG: Placement,
  SEK: Placement,
  SGD: Placement,
  SHP: Placement,
  SLL: Placement,
  SOS: Placement,
  SRD: Placement,
  SSP: Placement,
  STD: Placement,
  STN: Placement,
  SVC: Placement,
  SYP: Placement,
  SZL: Placement,
  THB: Placement,
  TJS: Placement,
  TMT: Placement,
  TND: Placement,
  TOP: Placement,
  TRL: Placement,
  TRY: Placement,
  TTD: Placement,
  TVD: Placement,
  TWD: Placement,
  TZS: Placement,
  UAH: Placement,
  UGX: Placement,
  USD: Placement,
  UYU: Placement,
  UZS: Placement,
  VEF: Placement,
  VND: Placement,
  VUV: Placement,
  WST: Placement,
  XAF: Placement,
  XBT: Placement,
  XCD: Placement,
  XOF: Placement,
  XPF: Placement,
  YER: Placement,
  ZAR: Placement,
  ZMW: Placement,
  ZWD: Placement,
}

/**
 * Literal Union Helper
 *
 * Allows string types to be passed while respecting
 * intellisense completions.
 */
type Union<T, B extends | null | undefined | string | symbol> = T | (B & {_?: never})

/**
 * Object Values
 *
 * Creates a union of currency code values used as a return
 * type in function export.
 */
type Values<T, V extends keyof T = keyof T> = T[V];

/**
 * Currency Placement
 *
 * Extracts the placement string from the IPLacements interface
 * which is use as the Return type reference
 */
type CurrencyPlacement<ISO extends keyof IPlacements> = Values<IPlacements, ISO>

const Placements: IPlacements = Object.freeze({
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
  ZMW: '!#',
  ZWD: '!#'
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
function getPlacement <ISO extends keyof IPlacements> (
  code: Union<ISO, string>
): CurrencyPlacement<ISO> {

  const placement = Placements[code.toUpperCase()];

  if (!placement) throw new Error(`"${code}" is an invalid currency code`);

  return placement;

}

export { IPlacements, Placements, getPlacement };
