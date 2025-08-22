import { notFound } from "next/navigation";
import React from "react";
import * as Markdoc from "@markdoc/markdoc";
import { parseFrontmatter, readMarkdownFile, getApiNav, getApiGroupedNav } from "@/lib/docs-utils";
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
import Head from "next/head";

type Params = any;

export function generateStaticParams() {
  return getApiNav().map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  try {
    const { slug } = await params;
    const raw = readMarkdownFile(process.cwd() + "/public/api", slug);
    const { frontmatter } = parseFrontmatter(raw);
    return {
      title: frontmatter.title ? `${frontmatter.title}` : undefined,
      description: frontmatter.description,
    };
  } catch (e) {
    return {};
  }
}

export default async function ApiDocPage({ params }: { params: Promise<Params> }) {
  try {
    const { slug } = await params;
    const raw = readMarkdownFile(process.cwd() + "/public/api", slug);
    const { frontmatter, markdown } = parseFrontmatter(raw);
    const ast = Markdoc.parse(markdown);
    const content = Markdoc.transform(ast, config);

    const toc = getTableOfContents(ast);
    const navItems = getApiNav();
    const { prev, next } = getPrevNext(navItems, slug);

    return (
      <>
      <div className="container grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_200px] gap-8 py-10">
        <aside className="hidden lg:block">
          <nav className="sticky top-24 space-y-4">
            {getApiGroupedNav().map((group) => (
              <div key={group.section}>
                <p className="text-xs uppercase tracking-wide text-foreground/60 mb-1">{group.section.replace(/-/g, " ")}</p>
                <div className="space-y-1">
                  {group.items.map((item) => (
                    <a key={item.slug.join("/")} href={`/api/${item.slug.join("/")}`} className="block text-sm hover:underline">
                      {item.frontmatter.title || item.slug[item.slug.length - 1]}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </aside>
        <article className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="font-heading font-semibold text-3xl">{frontmatter.title}</h1>
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
            },
          })}
        </article>
        <aside className="hidden lg:block">
          <div className="sticky top-24 text-sm">
            <p className="font-medium mb-2">On this page</p>
            <ul className="space-y-1">
              {toc.map((i) => (
                <li key={i.id} className={i.level === 3 ? "ml-3" : ""}>
                  <a href={`#${i.id}`} className="text-foreground/70 hover:text-foreground hover:underline">
                    {i.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <div className="lg:col-span-3 mt-8 flex items-center justify-between">
          <div>
            {prev ? (
              <a href={`/api/${prev.slug.join("/")}`} className="text-sm underline underline-offset-4">
                ← {prev.frontmatter.title || prev.slug[prev.slug.length - 1]}
              </a>
            ) : <span />}
          </div>
          <div>
            {next ? (
              <a href={`/api/${next.slug.join("/")}`} className="text-sm underline underline-offset-4">
                {next.frontmatter.title || next.slug[next.slug.length - 1]} →
              </a>
            ) : <span />}
          </div>
        </div>
      </div>
      </>
    );
  } catch (e) {
    notFound();
  }
}


