import { AlertTriangle, Gauge, ShieldCheck, Users } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { SeverityBadge } from "@drishti/ui";
import { alerts, engineers, sensors, zoneName } from "@/lib/mock-data";

const stats = [
  {
    label: "Active Alerts",
    value: alerts.filter((a) => a.status === "active").length,
    icon: AlertTriangle,
    detail: "Across 6 monitored zones",
  },
  {
    label: "Sensors Online",
    value: `${sensors.length}/${sensors.length}`,
    icon: Gauge,
    detail: "All telemetry feeds nominal",
  },
  {
    label: "Field Engineers On Shift",
    value: engineers.filter((e) => e.shift === "morning").length,
    icon: Users,
    detail: "Morning shift · 06:00–14:00",
  },
  {
    label: "Safety Compliance",
    value: "98.4%",
    icon: ShieldCheck,
    detail: "Rolling 30-day average",
  },
];

function sensorLoad(sensor: (typeof sensors)[number]) {
  return Math.min(100, Math.round((sensor.value / sensor.threshold.critical) * 100));
}

export default function Home() {
  return (
    <AppShell>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="bg-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardDescription>{stat.label}</CardDescription>
                <Icon className="size-4 text-primary" />
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold tracking-tight">{stat.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.detail}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-5">
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Active Safety Alerts</CardTitle>
            <CardDescription>AI-prioritized by severity and zone risk</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className="rounded-lg border border-border bg-secondary/40 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium">{alert.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {zoneName(alert.zoneId)} ·{" "}
                      {new Date(alert.createdAt).toLocaleTimeString("en-IN", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                  <SeverityBadge severity={alert.severity} />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{alert.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Live Sensor Readings</CardTitle>
            <CardDescription>Telemetry vs. critical thresholds</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {sensors.map((sensor) => (
              <div key={sensor.id}>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{sensor.name}</span>
                  <span className="text-muted-foreground">
                    {sensor.value} {sensor.unit}
                  </span>
                </div>
                <Progress value={sensorLoad(sensor)} className="mt-1.5 h-1.5" />
                <p className="mt-1 text-xs text-muted-foreground">{zoneName(sensor.zoneId)}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Field Engineers On Shift</CardTitle>
          <CardDescription>Assigned zones for the current shift</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Zone</TableHead>
                <TableHead>Shift</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {engineers.map((engineer) => (
                <TableRow key={engineer.id}>
                  <TableCell className="font-medium">{engineer.name}</TableCell>
                  <TableCell className="text-muted-foreground">{engineer.role}</TableCell>
                  <TableCell className="text-muted-foreground">{zoneName(engineer.zoneId)}</TableCell>
                  <TableCell className="capitalize text-muted-foreground">{engineer.shift}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </AppShell>
  );
}
