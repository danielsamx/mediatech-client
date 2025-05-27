import { Box, Typography, Grid, Button } from "@mui/material";
import { Aside } from "../../../share/components/Aside";
import { CaseFormSection } from "../components/CaseFormSection";
import { CaseFormDetails } from "../components/CaseFormDetails";
import { FaSave } from "react-icons/fa";
import { infoModal } from "../../../share/infoModal";

export function RegisterCase() {
  return (
    <Box sx={{ display: "flex", height: "90vh", bgcolor: "#f0f4f8" }}>
      {/* Aside fijo */}
      <Aside />

      {/* Contenido principal */}
      <Box
        component="div"
        sx={{
          marginLeft: "280px",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          height: "90vh",
          bgcolor: "white",
          overflowY: "auto",
        }}
      >
        {/* Contenedor con ancho limitado */}
        <Box
          component="main"
          sx={{
            width: "80%",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            pt: 4,
          }}
        >
          {/* Título alineado a la izquierda */}
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              fontWeight: "600",
              color: "#1e3a8a",
              textAlign: "left",
            }}
          >
            Registrar Caso
          </Typography>

          {/* Formulario dividido en dos columnas */}
          <Grid
            container
            spacing={4}
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Grid size={6}>
              <CaseFormSection title="Primera parte" jcontet="left" />
            </Grid>
            <Grid size={6}>
              <CaseFormSection title="Segunda parte" jcontet="right" />
            </Grid>
          </Grid>

          {/* Detalles */}
          <CaseFormDetails title="Detalles del caso" />

          <Box sx={{ flexGrow: 1 }} />

          {/* Botón Guardar */}
          <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<FaSave />}
              onClick={() => {
                infoModal("success", "Caso registrado con éxito");
              }}
              sx={{
                height: 56,
                borderRadius: "50px",
                backgroundColor: "#1e3a8a",
                px: 3,
                textTransform: "none",
                maxWidth: 180,
                boxShadow:
                  "0 3px 6px rgba(30, 58, 138, 0.4), 0 2px 4px rgba(59, 130, 246, 0.3)",
                transition: "background-color 0.3s ease",
                "&:hover": {
                  backgroundColor: "#3b82f6",
                  boxShadow:
                    "0 6px 12px rgba(59, 130, 246, 0.6), 0 4px 8px rgba(30, 58, 138, 0.5)",
                },
                "& .MuiButton-startIcon": {
                  mr: 1,
                },
              }}
            >
              Guardar
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
