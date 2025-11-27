import { notFound } from "next/navigation";
import React from "react";
import Link from "next/link";
import * as Markdoc from "@markdoc/markdoc";
import { parseFrontmatter, readMarkdownFile, getApiNav, getApiGroupedNav } from "@/lib/docs-utils";
import { apiConfig, config, variables } from "@/lib/markdoc.config";
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
import MobileNav from "@/components/docs/MobileNav";
import CTA from "@/components/home/CTA";

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

    // Check if API content is meaningful (not just "No API content available")
    const hasApiContent = apiContent && 
      apiContent.$$mdtype === "Tag" && 
      !(apiContent.name === "p" && 
        Array.isArray(apiContent.children) && 
        apiContent.children.length === 1 &&
        apiContent.children[0] === "No API content available");

    // Parse endpoint from frontmatter (e.g., "POST /v1/agents")
    let endpointData: { method: string; url: string } | null = null;
    if (frontmatter.endpoint && typeof frontmatter.endpoint === 'string') {
      // Interpolate variables in the endpoint string
      let endpointString = frontmatter.endpoint;
      if (variables.api) {
        endpointString = endpointString
          .replace(/\$api\.base_url/g, variables.api.base_url || '')
          .replace(/\$api\.key/g, variables.api.key || '')
          .replace(/\$api\.version/g, variables.api.version || '');
      }
      
      const parts = endpointString.trim().split(/\s+/);
      if (parts.length >= 2) {
        endpointData = {
          method: parts[0],
          url: parts.slice(1).join(' ')
        };
      }
    }

    const toc = getTableOfContents(ast);
    const navItems = getApiNav();
    const { prev, next } = getPrevNext(navItems, slug);
    const breadcrumbs = (Array.isArray(frontmatter.breadcrumb_chain)
      ? frontmatter.breadcrumb_chain
          .map((item: any) => ({
            name: item?.label ?? item?.name ?? "",
            href: item?.href || undefined,
          }))
          .filter((item: { name: string }) => item.name)
      : []) as { name: string; href?: string }[];

    // Adjust grid columns based on whether API content exists
    const gridCols = hasApiContent 
      ? "lg:grid-cols-[150px_minmax(0,1fr)_450px]" 
      : "lg:grid-cols-[150px_minmax(0,1fr)_150px]";

    return (
      <>
        <MobileNav groupedNav={getApiGroupedNav()} currentSlug={slug} basePath="/api" />
        <div className={`container grid grid-cols-1 ${gridCols} gap-8 py-10`}>
          <aside className="hidden lg:block w-[150px]">
          <nav className="sticky top-24 space-y-4">
            {getApiGroupedNav().map((group) => (
              <div key={group.section}>
                <p className="text-xs uppercase tracking-wide !text-gray-600/40 dark:!text-gray-600/70 mb-1">{group.section.replace(/-/g, " ")}</p>
                <div className="space-y-1">
                  {group.items.map((item) => (
                    <Link key={item.slug.join("/")} href={`/api/${item.slug.join("/")}`} className={`block text-[13px]  px-4 py-1.5 pl-2 hover:bg-muted hover:!text-black dark:hover:!text-white rounded-lg ${slug.join("/") === item.slug.join("/") ? "!bg-muted !text-black dark:!text-white" : ""}`}>
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
              {renderContent}
          <CTA
          button1="Get Started"
          button2="Learn More"
          button1Link="https://app.7en.ai"
          button2Link="https://app.7en.ai"
          />
          <div className="mt-12 flex items-center justify-between border-t border-border pt-6 not-prose">
            <div>
              {prev ? (
                <Link href={`/api/${prev.slug.join("/")}`} className="text-sm underline underline-offset-4">
                  ← {prev.frontmatter.title || prev.slug[prev.slug.length - 1]}
                </Link>
              ) : <span />}
            </div>
            <div>
              {next ? (
                <Link href={`/api/${next.slug.join("/")}`} className="text-sm underline underline-offset-4">
                  {next.frontmatter.title || next.slug[next.slug.length - 1]} →
                </Link>
              ) : <span />}
            </div>
          </div>
        </article>
        {hasApiContent && (
          <aside className="hidden lg:block">
            <div className="sticky top-24 text-sm space-y-4">
              {endpointData && (
                <ApiEndpoint method={endpointData.method} url={endpointData.url} />
              )}
              {renderApiContent}
            </div>
          </aside>
        )}
      </div>
      </>
    );
  } catch (e) {
    notFound();
  }
}


