"use client"

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ThemeModeToggle";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { GithubLogo } from "@/components/logo/github";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar"

export function Header() {
  return (
    <header className="fixed w-full top-0 right-0 z-50 bg-background flex items-center justify-between p-4 border-b transition-[width,height] ease-linear">
      <div className="flex items-center">
        <SidebarTrigger className="md:hidden"/>
      <Link href="/">
        <Button variant="ghost" className="text-2xl font-bold">Rahul</Button>
      </Link>
      </div>

      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="/blogs">Blog</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="/about">About</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
          <Link href="#">Contact Me</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

<div className="flex items-center gap-3">
  <Button variant="outline" size="icon" asChild>
    <Link href="https://github.com/itsidleboy" target="_blank" rel="noopener noreferrer">
      <GithubLogo />
    </Link>
  </Button>
  <Separator orientation="vertical" />
      <ModeToggle />
      </div>
    </header>
  );
}