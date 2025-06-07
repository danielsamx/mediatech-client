import {
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import type { Details as DetailsType } from "../utils/Case";
import React from "react";

interface CaseFormDetailsProps {
  title: string;
  detailsData: DetailsType;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | { target: { name: string; value: string } }
  ) => void;
  errors?: Partial<Record<keyof DetailsType, boolean>>;
}

export function Details({
  title,
  detailsData,
  onChange,
  errors = {},
}: CaseFormDetailsProps) {
  return (
    <Grid container spacing={2} sx={{ mb: "10px" }}>
      <Grid size={12}>
        <Typography sx={{ mb: 0.5, display: "block", fontWeight: 700 }}>
          {title}
        </Typography>
      </Grid>

      <Grid size={12}>
        <Grid container spacing={2}>
          <Grid size={4}>
            <FormControl fullWidth error={!!errors.status}>
              <Typography variant="caption" sx={{ mb: 0.5, display: "block" }}>
                Estado
              </Typography>
              <Select
                name="status"
                value={detailsData.status}
                onChange={onChange}
              >
                <MenuItem value="Resuelto">Resuelto</MenuItem>
                <MenuItem value="Pendiente">Pendiente</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid size={4}>
            <FormControl fullWidth error={!!errors.subject}>
              <Typography variant="caption" sx={{ mb: 0.5, display: "block" }}>
                Materia
              </Typography>
              <Select
                name="subject"
                value={detailsData.subject}
                onChange={onChange}
              >
                <MenuItem value="familia">Familia</MenuItem>
                <MenuItem value="comunitarios">Grupos comunitarios</MenuItem>
                <MenuItem value="abogados">Abogados y empresas</MenuItem>
                <MenuItem value="publicas">Instituciones públicas</MenuItem>
                <MenuItem value="juzgados">
                  Derivaciones de los juzgados
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid size={4}>
            <Typography variant="caption" sx={{ mb: 0.5, display: "block" }}>
              Descripción
            </Typography>
            <TextField
              fullWidth
              name="description"
              value={detailsData.description}
              onChange={onChange}
              error={!!errors.description}
              helperText={
                errors.description ? "Descripción es obligatoria" : ""
              }
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
