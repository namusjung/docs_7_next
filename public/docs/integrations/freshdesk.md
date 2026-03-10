---
type: docs
title: Freshdesk
hidden: false
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "Docs", href: "/docs/intro" }
  - { label: "Integrations", href: "" }
  - { label: "Freshdesk" }
prev:
  title: "Manage Sources"
  href: "/docs/knowledge-management/management"
next: 
  title: "Zendesk Integration"
  href: "/docs/integrations/zendesk"
---

# Connect Freshdesk to 7en

{% image src="/img/banner-freshdesk.png" alt="7en ai x Freshdesk" lightbox=true /%}

{% section id="introduction" title="Introduction to Freshdesk Integration" %}

Integrating **Freshdesk** with **7en.ai** allows your AI agents to seamlessly interact with your customer support ticketing system, automating ticket creation and query resolution. This guide provides a clear, step-by-step process to connect Freshdesk to 7en.ai, enabling your agents to streamline support workflows and enhance customer experiences.

{% callout type="info" title="Before You Begin" %}
Ensure you have active accounts for both 7en.ai and Freshdesk, with administrative access to retrieve API keys and domain details. You'll need your 7en.ai API token from Settings > API Keys.
{% /callout %}

{% /section %}

{% section id="why-connect" title="Why Connect Freshdesk?" %}

Linking Freshdesk with 7en.ai empowers your AI agents to:

- **Automate Ticketing**: Create tickets directly from agent interactions.
- **Auto Ticket Reply**: Answer customer's query instantly using Agent's data.
- **Centralize Operations**: Resolve customer queries within a unified platform.

This integration bridges your AI capabilities with robust support tools, saving time and improving efficiency.


### Auto Ticket Reply

**Let your AI agent reply to Zoho tickets automatically**

Once connected, you can enable **Auto Ticket Reply** on any agent — your 7en.ai agent will automatically respond to incoming Zoho tickets using its trained knowledge, without any manual intervention.


To enable it:
1. Go to your **Agent builder** page in 7en.ai.
2. Under the **Escalation** section, toggle on **Auto Ticket Reply**.
3. Select **Freshdesk** as the ticketing provider.

From that point on, every new Freshdesk ticket is picked up by the agent and replied to instantly — cutting response times and reducing support load.

{% /section %}

{% section id="connection-guide" title="Step-by-Step Connection Guide" %}

Follow these steps to connect Freshdesk to 7en.ai, complete with visual references to guide you through the process.

### Step 1: Navigate to Integrations
1. Log in to your 7en.ai account.
2. Navigate to the [Integrations](https://app.7en.ai/integrations) page.
3. Locate the Freshdesk integration and click *Configure* button.

{% image src="/img/freshdesk/step-1.png" alt="Screenshot of 7en.ai Integrations page with Freshdesk option" caption="Selecting Freshdesk integration in 7en.ai" /%}

### Step 2: Access Freshdesk API Key
1. Open a new browser tab and log in to your Freshdesk account.
2. Click your **Profile** icon in the top-right corner.
3. Select **Profile Settings** from the dropdown menu.
4. Click **View API Key** to reveal your Freshdesk API key.
5. Copy the API key to your clipboard.

{% image src="/img/freshdesk/step-2.jpeg" alt="Screenshot of Freshdesk Profile Settings with API key" caption="Copying the Freshdesk API key" /%}

### Step 3: Input API Key in 7en.ai
1. Return to the 7en.ai tab.
2. Paste the copied Freshdesk API key into the **API Key** field on the Freshdesk integration page.

{% image src="/img/freshdesk/step-3.png" alt="Screenshot of 7en.ai Freshdesk integration page with API key field" caption="Pasting the Freshdesk API key in 7en.ai" /%}

### Step 4: Retrieve and Enter Freshdesk Domain
1. Switch back to your Freshdesk tab.
2. Copy your Freshdesk domain (e.g., `company.freshdesk.com`) from the browser's address bar or account settings.
3. Return to the 7en.ai tab.
4. Click the **Freshdesk Domain** field and paste the copied domain.

{% image src="/img/freshdesk/step-4.jpeg" alt="Screenshot of copying Freshdesk domain and pasting in 7en.ai" caption="Entering the Freshdesk domain in 7en.ai" /%}

### Step 5: Complete the Connection
1. Click **Connect** to finalize the integration.
2. Verify the connection status, which should display **Connected** upon success.

{% image src="/img/freshdesk/step-5.png" alt="Screenshot of successful Freshdesk connection in 7en.ai" caption="Confirming the Freshdesk integration" /%}

{% /section %}

{% section id="best-practices" title="Best Practices" %}

- **Secure API Keys**: Store your Freshdesk API key securely and avoid sharing it publicly.
- **Test the Integration**: After connecting, test the integration by creating a sample ticket through your 7en.ai agent.
- **Monitor Activity**: Use the 7en.ai **Conversations** page to track how your agent interacts with Freshdesk tickets.
- **Update Permissions**: Ensure your Freshdesk account has the necessary permissions to allow API access.

{% /section %}
