import { notFound } from "next/navigation";
import React from "react";
import Link from "next/link";
import * as Markdoc from "@markdoc/markdoc";
import { getFaqNav, getFaqNavFlat, parseFrontmatter, readMarkdownFile } from "@/lib/docs-utils";
import { config } from "@/lib/markdoc.config";
import Callout from "@/components/docs/Callout";
import DocSection from "@/components/docs/DocSection";
import DocImage from "@/components/docs/DocImage";
import CodeBlock from "@/components/docs/CodeBlock";
import Grid from "@/components/docs/Grid";
import Card from "@/components/docs/Card";
import Accordion from "@/components/docs/Accordion";
import { getTableOfContents } from "@/lib/navigation-utils";
import MobileNav from "@/components/docs/MobileNav";

type Params = any;

export function generateStaticParams() {
  const navItems = getFaqNavFlat();
  return navItems.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  try {
    const { slug } = await params;
    const raw = readMarkdownFile(process.cwd() + "/public/faq", slug);
    const { frontmatter } = parseFrontmatter(raw);
    const title = frontmatter.title ? `${frontmatter.title} | 7en.ai` : "7en.ai FAQ";
    const description = frontmatter.description || "Frequently asked questions about 7en.ai.";
    return {
      title,
      description,
      openGraph: { title, description, type: "article" },
      twitter: { card: "summary_large_image", title, description },
    };
  } catch {
    return { title: "7en.ai FAQ", description: "Frequently asked questions." };
  }
}

export default async function FaqPage({ params }: { params: Params }) {
  try {
    params = await params;
    const raw = readMarkdownFile(process.cwd() + "/public/faq", params.slug);
    const { frontmatter, markdown } = parseFrontmatter(raw);
    const ast = Markdoc.parse(markdown);
    const content = Markdoc.transform(ast, config);
    const toc = getTableOfContents(ast);
    const breadcrumbs = (Array.isArray(frontmatter.breadcrumb_chain)
      ? frontmatter.breadcrumb_chain
        .map((item: any) => ({
          name: item?.label ?? item?.name ?? "",
          href: item?.href || undefined,
        }))
        .filter((item: { name: string }) => item.name)
      : []) as { name: string; href?: string }[];

    const navItems = getFaqNavFlat();
    const groupedNav = [{ section: "FAQ", items: navItems }];

    return (
      <>
        <MobileNav groupedNav={groupedNav} currentSlug={params.slug} basePath="/faq" />
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[280px_minmax(0,1fr)_200px] gap-8 py-10">
          <aside className="hidden lg:block">
            <nav className="sidebar-nav sticky top-28 h-[calc(100vh-7rem)] overflow-y-auto space-y-4 pr-2">
              {groupedNav.map((group) => (
                <div key={group.section}>
                  <p className="text-xs uppercase tracking-wide !text-gray-600/40 dark:!text-gray-200 mb-1">{group.section}</p>
                  <div className="space-y-1">
                    {group.items.map((item) => (
                      <Link
                        key={item.slug.join("/")}
                        href={`/faq/${item.slug.join("/")}`}
                        className={`block text-sm px-4 py-1.5 pl-2 dark:hover:bg-muted/10 hover:bg-gray-100 hover:!text-black dark:hover:!text-white rounded-lg ${
                          params.slug.join("/") === item.slug.join("/")
                            ? "dark:!bg-muted/20 bg-gray-200 !text-black dark:!text-white"
                            : ""
                        }`}
                      >
                        {item.frontmatter.title || item.slug[item.slug.length - 1]}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </aside>

          <article className="prose prose-slate dark:prose-invert max-w-none pt-24">
            {breadcrumbs.length > 0 && (
              <div className="text-sm text-foreground/60 mb-4">
                {breadcrumbs.map((b, i) => (
                  <span key={`${b.name}-${b.href ?? i}`}>
                    {b.href ? (
                      <Link href={b.href} className="hover:underline">{b.name}</Link>
                    ) : (
                      <span className="text-foreground/60">{b.name}</span>
                    )}
                    {i < breadcrumbs.length - 1 ? " / " : null}
                  </span>
                ))}
              </div>
            )}
            {Markdoc.renderers.react(content, React, {
              components: {
                Callout,
                DocSection,
                DocImage,
                CodeBlock,
                Grid,
                Card,
                Accordion,
              },
            })}
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-28 text-xs">
              <p className="font-medium mb-2">On this page</p>
              <ul className="space-y-2">
                {toc.map((i) => (
                  <li key={i.id} className={i.level === 3 ? "ml-3" : ""}>
                    <a href={`#${i.id}`} className="text-foreground/70 hover:text-foreground hover:underline text-sm">
                      {i.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </>
    );
  } catch {
    notFound();
  }
}
