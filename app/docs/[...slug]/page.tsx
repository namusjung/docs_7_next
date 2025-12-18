import { notFound } from "next/navigation";
import React from "react";
import Link from "next/link";
import * as Markdoc from "@markdoc/markdoc";
import { getDocsNav, getDocsNavFlat, parseFrontmatter, readMarkdownFile } from "@/lib/docs-utils";
import { config } from "@/lib/markdoc.config";
import Callout from "@/components/docs/Callout";
import DocSection from "@/components/docs/DocSection";
import DocImage from "@/components/docs/DocImage";
import CodeBlock from "@/components/docs/CodeBlock";
import ApiEndpoint from "@/components/docs/ApiEndpoint";
import ParameterList from "@/components/docs/ParameterList";
import Grid from "@/components/docs/Grid";
import Card from "@/components/docs/Card";
import Accordion from "@/components/docs/Accordion";
import ApiRequest from "@/components/docs/ApiRequest";
import ApiResponse from "@/components/docs/ApiResponse";
import { getTableOfContents, getPrevNext } from "@/lib/navigation-utils";
import MobileNav from "@/components/docs/MobileNav";
import CTA from "@/components/home/CTA";
import { MediaViewer } from "@/components/ui/MediaViewer";

type Params = any;

export function generateStaticParams() {
  const navItems = getDocsNavFlat();
  return navItems.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  try {
    const { slug } = await params;
    const raw = readMarkdownFile(process.cwd() + "/public/docs", slug);
    const { frontmatter } = parseFrontmatter(raw);


    const title = frontmatter.title ? `${frontmatter.title} | 7en.ai Docs` : "7en.ai Docs";
    const description = frontmatter.description || "7en.ai help documentation.";
    const url = `https://docs.7en.ai/docs/${slug.join("/")}`;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url,
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
      },
    };
  } catch (e) {
    return {
      title: "7en.ai Docs",
      description: "API documentation not found.",
    };
  }
}

export default async function DocPage({ params }: { params: Params }) {
  try {
    params = await params;
    const raw = readMarkdownFile(process.cwd() + "/public/docs", params.slug);
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
    const groupedNav = getDocsNav();
    const navItems = getDocsNavFlat(groupedNav);
    const { prev, next } = getPrevNext(navItems, params.slug);

    return (
      <>
        <MobileNav groupedNav={groupedNav} currentSlug={params.slug} basePath="/docs" />
        <div className="container grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_200px] gap-8 py-10">
          <aside className="hidden lg:block">
          <nav className="sticky top-24 space-y-4">
            {groupedNav.map((group) => (
              <div key={group.section}>
                <p className="text-xs uppercase tracking-wide !text-gray-600/40 dark:!text-gray-600/70 mb-1">{group.section.replace(/-/g, " ")}</p>
                <div className="space-y-1">
                  {group.items.map((item) => (
                    <Link key={item.slug.join("/")} href={`/docs/${item.slug.join("/")}`} className={`block text-[13px]  px-4 py-1.5 pl-2 hover:bg-muted hover:!text-black dark:hover:!text-white rounded-lg ${params.slug.join("/") === item.slug.join("/") ? "!bg-muted !text-black dark:!text-white" : ""}`}>
                      {item.frontmatter.title || item.slug[item.slug.length - 1]}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </aside>
        <article className="prose prose-slate dark:prose-invert max-w-none pt-14">
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
              ApiEndpoint,
              ParameterList,
              Grid,
              Card,
              Accordion,
              ApiRequest,
              ApiResponse,
              MediaViewer
            },
          })}
          <CTA
          button1="Get Started"
          button2="Learn More"
          button1Link="https://app.7en.ai"
          button2Link="https://app.7en.ai"
          />
          <div className="mt-12 flex items-center justify-between border-t border-border pt-6 not-prose">
            <div>
              {prev ? (
                <Link href={`/docs/${prev.slug.join("/")}`} className="text-sm underline underline-offset-4">
                  ← {prev.frontmatter.title || prev.slug[prev.slug.length - 1]}
                </Link>
              ) : <span />}
            </div>
            <div>
              {next ? (
                <Link href={`/docs/${next.slug.join("/")}`} className="text-sm underline underline-offset-4">
                  {next.frontmatter.title || next.slug[next.slug.length - 1]} →
                </Link>
              ) : <span />}
            </div>
          </div>
        </article>
        <aside className="hidden lg:block">
          <div className="sticky top-24 text-sm">
            <p className="font-medium mb-2">On this page</p>
            <ul className="space-y-1">
              {toc.map((i) => (
                <li key={i.id} className={i.level === 3 ? "ml-3" : ""}>
                  <a href={`#${i.id}`} className="text-foreground/70 hover:text-foreground hover:underline text-[12px]">
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
  } catch (e) {
    notFound();
  }
}