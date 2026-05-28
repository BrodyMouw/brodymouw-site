import cn from "../../lib/classnames";

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "ghost";
  as?: "a" | "button";
  children: React.ReactNode;
};

export default function Button({
  variant = "primary",
  as = "a",
  className,
  children,
  ...props
}: ButtonProps) {
  const base = "inline-flex items-center rounded-md px-4 py-2 text-sm font-medium";
  const variants =
    variant === "primary"
      ? "bg-zinc-900 text-white hover:bg-zinc-800"
      : "bg-transparent text-zinc-900 hover:bg-zinc-100";

  const classes = cn(base, variants, className);

  if (as === "a") {
    return (
      <a className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <button className={classes} {...(props as any)}>
      {children}
    </button>
  );
}
