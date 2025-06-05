import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { ModifyPlanner } from "./ModifyPlanner";
import { useQuotes } from "../hooks/useFetchQuotes";
import "./style.css";

export function Calendar() {
  const {
    events,
    selectedEvent,
    dialogOpen,
    handleEventClick,
    closeDialog,
    fetchEvents,
  } = useQuotes();

  return (
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

      <Dialog open={dialogOpen} onClose={closeDialog} maxWidth="sm" fullWidth>
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
  );
}
