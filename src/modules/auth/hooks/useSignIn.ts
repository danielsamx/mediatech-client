import React from "react";
import { useNavigate } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;

export function useSignIn(login: (user: any) => void) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [loginError, setLoginError] = React.useState("");
  const navigate = useNavigate();

  const validate = () => {
    let valid = true;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Ingrese un email válido");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password || password.length < 6) {
      setPasswordError("La contraseña debe tener al menos 6 caracteres");
      valid = false;
    } else {
      setPasswordError("");
    }

    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoginError("");
      const res = await fetch(`${apiUrl}/usuario/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        setLoginError("Error al iniciar sesión, intenta nuevamente");
        return;
      }

      const data = await res.json();

      if (data.message === "Inicio de sesión exitoso") {
        login({ name: data.name, email: data.email });
        navigate("/turnos");
      } else {
        setLoginError(data.message);
      }
    } catch (error) {
      setLoginError("Error de conexión");
      console.error(error);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    passwordError,
    loginError,
    handleSubmit,
  };
}
