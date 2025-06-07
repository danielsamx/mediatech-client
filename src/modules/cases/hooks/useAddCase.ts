import { useState } from "react";
import axios from "axios";
import type { Case } from "../utils/Case";

const apiUrl = import.meta.env.VITE_API_URL;

export function useAddCase() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const addCase = async (caseData: Case) => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await axios.post(`${apiUrl}/caso`, caseData);

      const message = response.data.message || "Caso creado exitosamente";
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
    addCase,
    loading,
    error,
    successMessage,
  };
}
