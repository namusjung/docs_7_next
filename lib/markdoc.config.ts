import { heading } from "@/schema/Heading.markdoc";
import { inline } from "@markdoc/markdoc/dist/src/schema";
import { Tag } from "@markdoc/markdoc";

export const variables = {
  api: {
    base_url: "api.7en.ai",
    key: "Api-Key YOUR_API_KEY",
    version: "v1",
  },
  renderApiOnly: false, // Flag to control rendering of API-specific tags
};

// Helper function to interpolate variables in strings
function interpolateVariables(str: string, vars: any): string {
  if (!str || typeof str !== 'string') return str;
  
  let result = str;
  if (vars.api) {
    result = result.replace(/\$api\.base_url/g, vars.api.base_url || '');
    result = result.replace(/\$api\.key/g, vars.api.key || '');
    result = result.replace(/\$api\.version/g, vars.api.version || '');
  }
  return result;
}

export const nodes = {
  fence: {
    render: "CodeBlock",
    attributes: {
      content: { type: String },
      language: { type: String },
      title: { type: String },
    },
    transform(node: any, config: any) {
      const attributes = node.transformAttributes(config);
      const children = node.transformChildren(config);
      
      // Interpolate variables in the content
      if (attributes.content && typeof attributes.content === 'string' && config.variables) {
        attributes.content = interpolateVariables(attributes.content, config.variables);
      }
      
      return new Tag(
        this.render,
        attributes,
        children
      );
    }
  },
  image: {
    render: "DocImage",
    attributes: {
      src: { type: String, required: true },
      alt: { type: String },
      caption: { type: String },
      lightbox: { type: Boolean, default: false },
    },
  },
  heading,
};

export const tags = {
  "section": {
    render: "DocSection",
    attributes: {
      id: { type: String, required: true },
      title: { type: String, required: true },
    },
  },
  "callout": {
    render: "Callout",
    attributes: {
        type: {
          type: String,
          default: 'info',
          matches: ['info', 'warning', 'success', 'error', 'tip']
        },
        title: {
          type: String,
          required: false
        },
        collapsible: {
          type: Boolean,
          required: false,
          default: false
        }
      },
  },
  "grid": {
    render: "Grid",
    attributes: {
      columns: { type: Number, default: 2 },
      gap: { type: String, default: "6" },
    },
  },
  "card": {
    render: "Card",
    attributes: {
      title: { type: String },
      icon: { type: String },
    },
  },
  "accordion": {
    render: "Accordion",
  },
  "endpoint": {
    render: "ApiEndpoint",
    attributes: {
      method: { type: String, required: true },
      url: { type: String, required: true },
    },
    transform(node: any, config: any) {
      const attributes = node.transformAttributes(config);
      const children = node.transformChildren(config);
      
      // Interpolate variables in the URL
      if (attributes.url && typeof attributes.url === 'string' && config.variables) {
        attributes.url = interpolateVariables(attributes.url, config.variables);
      }
      
      return new Tag(
        this.render,
        attributes,
        children
      );
    }
  },
  "parameter-list": {
    render: "ParameterList",
    attributes: {
      title: { type: String, required: false },
    },
  },
  "code-block": {
    render: "CodeBlock",
  },
  "image": {
    render: "DocImage",
    attributes: {
      src: { type: String, required: true },
      alt: { type: String },
      caption: { type: String },
      width: { type: String },
      height: { type: String },
      type: { type: String },
      lightbox: { type: Boolean },
      autoPlay: { type: Boolean },
      muted: { type: Boolean },
      loop: { type: Boolean },
      controls: { type: Boolean },
      poster: { type: String }
    },
    selfClosing: true
  },
};

export const apiTags = {
  request: {
    render: "ApiRequest",
  },
  response: {
    render: "ApiResponse",
    attributes: {
      status: { type: String },
      hasDropdown: { type: Boolean, required: false },
      title: { type: String, default: "Response" },
      language: { type: String, default: "json" },
      copy: { type: Boolean, default: true },
      statusBadge: { type: Boolean, default: true },
    },
  },
};

// Configuration for main content (all tags except request and response)
export const config = {
  nodes,
  tags: { ...tags, ...apiTags }, // Include all tags for parsing
  variables: {
    ...variables,
    renderApiOnly: false, // Render all tags except API-specific ones
  },
};

// Configuration for API content (only request and response)
export const apiConfig = {
  nodes,
  tags: { ...tags, ...apiTags }, // Include all tags for parsing
  variables: {
    ...variables,
    renderApiOnly: true, // Render only API-specific tags
  },
};

export type Frontmatter = {
  title: string;
  type?: "docs" | "api";
  order?: number;
  description?: string;
  endpoint?: string;
  breadcrumb_chain?: { label?: string; href?: string }[];
  next?: {};
  prev?: {};
};