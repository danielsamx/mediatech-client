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
import { useEffect, useState } from "react";
const apiUrl = import.meta.env.VITE_API_URL;

type dataCase = {
  id: string;
  first_involved: string;
  second_involved: string;
  status: string;
  subject: string;
  description: string;
  name_first_involved: string;
  name_second_involved: string;
  register_date: string;
  register_time: string;
};

export default function Case() {
  const [data, setData] = useState<dataCase[]>([]);
  const [searchText, setSearchText] = useState("");

  const filteredData = data.filter(
    (item) =>
      item.name_first_involved
        .toLowerCase()
        .includes(searchText.toLowerCase()) ||
      item.name_second_involved.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    fetchCases();
  }, []);

  const fetchCases = async () => {
    try {
      const response = await fetch(`${apiUrl}/caso`);
      if (!response.ok) {
        console.error("error " + response.status);
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };

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
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
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
          <TableContainer
            component={Paper}
            sx={{
              flexGrow: 1,
              overflowY: "auto",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                display: "none",
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
                {filteredData?.map((row, index) => (
                  <TableRow key={index + "-" + row.id} hover>
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
                      {row.name_first_involved}
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        borderColor: "divider",
                        textAlign: "center",
                      }}
                    >
                      {row.name_second_involved}
                    </TableCell>
                    <TableCell
                      sx={{
                        border: 1,
                        borderColor: "divider",
                        textAlign: "center",
                      }}
                    >
                      {new Date(row.register_date).toLocaleDateString("en-US")}
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
