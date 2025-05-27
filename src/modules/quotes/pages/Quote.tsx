import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Aside } from "../../../share/components/Aside";
import { QuoteFilters } from "../components/QuoteFilters";
import { QuoteCalendar } from "../components/QuoteCalendar";

export function Quote() {
  const [search, setSearch] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");

  return (
    <Box sx={{ display: "flex", height: "90vh", bgcolor: "#f0f4f8" }}>
      <Aside />

      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginLeft: "280px",
          flexGrow: 1,
          p: 4,
          bgcolor: "white",
        }}
      >
        <Box sx={{ width: "90%", flexGrow: 1 }}>
          <Typography
            variant="h5"
            sx={{ mb: 3, fontWeight: "600", color: "#1e3a8a" }}
          >
            Citas Agendadas
          </Typography>

          <QuoteFilters
            search={search}
            fechaInicio={fechaInicio}
            fechaFin={fechaFin}
            onSearchChange={setSearch}
            onFechaInicioChange={setFechaInicio}
            onFechaFinChange={setFechaFin}
          />

          <QuoteCalendar />
        </Box>
      </Box>
    </Box>
  );
}
