type Props = {
  method: string;
  url: string;
  children?: React.ReactNode;
};

const methodColors: Record<string, string> = {
  GET: "bg-emerald-600",
  POST: "bg-blue-600",
  PUT: "bg-amber-600",
  DELETE: "bg-rose-600",
};

export default function ApiEndpoint({ method, url, children }: Props) {
  const color = methodColors[method.toUpperCase()] || "bg-slate-600";
  return (
    <div className="my-6 border rounded-lg overflow-hidden">
      <div className="px-4 py-3 flex items-center gap-3 bg-muted/50">
        <span className={`text-xs font-medium text-white px-2 py-1 rounded ${color}`}>{method.toUpperCase()}</span>
        <code className="text-sm">{url}</code>
      </div>
      {children ? <div className="p-4">{children}</div> : null}
    </div>
  );
}


