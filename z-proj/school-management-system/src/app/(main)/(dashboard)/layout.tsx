import Sidebar from "@/components/SideBar";
import { BookOpenCheck } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import "../../globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "WorkFlow",
  description: "Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex font-sans  ">
      <div className="w-[12%] md:w-[10%] lg:w-[18%] responsive:w-[15%] xl-[10%] bg-blackOrBackground px-4 py-4 border border-b-0 border-r-[#27272a]    h-screen overflow-y-auto no-scrollbar transition-all">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <BookOpenCheck width={25} fontWeight={700} />
          <span className="hidden font-bold text-lg lg:block">workflow</span>
        </Link>
        <Sidebar />
      </div>
      <div className="relative bg-background w-[88%] md:w-[90%] lg:w-[82%] responsive:w-[85%] xl-[90%]   h-screen overflow-y-auto no-scrollbar transition-all">
        <NavBar />
        {children}
      </div>
    </div>
  );
}
