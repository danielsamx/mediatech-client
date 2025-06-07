import { useEffect } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import type { CalendarEvent, Involved } from "../utils/Case";
import type React from "react";

interface Props {
  formData: Involved;
  onChange: (e: React.ChangeEvent<any>) => void;
  prefix: "first" | "second";
  title: string;
  jcontent: string;
  dataQuote: CalendarEvent;
  errors: Partial<Record<keyof Involved, boolean>>;
}

export function PersonalInfo({
  formData,
  onChange,
  prefix,
  title,
  jcontent,
  dataQuote,
  errors,
}: Props) {
  useEffect(() => {
    const initEvent = new CustomEvent("initForm", {
      detail: {
        prefix,
        dni:
          prefix === "first"
            ? dataQuote.firstInvolved
            : dataQuote.secondInvolved,
        email:
          prefix === "first"
            ? dataQuote.firstEmail ?? ""
            : dataQuote.secondEmail ?? "",
      },
    });
    window.dispatchEvent(initEvent);
  }, [dataQuote, prefix]);

  return (
    <Grid container sx={{ mb: 4, display: "flex", justifyContent: jcontent }}>
      <Grid size={10} sx={{ width: "95%" }}>
        <Typography sx={{ mb: 2.5, display: "block", fontWeight: 700 }}>
          {title}
        </Typography>

        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          {/* DNI */}
          <Box>
            <Typography variant="caption" sx={{ mb: 0.5, display: "block" }}>
              Cédula
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              name={`${prefix}.dni`}
              value={formData.dni}
              onChange={onChange}
              inputProps={{ maxLength: 10 }}
              error={!!errors.dni}
              helperText={errors.dni ? "Cédula inválida" : ""}
              disabled
            />
          </Box>

          {/* Nombres y Apellidos */}
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
                  fullWidth
                  name={`${prefix}.name`}
                  value={formData.name}
                  onChange={onChange}
                  error={!!errors.name}
                  helperText={errors.name ? "Nombre inválido" : ""}
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
                  fullWidth
                  name={`${prefix}.lastname`}
                  value={formData.lastname}
                  onChange={onChange}
                  error={!!errors.lastname}
                  helperText={errors.lastname ? "Apellido inválido" : ""}
                />
              </Box>
            </Grid>
          </Grid>

          {/* Teléfono y Email */}
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
                  fullWidth
                  name={`${prefix}.phone`}
                  value={formData.phone}
                  onChange={onChange}
                  inputProps={{ maxLength: 10 }}
                  error={!!errors.phone}
                  helperText={errors.phone ? "Número telefónico inválido" : ""}
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
                  fullWidth
                  name={`${prefix}.email`}
                  value={formData.email}
                  onChange={onChange}
                  error={!!errors.email}
                  helperText={errors.email ? "Email inválido" : ""}
                  disabled
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
