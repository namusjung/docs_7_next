---
type: docs
title: Chat Integration
order: 6
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "Docs", href: "/docs/intro" }
  - { label: "Build Your Agent", href: "" }
  - { label: "Chat Integration" }
prev:
  href: /docs/build-your-agent/escalation
  title: "Escalation"
next:
  href: /docs/agent-training/using-documents
  title: "Using Documents"
---

# Chat Integration

{% section id="chat-integration" title="Overview" %}

The Chat Integration section expands your chatbot's reach beyond your website widget. By connecting to popular messaging platforms, you allow users to interact with your AI agent through their preferred communication apps. The chatbot uses the same training data, personality, and escalation logic across all enabled channels.

{% section id="channel-overview" title="Channel Overview" %}

Once a channel is enabled, the chatbot functions exactly as it does on your web widget, providing consistent answers regardless of where the conversation takes place.

| Channel | Description | Best For |
|---------|-------------|----------|
| **WhatsApp** | Connects your AI agent to WhatsApp Business API. | Direct customer support, order updates, and high-engagement interactions. |
| **Slack** | Integrates the bot into Slack workspaces. Users can DM the bot or tag it in channels. | Internal employee support, IT helpdesk, or B2B community management. |
| **Instagram** | Responds to Instagram Direct Messages (DMs) automatically. | E-commerce brands, influencers, and handling pre-sales queries. |
| **Messenger** | Handles inquiries sent to your Facebook Business Page. | General customer service and small business inquiries. |

{% callout type="tip" title="Best Practices for Integration" collapsible=true %}

| Category | Best Practice |
|----------|---------------|
| **Match Channel to Audience** | Use **Slack** for internal teams or technical docs. {% br /%} Use **Instagram/Messenger** for B2C retail brands focusing on sales. |
| **Maintain Consistency** | Ensure "System Prompt" is broad enough to handle the informal style of messaging apps. |
| **Test Each Channel** | Send a test message from the app to verify connection and formatting before going live. |

{% /callout %}

{% section id="example-configurations" title="Example Configurations" %}

| Use Case | Configuration Details |
|----------|-----------------------|
| **Internal HR / IT Bot** | **Enabled:** Slack {% br /%} **Disabled:** WhatsApp, Instagram, Messenger {% br /%} **Why:** The bot contains internal company info and should only be accessible within the company workspace. |
| **Social E-commerce Brand** | **Enabled:** Instagram, Messenger, WhatsApp {% br /%} **Disabled:** Slack {% br /%} **Why:** Meets customers where they are shopping, offering instant answers on shipping/products. |
| **Professional Services** | **Enabled:** WhatsApp, Messenger {% br /%} **Why:** Provides a direct line for potential clients to book appointments or ask preliminary questions. |

{% /section %}
