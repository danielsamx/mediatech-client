import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Stack,
  Button,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AppTheme from "../../auth/components/AppTheme";
import { useState } from "react";
import { AddCaseModal } from "../modals/AddCaseModal";

const sampleData = [
  {
    id: 1,
    firstPerson: "Juan Pérez Peréz Gómez",
    secondPerson: "María López López Martinez",
    date: "2024-06-01",
  },
  {
    id: 2,
    firstPerson: "Carlos Eduardo Díaz Ramos",
    secondPerson: "Ana Patricia Torres Salinas",
    date: "2024-06-02",
  },
  {
    id: 3,
    firstPerson: "Luis Alberto Gómez Mejía",
    secondPerson: "Laura Cristina Ramírez Chávez",
    date: "2024-06-03",
  },
  {
    id: 1,
    firstPerson: "Juan Pérez Peréz Gómez",
    secondPerson: "María López López Martinez",
    date: "2024-06-01",
  },
  {
    id: 2,
    firstPerson: "Carlos Eduardo Díaz Ramos",
    secondPerson: "Ana Patricia Torres Salinas",
    date: "2024-06-02",
  },
  {
    id: 3,
    firstPerson: "Luis Alberto Gómez Mejía",
    secondPerson: "Laura Cristina Ramírez Chávez",
    date: "2024-06-03",
  },
  {
    id: 1,
    firstPerson: "Juan Pérez Peréz Gómez",
    secondPerson: "María López López Martinez",
    date: "2024-06-01",
  },
  {
    id: 2,
    firstPerson: "Carlos Eduardo Díaz Ramos",
    secondPerson: "Ana Patricia Torres Salinas",
    date: "2024-06-02",
  },
  {
    id: 3,
    firstPerson: "Luis Alberto Gómez Mejía",
    secondPerson: "Laura Cristina Ramírez Chávez",
    date: "2024-06-03",
  },
  {
    id: 1,
    firstPerson: "Juan Pérez Peréz Gómez",
    secondPerson: "María López López Martinez",
    date: "2024-06-01",
  },
  {
    id: 2,
    firstPerson: "Carlos Eduardo Díaz Ramos",
    secondPerson: "Ana Patricia Torres Salinas",
    date: "2024-06-02",
  },
  {
    id: 3,
    firstPerson: "Luis Alberto Gómez Mejía",
    secondPerson: "Laura Cristina Ramírez Chávez",
    date: "2024-06-03",
  },
  {
    id: 1,
    firstPerson: "Juan Pérez Peréz Gómez",
    secondPerson: "María López López Martinez",
    date: "2024-06-01",
  },
  {
    id: 2,
    firstPerson: "Carlos Eduardo Díaz Ramos",
    secondPerson: "Ana Patricia Torres Salinas",
    date: "2024-06-02",
  },
  {
    id: 3,
    firstPerson: "Luis Alberto Gómez Mejía",
    secondPerson: "Laura Cristina Ramírez Chávez",
    date: "2024-06-03",
  },
];

export default function Case() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <AppTheme>
      <Box sx={{ display: "flex", height: "90vh" }}>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 4,
            display: "flex",
            flexDirection: "column",
            height: "calc(100vh - 70px)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              mb: 3,
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              alignItems="flex-end"
              flexWrap="wrap"
            >
              <Box>
                <Typography
                  variant="caption"
                  sx={{ mb: 0.5, display: "block" }}
                >
                  Buscar caso
                </Typography>
                <TextField
                  placeholder="Caso"
                  variant="outlined"
                  size="small"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>

              <Box>
                <Typography
                  variant="caption"
                  sx={{ mb: 0.5, display: "block" }}
                >
                  Desde
                </Typography>
                <TextField
                  type="date"
                  size="small"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                />
              </Box>

              <Box>
                <Typography
                  variant="caption"
                  sx={{ mb: 0.5, display: "block" }}
                >
                  Hasta
                </Typography>
                <TextField
                  type="date"
                  size="small"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                />
              </Box>
            </Stack>
          </Box>
          <AddCaseModal open={openModal} onClose={() => setOpenModal(false)} />
          <TableContainer
            component={Paper}
            sx={{
              flexGrow: 1,
              overflowY: "auto",
              scrollbarWidth: "none", // Firefox
              "&::-webkit-scrollbar": {
                display: "none", // Chrome, Safari y Edge
              },
              backgroundColor: "white",
            }}
          >
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  {[
                    "Caso",
                    "Primer involucrado",
                    "Segundo involucrado",
                    "Fecha de registro",
                    "Detalles",
                  ].map((header) => (
                    <TableCell
                      key={header}
                      sx={{
                        border: 1,
                        borderColor: "divider",
                        fontWeight: "bold",
                        textAlign: "center",
                        backgroundColor: "bakcground.paper",
                        position: "sticky",
                        top: 0,
                        zIndex: 1,
                      }}
                    >
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {sampleData.map((row, index) => (
                  <TableRow key={index + "-" + row.firstPerson} hover>
                    <TableCell
                      sx={{
                        border: 1,
                        borderColor: "divider",
                        textAlign: "center",
                      }}
                    >
                      {row.id}
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        borderColor: "divider",
                        textAlign: "center",
                      }}
                    >
                      {row.firstPerson}
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        borderColor: "divider",
                        textAlign: "center",
                      }}
                    >
                      {row.secondPerson}
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        borderColor: "divider",
                        textAlign: "center",
                      }}
                    >
                      {row.date}
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        borderColor: "divider",
                        textAlign: "center",
                      }}
                    >
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<VisibilityIcon />}
                      >
                        Ver más
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </AppTheme>
  );
}
