import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { PendingItems } from "@/components/dashboard/pending-items";
import { DashboardStats } from "@/components/dashboard/dashboard-stats";
import { DashboardHeader } from "@/components/dashboard/dashoboard-header";
import { ReportedPosts } from "@/components/dashboard/reported-posts";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <DashboardHeader />
            <main className="container mx-auto px-4 py-6">
              <DashboardStats />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <PendingItems
                  title="Pending Suppliers"
                  items={[
                    {
                      id: 1,
                      name: "Green Harvest Co.",
                      description: "Organic produce supplier",
                    },
                    {
                      id: 2,
                      name: "Tech Solutions Inc.",
                      description: "IT equipment and services",
                    },
                  ]}
                  type="supplier"
                />
                <PendingItems
                  title="Pending Events"
                  items={[
                    {
                      id: 1,
                      name: "Annual Tech Conference",
                      description: "May 30, 2025 - Virtual",
                    },
                    {
                      id: 2,
                      name: "Sustainability Workshop",
                      description: "June 15, 2025 - Main Hall",
                    },
                  ]}
                  type="event"
                />
              </div>

              <div className="mt-8">
                <ReportedPosts />
              </div>
            </main>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
