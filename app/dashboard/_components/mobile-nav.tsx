"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  const isInvoicesPage = pathname.includes("/invoices");
  const activeLabel = isInvoicesPage ? "Invoices" : "Overview";
  return (
    <div className="md:hidden flex-1">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="h-8 px-2">
            <span className="mr-2">{activeLabel}</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-40">
          <DropdownMenuItem asChild>
            <Link
              href="/dashboard"
              className={cn(
                pathname === "/dashboard"
                  ? "text-primary"
                  : "text-muted-foreground",
                " font-medium  hover:text-primary"
              )}
            >
              Overview
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link
              href="/dashboard/invoices"
              className={cn(
                pathname === "/dashboard/invoices"
                  ? "text-primary"
                  : "text-muted-foreground",
                " font-medium  hover:text-primary"
              )}
            >
              Invoices
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default MobileNav;
