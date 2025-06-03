import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  DialogActions,
  Button,
} from "@mui/material";
import { FaRegSave } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { PersonalInfoSection } from "../components/PersonalInfoSection";
import { Details } from "../components/Details";

interface AddQuoteModalProps {
  open: boolean;
  onClose: () => void;
}

export function ViewCaseModal({ open, onClose }: AddQuoteModalProps) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Información del caso</DialogTitle>
      <DialogContent>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Grid size={6}>
            <PersonalInfoSection title="Primera parte" jcontet="left" />
          </Grid>
          <Grid size={6}>
            <PersonalInfoSection title="Segunda parte" jcontet="right" />
          </Grid>
        </Grid>

        {/* Detalles */}
        <Details title="Detalles del caso" />
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
          Guardar cambios
        </Button>
      </DialogActions>
    </Dialog>
  );
}
