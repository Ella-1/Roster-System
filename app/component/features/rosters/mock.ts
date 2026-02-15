import type { Department, RosterPerson, Shift } from "./types";

export const departments: Department[] = [
  { id: "days", name: "Days" },
  { id: "bk1", name: "Behandelingskamer1" },
  { id: "mgmt", name: "Management" },
  { id: "leave", name: "Bijzonderheden-Verlof-Cursus-..." },
  { id: "fin", name: "Financien" },
];

export const rosterPeople: RosterPerson[] = [
  {
    id: "p1",
    initials: "EO",
    name: "Elijah Oyin",
    weeklyHours: 1158,
    contractHours: 38,
    status: "on_leave",
    leaveRange: "Jan 8 - Jan 15",
    weekdays: ["mo", "tu", "we", "th", "fr"],
  },
  {
    id: "p2",
    initials: "DL",
    name: "Diane Lane",
    weeklyHours: 1158,
    contractHours: 38,
    status: "on_leave",
    leaveRange: "Jan 12 - Jan 28",
    weekdays: ["mo", "tu", "we", "th", "fr"],
  },
  {
    id: "p3",
    initials: "EO",
    name: "Elijah Oyin",
    weeklyHours: 1158,
    contractHours: 38,
    status: "on_leave",
    leaveRange: "Jan 12 - Jan 20",
    weekdays: ["mo", "tu", "we", "th", "fr"],
  },
  {
    id: "p4",
    initials: "HG",
    name: "Haico De Gast",
    weeklyHours: 1158,
    contractHours: 38,
    status: "on_leave",
    leaveRange: "Jan 2 - Jan 9",
    weekdays: ["mo", "tu", "we", "th", "fr"],
  },
];

// Helper to build ISO local strings quickly
const iso = (date: string, time: string) => `${date}T${time}:00`;

export const plannerShifts: Shift[] = [
  {
    id: "s1",
    deptId: "bk1",
    personInitials: "HG",
    title: "Surgery",
    personName: "Haico de Gast",
    start: iso("2025-09-08", "11:00"),
    end: iso("2025-09-08", "13:00"),
    color: "orange",
  },
  {
    id: "s2",
    deptId: "bk1",
    personInitials: "DL",
    title: "Pijnspecialist",
    personName: "Diane Lane",
    start: iso("2025-09-08", "11:00"),
    end: iso("2025-09-08", "13:30"),
    color: "green",
  },
  {
    id: "s3",
    deptId: "mgmt",
    personInitials: "HG",
    title: "Pijnspecialist",
    personName: "Haico de Gast",
    start: iso("2025-09-08", "13:00"),
    end: iso("2025-09-08", "15:00"),
    color: "orange",
  },
  {
    id: "s4",
    deptId: "leave",
    personInitials: "HG",
    title: "Pijnspecialist",
    personName: "Diane Lane",
    start: iso("2025-09-08", "11:30"),
    end: iso("2025-09-08", "13:30"),
    color: "yellow",
  },
  {
    id: "s5",
    deptId: "fin",
    personInitials: "HG",
    title: "Pijnspecialist",
    personName: "Diane Lane",
    start: iso("2025-09-08", "11:30"),
    end: iso("2025-09-08", "13:30"),
    color: "yellow",
  },
  {
    id: "s6",
    deptId: "fin",
    personInitials: "HG",
    title: "Pijnspecialist",
    personName: "Diane Lane",
    start: iso("2025-09-08", "16:00"),
    end: iso("2025-09-08", "00:00"), // overnight example
    color: "green",
  },
];

export const liveShifts: Shift[] = [
  // You can change these to represent “live” data; keeping similar for demo
  ...plannerShifts,
];
