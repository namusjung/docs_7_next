---
title: "Messenger"
type: "docs"
order: 7
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "Docs", href: "/docs/intro" }
  - { label: "Integrations", href: "" }
  - { label: "Messenger" }
prev:
  title: "WhatsApp"
  href: "/docs/integrations/whatsapp"
next:
  title: "Zapier"
  href: "/docs/integrations/zapier"
---

# Messenger

Deploy your 7en agent on Facebook Messenger to engage customers directly through your Facebook Page. The same trained knowledge base powers your Messenger bot as your web widget — one agent, multiple channels.

{% section id="why" title="Why Use Messenger?" %}

**Reach your Facebook audience.** If your business has an active Facebook Page, Messenger is already where many customers try to contact you. Automating first-response with a 7en agent ensures every message gets an instant reply, even outside business hours.

**Rich messaging support.** Messenger supports text, images, quick reply buttons, and carousels — giving your agent more ways to present information clearly.

**Handoff to human agents.** When a query exceeds the agent's capability, it can escalate seamlessly — creating a ticket or transferring to a live chat agent without the user needing to restart the conversation.

{% /section %}

{% section id="prerequisites" title="Prerequisites" %}

Before connecting Messenger, you need:

- A **Facebook Page** for your business
- A **Meta Developer App** connected to that Page — create one at [developers.facebook.com](https://developers.facebook.com)
- **Page admin access** to grant the app the required permissions
- A trained 7en agent ready to deploy

{% /section %}

{% section id="setup" title="Step-by-Step Setup" %}

### Step 1: Navigate to Integrations

1. Log in to your [7en Dashboard](https://app.7en.ai)
2. Go to the [Integrations](https://app.7en.ai/integrations) page
3. Find **Messenger** under Messaging and click **Configure**

### Step 2: Connect Your Facebook Page

1. Click **Connect with Facebook**
2. Log in to Facebook and select the Page you want to connect
3. Grant the requested permissions — 7en needs:
   - `pages_messaging`
   - `pages_read_engagement`

### Step 3: Configure the Webhook

In your Meta Developer App:

1. Go to **Messenger → Settings → Webhooks**
2. Set the **Callback URL** to the webhook URL shown in 7en:
   ```
   https://app.7en.ai/webhooks/messenger/YOUR_AGENT_ID
   ```
3. Set the **Verify Token** to the token shown in the 7en configuration panel
4. Subscribe to: **messages**, **messaging_postbacks**
5. Click **Verify and Save**

### Step 4: Test the Connection

1. Send a message to your Facebook Page from a personal account
2. Your 7en agent should respond automatically within a few seconds

{% callout type="warning" title="App review required for production" %}
Meta requires your app to go through App Review before it can message users who have not previously interacted with your Page. During development, only Page admins and test users can receive automated replies. Submit for review when you are ready to go live.
{% /callout %}

{% /section %}

{% section id="best-practices" title="Best Practices" %}

- **Set up a Persistent Menu.** Messenger supports a persistent menu of quick actions. Use it to surface your most common queries — e.g., "Track my order", "Contact support", "View pricing" — so users know where to start.
- **Enable the Get Started button.** This sends a postback when a user opens the conversation for the first time. Configure your agent to respond with a warm welcome message that sets expectations.
- **Test on mobile.** Most Messenger users are on mobile. Preview your agent's responses on a phone to make sure they are readable and not too long.

{% /section %}
