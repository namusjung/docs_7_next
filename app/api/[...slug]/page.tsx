import { notFound } from "next/navigation";
import React from "react";
import * as Markdoc from "@markdoc/markdoc";
import { parseFrontmatter, readMarkdownFile, getApiNav, getApiGroupedNav } from "@/lib/docs-utils";
import { apiConfig, config } from "@/lib/markdoc.config";
import { customTransform } from "@/lib/markdoc-utils";
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

export async function generateMetadata({ params }: { params: Params }) {
  try {
    const { slug } = await params;
    const raw = readMarkdownFile(process.cwd() + "/public/api", slug);
    const { frontmatter } = parseFrontmatter(raw);

    const title = frontmatter.title ? `${frontmatter.title} | 7en.ai Docs` : "7en.ai Docs";
    const description = frontmatter.description || "7en.ai API and developer documentation.";
    const url = `https://docs.7en.ai/api/${slug.join("/")}`;

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


const components: any = {
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
            };


export default async function ApiDocPage({ params }: { params: Promise<Params> }) {
  try {
    const { slug } = await params;
    const raw = readMarkdownFile(process.cwd() + "/public/api", slug);
    const { frontmatter, markdown } = parseFrontmatter(raw);
    const ast = Markdoc.parse(markdown); 
    const content = customTransform(ast, false);
    const apiContent = customTransform(ast, true);

     const renderContent = Markdoc.renderers.react(content, React, {components});
     const renderApiContent = Markdoc.renderers.react(apiContent, React, {components});

    console.log("Transformed content (filtered):", content);
    console.log("Transformed content (APIfiltered):", apiContent);

    const toc = getTableOfContents(ast);
    const navItems = getApiNav();
    const { prev, next } = getPrevNext(navItems, slug);

    

    return (
      <>
      <div className="container grid grid-cols-1 lg:grid-cols-[150px_minmax(0,1fr)_450px] gap-8 py-10">
        <aside className="hidden lg:block border-r w-[150px]">
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
        <article className="prose prose-slate dark:prose-invert max-w-none pt-10">
          <h1 className="font-heading font-semibold text-3xl">{frontmatter.title}</h1>
              {renderContent}
        </article>
        <aside className="hidden lg:block">
          <div className="sticky top-24 text-sm">
              {renderApiContent}
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


