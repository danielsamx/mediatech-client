import { useState } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

interface RegisterData {
  email: string;
  name: string;
  lastName: string;
  password: string;
}

export function useSignUp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const register = async (userData: RegisterData) => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await axios.post(
        `${apiUrl}/usuario/registrar`,
        userData
      );

      const message = response.data.message || "Usuario creado exitosamente";
      setSuccessMessage(message);

      return {
        success: true,
        message,
      };
    } catch (err: any) {
      console.log(err);
      const message =
        err.response?.data?.message ||
        err.response?.data ||
        err.message ||
        "Error desconocido.";

      setError(message);

      return {
        success: false,
        message,
      };
    } finally {
      setLoading(false);
    }
  };

  return {
    register,
    loading,
    error,
    successMessage,
  };
}
