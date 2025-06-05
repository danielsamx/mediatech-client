import { useEffect, useState } from "react";
const apiUrl = import.meta.env.VITE_API_URL;

type CalendarEvent = {
  id: string;
  title: string;
  start: string;
  end: string;
  firstInvolved: string;
  secondInvolved: string;
  firstEmail: string;
  secondEmail: string;
  description: string;
};

export function useQuotes() {
  const [events, setEvents] = useState<any[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(
    null
  );
  const [dialogOpen, setDialogOpen] = useState(false);

  async function fetchEvents() {
    try {
      const response = await fetch(`${apiUrl}/cita`);
      if (!response.ok) throw new Error("Error fetching events");
      const data = await response.json();

      const mappedEvents = data.map((item: any) => ({
        id: item.id.toString(),
        title: item.description || "Sin título",
        start: `${item.date}T${item.start_hour}`,
        end: `${item.date}T${item.end_hour}`,
        extendedProps: {
          firstInvolved: item.first_involved,
          secondInvolved: item.second_involved,
          firstEmail: item.email_first_involved,
          secondEmail: item.email_second_involved,
          description: item.description,
        },
      }));
      setEvents(mappedEvents);
    } catch (error) {
      console.error(error);
    }
  }

  function handleEventClick(info: any) {
    const e = info.event;
    const clickedEvent: CalendarEvent = {
      id: e.id,
      title: e.title,
      start: e.startStr,
      end: e.endStr,
      firstInvolved: e.extendedProps.firstInvolved,
      secondInvolved: e.extendedProps.secondInvolved,
      firstEmail: e.extendedProps.firstEmail,
      secondEmail: e.extendedProps.secondEmail,
      description: e.extendedProps.description,
    };
    setSelectedEvent(clickedEvent);
    setDialogOpen(true);
  }

  function closeDialog() {
    setDialogOpen(false);
    setSelectedEvent(null);
  }

  useEffect(() => {
    fetchEvents();
  }, []);

  return {
    events,
    selectedEvent,
    dialogOpen,
    handleEventClick,
    closeDialog,
    fetchEvents,
  };
}
