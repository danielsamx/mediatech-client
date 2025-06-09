import { Box, Button, Dialog, DialogTitle, DialogContent } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AppTheme from "../../auth/components/AppTheme";
import { useState } from "react";

import { PlannerModal } from "../modals/PlannerModal";
import { useQuotes } from "../hooks/useFetchQuotes";
import FullCalendar from "@fullcalendar/react";
import { ModifyPlanner } from "../components/ModifyPlanner";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es";
import "./../components/style.css";

export default function Planner() {
  const [openModal, setOpenModal] = useState(false);
  const {
    events,
    selectedEvent,
    dialogOpen,
    handleEventClick,
    closeDialog,
    fetchEvents,
  } = useQuotes();

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
              alignItems: "center",
              mb: 3,
            }}
          >
            <Button
              variant="contained"
              onClick={() => setOpenModal(true)}
              color="primary"
              startIcon={<AddCircleIcon />}
              size="small"
            >
              Agendar cita
            </Button>
          </Box>
          <PlannerModal
            open={openModal}
            onClose={() => setOpenModal(false)}
            onRefreshCalendar={fetchEvents}
          />
          <div className="calendar-wrapper">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay",
              }}
              events={events}
              eventClick={handleEventClick}
              height="auto"
              locale={esLocale}
            />

            <Dialog
              open={dialogOpen}
              onClose={closeDialog}
              maxWidth="sm"
              fullWidth
            >
              <DialogTitle>Detalle de la cita</DialogTitle>
              <DialogContent>
                {selectedEvent && (
                  <ModifyPlanner
                    event={selectedEvent}
                    onRefreshCalendar={fetchEvents}
                    onCloseDialog={closeDialog}
                  />
                )}
              </DialogContent>
            </Dialog>
          </div>
        </Box>
      </Box>
    </AppTheme>
  );
}
