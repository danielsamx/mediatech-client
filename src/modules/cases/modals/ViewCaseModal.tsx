import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  DialogActions,
  Button,
  TextField,
  Box,
  Typography,
  FormControl,
  Select,
  MenuItem,
  type SelectChangeEvent,
} from "@mui/material";
import { FaRegSave } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { useEffect, useState, useCallback } from "react";
import { isValidEmail } from "../../../share/utils/isValidEmail";
import { isValidPhone } from "../../../share/utils/isValidPhone";
import { useUpdateCase } from "../hooks/useUpdateCase";
import { infoModal } from "../../../share/infoModal";

const apiUrl = import.meta.env.VITE_API_URL;

type Case = {
  id: number;
  first_involved: string;
  second_involved: string;
  first_name: string;
  first_lastname: string;
  first_cellphone: string;
  first_email: string;
  second_name: string;
  second_lastname: string;
  second_cellphone: string;
  second_email: string;
  status: string;
  subject: string;
  description: string;
};

interface ViewCaseModalProps {
  open: boolean;
  onClose: () => void;
  id: string;
  onRefresh: () => void;
}

export function ViewCaseModal({
  open,
  onClose,
  id,
  onRefresh,
}: ViewCaseModalProps) {
  const [dataCase, setDataCase] = useState<Case | null>(null);
  const [originalCase, setOriginalCase] = useState<Case | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { updateCase } = useUpdateCase();

  useEffect(() => {
    if (open) {
      fetchCase();
    } else {
      // Reset state on close
      setDataCase(null);
      setOriginalCase(null);
      setErrors({});
    }
  }, [open, id]);

  const fetchCase = async () => {
    try {
      const response = await fetch(`${apiUrl}/caso/${id}`);
      if (!response.ok) {
        console.error("error " + response.status);
        setDataCase(null);
        setOriginalCase(null);
        return;
      }
      const result = await response.json();
      setDataCase(result);
      setOriginalCase(result);
      setErrors({});
    } catch (error) {
      console.error(error);
      setDataCase(null);
      setOriginalCase(null);
    }
  };

  const validateField = useCallback((name: string, value: string) => {
    let errorMsg = "";
    if (name.toLowerCase().includes("email")) {
      if (value && !isValidEmail(value)) {
        errorMsg = "Email no válido";
      }
    }
    if (name.toLowerCase().includes("cellphone")) {
      if (value && !isValidPhone(value)) {
        errorMsg = "Teléfono no válido";
      }
    }
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
  ) => {
    const { name, value } = e.target;
    if (!name) return;
    const valueStr = value as string;

    // Actualizar estado
    setDataCase((prev) => (prev ? { ...prev, [name]: valueStr } : prev));

    // Validar el campo
    validateField(name, valueStr);
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    if (!name) return;

    setDataCase((prev) => (prev ? { ...prev, [name]: value } : prev));
  };

  const hasChanges = (() => {
    if (!dataCase || !originalCase) return false;
    const fields = [
      "first_cellphone",
      "first_email",
      "second_cellphone",
      "second_email",
      "status",
      "subject",
      "description",
    ];
    return fields.some(
      (field) =>
        dataCase[field as keyof Case] !== originalCase[field as keyof Case]
    );
  })();

  const hasErrors = Object.values(errors).some((msg) => msg.length > 0);

  if (!dataCase) return null;

  const handleSubmit = async () => {
    const result = await updateCase(dataCase, id);
    onClose();
    if (result?.success) {
      if (result.message === "Caso actualizado con éxito") {
        setTimeout(() => {
          infoModal("success", result.message);
          onRefresh();
          onClose();
        }, 300);
      } else {
        setTimeout(() => {
          infoModal("error", result.message);
        }, 300);
      }
    } else {
      infoModal("error", result?.message || "Error al registrar el caso");
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Registrar caso</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid size={6}>
            <Grid
              container
              sx={{ mb: 4, display: "flex", justifyContent: "left" }}
            >
              <Grid size={10} sx={{ width: "95%" }}>
                <Typography sx={{ mb: 2.5, fontWeight: 700 }}>
                  Primera Parte
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{ mb: 0.5, display: "block" }}
                    >
                      Cédula
                    </Typography>
                    <TextField
                      variant="outlined"
                      name="first_involved"
                      value={dataCase.first_involved}
                      fullWidth
                      disabled
                    />
                  </Box>

                  <Grid container spacing={2}>
                    <Grid size={6}>
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{ mb: 0.5, display: "block" }}
                        >
                          Nombres
                        </Typography>
                        <TextField
                          variant="outlined"
                          name="first_name"
                          value={dataCase.first_name}
                          fullWidth
                          disabled
                        />
                      </Box>
                    </Grid>
                    <Grid size={6}>
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{ mb: 0.5, display: "block" }}
                        >
                          Apellidos
                        </Typography>
                        <TextField
                          variant="outlined"
                          name="first_lastname"
                          value={dataCase.first_lastname}
                          fullWidth
                          disabled
                        />
                      </Box>
                    </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid size={6}>
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{ mb: 0.5, display: "block" }}
                        >
                          Teléfono
                        </Typography>
                        <TextField
                          variant="outlined"
                          name="first_cellphone"
                          value={dataCase.first_cellphone}
                          onChange={handleChange}
                          fullWidth
                          error={!!errors.first_cellphone}
                          helperText={errors.first_cellphone}
                          inputProps={{ maxLength: 10 }}
                        />
                      </Box>
                    </Grid>
                    <Grid size={6}>
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{ mb: 0.5, display: "block" }}
                        >
                          Email
                        </Typography>
                        <TextField
                          variant="outlined"
                          name="first_email"
                          value={dataCase.first_email}
                          onChange={handleChange}
                          fullWidth
                          error={!!errors.first_email}
                          helperText={errors.first_email}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid size={6}>
            <Grid
              container
              sx={{ mb: 4, display: "flex", justifyContent: "right" }}
            >
              <Grid size={10} sx={{ width: "95%" }}>
                <Typography sx={{ mb: 2.5, fontWeight: 700 }}>
                  Segunda Parte
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{ mb: 0.5, display: "block" }}
                    >
                      Cédula
                    </Typography>
                    <TextField
                      variant="outlined"
                      name="second_involved"
                      value={dataCase.second_involved}
                      fullWidth
                      disabled
                    />
                  </Box>

                  <Grid container spacing={2}>
                    <Grid size={6}>
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{ mb: 0.5, display: "block" }}
                        >
                          Nombres
                        </Typography>
                        <TextField
                          variant="outlined"
                          name="second_name"
                          value={dataCase.second_name}
                          fullWidth
                          disabled
                        />
                      </Box>
                    </Grid>
                    <Grid size={6}>
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{ mb: 0.5, display: "block" }}
                        >
                          Apellidos
                        </Typography>
                        <TextField
                          variant="outlined"
                          name="second_lastname"
                          value={dataCase.second_lastname}
                          fullWidth
                          disabled
                        />
                      </Box>
                    </Grid>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid size={6}>
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{ mb: 0.5, display: "block" }}
                        >
                          Teléfono
                        </Typography>
                        <TextField
                          variant="outlined"
                          name="second_cellphone"
                          value={dataCase.second_cellphone}
                          onChange={handleChange}
                          fullWidth
                          error={!!errors.second_cellphone}
                          helperText={errors.second_cellphone}
                          inputProps={{ maxLength: 10 }}
                        />
                      </Box>
                    </Grid>
                    <Grid size={6}>
                      <Box>
                        <Typography
                          variant="caption"
                          sx={{ mb: 0.5, display: "block" }}
                        >
                          Email
                        </Typography>
                        <TextField
                          variant="outlined"
                          name="second_email"
                          value={dataCase.second_email}
                          onChange={handleChange}
                          fullWidth
                          error={!!errors.second_email}
                          helperText={errors.second_email}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: "10px" }}>
          <Grid size={12}>
            <Typography sx={{ mb: 0.5, fontWeight: 700 }}>
              Detalles del caso
            </Typography>
          </Grid>

          <Grid size={12}>
            <Grid container spacing={2}>
              <Grid size={4}>
                <FormControl fullWidth>
                  <Typography
                    variant="caption"
                    sx={{ mb: 0.5, display: "block" }}
                  >
                    Estado
                  </Typography>
                  <Select
                    name="status"
                    value={dataCase.status}
                    onChange={handleSelectChange}
                  >
                    <MenuItem value="Resuelto">Resuelto</MenuItem>
                    <MenuItem value="Pendiente">Pendiente</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid size={4}>
                <FormControl fullWidth>
                  <Typography
                    variant="caption"
                    sx={{ mb: 0.5, display: "block" }}
                  >
                    Materia
                  </Typography>
                  <Select
                    name="subject"
                    value={dataCase.subject}
                    onChange={handleSelectChange}
                  >
                    <MenuItem value="Familia">Familia</MenuItem>
                    <MenuItem value="Grupos comunitarios">
                      Grupos comunitarios
                    </MenuItem>
                    <MenuItem value="Abogados y empresas">
                      Abogados y empresas
                    </MenuItem>
                    <MenuItem value="Instituciones públicas">
                      Instituciones públicas
                    </MenuItem>
                    <MenuItem value="Derivaciones de los juzgados">
                      Derivaciones de los juzgados
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid size={4}>
                <Typography
                  variant="caption"
                  sx={{ mb: 0.5, display: "block" }}
                >
                  Descripción
                </Typography>
                <TextField
                  name="description"
                  value={dataCase.description}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions sx={{ padding: "0 24px 20px 24px" }}>
        <Button
          variant="contained"
          color="error"
          startIcon={<MdOutlineCancel />}
          onClick={onClose}
        >
          Cancelar
        </Button>
        <Button
          variant="contained"
          color="primary"
          startIcon={<FaRegSave />}
          disabled={!hasChanges || hasErrors}
          onClick={handleSubmit}
          sx={{
            "&.Mui-disabled": {
              color: "#6e6e6e",
              backgroundColor: "#e0e0e0",
              opacity: 1,
              boxShadow: "none",
            },
          }}
        >
          Guardar cambios
        </Button>
      </DialogActions>
    </Dialog>
  );
}
