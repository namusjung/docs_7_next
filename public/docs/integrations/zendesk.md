---
type: docs
title: Zendesk
hidden: false
order: 2
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "Docs", href: "/docs/intro" }
  - { label: "Integrations", href: "" }
  - { label: "Zendesk" }
prev:
  title: "Freshdesk"
  href: "/docs/integrations/freshdesk"
next:
  title: "Zoho"
  href: "/docs/integrations/zoho"
---

{% image src="/img/banner-zendesk.png" alt="7en ai x Zendesk" lightbox=false /%}

{% section id="introduction" title="Introduction to Zendesk Integration" %}

Seamlessly connect **Zendesk** with **7en.ai** to empower your AI agents to manage customer support tickets, streamline query resolution, and enhance user satisfaction. This guide provides a clear, step-by-step process to integrate Zendesk with 7en.ai, enabling automated ticketing and real-time support workflows.

{% callout type="info" title="Before You Start" %}
Ensure you have active 7en.ai and Zendesk accounts with administrative access. You’ll need your 7en.ai API token from Settings > API Keys in the 7en.ai dashboard.
{% /callout %}

{% /section %}

{% section id="why-connect" title="Why Integrate Zendesk?" %}

Integrating Zendesk with 7en.ai unlocks powerful automation for your support operations:

- **Automated Ticketing**: Create and manage Zendesk tickets directly from your AI agent’s interactions.
- **Unified Support**: Centralize customer queries within 7en.ai’s conversation interface.
- **Enhanced Efficiency**: Reduce manual work by syncing agent responses with Zendesk’s ticketing system.

This connection transforms your AI agents into a robust extension of your customer support team.


### Auto Ticket Reply

**Let your AI agent reply to Zendesk tickets automatically**

Once connected, you can enable **Auto Ticket Reply** on any agent — your 7en.ai agent will automatically respond to incoming Zendesk tickets using its trained knowledge, without any manual intervention.


To enable it:
1. Go to your **Agent builder** page in 7en.ai.
2. Under the **Escalation** section, toggle on **Auto Ticket Reply**.
3. Select **Zendesk** as the ticketing provider.

From that point on, every new Zendesk ticket is picked up by the agent and replied to instantly — cutting response times and reducing support load.


{% /section %}

{% section id="connection-guide" title="Step-by-Step Connection Guide" %}

Follow these steps to connect Zendesk to 7en.ai, with visual aids to ensure a smooth setup process.

### Step 1: Access Integrations in 7en.ai
1. Log in to your 7en.ai account.
2. Navigate to the [Integrations](https://app.7en.ai/integrations) page.
3. In the **Support** section, locate Zendesk and click **Configure**.

{% image src="/img/zendesk/step-1.png" alt="Screenshot of 7en.ai Integrations page with Zendesk option" caption="Selecting Zendesk integration in 7en.ai" /%}

### Step 2: Generate Zendesk API Token
1. Open a new browser tab and log in to your Zendesk account.
2. Click the **Settings** icon (gear) in the sidebar.
3. Select **Apps and Integrations** > **API Tokens**.
4. Click **Add API Token**.
5. Enter a description for the token (e.g., "7en.ai Integration").
6. Click **Save** and then **Copy** to copy the generated API token.

{% image src="/img/zendesk/step-2.jpeg" alt="Screenshot of Zendesk API Tokens page with token creation" caption="Creating and copying the Zendesk API token" /%}

### Step 3: Enter API Token in 7en.ai
1. Return to the 7en.ai tab.
2. Enter your Zendesk domain and email address.
3. Paste the Zendesk API token into the **API Key** field on the Zendesk integration page.


{% callout type="info" title="Zendesk domain" %}
Get your Zendesk domain (e.g., `company.zendesk.com`) from the browser’s address bar or account settings.
{% /callout %}

{% image src="/img/zendesk/step-3.png" alt="Screenshot of 7en.ai Zendesk integration page with API key field" caption="Paste the Zendesk API token in 7en.ai" /%}


### Step 4: Finalize the Connection
1. Click **Connect** to complete the integration.
2. Confirm the connection status, which should display **Zendesk Connected** upon success.

{% image src="/img/zendesk/step-7.png" alt="Screenshot of successful Zendesk connection in 7en.ai" caption="Confirming the Zendesk integration" /%}

{% /section %}

{% section id="best-practices" title="Best Practices" %}

- **Secure Tokens**: Keep your Zendesk API token confidential and avoid sharing it publicly.
- **Test Integration**: Create a test ticket via your 7en.ai agent to verify the connection.
- **Monitor Activity**: Use the 7en.ai **Conversations** page to track ticket-related interactions.

{% /section %}