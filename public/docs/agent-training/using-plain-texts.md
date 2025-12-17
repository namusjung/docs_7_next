---
type: docs
title: Using Plain Text
order: 6
next: 
  href: /docs/integrations
  title: "Integrations"
prev: 
  href: /docs/getting-started/introduction
  title: "Getting Started with 7en.ai"
---



{% section id="using-plain-text" title="Training agent using Plain Text" %}

{% media
  type="iframe"
  src="https://sevendemo.lovable.app/demo/7f3b155a-e837-4f12-a5b5-f740b9ca4796"
  title="Build and Train Knowledge Sources for AI Agents"
  allowfullscreen=true
  allow="clipboard-write"
  maxHeight="80vh"
  caption="Interactive demo showing agent training using plain text"
/%}


The "Plain Text" tab in the "Add Knowledge Sources" modal provides a direct way to paste raw information into your agent's brain. This is the fastest method for adding specific snippets, FAQs, or structured data that doesn't exist in a standalone file or public URL.

{% section id="input-configure" title="Input Configuration" %}

**Source Name** \
Assign a clear, descriptive name (e.g., "Q4 Marketing FAQs") to categorize this text block within your knowledge base.

**Source** \
Choose "Plain Text" option from the available source options in the tab menu.

**Text Editor** \
A large input field where you can type or paste your content directly.
{% /section %}

{% image src="/img/train-agent/sample-markdown.png" alt="Sample Markdown Input" lightbox=true /%}

{% section id="train-the-agent" title="Train the agent" %}

Once you have completed the steps mentioned above, click the 'Create Source' button at the bottom right of the modal to save the entry.

**Important:** Simply creating a source does not immediately train the agent. After adding all your desired sources (websites, documents, or text), you must click the Train Agent button on the builder page. This triggers the system to process the new data and apply it to your agent's active knowledge base.

{% /section %}