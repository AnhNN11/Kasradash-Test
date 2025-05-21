import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-4xl space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Welcome to the Dashboard Demo
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A simple 2-page UI built with Next.js and shadcn/ui components
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Dashboard</CardTitle>
              <CardDescription>View your analytics and data</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/AdminDashboard.png"
                alt="Dashboard preview"
                width={1200}
                height={600}
                className="rounded-md object-cover"
              />
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/dashboard">
                  Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>Manage your account preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                src="/Settings.png"
                alt="Settings preview"
                width={1200}
                height={600}
                className="rounded-md object-cover"
              />
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/settings">
                  Go to Settings <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
