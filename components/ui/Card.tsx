import cn from "../../lib/classnames";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("card p-6", className)}>{children}</div>;
}
