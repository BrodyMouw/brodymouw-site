import cn from "../../lib/classnames";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between">
      <a href="/" className="text-lg font-semibold">
        brodymouw
      </a>

      <div className="flex gap-2">
        <a className="px-3 py-2 text-sm rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900" href="/">
          Overview
        </a>
        <a className="px-3 py-2 text-sm rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900" href="/work">
          Work
        </a>
        <a className="px-3 py-2 text-sm rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900" href="/guitar">
          Guitar
        </a>
        <a className="px-3 py-2 text-sm rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900" href="/code">
          Code
        </a>
      </div>
    </nav>
  );
}
