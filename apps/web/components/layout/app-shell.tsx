import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  Factory,
  Gauge,
  LayoutDashboard,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard", label: "Live Sensors", icon: Gauge },
  { href: "/dashboard", label: "Alerts", icon: AlertTriangle },
  { href: "/dashboard", label: "Incidents", icon: Activity },
  { href: "/dashboard", label: "Field Teams", icon: Users },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full">
      <aside className="hidden w-64 shrink-0 border-r border-border bg-sidebar md:flex md:flex-col">
        <div className="flex items-center gap-2.5 border-b border-sidebar-border px-6 py-5">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <Factory className="size-5" />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-wide text-sidebar-foreground">
              DRISHTI
            </p>
            <p className="text-xs text-muted-foreground">IFFCO Phulpur</p>
          </div>
        </div>
        <nav className="flex-1 space-y-1 px-3 py-4">
          {NAV_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            const active = idx === 0;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-primary/15 text-primary"
                    : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground"
                }`}
              >
                <Icon className="size-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-sidebar-border px-6 py-4">
          <p className="text-xs text-muted-foreground">
            Plant status
            <span className="ml-2 inline-flex items-center gap-1.5 text-primary">
              <span className="size-1.5 animate-pulse rounded-full bg-primary" />
              Operating normally
            </span>
          </p>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between gap-4 border-b border-border px-6 py-4">
          <div>
            <h1 className="text-lg font-semibold tracking-tight">Plant Safety Overview</h1>
            <p className="text-sm text-muted-foreground">
              Real-time monitoring across ammonia &amp; urea production units
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary">
              Live
            </Badge>
            <div className="flex size-9 items-center justify-center rounded-full bg-secondary text-sm font-medium text-secondary-foreground">
              FE
            </div>
          </div>
        </header>
        <main className="flex-1 px-6 py-6">{children}</main>
      </div>
    </div>
  );
}
