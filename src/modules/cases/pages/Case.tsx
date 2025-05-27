import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  InputAdornment,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Aside } from "../../../share/components/Aside";
import TagIcon from "@mui/icons-material/Tag";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { AddCaseModal } from "../modals/AddCaseModal";
import { ViewCaseModal } from "../modals/ViewCaseModal";

const rows = [
  { id: 1, nombres1: "Juan", nombres2: "Pérez", fecha: "2025-05-20" },
  { id: 2, nombres1: "Ana", nombres2: "Gómez", fecha: "2025-05-19" },
  { id: 3, nombres1: "Luis", nombres2: "Martínez", fecha: "2025-05-18" },
  { id: 4, nombres1: "Carla", nombres2: "López", fecha: "2025-05-17" },
  { id: 5, nombres1: "Pedro", nombres2: "Ramírez", fecha: "2025-05-16" },
  { id: 1, nombres1: "Juan", nombres2: "Pérez", fecha: "2025-05-20" },
  { id: 2, nombres1: "Ana", nombres2: "Gómez", fecha: "2025-05-19" },
  { id: 3, nombres1: "Luis", nombres2: "Martínez", fecha: "2025-05-18" },
  { id: 4, nombres1: "Carla", nombres2: "López", fecha: "2025-05-17" },
  { id: 5, nombres1: "Pedro", nombres2: "Ramírez", fecha: "2025-05-16" },
];

export function Case() {
  const [search, setSearch] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const filteredRows = rows.filter((row) => {
    const searchText = search.trim().toLowerCase();

    const matchName =
      !searchText ||
      row.nombres1.toLowerCase().includes(searchText) ||
      row.nombres2.toLowerCase().includes(searchText);

    const filtrarPorFecha = fechaInicio && fechaFin;

    const matchFecha = filtrarPorFecha
      ? row.fecha >= fechaInicio && row.fecha <= fechaFin
      : true;

    return matchName && matchFecha;
  });

  return (
    <Box sx={{ display: "flex", height: "90vh", bgcolor: "#f0f4f8" }}>
      {/* Aside fijo */}
      <Aside />

      {/* Contenido principal */}
      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginLeft: "280px",
          flexGrow: 1,
          p: 4,
          height: "90vh",
          bgcolor: "white",
        }}
      >
        <Box component="div" sx={{ width: "90%", height: "90vh", flexGrow: 1 }}>
          {/* Título */}
          <Typography
            variant="h5"
            sx={{ mb: 3, fontWeight: "600", color: "#1e3a8a" }}
          >
            Casos Registrados
          </Typography>

          {/* Filtros arriba */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              alignItems: "center",
              mb: 4,
            }}
          >
            {/* Búsqueda por nombres */}
            <TextField
              label="Buscar por nombre"
              variant="outlined"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
            {/* Fecha inicio */}
            <TextField
              label="Fecha desde"
              type="date"
              value={fechaInicio}
              onChange={(e) => setFechaInicio(e.target.value)}
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
            {/* Fecha fin */}
            <TextField
              label="Fecha hasta"
              type="date"
              value={fechaFin}
              onChange={(e) => setFechaFin(e.target.value)}
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
            {/* Botón Registrar Caso + */}
            <Box sx={{ ml: "auto" }}>
              <Button
                onClick={() => setOpenModal(true)}
                variant="contained"
                color="primary"
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
                Registrar caso
              </Button>
            </Box>
          </Box>
          <AddCaseModal open={openModal} onClose={() => setOpenModal(false)} />

          {/* Tabla */}
          <TableContainer
            component={Paper}
            sx={{
              flex: 1,
              height: "80%",
              mx: "auto",
              boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
              overflow: "auto",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <Table
              stickyHeader
              sx={{
                "& th": {
                  backgroundColor: "#1e3a8a",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "1rem",
                },
                "& td": {
                  fontSize: "0.95rem",
                  color: "#2c3e50",
                },
                "& tr:hover": {
                  backgroundColor: "#e0e7ff",
                },
                borderCollapse: "separate",
                borderSpacing: "0 8px",
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell sx={{ width: "10%" }}>
                    <TagIcon
                      fontSize="small"
                      sx={{ mr: 1, verticalAlign: "middle", color: "white" }}
                    />
                    Caso
                  </TableCell>
                  <TableCell sx={{ width: "30%" }}>
                    <PersonIcon
                      fontSize="small"
                      sx={{ mr: 1, verticalAlign: "middle", color: "white" }}
                    />
                    Primera parte
                  </TableCell>
                  <TableCell sx={{ width: "30%" }}>
                    <GroupIcon
                      fontSize="small"
                      sx={{ mr: 1, verticalAlign: "middle", color: "white" }}
                    />
                    Segunda parte
                  </TableCell>
                  <TableCell sx={{ width: "15%" }}>
                    <CalendarTodayIcon
                      fontSize="small"
                      sx={{ mr: 1, verticalAlign: "middle", color: "white" }}
                    />
                    Fecha
                  </TableCell>
                  <TableCell sx={{ width: "15%" }} />
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows.length > 0 ? (
                  filteredRows.map((row) => (
                    <TableRow
                      key={row.id}
                      hover
                      sx={{
                        backgroundColor: "white",
                        borderRadius: 2,
                        "&:last-child td": { borderBottom: 0 },
                      }}
                    >
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.nombres1}</TableCell>
                      <TableCell>{row.nombres2}</TableCell>
                      <TableCell>{row.fecha}</TableCell>
                      <TableCell>
                        <Button
                          onClick={() => {
                            setOpenModal(true);
                          }}
                          variant="contained"
                          size="small"
                          startIcon={<VisibilityIcon />}
                          sx={{ mr: 1 }}
                        >
                          Ver más
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} align="center" sx={{ py: 4 }}>
                      No hay resultados
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <ViewCaseModal open={openModal} onClose={() => setOpenModal(false)} />
        </Box>
      </Box>
    </Box>
  );
}
