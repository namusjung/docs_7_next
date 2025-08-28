"use client";
import { useState } from "react";
import { SyntaxHighlighter } from "../ui/SyntaxHighlighter";
import { ScrollArea } from "../ui/ScrollArea";

type Props = {
  content: string;
  language?: string;
  title?: string;
};

export default function CodeBlock({ content, language="text", title }: Props) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="group relative my-4 border rounded-lg overflow-hidden">
      <div className=" absolute top-0 right-0 left-0 z-10 flex items-start justify-between px-2 py-2 bg-transparent text-xs">
        <span className="font-mono inline-block">{title || language || "code"}</span>
        <button
          className="px-2 py-1 rounded bg-foreground/10 hover:bg-foreground/20"
          onClick={async () => {
            await navigator.clipboard.writeText(content);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
          }}
          aria-label="Copy code"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <ScrollArea>
        <SyntaxHighlighter
          code={content}
          language={language}
          showCopyButton={false}
          className="bg-background !overflow-visible !max-h-none"
        />
      </ScrollArea>
    </div>
  );
}


