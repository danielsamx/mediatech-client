export function isValidName(name: string): boolean {
  const regex = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/;
  return regex.test(name);
}
