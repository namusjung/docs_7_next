---
type: docs
title: Chat Integration
order: 6
next: 
  href: /docs/integrations
  title: "Integrations"
prev: 
  href: /docs/getting-started/introduction
  title: "Getting Started with 7en.ai"
---
{% section id="chat-integration" title="Chat Integration" %}

The Chat Integration section expands your chatbot's reach beyond your website widget. By connecting to popular messaging platforms, you allow users to interact with your AI agent through their preferred communication apps. The chatbot uses the same training data, personality, and escalation logic across all enabled channels.

### Channel Overview

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
| **Match Channel to Audience** | Use **Slack** for internal teams or technical docs. Use **Instagram/Messenger** for B2C retail brands focusing on sales. |
| **Maintain Consistency** | Ensure "Guidelines" and "System Prompt" are broad enough to handle the informal style of messaging apps. |
| **Test Each Channel** | Send a test message from the app to verify connection and formatting before going live. |

{% /callout %}

### Example Configurations

| Use Case | Configuration Details |
|----------|-----------------------|
| **Internal HR / IT Bot** | **Enabled:** Slack <br> **Disabled:** WhatsApp, Instagram, Messenger\ **Why:** The bot contains internal company info and should only be accessible within the company workspace. |
| **Social E-commerce Brand** | **Enabled:** Instagram, Messenger, WhatsApp ｜ **Disabled:** Slack ｜ **Why:** Meets customers where they are shopping, offering instant answers on shipping/products. |
| **Professional Services** | **Enabled:** WhatsApp, Messenger ｜ **Why:** Provides a direct line for potential clients to book appointments or ask preliminary questions. |

{% media
  type="iframe"
  src="https://sevendemo.lovable.app/demo/walumedu"
  title="Build and Train Knowledge Sources for AI Agents"
  allowfullscreen=true
  allow="clipboard-write
  maxHeight="80vh"
  caption="Interactive demo showing agent training using URLs"
%}

{% /section %}
