import {
  Box,
  Typography,
  TextField,
  Stack,
  Button,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AppTheme from "../../auth/components/AppTheme";
import { Calendar } from "../components/Calendar";
import { useState } from "react";
import { PlannerModal } from "../modals/PlannerModal";

export default function Planner() {
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
            <Stack direction="row" spacing={2} alignItems="flex-end">
              <Stack>
                <Typography variant="caption" sx={{ mb: 0.5 }}>
                  Buscar cita
                </Typography>
                <TextField
                  placeholder="Cita"
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
              </Stack>

              <Button
                variant="contained"
                onClick={() => setOpenModal(true)}
                color="primary"
                startIcon={<AddCircleIcon />}
                size="small"
                sx={{ mb: 0.5 }}
              >
                Agendar cita
              </Button>
            </Stack>
          </Box>
          <PlannerModal open={openModal} onClose={() => setOpenModal(false)} />
          <Calendar />
        </Box>
      </Box>
    </AppTheme>
  );
}
