// hooks/useAddQuote.ts
import { useState } from "react";
import axios from "axios";
import { isValidDni } from "../../../share/utils/isValidDni";
import { isValidEmail } from "../../../share/utils/isValidEmail";

const apiUrl = import.meta.env.VITE_API_URL;

export function useAddQuote() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submitQuote = async (data: any) => {
    const newErrors: Record<string, string> = {};

    if (!isValidDni(data.firstInvolved))
      newErrors.firstInvolved = "Cédula no válida";
    if (!isValidDni(data.secondInvolved))
      newErrors.secondInvolved = "Cédula no válida";

    if (!isValidEmail(data.firstEmail))
      newErrors.firstEmail = "Correo no válido";
    if (!isValidEmail(data.secondEmail))
      newErrors.secondEmail = "Correo no válido";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`${apiUrl}/cita`, data);
      console.log(response);
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

  return { loading, submitQuote, errors, setErrors };
}
