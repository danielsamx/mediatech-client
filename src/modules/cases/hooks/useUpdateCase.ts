import { useState } from "react";
import axios from "axios";
import type { Case } from "../utils/Case";

const apiUrl = import.meta.env.VITE_API_URL;

export function useUpdateCase() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const updateCase = async (caseData: Case, id: string) => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await axios.put(`${apiUrl}/caso/${id}`, caseData);

      const message = response.data.message || "Caso actualizado con éxito";
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
    updateCase,
    loading,
    error,
    successMessage,
  };
}
