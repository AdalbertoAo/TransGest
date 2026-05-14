import "../globals.css";
import { ReactNode } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

type AppLayoutProps = {
  children: ReactNode;
};


export default function AppLayout({
  children,
}: AppLayoutProps) {
  return (
    <div className="bg-background text-on-background">
      <Sidebar />

      <main className="ml-64 min-h-screen">
        <Topbar />

        <div className="pt-24 px-8 pb-12">
          {children}
        </div>
      </main>
    </div>
  );
}