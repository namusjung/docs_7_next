import * as Markdoc from "@markdoc/markdoc";
import { config, apiConfig } from "./markdoc.config";

// export function customTransform(ast: any, keepApi: boolean) {
//   const cfg = keepApi ? apiConfig : config;
//   const transformed = Markdoc.transform(ast, cfg);

//   function filterNodes(node: any): any {
//     if (!node || typeof node !== "object" || !node.$$mdtype) {
//       return node; // keep text nodes
//     }

//     const isApiTag = ["ApiRequest", "ApiResponse"].includes(node.name);

//     // keep only API nodes
//     if (keepApi && !isApiTag && node.name !== "article") {
//       return null;
//     }

//     // drop API nodes if we're in non-API mode
//     if (!keepApi && isApiTag) {
//       return null;
//     }

//     if (node.children) {
//       node.children = node.children
//         .map(filterNodes)
//         .filter((child: any) => child !== null);
//     }

//     return node;
//   }

//   const filtered = filterNodes(transformed);

//   if (keepApi) {
//     if (filtered && filtered.children) {
//       const apiChildren = filtered.children.filter(
//         (child: any) => ["ApiRequest", "ApiResponse"].includes(child?.name)
//       );
//       if (apiChildren.length > 0) {
//         return {
//           $$mdtype: "Tag",
//           name: "div",
//           attributes: {},
//           children: apiChildren,
//         };
//       }
//     }
//     return { $$mdtype: "Tag", name: "p", children: ["No API content available"] };
//   }

//   if (!filtered || (Array.isArray(filtered) && filtered.length === 0)) {
//     return { $$mdtype: "Tag", name: "p", children: ["No content available"] };
//   }

//   return filtered;
// }

export function customTransform(ast: any, keepApi: boolean) {
  const cfg = keepApi ? apiConfig : config;
  const transformed = Markdoc.transform(ast, cfg);

  function filterNodes(node: any): any {
    if (!node || typeof node !== "object" || !node.$$mdtype) {
      return node; // keep text nodes
    }

    const isApiTag = ["ApiRequest", "ApiResponse"].includes(node.name);

    // ✅ If it's an API node and we want API -> keep entire subtree (no recursion)
    if (keepApi && isApiTag) {
      return node;
    }

    // ❌ If it's an API node but we’re in non-API mode -> drop it
    if (!keepApi && isApiTag) {
      return null;
    }

    // For everything else, recurse
    if (node.children) {
      node.children = node.children
        .map(filterNodes)
        .filter((child: any) => child !== null);
    }

    return node;
  }

  const filtered = filterNodes(transformed);

  if (keepApi) {
    if (filtered && filtered.children) {
      const apiChildren = filtered.children.filter(
        (child: any) => ["ApiRequest", "ApiResponse"].includes(child?.name)
      );
      if (apiChildren.length > 0) {
        return {
          $$mdtype: "Tag",
          name: "div",
          attributes: {},
          children: apiChildren,
        };
      }
    }
    return { $$mdtype: "Tag", name: "p", children: ["No API content available"] };
  }

  if (!filtered || (Array.isArray(filtered) && filtered.length === 0)) {
    return { $$mdtype: "Tag", name: "p", children: ["No content available"] };
  }

  return filtered;
}


