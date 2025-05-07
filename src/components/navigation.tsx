"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Translations } from "@/translations/common/dictionary";
import { LanguageSwitcher } from "./language-switcher";
import { MobileLink, MobileNav } from "./mobile-navigation-menu";

export function Navigation({
  commonDictionary,
  lang,
}: {
  commonDictionary: Translations;
  lang: string;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="py-4 flex items-center gap-4">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {commonDictionary.links.home}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {commonDictionary.links.about}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                {commonDictionary.links.projects.label}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col gap-3 p-6 md:w-[200px] lg:w-[300px]">
                  {Object.entries(commonDictionary.links.projects.items).map(
                    ([key, { title, description }]) => (
                      <ListItem
                        key={key}
                        title={title}
                        href={`/projects/${key}`}
                      >
                        {description}
                      </ListItem>
                    )
                  )}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <LanguageSwitcher lang={lang} />
      </div>

      {/* Mobile Navigation */}
      <MobileNav>
        <>
          <MobileLink href="/">{commonDictionary.links.home}</MobileLink>
          <MobileLink href="/about">{commonDictionary.links.about}</MobileLink>
        </>
      </MobileNav>
    </div>
  );
}

const ListItem = ({
  className,
  title,
  children,
  ref,
  ...props
}: React.ComponentProps<"a">) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};
ListItem.displayName = "ListItem";
