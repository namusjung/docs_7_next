---
type: docs
title: Using Google Drive
order: 4
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "Docs", href: "/docs/intro" }
  - { label: "Agent Training", href: "" }
  - { label: "Using Google Drive" }
prev:
  href: /docs/agent-training/using-plain-texts
  title: "Using Plain Text"
next:
  href: /docs/agent-training/retraining
  title: "Retrain Your Agent"
---

# Train Agent Using Google Drive Files

{% section id="overview" title="Overview" %}

The "Integrations" tab streamlines data ingestion by connecting directly to your cloud storage, eliminating the need to download files locally before uploading them to the chatbot.

{% /section %}  

{% callout type="warning" %}
You must connect your Google drive first.  [How to connect?](https://docs.7en.ai//docs/integrations/gdrive)
{% /callout %}

{% media
  type="iframe"
  src="https://sevendemo.lovable.app/demo/e278ebff-2f80-40b1-bb11-c30425001be5"
  title="Build and Train Knowledge Sources for AI Agents"
  allowfullscreen=true
  allow="clipboard-write"
  maxHeight="80vh"
  caption="Interactive demo showing agent training using Google Drive files"
/%}

{% section id="input-configure" title="Input Configuration" %}

**Source Name** \
Assign a unique name to this file so you can easily identify it in your knowledge base later.

**Source** \
Choose "Integrations" option from the available source options in the tab menu.

**Choose Provider** \
Click the *Google Drive* card to initiate the connection. This authorizes the agent to access your cloud documents for training purposes.
{% /section %}

{% section id="file-selection" title="File Selection" %}

**File Selection Interface** Once connected, your Google Drive files appear in a browseable list below the integration card. You can select specific documents to import without leaving the dashboard:

- **Search & Filter**: Use the *Search files...* bar to find documents by name, or use the All Types dropdown to filter by file format (e.g., Google Docs, PDFs, or Text files).
- **Select Files**: Check the box next to each file you wish to include in the knowledge base. The list displays the file name (e.g., test-file.txt) and its type for easy identification.
- **Navigation**: If you have many files, use the pagination arrows (< >) or the refresh button to fetch your new uploads.
{% /section %}

{% image src="/img/train-agent/gdrive.png" alt="Google Drive Files" lightbox=true /%}

{% section id="train-the-agent" title="Train the agent" %}

Once you have completed the steps mentioned above, click the *Create Source* button at the bottom right of the modal to save the entry.

**Important:** Simply creating a source does not immediately train the agent. After adding all your desired sources (websites, documents, or text), you must click the *Train Agent* button on the builder page. This triggers the system to process the new data and apply it to your agent's active knowledge base.

{% /section %}