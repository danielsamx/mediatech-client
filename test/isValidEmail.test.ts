import { isValidEmail } from "../src/share/utils/isValidEmail";

describe("isValidEmail", () => {
  test("valida email: usuario@dominio.com", () => {
    expect(isValidEmail("usuario@dominio.com")).toBe(true);
  });

  test("valida email: user.name+tag@sub.dominio.co", () => {
    expect(isValidEmail("user.name+tag@sub.dominio.co")).toBe(true);
  });

  test("valida email: user_name@domain.io", () => {
    expect(isValidEmail("user_name@domain.io")).toBe(true);
  });

  test("rechaza email sin TLD: usuario@dominio", () => {
    expect(isValidEmail("usuario@dominio")).toBe(false);
  });

  test("rechaza email con dominio mal formado: usuario@.com", () => {
    expect(isValidEmail("usuario@.com")).toBe(false);
  });

  test("rechaza email con puntos consecutivos: usuario@dominio..com", () => {
    expect(isValidEmail("usuario@dominio..com")).toBe(false);
  });

  test("rechaza email sin arroba: usuario dominio.com", () => {
    expect(isValidEmail("usuario dominio.com")).toBe(false);
  });

  test("rechaza email con coma en dominio: usuario@dominio,com", () => {
    expect(isValidEmail("usuario@dominio,com")).toBe(false);
  });

  test("rechaza email vacío", () => {
    expect(isValidEmail("")).toBe(false);
  });

  test("rechaza email con solo espacios", () => {
    expect(isValidEmail("   ")).toBe(false);
  });

  test("rechaza email sin usuario: @dominio.com", () => {
    expect(isValidEmail("@dominio.com")).toBe(false);
  });
});
