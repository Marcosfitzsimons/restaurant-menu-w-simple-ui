import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background border border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="basis-[30%]">
          <Link
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              <Icons.instagram className="h-[18px] w-[18px]" />
              <span className="sr-only">Instagram</span>
            </div>
          </Link>
          <Link
            href={siteConfig.links.facebook}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              <Icons.facebook className="h-[18px] w-[18px]" />
              <span className="sr-only">Facebook</span>
            </div>
          </Link>
        </div>
        <Link
          href="/"
          className="flex basis-[30%] items-center justify-center space-x-2"
        >
          <Image
            src="/images/logo.webp"
            alt={siteConfig.name}
            width="42"
            height="42"
            className="rounded-full"
          />
        </Link>

        <div className="flex basis-[30%] items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
