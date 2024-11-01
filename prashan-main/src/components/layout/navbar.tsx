"use client";
import Link from "next/link";
import { links } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Separator } from "@/components/ui/separator";
import { Icons } from "../icons";

export function SiteHeader() {
  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-sm backdrop-filter">
        <div className="container mx-auto flex w-full max-w-4xl items-center py-4 sm:justify-between sm:space-x-0">
          <div>
            <h1 className="text-xl font-bold sm:text-2xl">Prashan Arya</h1>
            <p className="text-muted-foreground">Web developer</p>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Link href={links.github} target="_blank" rel="noreferrer">
                <div
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  <Icons.gitHub className="h-[1.2rem] w-[1.2rem] fill-current" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
              <Link href={links.linkedin} target="_blank" rel="noreferrer">
                <div
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  <Icons.linkedin className="h-[1.2rem] w-[1.2rem] fill-current" />
                  <span className="sr-only">LinkedIn</span>
                </div>
              </Link>
              <Link href="https://github.com/Prashan081003/resume-file/blob/main/Prashan_Arya_final.pdf" target="_blank" rel="noreferrer">
                <div
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  <Icons.resume className="h-[1.2rem] w-[1.2rem] fill-current" />
                  <span className="sr-only">Resume</span>
                </div>
              </Link>
              <ThemeToggle />
            </nav>
          </div>
        </div>
        <Separator />
      </header>
    </>
  );
}
