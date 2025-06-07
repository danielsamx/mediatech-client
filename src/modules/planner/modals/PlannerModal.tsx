import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { AddPlanner } from "../components/AddPlanner";

interface AddQuoteModalProps {
  open: boolean;
  onClose: () => void;
  onRefreshCalendar: () => void;
}

export function PlannerModal({
  open,
  onClose,
  onRefreshCalendar,
}: AddQuoteModalProps) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Agendar cita</DialogTitle>
      <DialogContent>
        <AddPlanner onClose={onClose} onRefreshCalendar={onRefreshCalendar} />
      </DialogContent>
    </Dialog>
  );
}
