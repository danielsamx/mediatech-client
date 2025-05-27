import { useState } from "react";
import { Box, Button, TextField, InputAdornment } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { AddQuoteModal } from "../modals/AddQuoteModal";

interface QuoteFiltersProps {
  search: string;
  fechaInicio: string;
  fechaFin: string;
  onSearchChange: (value: string) => void;
  onFechaInicioChange: (value: string) => void;
  onFechaFinChange: (value: string) => void;
}

export const QuoteFilters = ({
  search,
  fechaInicio,
  fechaFin,
  onSearchChange,
  onFechaInicioChange,
  onFechaFinChange,
}: QuoteFiltersProps) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          alignItems: "center",
          mb: 4,
        }}
      >
        <TextField
          label="Buscar por nombre"
          variant="outlined"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ color: "#1e3a8a" }}>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            flex: 1,
            minWidth: 220,
            maxWidth: 320,
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#1e3a8a" },
              "&:hover fieldset": { borderColor: "#3b82f6" },
              "&.Mui-focused fieldset": { borderColor: "#3b82f6" },
            },
            input: { color: "#1e3a8a", fontWeight: 500 },
            label: { color: "#1e3a8a" },
          }}
        />

        <TextField
          label="Fecha desde"
          type="date"
          value={fechaInicio}
          onChange={(e) => onFechaInicioChange(e.target.value)}
          InputLabelProps={{ shrink: true }}
          sx={{
            maxWidth: 180,
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#1e3a8a" },
              "&:hover fieldset": { borderColor: "#3b82f6" },
              "&.Mui-focused fieldset": { borderColor: "#3b82f6" },
            },
            input: { color: "#1e3a8a", fontWeight: 500 },
            label: { color: "#1e3a8a" },
          }}
        />

        <TextField
          label="Fecha hasta"
          type="date"
          value={fechaFin}
          onChange={(e) => onFechaFinChange(e.target.value)}
          InputLabelProps={{ shrink: true }}
          sx={{
            maxWidth: 180,
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#1e3a8a" },
              "&:hover fieldset": { borderColor: "#3b82f6" },
              "&.Mui-focused fieldset": { borderColor: "#3b82f6" },
            },
            input: { color: "#1e3a8a", fontWeight: 500 },
            label: { color: "#1e3a8a" },
          }}
        />

        <Box sx={{ ml: "auto" }}>
          <Button
            onClick={() => setOpenModal(true)}
            variant="contained"
            size="large"
            startIcon={<AddIcon />}
            sx={{
              height: 56,
              borderRadius: "50px",
              backgroundColor: "#1e3a8a",
              px: 3,
              textTransform: "none",
              boxShadow:
                "0 3px 6px rgba(30, 58, 138, 0.4), 0 2px 4px rgba(59, 130, 246, 0.3)",
              "&:hover": {
                backgroundColor: "#3b82f6",
              },
              "& .MuiButton-startIcon": {
                mr: 1,
              },
            }}
          >
            Agendar turno
          </Button>
        </Box>
      </Box>

      <AddQuoteModal open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};
