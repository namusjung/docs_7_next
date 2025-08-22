"use client";
import { useState } from "react";

type Props = {
  content: string;
  language?: string;
  title?: string;
};

export default function CodeBlock({ content, language, title }: Props) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="group relative my-4 border rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-3 py-2 bg-muted/40 text-xs">
        <span className="font-mono">{title || language || "code"}</span>
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
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed bg-background"><code className={`language-${language}`}>{content}</code></pre>
    </div>
  );
}


