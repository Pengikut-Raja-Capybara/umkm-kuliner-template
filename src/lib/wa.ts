export const buildWaLink = (phone: string, message?: string) => {
  const normalized = phone.replace(/[^\d]/g, "");
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${normalized}${text}`;
};
