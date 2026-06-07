export type AlertSeverity = "critical" | "warning" | "info";

export type AlertStatus = "active" | "acknowledged" | "resolved";

export interface PlantZone {
  id: string;
  name: string;
  unit: "ammonia" | "urea" | "utilities" | "storage";
}

export interface Sensor {
  id: string;
  name: string;
  zoneId: string;
  type: "gas" | "temperature" | "pressure" | "vibration" | "flow";
  unit: string;
  value: number;
  threshold: { warning: number; critical: number };
  updatedAt: string;
}

export interface SafetyAlert {
  id: string;
  title: string;
  description: string;
  severity: AlertSeverity;
  status: AlertStatus;
  zoneId: string;
  sensorId?: string;
  createdAt: string;
  acknowledgedBy?: string;
}

export interface FieldEngineer {
  id: string;
  name: string;
  role: string;
  shift: "morning" | "evening" | "night";
  zoneId: string;
}

export interface Incident {
  id: string;
  title: string;
  summary: string;
  severity: AlertSeverity;
  zoneId: string;
  reportedBy: string;
  reportedAt: string;
  resolvedAt?: string;
}
