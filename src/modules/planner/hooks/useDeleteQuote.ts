// hooks/useAddQuote.ts
import { useState } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export function useDeleteQuote() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const deleteQuote = async (id: number) => {
    setLoading(true);
    try {
      const response = await axios.delete(`${apiUrl}/cita/${id}`);
      console.log("response: " + response);
      console.log(response.data.message);
      return {
        success: "true",
        message: response.data.message,
      };
    } catch (err: any) {
      const message = err.response.data;
      return { success: false, message };
    } finally {
      setLoading(false);
    }
  };

  return { loading, deleteQuote, errors, setErrors };
}
