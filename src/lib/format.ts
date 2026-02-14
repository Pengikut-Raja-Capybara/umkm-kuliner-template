export const formatPrice = (value: string | number) => {
  if (typeof value === "string") {
    return value;
  }

  const formatted = new Intl.NumberFormat("id-ID").format(value);
  return `Rp ${formatted}`;
};
