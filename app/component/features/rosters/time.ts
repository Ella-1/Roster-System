export function toMinutes(t: string) {
  const [hh, mm] = t.split(":").map(Number);
  return hh * 60 + mm;
}

export function minutesSinceDayStart(isoLocal: string) {
  const d = new Date(isoLocal);
  return d.getHours() * 60 + d.getMinutes();
}

export function formatTimeRange(startIso: string, endIso: string) {
  const s = new Date(startIso);
  const e = new Date(endIso);

  const start = s.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const end = e.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return `${start} - ${end}`;
}

export function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}
