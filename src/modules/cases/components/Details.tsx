import type { FC } from "react";
import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

interface CaseFormDetailsProps {
  title: string;
}

export const Details: FC<CaseFormDetailsProps> = ({ title }) => {
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
            <FormControl fullWidth>
              <Typography variant="caption" sx={{ mb: 0.5, display: "block" }}>
                Estado
              </Typography>
              <Select>
                <MenuItem value={10}>Resuelto</MenuItem>
                <MenuItem value={20}>Pendiente</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid size={4}>
            <FormControl fullWidth>
              <Typography variant="caption" sx={{ mb: 0.5, display: "block" }}>
                Materia
              </Typography>
              <Select>
                <MenuItem value={10}>Familia</MenuItem>
                <MenuItem value={20}>Grupos comunitarios</MenuItem>
                <MenuItem value={20}>Abogados y empresas</MenuItem>
                <MenuItem value={20}>Instituciones públicas</MenuItem>
                <MenuItem value={20}>Derivaciones de los juzgados</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid size={4}>
            <Box>
              <Typography variant="caption" sx={{ mb: 0.5, display: "block" }}>
                Descripción
              </Typography>
              <TextField fullWidth />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
