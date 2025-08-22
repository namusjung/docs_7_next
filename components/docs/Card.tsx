type Props = {
  title?: string;
  icon?: string;
  children?: React.ReactNode;
};

export default function Card({ title, icon, children }: Props) {
  return (
    <div className="glass rounded-xl p-5">
      {(title || icon) ? (
        <div className="mb-2 flex items-center gap-2">
          {icon ? <span aria-hidden>{icon}</span> : null}
          {title ? <h3 className="font-heading text-lg">{title}</h3> : null}
        </div>
      ) : null}
      <div className="text-sm text-foreground/80">{children}</div>
    </div>
  );
}


