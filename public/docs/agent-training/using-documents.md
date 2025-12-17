---
type: docs
title: Using Documents
order: 6
next: 
  href: /docs/integrations
  title: "Integrations"
prev: 
  href: /docs/getting-started/introduction
  title: "Getting Started with 7en.ai"
---



{% section id="using-documents" title="Training agent using Documents" %}

{% media
  type="iframe"
  src="https://sevendemo.lovable.app/demo/a4ee2d27-f110-4d37-a0bb-060b64015854"
  title="Build and Train Knowledge Sources for AI Agents"
  caption="Interactive demo showing agent training using URLs"
/%}

The "Integrations" tab connects your AI agent directly to your cloud storage providers, streamlining the import process by bypassing the need to download files to your local machine first.

**Google Drive Integration** Currently, the system supports importing training data directly from Google Drive.

**Source** \
Choose "Integrations" option from the available source options in the tab menu.

**File Upload** \
You have two methods to upload your documents
- **Drag & Drop**: Simply drag files from your computer and drop them into the dashed upload zone.
- **Browse**: Click the Choose Files button to open your system's file picker and select documents manually.
{% /section %}

{% callout type="info" %}
Please be informed that only `PDF`, `TXT`, `XLSX` and `DOCX` type are allowed to upload.
{% /callout %}

{% section id="file-management" title="File Management" %}

Before finalizing the source, you can review and manage the uploaded content:

- **Selected Files List** – Verify the files you have staged for upload. The list displays the filename (e.g., `test-file.pdf`) and the specific file size.
- **Size Constraints** – Pay attention to the max upload size limit per upload indicator (e.g., `/ 10 MB`) to ensure your document does not exceed the maximum allowed upload size.
- **Remove Files** – If you accidentally select the wrong file, click the **X** icon on the right side of the file row to discard it.
{% /section %}

{% image src="/img/train-agent/docs-upload.png" alt="Upload documents" lightbox=true /%}

{% section id="train-the-agent" title="Train the agent" %}

Once you have completed the steps mentioned above, click the 'Create Source' button at the bottom right of the modal to save the entry.

**Important:** Simply creating a source does not immediately train the agent. After adding all your desired sources (websites, documents, or text), you must click the Train Agent button on the builder page. This triggers the system to process the new data and apply it to your agent's active knowledge base.

{% /section %}