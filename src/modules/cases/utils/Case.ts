export interface Involved {
  dni: string;
  name: string;
  lastname: string;
  phone: string;
  email: string;
}

export interface Case {
  status: string;
  subject: string;
  description: string;
}

export type CalendarEvent = {
  id: string;
  firstInvolved: string;
  secondInvolved: string;
  firstEmail: string;
  secondEmail: string;
  start: string;
  end: string;
  description: string;
};

export interface Details {
  status: string;
  subject: string;
  description: string;
}

export interface CaseData {
  firstInvolved: string;
  secondInvolved: string;
  firstName: string;
  firstLastName: string;
  firstCellphone: string;
  firstEmail: string;
  secondName: string;
  secondLastName: string;
  secondCellphone: string;
  secondEmail: string;
  status: string;
  subject: string;
  description: string;
}
