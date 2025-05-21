import { ArrowDown, ArrowUp, FileText, Flag, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="overflow-hidden border-l-4 ">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Submissions
          </CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">8</div>
          <div className="mt-2 flex items-center text-sm text-green-500">
            <ArrowUp className="mr-1 h-4 w-4" />
            <span>12% from last week</span>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden border-l-4 ">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Total Users
          </CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">150</div>
          <div className="mt-2 flex items-center text-sm text-green-500">
            <ArrowUp className="mr-1 h-4 w-4" />
            <span>4% from last month</span>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden border-l-4 ">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Active Posts
          </CardTitle>
          <FileText className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">24</div>
          <div className="mt-2 flex items-center text-sm text-green-500">
            <ArrowUp className="mr-1 h-4 w-4" />
            <span>18% from last month</span>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden border-l-4 ">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Reported Content
          </CardTitle>
          <Flag className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">2</div>
          <div className="mt-2 flex items-center text-sm text-red-500">
            <ArrowDown className="mr-1 h-4 w-4" />
            <span>5% from last week</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
