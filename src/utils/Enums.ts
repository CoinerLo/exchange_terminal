export enum AppRoute {
  index = '/',
  listRequisitions = 'list_requisitions',
}

export enum Instrument {
  eur_usd = 'EUR/USD',
  eur_rub = 'EUR/RUB',
  usd_rub = 'USD/RUB',
  usd_jpy = 'USD/JPY',
  gpb_usd = 'GPB/USD',
  nzd_usd = 'NZD/USD',
  usd_chf = 'USD/CHF',
}

export enum OrederStatus {
  active = 'Active',
  filled = 'Filled',
  rejected = 'Rejected',
  cancelled = 'Cancelled',
}

export enum OrderSide {
  buy = 'Buy',
  sell = 'Sell',
}
