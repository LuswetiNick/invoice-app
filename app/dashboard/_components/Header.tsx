"use client";
import { cn } from "@/lib/utils";
import { ChartNoAxesColumn, FileText, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNav from "./mobile-nav";
import UserAvatar from "./user-avatar";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 ">
      {/* Logo */}
      <div className="flex items-center gap-1">
        <ChartNoAxesColumn className="h-5 w-5" />
        <span className="text-lg font-semibold">Invoicy</span>
      </div>

      <nav className="hidden md:flex flex-1 items-center gap-6 text-sm">
        <Link
          href="/dashboard"
          className={cn(
            pathname === "/dashboard"
              ? "text-primary"
              : "text-muted-foreground",
            "flex items-center gap-1 font-medium transition-colors duration-200 hover:text-primary"
          )}
        >
          <LayoutDashboard className="h-4 w-4" />
          Overview
        </Link>
        <Link
          href="/dashboard/invoices"
          className={cn(
            pathname === "/dashboard/invoices"
              ? "text-primary"
              : "text-muted-foreground",
            "flex items-center gap-1 font-medium transition-colors duration-200 hover:text-primary"
          )}
        >
          <FileText className="h-4 w-4" />
          Invoices
        </Link>
      </nav>
      <MobileNav />
      <UserAvatar />
    </header>
  );
};
export default Header;
