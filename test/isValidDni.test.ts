import { isValidDni } from "../src/share/utils/isValidDni";

describe("isValidDni", () => {
  test("valida una cédula válida", () => {
    expect(isValidDni("1710034065")).toBe(true);
  });

  test("rechaza cédula con menos o más de 10 dígitos", () => {
    expect(isValidDni("171003406")).toBe(false);
    expect(isValidDni("17100340655")).toBe(false);
  });

  test("rechaza cédula con caracteres no numéricos", () => {
    expect(isValidDni("17100A4065")).toBe(false);
  });

  test("rechaza cédula con provincia inválida", () => {
    expect(isValidDni("0010034065")).toBe(false);
    expect(isValidDni("2510034065")).toBe(false);
  });

  test("rechaza cédula con dígito verificador incorrecto", () => {
    expect(isValidDni("1710034064")).toBe(false);
  });
});
