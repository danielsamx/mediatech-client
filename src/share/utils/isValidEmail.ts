export function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@([^\s@.]+\.)+[^\s@.]{2,}$/;
  return regex.test(email);
}
