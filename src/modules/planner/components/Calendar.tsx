import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import "./style.css";
import { ModifyPlanner } from "./ModifyPlanner";

type CalendarEvent = {
  id: string;
  title: string;
  start: string;
  end: string;
};

export function Calendar() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
    null
  );
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const initialEvent: CalendarEvent = {
      id: "custom-1",
      title: "Reunión de proyecto",
      start: "2025-06-03T14:00:00",
      end: "2025-06-03T15:00:00",
    };
    setEvents([initialEvent]);
  }, []);

  const handleEventClick = (info: any) => {
    const clickedEvent: CalendarEvent = {
      id: info.event.id,
      title: info.event.title,
      start: info.event.startStr,
      end: info.event.endStr,
    };
    setSelectedEvent(clickedEvent);
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

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

      <Dialog open={dialogOpen} onClose={handleClose}>
        <DialogTitle>Detalle de la cita</DialogTitle>
        <DialogContent>{selectedEvent && <ModifyPlanner />}</DialogContent>
      </Dialog>
    </div>
  );
}
