---
title: "WhatsApp"
type: "docs"
order: 6
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "Docs", href: "/docs/intro" }
  - { label: "Integrations", href: "" }
  - { label: "WhatsApp" }
prev:
  title: "Slack"
  href: "/docs/integrations/slack"
next:
  title: "Messenger"
  href: "/docs/integrations/messenger"
---

# WhatsApp

Deploy your 7en agent on WhatsApp to handle customer queries directly inside the world's most popular messaging app. Your agent uses the same knowledge base and training as your web widget — configured once, available everywhere.

{% section id="why" title="Why Use WhatsApp?" %}

**Meet users where they are.** WhatsApp has over 2 billion active users. For many businesses — especially in retail, hospitality, and regional markets — it is the primary customer support channel.

**24/7 automated support.** Your agent handles routine queries instantly at any hour, reducing wait times and freeing your human team for complex cases.

**Seamless escalation.** When the agent cannot resolve an issue, it can create a support ticket or hand off to a human agent without the user having to switch channels.

{% /section %}

{% section id="prerequisites" title="Prerequisites" %}

Before connecting WhatsApp, you need:

- A **WhatsApp Business Account** — register at [business.whatsapp.com](https://business.whatsapp.com)
- A **Meta Developer App** — create one at [developers.facebook.com](https://developers.facebook.com)
- A **verified business phone number** added to your WhatsApp Business Account
- A trained 7en agent ready to deploy

{% /section %}

{% section id="setup" title="Step-by-Step Setup" %}

### Step 1: Navigate to Integrations

1. Log in to your [7en Dashboard](https://app.7en.ai)
2. Go to the [Integrations](https://app.7en.ai/integrations) page
3. Find **WhatsApp** under Messaging and click **Configure**

### Step 2: Enter Your Credentials

You will need the following from your Meta Developer App:

- **Phone Number ID** — found in your Meta app under WhatsApp → API Setup
- **WhatsApp Business Account ID**
- **Access Token** — a permanent system user token from Meta Business Manager
- **Webhook Verify Token** — a custom string you create to verify webhook requests

Enter these values in the 7en WhatsApp configuration form and click **Save**.

### Step 3: Configure the Webhook

In your Meta Developer App:

1. Go to **WhatsApp → Configuration → Webhook**
2. Set the **Callback URL** to the webhook URL shown in 7en:
   ```
   https://app.7en.ai/webhooks/whatsapp/YOUR_AGENT_ID
   ```
3. Set the **Verify Token** to the same value you entered in Step 2
4. Subscribe to the **messages** webhook field
5. Click **Verify and Save**

### Step 4: Test the Connection

Send a WhatsApp message to your business phone number. Your 7en agent should respond within seconds.

{% callout type="info" title="Testing mode" %}
During development, WhatsApp limits messaging to numbers added to your test recipients list. Add your number in Meta Developer App → WhatsApp → API Setup → Test numbers.
{% /callout %}

{% /section %}

{% section id="best-practices" title="Best Practices" %}

- **Set a clear opening message.** Configure your agent's welcome message to set expectations — e.g., *"Hi! I'm the Acme support bot. I can help with orders, returns, and product questions."*
- **Enable escalation.** WhatsApp users expect fast human fallback. Configure ticketing or email escalation so unresolved queries are captured.
- **Keep responses concise.** WhatsApp is a mobile-first channel. Aim for short, scannable replies rather than long paragraphs.

{% /section %}
