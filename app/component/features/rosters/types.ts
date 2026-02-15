export type ViewMode = "live" | "planner";

export type Department = {
  id: string;
  name: string;
};

export type RosterPerson = {
  id: string;
  initials: string;
  name: string;
  weeklyHours: number;
  contractHours: number;
  status?: "on_leave" | "available";
  leaveRange?: string; // e.g. "Jan 8 - Jan 15"
  weekdays?: Array<"mo" | "tu" | "we" | "th" | "fr">;
};

export type Shift = {
  id: string;
  deptId: string;
  personInitials: string; // e.g. HG, DL
  title: string;          // e.g. Surgery, Pijnspecialist
  personName: string;     // e.g. Haico de Gast
  start: string;          // ISO local date-time string
  end: string;            // ISO local date-time string
  color: "orange" | "green" | "yellow";
};
