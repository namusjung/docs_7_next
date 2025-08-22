type Props = { children?: React.ReactNode };

export default function ParameterList({ children }: Props) {
  return (
    <div className="my-4">
      <h3 className="font-heading text-xl">Parameters</h3>
      <div className="mt-2 text-sm prose prose-slate dark:prose-invert max-w-none">
        {children}
      </div>
    </div>
  );
}


