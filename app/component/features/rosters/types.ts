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
  leaveRange?: string; 
  weekdays?: Array<"mo" | "tu" | "we" | "th" | "fr">;
};

export type Shift = {
  id: string;
  deptId: string;
  personInitials: string; 
  title: string;          
  personName: string;    
  start: string;          
  end: string;            
  color: "orange" | "green" | "yellow";
};
