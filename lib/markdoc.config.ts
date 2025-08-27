import { heading } from "@/schema/Heading.markdoc";


const variables = {
  api: {
    base_url: "api.7en.ai/",
    key: "Api-Key YOUR_API_KEY",
  },
  renderApiOnly: false, // Flag to control rendering of API-specific tags
};

export const nodes = {
  fence: {
    render: "CodeBlock",
    attributes: {
      content: { type: String },
      language: { type: String },
      title: { type: String },
    },
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
  heading
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
      type: { type: String, matches: ["info", "warning", "error", "success"], default: "info" },
      title: { type: String },
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
  breadcrumb_chain?: [];
  next?: {};
  prev?: {};
};