// hooks/usePostpone.ts
import { useState, useCallback } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

type UsePostponeParams = {
  id: string;
  initialDate: string;
  initialStart: string;
  initialEnd: string;
};

export function usePostpone({
  id,
  initialDate,
  initialStart,
  initialEnd,
}: UsePostponeParams) {
  const [date, setDate] = useState(initialDate);
  const [startHour, setStartHour] = useState(initialStart);
  const [endHour, setEndHour] = useState(initialEnd);
  const [loading, setLoading] = useState(false);

  const hasChanges =
    date !== initialDate ||
    startHour !== initialStart ||
    endHour !== initialEnd;

  const postpone = useCallback(async () => {
    if (!hasChanges) {
      return { success: false, message: "No hay cambios para guardar." };
    }

    setLoading(true);

    try {
      const response = await axios.put(`${apiUrl}/cita/${id}`, {
        date,
        startHour,
        endHour,
      });
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
  }, [id, date, startHour, endHour, hasChanges]);

  return {
    date,
    startHour,
    endHour,
    setDate,
    setStartHour,
    setEndHour,
    hasChanges,
    loading,
    postpone,
  };
}
