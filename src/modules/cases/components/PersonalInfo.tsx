import type { FC } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";

export const PersonalInfo: FC = () => {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box>
        <Typography variant="caption" sx={{ mb: 0.5, display: "block" }}>
          Cédula
        </Typography>
        <TextField variant="outlined" fullWidth />
      </Box>

      <Grid container spacing={2}>
        <Grid size={6}>
          <Box>
            <Typography variant="caption" sx={{ mb: 0.5, display: "block" }}>
              Nombres
            </Typography>
            <TextField variant="outlined" fullWidth />
          </Box>
        </Grid>
        <Grid size={6}>
          <Box>
            <Typography variant="caption" sx={{ mb: 0.5, display: "block" }}>
              Apellidos
            </Typography>
            <TextField variant="outlined" fullWidth />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid size={6}>
          <Box>
            <Typography variant="caption" sx={{ mb: 0.5, display: "block" }}>
              Teléfono
            </Typography>
            <TextField variant="outlined" fullWidth />
          </Box>
        </Grid>
        <Grid size={6}>
          <Box>
            <Typography variant="caption" sx={{ mb: 0.5, display: "block" }}>
              Email
            </Typography>
            <TextField variant="outlined" fullWidth />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
