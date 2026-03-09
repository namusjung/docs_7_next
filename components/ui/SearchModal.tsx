"use client";

import React, { useState, useEffect, useCallback } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Search, X, FileText, Code, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { SearchItem } from "@/lib/docs-utils";

interface SearchModalProps {
    items: SearchItem[];
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchModal({ items, isOpen, onClose }: SearchModalProps) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<SearchItem[]>([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const router = useRouter();

    useEffect(() => {
        if (query.trim() === "") {
            setResults([]);
            setSelectedIndex(0);
            return;
        }

        const filtered = items.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.section.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 8);

        setResults(filtered);
        setSelectedIndex(0);
    }, [query, items]);

    const handleSelect = useCallback((href: string) => {
        router.push(href);
        onClose();
        setQuery("");
    }, [router, onClose]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;

            if (e.key === "ArrowDown") {
                e.preventDefault();
                setSelectedIndex((prev) => (prev + 1) % results.length);
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
            } else if (e.key === "Enter" && results.length > 0) {
                e.preventDefault();
                handleSelect(results[selectedIndex].href);
            } else if (e.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, results, selectedIndex, handleSelect, onClose]);

    return (
        <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-[2px] z-[100] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 duration-300" />
                <Dialog.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[95%] max-w-2xl bg-white dark:bg-[#0e0e10] border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl z-[101] overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 duration-300 ease-out">
                    <div className="relative">
                        <div className="flex items-center px-4 border-b border-neutral-100 dark:border-neutral-800/50">
                            <Search className="h-5 w-5 text-neutral-400 dark:text-neutral-500" />
                            <input
                                autoFocus
                                type="text"
                                placeholder="Search documentation..."
                                className="w-full bg-transparent border-none focus:ring-0 py-5 px-3 text-sm outline-none text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <div className="flex items-center gap-2">
                                <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-black px-1.5 font-mono text-[10px] font-medium text-neutral-400">
                                    ESC
                                </kbd>
                            </div>
                        </div>

                        <div className="max-h-[400px] overflow-y-auto no-scrollbar py-3">
                            {query === "" ? (
                                <div className="px-6 py-12 text-center">
                                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-neutral-50 dark:bg-neutral-900 mb-4">
                                        <Search className="h-6 w-6 text-neutral-300 dark:text-neutral-600" />
                                    </div>
                                    <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Search for anything...</p>
                                    <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-1">Find docs, API endpoints, and guides instantly.</p>
                                </div>
                            ) : results.length > 0 ? (
                                <div className="px-3 space-y-1">
                                    {results.map((item, index) => {
                                        const isSelected = index === selectedIndex;
                                        return (
                                            <button
                                                key={item.href}
                                                onClick={() => handleSelect(item.href)}
                                                onMouseEnter={() => setSelectedIndex(index)}
                                                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all text-left group ${isSelected
                                                    ? "bg-neutral-100 dark:bg-neutral-800/80 shadow-sm"
                                                    : "hover:bg-neutral-50 dark:hover:bg-neutral-900/50"
                                                    }`}
                                            >
                                                <div className={`flex-shrink-0 h-10 w-10 rounded-xl flex items-center justify-center border transition-colors ${isSelected
                                                    ? "bg-white dark:bg-neutral-700 border-neutral-200 dark:border-neutral-600 shadow-sm"
                                                    : "bg-neutral-50 dark:bg-neutral-900 border-neutral-100 dark:border-neutral-800"
                                                    }`}>
                                                    {item.category === 'docs' ? (
                                                        <FileText className={`h-5 w-5 ${isSelected ? "text-primary" : "text-neutral-400 dark:text-neutral-500"}`} />
                                                    ) : (
                                                        <Code className={`h-5 w-5 ${isSelected ? "text-blue-500" : "text-neutral-400 dark:text-neutral-500"}`} />
                                                    )}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-0.5">
                                                        <span className={`text-[14px] font-semibold truncate ${isSelected ? "text-neutral-900 dark:text-white" : "text-neutral-700 dark:text-neutral-300"}`}>
                                                            {item.title}
                                                        </span>
                                                        <span className={`text-[8px] px-1.5 py-0.5 rounded-md font-semibold uppercase tracking-wider ${item.category === 'api'
                                                            ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                                                            : "bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400"
                                                            }`}>
                                                            {item.category}
                                                        </span>
                                                    </div>
                                                    <p className={`text-xs truncate ${isSelected ? "text-neutral-500 dark:text-neutral-400" : "text-neutral-400 dark:text-neutral-500"}`}>
                                                        {item.section}
                                                    </p>
                                                </div>
                                                <ChevronRight className={`h-4 w-4 transition-all ${isSelected ? "text-primary translate-x-0 opacity-100" : "text-neutral-300 dark:text-neutral-700 -translate-x-2 opacity-0"}`} />
                                            </button>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="px-6 py-12 text-center">
                                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-50 dark:bg-red-900/20 mb-4">
                                        <X className="h-6 w-6 text-red-500" />
                                    </div>
                                    <p className="text-sm font-medium text-neutral-900 dark:text-white">No results found</p>
                                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">We couldn't find anything matching "{query}"</p>
                                </div>
                            )}
                        </div>

                        <div className="px-4 py-3 border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-black/20 flex items-center justify-between">
                            <div className="flex gap-4">
                                <span className="flex items-center gap-2 text-[11px] text-neutral-400 dark:text-neutral-500">
                                    <kbd className="min-w-[20px] h-5 flex items-center justify-center rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 font-sans font-medium">↵</kbd>
                                    to select
                                </span>
                                <span className="flex items-center gap-2 text-[11px] text-neutral-400 dark:text-neutral-500">
                                    <kbd className="min-w-[20px] h-5 flex items-center justify-center rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 font-sans font-medium">↑↓</kbd>
                                    to navigate
                                </span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="text-[10px] font-bold text-neutral-300 dark:text-neutral-700 tracking-widest uppercase">7en.ai Search</span>
                            </div>
                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
