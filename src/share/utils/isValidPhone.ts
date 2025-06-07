export function isValidPhone(phone: string): boolean {
  const regex = /^\d+$/;
  return regex.test(phone);
}
