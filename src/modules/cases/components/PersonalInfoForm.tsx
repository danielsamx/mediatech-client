import type { FC } from "react";
import { Box, Grid, TextField } from "@mui/material";

export const PersonalInfoForm: FC = () => {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <TextField label="Cédula" variant="outlined" fullWidth />

      <Grid container spacing={2}>
        <Grid size={6}>
          <TextField label="Nombres" variant="outlined" fullWidth />
        </Grid>
        <Grid size={6}>
          <TextField label="Apellidos" variant="outlined" fullWidth />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid size={6}>
          <TextField label="Teléfono" variant="outlined" fullWidth />
        </Grid>
        <Grid size={6}>
          <TextField label="Email" variant="outlined" fullWidth />
        </Grid>
      </Grid>
    </Box>
  );
};
