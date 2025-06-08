import {
  TextField,
  Grid,
  InputAdornment,
  DialogActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import {
  FaRegIdBadge,
  FaMailBulk,
  FaEnvelopeOpenText,
  FaRegSave,
} from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react";
import { useAddQuote } from "../hooks/useAddQuote";
import { infoModal } from "../../../share/infoModal";
import { isValidDni } from "../../../share/utils/isValidDni";
import { isValidEmail } from "../../../share/utils/isValidEmail";

interface AddPlannerProps {
  onClose: () => void;
  onRefreshCalendar: () => void;
}

type QuoteField =
  | "firstInvolved"
  | "secondInvolved"
  | "firstEmail"
  | "secondEmail"
  | "date"
  | "startHour"
  | "endHour"
  | "description";

export function AddPlanner({ onClose, onRefreshCalendar }: AddPlannerProps) {
  const [form, setForm] = useState<Record<QuoteField, string>>({
    firstInvolved: "",
    secondInvolved: "",
    firstEmail: "",
    secondEmail: "",
    date: "",
    startHour: "",
    endHour: "",
    description: "",
  });

  const { loading, submitQuote, errors, setErrors } = useAddQuote();

  const validateField = (field: QuoteField, value: string) => {
    if (field === "firstInvolved" || field === "secondInvolved") {
      if (value.length === 10) {
        if (!isValidDni(value)) {
          setErrors((prev) => ({ ...prev, [field]: "Cédula no válida" }));
        } else {
          setErrors((prev) => ({ ...prev, [field]: "" }));
        }
      } else {
        setErrors((prev) => ({ ...prev, [field]: "" }));
      }
    } else if (field === "firstEmail" || field === "secondEmail") {
      if (value.length > 0) {
        if (!isValidEmail(value)) {
          setErrors((prev) => ({ ...prev, [field]: "Correo no válido" }));
        } else {
          setErrors((prev) => ({ ...prev, [field]: "" }));
        }
      } else {
        setErrors((prev) => ({ ...prev, [field]: "" }));
      }
    } else {
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: "" }));
      }
    }
  };

  const handleChange =
    (field: QuoteField) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setForm({ ...form, [field]: value });
      validateField(field, value);
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validar horas antes de enviar
    if (form.startHour && form.endHour && form.endHour <= form.startHour) {
      setErrors((prev) => ({
        ...prev,
        endHour: "La hora final debe ser mayor que la hora inicio",
      }));
      return;
    }

    const result = await submitQuote(form);
    if (result?.success) {
      onClose();
      if (result.message === "Cita agendada correctamente") {
        setTimeout(() => {
          infoModal("success", result.message);
          onRefreshCalendar();
        }, 300);
      } else {
        setTimeout(() => {
          infoModal("error", result.message);
        }, 300);
      }
    } else {
      infoModal("error", result?.message || "Error al posponer cita");
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <form>
      <Grid container spacing={2} mb={2}>
        <Grid size={6}>
          <Box>
            <Typography variant="caption" sx={{ mb: 0.5, display: "block" }}>
              Primer involucrado
            </Typography>
          </Box>
        </Grid>
        <Grid size={6}>
          <Box>
            <Typography variant="caption" sx={{ mb: 0.5, display: "block" }}>
              Segundo involucrado
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} mb={2}>
        {(["firstInvolved", "secondInvolved"] as QuoteField[]).map((field) => (
          <Grid size={6} key={field}>
            <Box mb={1}>
              <Typography variant="caption">Cédula</Typography>
            </Box>
            <TextField
              fullWidth
              value={form[field]}
              onChange={handleChange(field)}
              error={!!errors[field]}
              helperText={errors[field]}
              inputProps={{ maxLength: 10 }}
              placeholder="Cédula"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaRegIdBadge />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2} mb={2}>
        {(["firstEmail", "secondEmail"] as QuoteField[]).map((field) => (
          <Grid size={6} key={field}>
            <Box mb={1}>
              <Typography variant="caption">Email</Typography>
            </Box>
            <TextField
              fullWidth
              value={form[field]}
              onChange={handleChange(field)}
              error={!!errors[field]}
              helperText={errors[field]}
              placeholder="Email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaMailBulk />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2} mb={2}>
        {(
          [
            { label: "Fecha", type: "date", field: "date" },
            { label: "Hora inicio", type: "time", field: "startHour" },
            { label: "Hora final", type: "time", field: "endHour" },
          ] as { label: string; type: string; field: QuoteField }[]
        ).map(({ label, type, field }) => {
          const isEndHourError =
            field === "endHour" &&
            form.startHour &&
            form.endHour &&
            form.endHour <= form.startHour;

          return (
            <Grid size={4} key={field}>
              <Box mb={1}>
                <Typography variant="caption">{label}</Typography>
              </Box>
              <TextField
                type={type}
                fullWidth
                value={form[field]}
                onChange={handleChange(field)}
                placeholder={label}
                required
                inputProps={field === "date" ? { min: today } : {}}
                error={!!errors[field] || !!isEndHourError}
                helperText={
                  errors[field] ||
                  (isEndHourError
                    ? "La hora final debe ser mayor que la hora inicio"
                    : "")
                }
              />
            </Grid>
          );
        })}
      </Grid>

      <Grid container mb={1}>
        <Grid size={12}>
          <Box mb={1}>
            <Typography variant="caption">Descripción</Typography>
          </Box>
          <TextField
            placeholder="..."
            fullWidth
            value={form.description}
            onChange={handleChange("description")}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaEnvelopeOpenText />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>

      <DialogActions>
        <Button
          onClick={onClose}
          color="error"
          variant="contained"
          startIcon={<MdOutlineCancel />}
        >
          Cancelar
        </Button>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          startIcon={<FaRegSave />}
          disabled={loading}
          onClick={handleSubmit}
        >
          Guardar
        </Button>
      </DialogActions>
    </form>
  );
}
