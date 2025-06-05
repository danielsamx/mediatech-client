export function isValidDni(cedula: string): boolean {
  if (!/^\d{10}$/.test(cedula)) return false;

  const digitos = cedula.split("").map(Number);
  const provincia = parseInt(cedula.substring(0, 2), 10);
  if (provincia < 1 || provincia > 24) return false;

  const verificador = digitos.pop()!;
  let suma = 0;

  for (let i = 0; i < digitos.length; i++) {
    let valor = digitos[i];
    if (i % 2 === 0) {
      valor *= 2;
      if (valor > 9) valor -= 9;
    }
    suma += valor;
  }

  const resultado = (10 - (suma % 10)) % 10;
  return resultado === verificador;
}
