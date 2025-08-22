import { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  children?: ReactNode;
};

export default function DocSection({ id, title, children }: Props) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="font-heading text-2xl mt-8">{title}</h2>
      <div className="mt-2">{children}</div>
    </section>
  );
}


