"use client";
import cn from "../../lib/classnames";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between">
      <a href="/" className="text-lg font-semibold">
        Brody's Portfolio
      </a>

      <div className="flex items-center gap-3">
        <div className="flex gap-2">
          <a className="px-3 py-2 text-sm rounded-md hover:bg-white/80 dark:hover:bg-zinc-900" href="/">
            Overview
          </a>
          <a className="px-3 py-2 text-sm rounded-md hover:bg-white/80 dark:hover:bg-zinc-900" href="/work">
            Work
          </a>
          <a className="px-3 py-2 text-sm rounded-md hover:bg-white/80 dark:hover:bg-zinc-900" href="/guitar">
            Guitar
          </a>
          <a className="px-3 py-2 text-sm rounded-md hover:bg-white/80 dark:hover:bg-zinc-900" href="/code">
            Code
          </a>
          <a className="px-3 py-2 text-sm rounded-md hover:bg-white/80 dark:hover:bg-zinc-900" href="/contact">
            Contact
          </a>
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
}
