---
title: "Activity"
type: "docs"
order: 3
---

# Activity

The Activity page is a full log of every conversation your agent has had. Use it to review individual sessions, identify problem responses, and understand what your users are actually asking.

{% section id="chat-logs" title="Chat Logs" %}

Each row in the Activity table represents a single conversation session. Click any row to expand the full message transcript.

For each conversation you can see:
- **Date and time** the session started
- **Source** — which channel the user came from (web widget, WhatsApp, Slack, etc.)
- **Sentiment** — automatic Positive / Neutral / Negative classification
- **Feedback** — thumbs up or thumbs down if the user rated the session
- **Escalated** — whether the conversation was handed off to a human

{% /section %}

{% section id="filtering" title="Filtering Conversations" %}

Use the filter bar to narrow down the logs:

| Filter | Options |
|---|---|
| **Date range** | Custom date picker |
| **Source** | Web, WhatsApp, Slack, Messenger, etc. |
| **Sentiment** | Positive, Neutral, Negative |
| **Feedback** | Thumbs up, Thumbs down, No feedback |
| **Escalated** | Yes / No |
| **Search** | Full-text search across message content |

Combining filters helps you focus on exactly what matters — for example, all negative-sentiment conversations from WhatsApp in the last 7 days.

{% /section %}

{% section id="improving" title="Improving Answers from Activity" %}

When you find a conversation where the agent gave a poor or incorrect response:

1. Open the conversation
2. Click **Improve Answer** next to the problematic message
3. Write the correct response
4. Save — this adds the correction as a Q&A pair to your knowledge base

The improvement takes effect after the next training run. This is the fastest way to fix specific recurring mistakes.

{% /section %}

{% section id="exporting" title="Exporting Conversations" %}

Export your conversation logs for offline analysis, compliance, or CRM import.

1. Apply any filters you want
2. Click **Export** at the top right
3. Choose your format: **JSON**, **CSV**, or **PDF**

The export includes all conversations matching your current filter within the selected date range.

{% /section %}

{% section id="leads" title="Leads" %}

If your agent has a lead capture form enabled, submitted contact details appear in the **Leads** tab alongside the conversation that generated them.

Each lead record includes:
- Name, email, and any custom fields from the form
- The conversation it came from
- Timestamp

Leads can be exported as CSV and imported into your CRM, or connected automatically using Zapier or HubSpot integration.

{% /section %}
