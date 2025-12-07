---
type: docs
title: Escalation
order: 5
next: 
  href: /docs/integrations
  title: "Integrations"
prev: 
  href: /docs/getting-started/introduction
  title: "Getting Started with 7en.ai"
---

{% section id="escalation" title="Escalation" %}

The Escalation section defines the fail-safe mechanisms for your chatbot. This is where you configure how the agent handles unanswered queries or complex issues, ensuring a smooth transition to human support or specialized agents when the AI reaches its knowledge limits.

### Configuration Fields

| Field | Description | Example |
|-------|-------------|---------|
| **Human Handoff** | A master toggle that determines if the bot should seek external help when it cannot answer a user query. | `Enabled` (Toggle On) |
| **Handoff Method** | Selects the channel for the handoff. Options include:<ul><li>**Create Ticket:** Integrates with support tools.</li><li>**Send Email:** Sends the chat transcript directly to an admin.</li></ul> | `Create Ticket` (via Freshdesk) |
| **Auto Ticket Reply** | *(Add-on)* An advanced feature that allows the AI to not only create a ticket but also send a reply within the ticketing tool automatically. | `Checked` |
| **AI Agent Transfer** | Enables the current bot to route specific queries to other specialized departmental bots (e.g., Support Bot routing to Sales Bot). | `Enabled` (Toggle On) |

### Handoff Mechanisms

When the LLM encounters a query it cannot answer with high confidence, it triggers the selected escalation path.

1.  **Ticketing Integration:** Connects your chatbot directly to enterprise helpdesk platforms (Zoho, Zendesk, Freshdesk). The bot automatically creates a ticket containing the user's query and history.
2.  **Email Notification:** A lightweight alternative to ticketing. The bot sends an email to the workspace owner containing the full chat transcript.
3.  **Auto Ticket Reply (Add-on):** The AI analyzes the ticket inside your platform (e.g., Zendesk) and sends a reply automatically, saving human agents time.
4.  **AI Agent Transfer:** Handles cross-departmental queries by routing the user to a different bot instance with specialized training (e.g., General Assistant → Sales Agent).

{% callout type="tip" title="Best Practices for Escalation" collapsible=true %}

| Category | Best Practice |
|----------|---------------|
| **Choose the Right Method** | <ul><li>Use **Email** if you are a solo founder or small business handling low volume.</li><li>Use **Ticketing** if you have a dedicated support team and need to track metrics.</li></ul> |
| **Leverage Agent Transfer** | <ul><li>Don't try to make one bot do everything.</li><li>Create specialized bots (Sales, Tech Support, HR) and enable transfers to keep prompts focused.</li></ul> |
| **Optimize with Auto Reply** | <ul><li>Enable this add-on to reduce "First Response Time" metrics.</li><li>*Note:* Monitor early auto-replies to ensure they align with your support tone.</li></ul> |

{% /callout %}

### Example Configurations

| Use Case | Configuration Details |
|----------|-----------------------|
| **Startup / Small Business** | <ul><li>**Human Handoff:** Enabled</li><li>**Method:** Send Email</li><li>**Why:** Ensures the founder sees every unanswered question immediately without managing a complex helpdesk.</li></ul> |
| **Enterprise SaaS** | <ul><li>**Human Handoff:** Enabled</li><li>**Method:** Create Ticket (Zendesk)</li><li>**Auto Reply:** Enabled</li><li>**Why:** Seamless integration into existing support queues to speed up resolution.</li></ul> |
| **Multi-Department Org** | <ul><li>**AI Agent Transfer:** Enabled</li><li>**Scenario:** User asks "Tech Support Bot" for a refund.</li><li>**Outcome:** Chat transfers to "Billing Bot" rather than creating a generic ticket.</li></ul> |

{% /section %}

