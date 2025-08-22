import { ReactNode } from "react";

type Props = {
  type?: "info" | "warning" | "error" | "success";
  title?: string;
  children?: ReactNode;
};

const typeToClasses: Record<NonNullable<Props["type"]>, string> = {
  info: "border-sky-300/40 bg-sky-50 dark:bg-sky-900/20 text-sky-900 dark:text-sky-100",
  warning: "border-amber-300/40 bg-amber-50 dark:bg-amber-900/20 text-amber-900 dark:text-amber-100",
  error: "border-rose-300/40 bg-rose-50 dark:bg-rose-900/20 text-rose-900 dark:text-rose-100",
  success: "border-emerald-300/40 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-900 dark:text-emerald-100",
};

export default function Callout({ type = "info", title, children }: Props) {
  return (
    <div className={`border rounded-lg p-4 ${typeToClasses[type]}`} role="status" aria-live="polite">
      {title ? <p className="font-medium mb-1">{title}</p> : null}
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}


