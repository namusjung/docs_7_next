---
title: "Retraining Your Agent"
type: "docs"
order: 5
---

# Retraining Your Agent

Adding a knowledge source does not automatically update your agent. You must trigger a training run to rebuild the agent's knowledge index. This page explains when to retrain, how to do it, and how to monitor progress.

{% section id="when" title="When to Retrain" %}

Retrain your agent whenever:

- You **add** a new knowledge source (URL, document, plain text, or Google Drive file)
- You **delete** a knowledge source
- The **content** of an existing source has changed (e.g., a web page you scraped has been updated)
- You notice the agent giving **outdated** answers after a product or policy change

You do **not** need to retrain when:
- You change the system prompt or guidelines
- You adjust model settings (temperature, max tokens)
- You update appearance settings

{% /section %}

{% section id="how" title="How to Retrain" %}

### From the Agent Dashboard

1. Open your agent from the [7en Dashboard](https://app.7en.ai)
2. Navigate to **Agent Training**
3. Click **Train Agent**

Training begins immediately. The agent status changes to **Training** while the process runs.

### Batch your changes first

If you need to add multiple sources or delete several outdated ones, make all of those changes **before** clicking Train Agent. Each training run processes all sources together — batching your updates means one training cycle instead of several.

{% /section %}

{% section id="status" title="Monitoring Training Status" %}

Training status is shown in the agent header and the Knowledge Management section:

| Status | Meaning |
|---|---|
| **Active** | Training complete — agent is live and using the latest sources |
| **Training** | Retraining in progress — wait before testing or deploying |
| **Issues** | One or more sources failed to train — see Knowledge Management for details |

Training typically completes within a few minutes. Large knowledge bases or many simultaneous sources may take longer.

{% callout type="warning" title="During Training" %}
Your agent remains available to users during retraining, but it continues to use the **previous** knowledge index until the new training completes. Avoid deploying major knowledge changes during high-traffic periods.
{% /callout %}

{% /section %}

{% section id="troubleshooting" title="Troubleshooting Failed Training" %}

If a source fails to train, it will be flagged in your Knowledge Folder with an error status. Common causes:

**URL sources:**
- The page was behind a login or paywall
- The URL returned a 404 or redirect
- The content was blocked by `robots.txt`

**Document sources:**
- The file format was unsupported
- The file was corrupted or password-protected
- The document exceeded the size limit (10 MB)

**Fix:** Delete the failed source, resolve the underlying issue, re-add it, and trigger a new training run.

{% /section %}
