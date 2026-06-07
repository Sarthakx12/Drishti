import type { FieldEngineer, PlantZone, SafetyAlert, Sensor } from "@drishti/types";

export const zones: PlantZone[] = [
  { id: "amm-1", name: "Ammonia Synthesis Loop", unit: "ammonia" },
  { id: "amm-2", name: "Reformer & Shift Converter", unit: "ammonia" },
  { id: "urea-1", name: "Urea Reactor & Stripper", unit: "urea" },
  { id: "urea-2", name: "Prilling Tower", unit: "urea" },
  { id: "util-1", name: "Captive Power Plant", unit: "utilities" },
  { id: "store-1", name: "Ammonia Storage Tanks", unit: "storage" },
];

export const sensors: Sensor[] = [
  {
    id: "sn-001",
    name: "NH3 Leak Detector A-12",
    zoneId: "amm-1",
    type: "gas",
    unit: "ppm",
    value: 42,
    threshold: { warning: 25, critical: 50 },
    updatedAt: "2026-06-07T09:42:00+05:30",
  },
  {
    id: "sn-002",
    name: "Reformer Tube Temp T-04",
    zoneId: "amm-2",
    type: "temperature",
    unit: "°C",
    value: 912,
    threshold: { warning: 880, critical: 950 },
    updatedAt: "2026-06-07T09:41:30+05:30",
  },
  {
    id: "sn-003",
    name: "Reactor Pressure P-21",
    zoneId: "urea-1",
    type: "pressure",
    unit: "bar",
    value: 152,
    threshold: { warning: 160, critical: 175 },
    updatedAt: "2026-06-07T09:42:10+05:30",
  },
  {
    id: "sn-004",
    name: "Compressor Vibration V-07",
    zoneId: "util-1",
    type: "vibration",
    unit: "mm/s",
    value: 4.1,
    threshold: { warning: 4.5, critical: 7.0 },
    updatedAt: "2026-06-07T09:40:55+05:30",
  },
  {
    id: "sn-005",
    name: "Storage Tank Pressure ST-2",
    zoneId: "store-1",
    type: "pressure",
    unit: "bar",
    value: 3.2,
    threshold: { warning: 4.0, critical: 5.0 },
    updatedAt: "2026-06-07T09:41:05+05:30",
  },
  {
    id: "sn-006",
    name: "Prilling Tower Flow F-09",
    zoneId: "urea-2",
    type: "flow",
    unit: "m³/h",
    value: 268,
    threshold: { warning: 300, critical: 340 },
    updatedAt: "2026-06-07T09:39:48+05:30",
  },
];

export const alerts: SafetyAlert[] = [
  {
    id: "al-101",
    title: "NH3 concentration trending toward warning threshold",
    description:
      "Sensor A-12 in the Ammonia Synthesis Loop reads 42 ppm, approaching the 50 ppm critical limit. Increase ventilation and inspect flange joints on line L-118.",
    severity: "critical",
    status: "active",
    zoneId: "amm-1",
    sensorId: "sn-001",
    createdAt: "2026-06-07T09:42:00+05:30",
  },
  {
    id: "al-102",
    title: "Reformer tube temperature elevated",
    description:
      "T-04 reading 912°C, 32°C above the warning band. Recommend reducing feed rate and scheduling a tube inspection during the next shutdown window.",
    severity: "warning",
    status: "acknowledged",
    zoneId: "amm-2",
    sensorId: "sn-002",
    createdAt: "2026-06-07T08:55:00+05:30",
    acknowledgedBy: "Ravi Shankar",
  },
  {
    id: "al-103",
    title: "Compressor vibration nearing limit",
    description:
      "V-07 vibration at 4.1 mm/s, trending upward over the last 6 hours. Bearing inspection recommended before vibration crosses 4.5 mm/s warning threshold.",
    severity: "warning",
    status: "active",
    zoneId: "util-1",
    sensorId: "sn-004",
    createdAt: "2026-06-07T07:30:00+05:30",
  },
  {
    id: "al-104",
    title: "Routine PPE compliance check completed",
    description:
      "Morning shift PPE audit completed for the Urea Reactor zone with no non-conformances found.",
    severity: "info",
    status: "resolved",
    zoneId: "urea-1",
    createdAt: "2026-06-07T06:15:00+05:30",
  },
];

export const engineers: FieldEngineer[] = [
  { id: "fe-01", name: "Ravi Shankar", role: "Senior Process Engineer", shift: "morning", zoneId: "amm-1" },
  { id: "fe-02", name: "Anjali Mehta", role: "Instrumentation Engineer", shift: "morning", zoneId: "amm-2" },
  { id: "fe-03", name: "Suresh Yadav", role: "Field Safety Officer", shift: "morning", zoneId: "urea-1" },
  { id: "fe-04", name: "Pooja Nair", role: "Shift Supervisor", shift: "evening", zoneId: "util-1" },
];

export function zoneName(zoneId: string) {
  return zones.find((z) => z.id === zoneId)?.name ?? zoneId;
}
