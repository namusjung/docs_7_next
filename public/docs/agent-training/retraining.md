---
title: "Retrain Your Agent"
type: "docs"
order: 5
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "Docs", href: "/docs/intro" }
  - { label: "Agent Training", href: "" }
  - { label: "Retrain Your Agent" }
prev:
  href: /docs/agent-training/using-gdrive
  title: "Using Google Drive"
next:
  href: /docs/knowledge-management/knowledge-folder
  title: "Knowledge Folder"
---

# ReTrain Your Agent

{% section id="overview" title="Overview" %}

Adding a knowledge source does not automatically update your agent. You must trigger a training run to rebuild the agent's knowledge index. This page explains when to retrain, how to do it, and how to monitor progress.

{% /section %}

{% section id="when" title="When to Retrain" %}

Retrain your agent whenever:

- You **add** a new knowledge source (URL, document, plain text, or Google Drive file)
- You **delete** a knowledge source
- The **content** of an existing source has changed (e.g., a web page you scraped has been updated)
- You notice the agent giving **outdated** answers after a product or policy change

You do **not** need to retrain when:
- You change the guidelines or escalation rules
- You adjust model settings
- You update appearance settings

{% /section %}

{% section id="how" title="How to Retrain" %}

### From the Agent Dashboard

1. Open your **AI Agents** page from the [7en Dashboard](https://app.7en.ai)
2. Navigate to desired agent
3. Click **Train Agent**

Training begins immediately. The agent status changes to **Training** while the process runs.

### Batch your changes first

If you need to add multiple sources or delete several outdated ones, make all of those changes **before** clicking Train Agent. Each training run processes all sources together — batching your updates means one training cycle instead of several.

{% /section %}

{% section id="status" title="Monitoring Training Status" %}

Training status is shown in the agent header and the Knowledge Management panel:

| Status | Meaning |
|---|---|
| **Trained** | Training complete — agent is live and using the latest sources |
| **Training** | Retraining in progress — wait before testing or deploying |
| **Issues** | One or more sources failed to train — see Knowledge Management for details |

Training typically completes within a few minutes. Large knowledge bases or many simultaneous sources may take longer.

{% callout type="warning" title="During Training" %}
Your agent remains available to users during retraining, but it continues to use the **previous** knowledge index until the new training completes. Avoid deploying major knowledge changes during high-traffic periods.
{% /callout %}

{% /section %}

