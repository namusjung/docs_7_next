type Props = {
  children?: React.ReactNode;
  title?: string;
};

export default function ApiResponse({ children, title = "Response" }: Props) {
  return (
    <div className="my-4 border rounded-lg overflow-hidden">
      <div className="px-4 py-2 bg-muted/50 text-xs font-medium">{title}</div>
      <div className="p-4 text-sm">
        {children}
      </div>
    </div>
  );
}


