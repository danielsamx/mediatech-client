import { Box, Grid, TextField } from "@mui/material";

function Home() {
  return (
    <Box
      component="form"
      sx={{ width: "100%", maxWidth: 600, mx: "auto", mt: 4 }}
    >
      {/* Primera fila: 2 campos (cedulas) */}
      <Grid container spacing={2} mb={2}>
        <Grid size={6}>
          <TextField label="Cédula 1ra parte" fullWidth />
        </Grid>
        <Grid size={6}>
          <TextField label="Cédula 2da parte" fullWidth />
        </Grid>
      </Grid>

      {/* Segunda fila: 3 campos (fecha, hora inicial, hora final) */}
      <Grid container spacing={2} mb={2}>
        <Grid size={4}>
          <TextField
            label="Fecha"
            type="date"
            fullWidth
            InputLabelProps={{
              shrink: true, // importante para que la etiqueta no se superponga al valor
            }}
          />
        </Grid>
        <Grid size={4}>
          <TextField
            label="Hora inicial"
            type="time"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid size={4}>
          <TextField
            label="Hora final"
            type="time"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
      </Grid>

      {/* Tercera fila: descripción (todo el ancho) */}
      <Grid container>
        <Grid size={12}>
          <TextField label="Descripción" multiline rows={3} fullWidth />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
