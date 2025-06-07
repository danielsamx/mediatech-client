import React, { useState } from "react";
import {
  TextField,
  Grid,
  InputAdornment,
  DialogActions,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { FaRegIdBadge, FaMailBulk, FaRegSave } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import { infoModal } from "../../../share/infoModal";
import { usePostpone } from "../hooks/usePostpone";
import { AddCaseModal } from "../../cases/modals/AddCaseModal";

type CalendarEvent = {
  id: string;
  firstInvolved: string;
  secondInvolved: string;
  firstEmail: string;
  secondEmail: string;
  start: string;
  end: string;
  description: string;
};

type ModifyPlannerProps = {
  event: CalendarEvent;
  onRefreshCalendar: () => void;
  onCloseDialog: () => void;
};

export function ModifyPlanner({
  event,
  onRefreshCalendar,
  onCloseDialog,
}: ModifyPlannerProps) {
  const startDateTime = new Date(event.start);
  const endDateTime = new Date(event.end);
  const [openCaseModal, setOpenCaseModal] = useState(false);

  const dateValue = startDateTime.toISOString().slice(0, 10);
  const startTimeValue = startDateTime.toTimeString().slice(0, 5);
  const endTimeValue = endDateTime.toTimeString().slice(0, 5);

  const {
    date,
    startHour,
    endHour,
    setDate,
    setStartHour,
    setEndHour,
    hasChanges,
    loading,
    postpone,
  } = usePostpone({
    id: event.id,
    initialDate: dateValue,
    initialStart: startTimeValue,
    initialEnd: endTimeValue,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    onRefreshCalendar();
  };

  const handlePostpone = async () => {
    const result = await postpone();
    if (result.success) {
      onCloseDialog();
      if (result.message === "Cita pospuesta correctamente") {
        setTimeout(() => {
          infoModal("success", result.message);
          onRefreshCalendar();
        }, 300);
      } else {
        setTimeout(() => {
          infoModal("error", result.message);
          onRefreshCalendar();
        }, 300);
      }
    } else {
      infoModal("error", result.message || "Error al posponer cita");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <Grid size={6}>
          <Box>
            <Typography variant="caption" sx={{ mb: 0.5, display: "block" }}>
              Cédula
            </Typography>
            <TextField
              disabled
              fullWidth
              value={event.firstInvolved}
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

        <Grid size={6}>
          <Box>
            <Typography variant="caption" sx={{ mb: 0.5, display: "block" }}>
              Cédula
            </Typography>
            <TextField
              disabled
              fullWidth
              value={event.secondInvolved}
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
      </Grid>

      <Grid container spacing={2} mb={2}>
        <Grid size={6}>
          <Box>
            <Typography variant="caption" sx={{ mb: 0.5, display: "block" }}>
              Email
            </Typography>
            <TextField
              disabled
              fullWidth
              value={event.firstEmail}
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

        <Grid size={6}>
          <Box>
            <Typography variant="caption" sx={{ mb: 0.5, display: "block" }}>
              Email
            </Typography>
            <TextField
              disabled
              fullWidth
              value={event.secondEmail}
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
      </Grid>

      <Grid container spacing={2} mb={2}>
        <Grid size={4}>
          <Box>
            <Typography variant="caption" sx={{ mb: 0.5, display: "block" }}>
              Fecha
            </Typography>
            <TextField
              type="date"
              fullWidth
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Box>
        </Grid>
        <Grid size={4}>
          <Box>
            <Typography variant="caption" sx={{ mb: 0.5, display: "block" }}>
              Hora de inicio
            </Typography>
            <TextField
              type="time"
              fullWidth
              value={startHour}
              onChange={(e) => setStartHour(e.target.value)}
            />
          </Box>
        </Grid>
        <Grid size={4}>
          <Box>
            <Typography variant="caption" sx={{ mb: 0.5, display: "block" }}>
              Hora final
            </Typography>
            <TextField
              type="time"
              fullWidth
              value={endHour}
              onChange={(e) => setEndHour(e.target.value)}
            />
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
              fullWidth
              value={event.description}
              placeholder="..."
            />
          </Box>
        </Grid>
      </Grid>

      <DialogActions>
        <Button
          variant="contained"
          color="error"
          startIcon={<MdOutlineDelete />}
        >
          Eliminar
        </Button>
        <Button
          variant="contained"
          color="error"
          startIcon={<MdOutlineCancel />}
          disabled={!hasChanges || loading}
          onClick={handlePostpone}
        >
          Posponer
        </Button>
        <Button
          onClick={() => setOpenCaseModal(true)}
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<FaRegSave />}
          disabled={loading}
        >
          Atender
        </Button>
        <AddCaseModal
          dataQuote={event}
          open={openCaseModal}
          onClose={() => {
            setOpenCaseModal(false);
            onCloseDialog();
          }}
          onRefreshCalendar={onRefreshCalendar}
        ></AddCaseModal>
      </DialogActions>
    </form>
  );
}
