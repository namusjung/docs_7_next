import fs from "node:fs";
import path from "node:path";
import * as Markdoc from "@markdoc/markdoc";
import { config, Frontmatter } from "@/lib/markdoc.config";
import yaml from 'js-yaml';

export type DocPage = {
  slug: string[];
  content: string;
  frontmatter: Frontmatter;
};
type FolderInfo = { slug: string; order: number; title?: string };

export type NavItem = { slug: string[]; frontmatter: Frontmatter };

const DOCS_DIR = path.join(process.cwd(), "public", "docs");
const API_DIR = path.join(process.cwd(), "public", "api");

export function readMarkdownFile(baseDir: string, slug: string[]): string {
  const filePath = path.join(baseDir, ...slug) + ".md";
  return fs.readFileSync(filePath, "utf8");
}

export function parseFrontmatter(raw: string): { frontmatter: Frontmatter; markdown: string } {
  const fmMatch = raw.match(/^---[\s\S]*?---/);
  if (!fmMatch) return { frontmatter: { title: "Untitled" }, markdown: raw };
  const fmBlock = fmMatch[0].replace(/^---|---$/g, "").trim();
  const markdown = raw.slice(fmMatch[0].length).trimStart();

  // Parse the YAML frontmatter
  let frontmatter: Frontmatter;
  try {
    frontmatter = yaml.load(fmBlock) as Frontmatter;
  } catch (e) {
    console.error("Failed to parse frontmatter:", e);
    frontmatter = { title: "Untitled" }; // Fallback in case of parsing error
  }

  // Ensure order is a number if present
  if (frontmatter.order) frontmatter.order = Number(frontmatter.order);

  // console.log("frontmatter", frontmatter);
  return { frontmatter, markdown };
}

export function renderToReactTree(markdown: string) {
  const ast = Markdoc.parse(markdown);
  const transformed = Markdoc.transform(ast, config);
  return transformed;
}

export function getAllSlugs(baseDir: string): string[][] {
  const results: string[][] = [];
  function walk(dir: string, trail: string[]) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        walk(path.join(dir, entry.name), [...trail, entry.name]);
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        const slug = [...trail, entry.name.replace(/\.md$/, "")];
        results.push(slug);
      }
    }
  }
  walk(baseDir, []);
  return results;
}

export function getOrderedFolders(root: string): FolderInfo[] {
  return fs
    .readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const metaPath = path.join(root, entry.name, "_meta.json");
      let order = Number.POSITIVE_INFINITY;
      let title: string | undefined;

      if (fs.existsSync(metaPath)) {
        const meta = JSON.parse(fs.readFileSync(metaPath, "utf8"));
        if (Number.isFinite(meta.order)) order = meta.order;
        if (typeof meta.title === "string" && meta.title.trim()) {
          title = meta.title.trim();
        }
      }

      return { slug: entry.name, order, title };
    })
    .sort((a, b) => a.order - b.order);
}

function buildNavItems(baseDir: string, slugs: string[][]): NavItem[] {
  return slugs.map((slug) => {
    const raw = readMarkdownFile(baseDir, slug);
    const { frontmatter } = parseFrontmatter(raw);
    return { slug, frontmatter };
  });
}

function sortNavItems(items: NavItem[]) {
  items.sort((a, b) => {
    const sectionA = a.slug[0] ?? "";
    const sectionB = b.slug[0] ?? "";
    if (sectionA !== sectionB) return sectionA.localeCompare(sectionB);
    const orderDiff = (a.frontmatter.order ?? 999) - (b.frontmatter.order ?? 999);
    if (orderDiff !== 0) return orderDiff;
    return a.slug.join("/").localeCompare(b.slug.join("/"));
  });
}

export function getDocsNav(): GroupedNav {
  const folders = getOrderedFolders(DOCS_DIR);
  const groups: GroupedNav = [];

  for (const folder of folders) {
    const folderPath = path.join(DOCS_DIR, folder.slug);
    const slugs = getAllSlugs(folderPath).map((slug) => [folder.slug, ...slug]);
    const items = buildNavItems(DOCS_DIR, slugs);
    sortNavItems(items);

    groups.push({
      section: folder.title ?? folder.slug.replace(/-/g, " "),
      items,
    });
  }

  return groups;
}

export function getDocsNavFlat(groups?: GroupedNav): NavItem[] {
  const source = groups ?? getDocsNav();
  return source.flatMap((group) => group.items);
}

export function getApiNav(): NavItem[] {
  const slugs = getAllSlugs(API_DIR);
  const items = buildNavItems(API_DIR, slugs);
  sortNavItems(items);
  return items;
}

export type GroupedNav = { section: string; items: NavItem[] }[];

function groupByTopFolder(items: NavItem[]): GroupedNav {
  const map = new Map<string, NavItem[]>();
  for (const it of items) {
    const section = it.slug[0] || "general";
    if (!map.has(section)) map.set(section, []);
    map.get(section)!.push(it);
  }
  const groups: GroupedNav = Array.from(map.entries()).map(([section, entries]) => {
    entries.sort((a, b) => (a.frontmatter.order ?? 999) - (b.frontmatter.order ?? 999));
    return { section, items: entries };
  });
  groups.sort((a, b) => a.section.localeCompare(b.section));
  return groups;
}

export function getApiGroupedNav(): GroupedNav {
  return groupByTopFolder(getApiNav());
}

export type BreadcrumbItem = { name: string; href?: string };

export function buildBreadcrumbs(slug: string[], basePath: "/docs" | "/api" = "/docs"): BreadcrumbItem[] {
  const parts: BreadcrumbItem[] = [];
  for (let i = 0; i < slug.length; i++) {
    const name = slug[i].replace(/-/g, " ");
    const href = `${basePath}/${slug.slice(0, i + 1).join("/")}`;
    parts.push({ name, href });
  }
  return parts;
}


