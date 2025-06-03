// components/QuoteForm.tsx
import {
  TextField,
  Grid,
  InputAdornment,
  DialogActions,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { FaRegIdBadge, FaMailBulk } from "react-icons/fa";
import { FaRegSave } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

export function ModifyPlanner() {
  return (
    <form>
      <Grid container spacing={2} mb={2}>
        <Grid size={6}>
          <Box>
            <Typography variant="caption" sx={{ mb: 0.5, display: "block" }}>
              Primer involucrado
            </Typography>
          </Box>
        </Grid>
        <Grid size={6}>
          <Box>
            <Typography variant="caption" sx={{ mb: 0.5, display: "block" }}>
              Segundo involucrado
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={2} mb={2} sx={{ marginTop: "15px" }}>
        {[1, 2].map((i) => (
          <Grid size={6} key={`fullName${i}`}>
            <Box>
              <Typography variant="caption" sx={{ mb: 0.5, display: "block" }}>
                Cédula
              </Typography>
              <TextField
                disabled
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaRegIdBadge color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2} mb={2}>
        {[1, 2].map((i) => (
          <Grid size={6} key={`email${i}`}>
            <Box>
              <Typography variant="caption" sx={{ mb: 0.5, display: "block" }}>
                Email
              </Typography>
              <TextField
                disabled
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaMailBulk color="primary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2} mb={2}>
        <Grid size={4}>
          <Box>
            <Typography variant="caption" sx={{ mb: 0.5, display: "block" }}>
              Fecha
            </Typography>
            <TextField type="date" fullWidth />
          </Box>
        </Grid>
        <Grid size={4}>
          <Box>
            <Typography variant="caption" sx={{ mb: 0.5, display: "block" }}>
              Hora de inicio
            </Typography>
            <TextField type="time" fullWidth />
          </Box>
        </Grid>
        <Grid size={4}>
          <Box>
            <Typography variant="caption" sx={{ mb: 0.5, display: "block" }}>
              Hora final
            </Typography>
            <TextField type="time" fullWidth />
          </Box>
        </Grid>
      </Grid>

      <Grid container mb={1}>
        <Grid size={12}>
          <Box>
            <Typography variant="caption" sx={{ mb: 0.5, display: "block" }}>
              Descripción
            </Typography>
            <TextField
              disabled
              placeholder="..."
              multiline
              rows={2}
              fullWidth
            />
          </Box>
        </Grid>
      </Grid>
      <DialogActions>
        <Button
          variant="contained"
          color="error"
          startIcon={<MdOutlineCancel />}
        >
          Posponer
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<FaRegSave />}
        >
          Atender
        </Button>
      </DialogActions>
    </form>
  );
}
