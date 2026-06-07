import type { AlertSeverity } from "@drishti/types";

const STYLES: Record<AlertSeverity, string> = {
  critical: "bg-red-500/15 text-red-400 border-red-500/30",
  warning: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  info: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
};

const LABELS: Record<AlertSeverity, string> = {
  critical: "Critical",
  warning: "Warning",
  info: "Info",
};

export function SeverityBadge({ severity }: { severity: AlertSeverity }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${STYLES[severity]}`}
    >
      <span className="size-1.5 rounded-full bg-current" />
      {LABELS[severity]}
    </span>
  );
}
