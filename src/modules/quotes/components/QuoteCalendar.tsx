import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es";

import "./style.css";

export function QuoteCalendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://trial.mobiscroll.com/events/?vers=5")
      .then((res) => res.json())
      .then((data) => {
        const mapped = data.map((e: any) => ({
          id: e.id,
          title: e.title,
          start: e.start,
          end: e.end,
          allDay: e.allDay || false,
        }));
        setEvents(mapped);
      });
  }, []);

  const handleEventClick = (info: any) => {
    alert(`Evento: ${info.event.title}`);
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
    </div>
  );
}
