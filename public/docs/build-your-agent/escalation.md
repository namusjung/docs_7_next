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
| **Handoff Method** | Selects the channel for the handoff. Options include:**Create Ticket:** Integrates with support tools. **Send Email:** Sends the chat transcript directly to an admin. | `Create Ticket` (via Freshdesk) |
| **Auto Ticket Reply** | *(Add-on)* An advanced feature that allows the AI to not only create a ticket but also send a reply within the ticketing tool automatically. | `Checked` |
| **AI Agent Transfer** | Enables the current bot to route specific queries to other specialized departmental bots (e.g., Support Bot routing to Sales Bot). | `Enabled` (Toggle On) |

### Handoff Mechanisms

When the LLM encounters a query it cannot answer with high confidence, it triggers the selected escalation path.

1.  **Ticketing Integration:** Connects your chatbot directly to enterprise helpdesk platforms (Zoho, Zendesk, Freshdesk). The bot automatically creates a ticket containing the user's query and history.
2.  **Email Notification:** A lightweight alternative to ticketing. The bot sends an email to the workspace owner containing the full chat transcript.
3.  **Auto Ticket Reply (Add-on):** The AI analyzes the ticket inside your platform (e.g., Zendesk) and sends a reply automatically, saving human agents time.
4.  **AI Agent Transfer:** Handles cross-departmental queries by routing the user to a different bot instance with specialized training (e.g., General Assistant → Sales Agent).

{% /section %}

{% section id="human-handoff-rules" title="Human Handoff Rules" %}

### Default Behaviour

When **Human Handoff** is enabled, the agent automatically offers ticket creation whenever it cannot confidently answer a query. The user sees a prompt such as:

> *"I'm not able to fully answer that. Would you like me to create a support ticket so a human agent can follow up?"*

If the user agrees, a ticket is created in your connected helpdesk (Zoho, Zendesk, or Freshdesk) containing the full conversation transcript. No manual intervention is needed.

**This default triggers when:**
- The agent has no relevant content in its knowledge base for the query
- The agent's confidence in its answer falls below the threshold
- The user explicitly asks to speak to a human

### Custom Handoff Rules

Beyond the default behaviour, you can write custom instructions in the **System Prompt** or **Guidelines** to give the agent more precise control over when and how it escalates.

**Examples of custom rules:**

Escalate immediately for billing questions, without attempting an answer:
```
If the user asks about billing, refunds, or payment issues, do not attempt to answer. Immediately offer to create a support ticket and transfer them to the billing team.
```

Escalate after a fixed number of failed attempts:
```
If you are unable to answer the same question after two attempts, offer to escalate to a human agent rather than continuing to guess.
```

Escalate based on user sentiment:
```
If the user expresses frustration or uses words like "angry", "unacceptable", or "cancel", skip the standard response and immediately offer human handoff.
```

Customise the escalation message itself:
```
When escalating to a human, always say: "I'll connect you with our support team right away. Typical response time is under 2 hours."
```

{% callout type="tip" title="Tip" %}
Place handoff rules at the top of your system prompt so they are evaluated before general response instructions.
{% /callout %}

{% /section %}

{% section id="ai-handoff-rules" title="AI-to-AI Handoff Rules" %}

### Default Behaviour

When **AI Agent Transfer** is enabled, the agent automatically routes the conversation to another agent in your workspace if that agent is better suited to answer the query. This happens silently and instantly — the user stays in the same chat window without interruption.

**This default triggers when:**
- The current agent detects the query falls outside its trained scope
- Another agent in the workspace has relevant knowledge for the topic
- The query matches the specialisation of a connected agent (e.g., a billing question reaching a general support bot that has a dedicated Billing Bot available)

The receiving agent picks up the conversation with full context from the previous messages, so the user never has to repeat themselves.

### Custom Transfer Rules

You can write explicit transfer rules in the **System Prompt** to control exactly when and to which agent the handoff occurs.

**Examples of custom rules:**

Route specific topics to a named agent:
```
If the user asks about pricing, plans, or upgrades, transfer the conversation to the Sales Agent. Do not attempt to answer pricing questions yourself.
```

Transfer after failing to answer:
```
If you cannot answer a query from your knowledge base, check whether the Sales Agent or Technical Support Agent can help before creating a ticket.
```

Define a transfer priority order:
```
For technical issues: first attempt to answer from your own knowledge. If unable, transfer to the Technical Support Agent. If that agent is also unable to help, create a support ticket.
```

Prevent unnecessary transfers:
```
Only transfer to another agent if the query is entirely outside your domain. Do not transfer for partial matches — attempt a best-effort answer first.
```

{% callout type="tip" title="Tip" %}
Give each specialised agent a clear, narrow system prompt. The more focused each agent's scope, the more accurately the routing decisions will be made.
{% /callout %}

{% /section %}

{% section id="examples" title="Example Configurations" %}

{% callout type="tip" title="Best Practices for Escalation" collapsible=true %}

| Category | Best Practice |
|----------|---------------|
| **Choose the Right Method** | Use **Email** if you are a solo founder or small business handling low volume. Use **Ticketing** if you have a dedicated support team and need to track metrics. |
| **Leverage Agent Transfer** | Don't try to make one bot do everything. Create specialized bots (Sales, Tech Support, HR) and enable transfers to keep prompts focused. |
| **Optimize with Auto Reply** | Enable this add-on to reduce "First Response Time" metrics. *Note:* Monitor early auto-replies to ensure they align with your support tone. |

{% /callout %}

| Use Case | Configuration Details |
|----------|-----------------------|
| **Startup / Small Business** | **Human Handoff:** Enabled  **Method:** Send Email **Why:** Ensures the founder sees every unanswered question immediately without managing a complex helpdesk. |
| **Enterprise SaaS** | **Human Handoff:** Enabled **Method:** Create Ticket (Zendesk) **Auto Reply:** Enabled **Why:** Seamless integration into existing support queues to speed up resolution. |
| **Multi-Department Org** | **AI Agent Transfer:** Enabled **Scenario:** User asks "Tech Support Bot" for a refund. **Outcome:** Chat transfers to "Billing Bot" rather than creating a generic ticket. |

{% /section %}

