---
title: "Analytics"
type: "docs"
order: 2
---

# Analytics

The Analytics dashboard gives you a real-time and historical view of your workspace and agent performance. It is divided into a summary header, conversation statistics, and several detailed charts.

{% section id="summary-cards" title="Summary Cards" %}

The top of the dashboard shows four workspace-wide counters at a glance:

| Card | What it shows |
|---|---|
| **My Agents** | Total number of agents in your workspace |
| **Conversations** | Total conversations handled across all agents |
| **Knowledge Base** | Number of knowledge sources currently in the workspace |
| **Team Members** | Number of users in your workspace |

These counters reflect the current state of your workspace, not a filtered date range.

{% /section %}

{% section id="conversation-statistics" title="Conversation Statistics" %}

The Conversation Statistics chart plots conversation volume over time as a line graph.

**Filtering options:**

| Filter | Description |
|---|---|
| **Today** | Hourly breakdown of conversations for the current day |
| **1W** | Daily totals for the past 7 days |
| **1M** | Daily totals for the past 30 days |
| **1Y** | Monthly totals for the past 12 months |
| **All Channels** | Filter by a specific deployment channel (Web, WhatsApp, Slack, Messenger, etc.) |

Use this chart to spot traffic patterns — peak hours, day-of-week trends, or spikes after a product launch or marketing campaign.

{% /section %}

{% section id="bottom-cards" title="Replies Credit, AI Replies & Customer Satisfaction" %}

Below the statistics chart, three cards give you usage and quality metrics side by side.

### Replies Credit

Shows how much of your plan's reply allowance has been consumed in the current billing period.

- **Remaining / Total** — e.g., *19,920 / 20,000*
- **Circular progress indicator** — visually shows the percentage used

Monitor this to avoid hitting your plan limit. If usage is consistently high, consider upgrading your plan or adding a credit top-up.

### AI Replies per Month

A bar chart showing the volume of AI-generated replies over the last 6 months. Use this to track growth in agent usage and forecast whether your current plan's reply limit is sufficient.

### Customer Satisfaction

Displays overall satisfaction across all conversations, broken into three sentiment categories:

| Category | Icon | Meaning |
|---|---|---|
| **Positive** | 😊 | User expressed satisfaction or gave positive feedback |
| **Neutral** | 😐 | Conversation ended without a clear positive or negative signal |
| **Negative** | 😟 | User expressed frustration or gave negative feedback |

Scores are shown as percentages (e.g., Positive 37.5%, Neutral 0%, Negative 6.2%). A high negative percentage is a signal to review recent conversations and identify where the agent is falling short.

{% /section %}

{% section id="conversation-performance" title="Conversation Performance" %}

The Conversation Performance chart is a horizontal bar chart that breaks down resolution metrics per agent.

Hover over any agent's bar to see a detailed tooltip:

| Field | Description |
|---|---|
| **Total Conversations** | All sessions handled by this agent |
| **Resolved** | Conversations marked as resolved (AI answered successfully) |
| **Open** | Conversations still open or escalated |
| **Resolution Rate** | Percentage of conversations resolved without escalation (e.g., 50%) |

Use this chart to compare agent effectiveness across your workspace. A low resolution rate on a specific agent usually points to a knowledge gap or a system prompt that needs refinement.

{% /section %}

{% section id="ai-vs-handoff" title="AI Replies vs Human Handoff" %}

This line chart plots two metrics over time on the same axis:

- **AI replies** (dark line) — conversations fully handled by the agent
- **Human handoff** (orange line) — conversations escalated to a human

The gap between the two lines is your **automation rate** — the proportion of queries your agent resolves without human involvement. A widening gap over time means your agent is improving. A narrowing gap or a spike in the orange line indicates the agent is struggling — check recent knowledge base changes or review the Conversation Activity log.

{% callout type="info" %}
A sudden spike in human handoffs after a training update usually means conflicting or removed knowledge sources. Check the Knowledge Folder for failed training statuses.
{% /callout %}

{% /section %}

{% section id="exporting" title="Exporting Analytics" %}

Analytics data can be exported as CSV for use in external reporting tools. Click **Export** at the top right of the dashboard to download the current view.

{% /section %}
