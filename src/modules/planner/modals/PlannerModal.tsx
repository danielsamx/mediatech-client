import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { AddPlanner } from "../components/AddPlanner";

interface AddQuoteModalProps {
  open: boolean;
  onClose: () => void;
}

export function PlannerModal({ open, onClose }: AddQuoteModalProps) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Agendar cita</DialogTitle>
      <DialogContent>
        <AddPlanner onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
}
