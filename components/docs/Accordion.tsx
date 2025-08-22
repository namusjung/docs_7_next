"use client";
import * as Radix from "@radix-ui/react-accordion";

type Item = { value: string; title: string; content: React.ReactNode };

export default function Accordion({ items }: { items?: Item[] }) {
  const list = items ?? [];
  return (
    <Radix.Root type="single" collapsible className="w-full">
      {list.map((it) => (
        <Radix.Item key={it.value} value={it.value} className="border rounded-lg mb-2 overflow-hidden">
          <Radix.Header>
            <Radix.Trigger className="w-full text-left px-4 py-2 bg-muted/40 font-medium">
              {it.title}
            </Radix.Trigger>
          </Radix.Header>
          <Radix.Content className="px-4 py-3">
            {it.content}
          </Radix.Content>
        </Radix.Item>
      ))}
    </Radix.Root>
  );
}


