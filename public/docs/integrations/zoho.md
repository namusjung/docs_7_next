---
type: docs
title: Zoho
hidden: false
order: 3
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "Docs", href: "/docs/intro" }
  - { label: "Integrations", href: "" }
  - { label: "Zoho" }
prev:
  title: "Zendesk"
  href: "/docs/integrations/zendesk"
next:
  title: "HubSpot"
  href: "/docs/integrations/hubspot"
---

{% image src="/img/banner-zoho.png" alt="7en ai x Zoho" lightbox=false /%}

{% section id="introduction" title="Introduction to Zoho Desk Integration" %}

Integrating **Zoho Desk** with **7en.ai** enables your AI agents to streamline customer support by automating ticket creation, managing queries, and syncing data with your helpdesk system. This guide provides a concise, step-by-step process to connect Zoho Desk to 7en.ai, ensuring a seamless setup for enhanced support workflows.

{% callout type="info" title="Before You Begin" %}
Ensure you have active 7en.ai and Zoho Desk accounts with administrative access. You’ll need your 7en.ai API token from Settings > API Keys in the 7en.ai dashboard. Be aware of rate limits: 10 requests/min for authentication endpoints and 60 requests/min for team management endpoints.
{% /callout %}

{% /section %}

{% section id="why-connect" title="Why Integrate Zoho Desk?" %}

Connecting Zoho Desk with 7en.ai empowers your AI agents to:

- **Automate Support**: Create and update tickets directly from agent interactions.
- **Centralize Queries**: Manage customer inquiries within a unified platform.
- **Boost Productivity**: Reduce manual tasks by syncing agent responses with Zoho Desk.

This integration transforms your AI agents into a powerful extension of your customer support operations.

### Auto Ticket Reply

**Let your AI agent reply to Zoho tickets automatically**

Once connected, you can enable **Auto Ticket Reply** on any agent — your 7en.ai agent will automatically respond to incoming Zoho tickets using its trained knowledge, without any manual intervention.


To enable it:
1. Go to your **Agent builder** page in 7en.ai.
2. Under the **Escalation** section, toggle on **Auto Ticket Reply**.
3. Select **Zoho** as the ticketing provider.

From that point on, every new Zoho ticket is picked up by the agent and replied to instantly — cutting response times and reducing support load.

{% /section %}

{% section id="connection-guide" title="Step-by-Step Connection Guide" %}

Follow these quick steps to connect Zoho Desk to 7en.ai, with visual aids to simplify the process.

### Step 1: Navigate to Integrations
1. Log in to your 7en.ai account.
2. Navigate to the [Integrations](https://app.7en.ai/integrations) page.
3. Locate the Zoho Desk integration and click **Configure**.

{% image src="/img/zoho/step-1.png" alt="Screenshot of 7en.ai Integrations page with Zoho Desk option" caption="Selecting Zoho Desk integration in 7en.ai" /%}

### Step 2: Initiate Zoho Desk Connection
1. Click **Connect** on the integration configuration page.

{% image src="/img/zoho/step-2.png" alt="Screenshot of Zoho Desk integration page with Connect button" caption="Initiating the Zoho Desk connection" /%}

### Step 3: Sign In to Zoho
1. You’ll be redirected to the Zoho login page.
2. Sign in with your Zoho Desk account credentials.

{% image src="/img/zoho/step-3.jpeg" alt="Screenshot of Zoho login page" caption="Signing in to your Zoho account" /%}

### Step 4: Authorize the Connection
1. Review the permissions requested by 7en.ai.
2. Click **Accept** to authorize the connection.

{% image src="/img/zoho/step-4.jpeg" alt="Screenshot of Zoho authorization page" caption="Authorizing 7en.ai to connect with Zoho Desk" /%} 

### Step 5: Verify Connection
1. Return to the 7en.ai integrations page.
2. Confirm the connection status, which should display **Zoho Desk Has Been Connected**.

{% image src="/img/zoho/step-5.jpeg" alt="Screenshot of successful Zoho Desk connection in 7en.ai" caption="Confirming the Zoho Desk integration" /%}

{% /section %}

{% section id="best-practices" title="Best Practices" %}

- **Check Permissions**: Ensure your Zoho Desk account has the necessary permissions to allow API access.
- **Test Integration**: Create a test ticket via your 7en.ai agent to verify the connection works as expected.
- **Monitor Interactions**: Use the 7en.ai **Conversations** page to track ticket-related activities.
- **Keep Credentials Secure**: Avoid sharing your Zoho login details publicly.

{% /section %}
