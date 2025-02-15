"use client";

import { usePathname } from "next/navigation";

export const Html = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  if (pathname.startsWith("/pl")) {
    return <html lang="pl">{children}</html>;
  }
  return <html lang="en">{children}</html>;
};
