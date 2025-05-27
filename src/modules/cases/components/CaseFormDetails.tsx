import type { FC } from "react";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

interface CaseFormDetailsProps {
  title: string;
}

export const CaseFormDetails: FC<CaseFormDetailsProps> = ({ title }) => {
  return (
    <Grid container spacing={2} sx={{ mb: "10px" }}>
      <Grid size={12}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "500",
            color: "#1e3a8a",
            fontSize: 15,
          }}
        >
          {title}
        </Typography>
      </Grid>

      {/* Fila completa */}
      <Grid size={12}>
        <Grid container spacing={2}>
          <Grid size={4}>
            <FormControl fullWidth>
              <InputLabel>Estado</InputLabel>
              <Select label="Estado">
                <MenuItem value={10}>Resuelto</MenuItem>
                <MenuItem value={20}>Pendiente</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid size={4}>
            <FormControl fullWidth>
              <InputLabel>Materia</InputLabel>
              <Select label="Materia">
                <MenuItem value={10}>Familia</MenuItem>
                <MenuItem value={20}>Grupos comunitarios</MenuItem>
                <MenuItem value={20}>Abogados y empresas</MenuItem>
                <MenuItem value={20}>Instituciones públicas</MenuItem>
                <MenuItem value={20}>Derivaciones de los juzgados</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid size={4}>
            <TextField fullWidth label="Descripción" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
