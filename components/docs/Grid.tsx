type Props = {
  columns?: number;
  gap?: string;
  children?: React.ReactNode;
};

export default function Grid({ columns = 2, gap = "6", children }: Props) {
  const cols = Math.max(1, Math.min(4, columns));
  const colClass = {
    1: "md:grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  }[cols as 1 | 2 | 3 | 4];
  const gapClass = {
    "4": "gap-4",
    "6": "gap-6",
    "8": "gap-8",
    "10": "gap-10",
  }[gap as "4" | "6" | "8" | "10"] || "gap-6";
  return (
    <div className={`grid grid-cols-1 ${colClass} ${gapClass}`}>{children}</div>
  );
}


