import * as Markdoc from "@markdoc/markdoc";

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
  heading: {
    attributes: {
      id: { type: String },
    },
  },
};

export const tags = {
  section: {
    render: "DocSection",
    attributes: {
      id: { type: String, required: true },
      title: { type: String, required: true },
    },
  },
  callout: {
    render: "Callout",
    attributes: {
      type: { type: String, matches: ["info", "warning", "error", "success"], default: "info" },
      title: { type: String },
    },
  },
  Grid: {
    render: "Grid",
    attributes: {
      columns: { type: Number, default: 2 },
      gap: { type: String, default: "6" },
    },
  },
  Card: {
    render: "Card",
    attributes: {
      title: { type: String },
      icon: { type: String },
    },
  },
  Accordion: {
    render: "Accordion",
  },
  endpoint: {
    render: "ApiEndpoint",
    attributes: {
      method: { type: String, required: true },
      url: { type: String, required: true },
    },
  },
  request: {
    render: "ApiRequest",
  },
  Response: {
    render: "ApiResponse",
  },
  "parameter-list": {
    render: "ParameterList",
  },
  "code-block": {
    render: "CodeBlock",
  },
  image: {
    render: "DocImage",
  },
};

export const config = {
  nodes,
  tags,
};

export type Frontmatter = {
  title: string;
  type?: "docs" | "api";
  order?: number;
  description?: string;
  breadcrumb_chain?: [];
  next? : {};
  prev?: {};
};


