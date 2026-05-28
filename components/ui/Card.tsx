import cn from "../../lib/classnames";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("rounded-lg border border-zinc-200 bg-white p-4 shadow-sm", className)}>{children}</div>;
}
