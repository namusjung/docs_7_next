---
type: docs
title: Using URLs
order: 6
next: 
  href: /docs/integrations
  title: "Integrations"
prev: 
  href: /docs/getting-started/introduction
  title: "Getting Started with 7en.ai"
---



{% section id="using-urls" title="Train agent using URLs" %}

{% media
  type="iframe"
  src="https://sevendemo.lovable.app/demo/a4ee2d27-f110-4d37-a0bb-060b64015854"
  title="Build and Train Knowledge Sources for AI Agents"
  allowfullscreen=true
  allow="clipboard-write"
  maxHeight="80vh"
  caption="Interactive demo showing agent training using URLs"
/%}

The Website import feature in the "Add Knowledge Sources" modal enables you to train your AI agent using content directly from live web pages. Whether you need to import an entire site structure or just a few specific landing pages, this interface gives you granular control over the data ingestion process.

**Source Name** \
Assign a custom name (e.g., "Company Knowledge Base") to categorize this data source.

**Source** \
Choose "Website" option from the available source options in the tab menu.

**Website URL** \
Enter the URL of the webpage you want to train.

**Crawl Scope** \
Select the method that fits your needs:
- **Import all pages**: Automatically crawls and discovers links starting from the base URL.
- **Individual pages**: Switches to manual mode, allowing you to input specific links one by one.
{% /section %}

{% section id="scrape-automatically" title="Scrape URLs" %}

Automatically crawl the website If **Import all pages** is selected, the system discovers content for you. You can then refine the results:

- **Found URLs** – Review the list of detected pages. You can manually check/uncheck specific URLs or use the Select All / Deselect All buttons to manage bulk selection.
- **Search URL** – Quickly filter the list to locate specific pages within the crawl results.
- **Exclude URLs** – Define specific URL patterns (e.g., `/blog/*`) to prevent irrelevant sections of the site from being imported.
{% /section %}

{% image src="/img/train-agent/import-all.png" alt="Import all URLs from the link" lightbox=true /%}


{% section id="manual-entry" title="Inputs URLs manually" %}

When **Individual pages** is selected, you have direct control over exact inputs:

- **Manual URLs** – Type or paste specific web addresses (e.g., `https://ampm.cloud/test1`) directly into the input fields.
- **Add Another URL** – Click the **+ Add Another URL** button to stack multiple distinct pages within the same source.
- **Remove URL** – Use the **X** button next to a field to delete incorrect entries before finalizing.

{% /section %}

{% image src="/img/train-agent/individual-links.png" alt="Manually add the links" lightbox=true /%}

{% section id="train-the-agent" title="Train the agent" %}

Once you have completed the steps mentioned above, click the 'Create Source' button at the bottom right of the modal to save the entry.

**Important:** Simply creating a source does not immediately train the agent. After adding all your desired sources (websites, documents, or text), you must click the Train Agent button on the builder page. This triggers the system to process the new data and apply it to your agent's active knowledge base.

{% /section %}