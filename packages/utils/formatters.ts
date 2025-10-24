
export const currency = (n: number, code = "USD") =>
  new Intl.NumberFormat(undefined, { style: "currency", currency: code }).format(n);
