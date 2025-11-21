export type TocItem = { id: string; level: number; title: string };

export function getTableOfContents(ast: any): TocItem[] {
  const toc: TocItem[] = [];
  const visit = (node: any) => {
    const pushHeading = (title: string, id?: string, level: number = 2) => {
      if (!title) return;
      const headingId =
        id ||
        title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");
      toc.push({ id: headingId, level, title });
    };

    const nodeName = node?.name ?? node?.tag;

    if (
      nodeName === "heading" &&
      (node.attributes?.level === 2 || node.attributes?.level === 3)
    ) {
      const text =
        node.children
          ?.map((c: any) => (typeof c === "string" ? c : c.children?.[0] ?? ""))
          .join("") ?? "";
      pushHeading(text, node.attributes?.id as string, node.attributes.level);
    } else if (nodeName === "section" && node.attributes?.title) {
      pushHeading(
        node.attributes.title as string,
        node.attributes.id as string,
        2
      );
    }

    for (const child of node?.children ?? []) visit(child);
  };
  visit(ast);
  return toc;
}

export function getPrevNext<T extends { slug: string[] }>(
  items: T[],
  currentSlug: string[]
) {
  const index = items.findIndex(
    (i) => i.slug.join("/") === currentSlug.join("/")
  );
  return {
    prev: index > 0 ? items[index - 1] : null,
    next: index >= 0 && index < items.length - 1 ? items[index + 1] : null,
  };
}
