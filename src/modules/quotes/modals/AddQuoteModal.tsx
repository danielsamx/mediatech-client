import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Grid,
  DialogActions,
  Button,
  InputAdornment,
} from "@mui/material";
import { FaRegIdBadge } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaRegSave } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

interface AddQuoteModalProps {
  open: boolean;
  onClose: () => void;
}

export function AddQuoteModal({ open, onClose }: AddQuoteModalProps) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Agendar cita</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} mb={2} sx={{ marginTop: "15px" }}>
          <Grid size={6}>
            <TextField
              label="Cédula 1ra parte"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaRegIdBadge color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              label="Cédula 2da parte"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaRegIdBadge color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} mb={2}>
          <Grid size={4}>
            <TextField
              label="Fecha"
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <FaCalendarAlt color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid size={4}>
            <TextField
              label="Hora inicial"
              type="time"
              fullWidth
              InputLabelProps={{ shrink: true }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <FaRegClock color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid size={4}>
            <TextField
              label="Hora final"
              type="time"
              fullWidth
              InputLabelProps={{ shrink: true }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <FaRegClock color="primary" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>

        <Grid container mb={1}>
          <Grid size={12}>
            <TextField label="Descripción" multiline rows={2} fullWidth />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions sx={{ padding: "0 24px 20px 24px" }}>
        <Button
          variant="contained"
          color="error"
          startIcon={<MdOutlineCancel />}
          onClick={onClose}
        >
          Cancelar
        </Button>
        <Button variant="contained" color="primary" startIcon={<FaRegSave />}>
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
