import { ReactNode } from "react";
export default function SettingsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-background px-4">
      <div className="w-full max-w-5xl py-8">{children}</div>
    </div>
  );
}
