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
} from "@mui/material";
import SideMenu from "./Aside";
import AppTheme from "../components/AppTheme";
import ColorModeSelect from "../../../share/components/ColorModeSelect";

const sampleData = [
  { id: 1, name: "Producto A", price: 120 },
  { id: 2, name: "Producto B", price: 80 },
  { id: 3, name: "Producto C", price: 150 },
  { id: 1, name: "Producto A", price: 120 },
  { id: 2, name: "Producto B", price: 80 },
  { id: 3, name: "Producto C", price: 150 },
  { id: 1, name: "Producto A", price: 120 },
  { id: 2, name: "Producto B", price: 80 },
  { id: 3, name: "Producto C", price: 150 },
  { id: 1, name: "Producto A", price: 120 },
  { id: 2, name: "Producto B", price: 80 },
  { id: 3, name: "Producto C", price: 150 },
  { id: 1, name: "Producto A", price: 120 },
  { id: 2, name: "Producto B", price: 80 },
  { id: 3, name: "Producto C", price: 150 },
  { id: 1, name: "Producto A", price: 120 },
  { id: 2, name: "Producto B", price: 80 },
  { id: 3, name: "Producto C", price: 150 },
];

export default function DashboardPage() {
  return (
    <AppTheme>
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <SideMenu />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 4,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Tabla de Productos
          </Typography>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <strong>ID</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Nombre</strong>
                  </TableCell>
                  <TableCell>
                    <strong>Precio</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sampleData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>${row.price}</TableCell>
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
