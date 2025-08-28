---
type: docs
title: Zapier Integration
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "Docs", href: "/docs/intro" }
  - { label: "Integrations", href: "" }
  - { label: "Zapier Integration" }
---
# How to connect Zapier to 7en Platform

{% image src="/img/banner-zapier.png" alt="7en ai x Zapier" lightbox=false /%}

{% section id="introduction" title="Introduction to Zapier Integration" %}

**7en.ai** empowers you to supercharge your AI agents by integrating with **Zapier**, a powerful automation platform that connects your 7en.ai agents with over 7,000 apps, such as Google Sheets, Salesforce, and Slack. This guide walks you through setting up a Zapier workflow to automate tasks, like capturing leads from your 7en.ai agent and syncing them to Google Sheets.

{% callout type="info" title="Prerequisites" %}
Ensure you have an active 7en.ai account with a configured AI agent and a Zapier account. You’ll also need your 7en.ai API token, found in Settings > API Keys in the 7en.ai dashboard. Be mindful of rate limits: 10 requests/min for authentication endpoints and 60 requests/min for team management endpoints.
{% /callout %}

{% /section %}

{% section id="overview" title="Why Integrate Zapier with 7en.ai?" %}

Zapier allows your 7en.ai agents to interact seamlessly with your existing tools, automating repetitive tasks and boosting efficiency. Common use cases include:

- **Lead Management**: Automatically save leads captured by your AI agent to CRMs or spreadsheets.
- **Ticket Creation**: Route customer queries to ticketing systems like Zendesk.
- **Notifications**: Send real-time updates to Slack or email based on agent interactions.

This integration transforms your AI agent into a central hub for automated workflows across your tech stack.

{% /section %}

{% section id="setup-guide" title="Step-by-Step Setup Guide" %}

Follow these steps to integrate 7en.ai with Zapier and create a workflow to sync leads to Google Sheets.

### Step 1: Access Zapier Integration
1. Log in to your 7en.ai account and navigate to the **Integrations** page for your desired AI agent.
2. Under **Your Workflows**, click **Login** to connect your Zapier account.

{% image src="/images/zapier-7en-login.png" alt="Screenshot of 7en.ai Integrations page with Zapier login option" caption="Logging into Zapier from 7en.ai" /%}

### Step 2: Select a Workflow Template
1. After logging in, locate the **Popular Workflows** section.
2. Click on the **7en.ai + Google Sheets** workflow template to start building your automation.

{% image src="/images/zapier-7en-template.png" alt="Screenshot of Popular Workflows with 7en.ai + Google Sheets template" caption="Selecting the 7en.ai + Google Sheets template" /%}

### Step 3: Configure the Trigger
1. In the Zapier editor, under **App & Event**, select the 7en.ai event that will trigger the workflow (e.g., new lead captured by your agent).
2. Click **Continue**.

{% image src="/images/zapier-7en-trigger.png" alt="Screenshot of Zapier trigger configuration for 7en.ai" caption="Setting up the 7en.ai trigger event" /%}

### Step 4: Connect 7en.ai Account
1. In the **Account** section, click **Sign in**.
2. Retrieve your 7en.ai API key:
   - Go to **My Account** in the 7en.ai dashboard.
   - Scroll to **Your 7en.ai API Keys** and click **+New API Key**.
   - Name the key (e.g., "Zapier Integration") and click **Create API Key**.
   - Copy the generated API key.
3. Paste the API key into the Zapier window and click **Yes, Continue to 7en.ai**.
4. Click **Continue** to proceed.

{% image src="/images/zapier-7en-api-key.png" alt="Screenshot of 7en.ai API key creation and copying" caption="Creating and copying your 7en.ai API key" /%}

### Step 5: Select Your Agent
1. In the **Trigger** section, choose your AI agent from the dropdown menu.
2. Click **Continue**.

{% image src="/images/zapier-7en-agent-select.png" alt="Screenshot of selecting an AI agent in Zapier" caption="Choosing your 7en.ai agent for the trigger" /%}

### Step 6: Test the Trigger
1. Click **Test trigger** to ensure Zapier can pull data from your 7en.ai agent.
2. Select a sample record and click **Continue with selected record**.

{% image src="/images/zapier-7en-trigger-test.png" alt="Screenshot of testing the 7en.ai trigger in Zapier" caption="Testing the trigger setup" /%}

### Step 7: Configure the Action
1. Under **App & Event**, select **Google Sheets** and choose an action (e.g., "Create Spreadsheet Row").
2. Click **Continue**.
3. In the **Account** section, sign in with your Google account.
4. In the **Action** section, select your target spreadsheet and worksheet from the dropdowns.
5. Map fields from your 7en.ai agent (e.g., Name, Email) to the spreadsheet headers.
6. Click **Continue**.

{% image src="/images/zapier-7en-action.png" alt="Screenshot of configuring Google Sheets action in Zapier" caption="Mapping 7en.ai lead fields to Google Sheets" /%}

### Step 8: Test and Publish
1. In the **Test** section, click **Test step** to verify the action works or choose **Skip Test**.
2. Name your workflow (e.g., "7en.ai Lead to Google Sheets").
3. Click **Publish** to activate the workflow.

{% image src="/images/zapier-7en-publish.png" alt="Screenshot of publishing the Zapier workflow" caption="Finalizing and publishing your workflow" /%}

{% /section %}

{% section id="tips" title="Tips for Success" %}

- **Enable Lead Capture**: Ensure your 7en.ai agent is configured to collect leads (Settings > Leads) to populate fields like Name and Email.
- **Pre-Create Spreadsheets**: Set up your Google Sheet with headers matching your lead fields before configuring the action.
- **Monitor Workflows**: Check Zapier’s task history to troubleshoot any issues.
- **Expand Use Cases**: Explore other integrations, like syncing tickets to Zendesk or notifications to Slack.

{% /section %}

{% section id="support" title="Need Help?" %}

If you encounter issues or want to explore more advanced workflows:

- **Documentation**: Visit [/docs/integrations](/docs/integrations) for detailed guides.
- **Support**: Submit a ticket via the 7en.ai dashboard.
- **Community**: Join the 7en.ai Discord for peer support.
- **Tutorials**: Watch Zapier integration videos on the 7en.ai learning hub.

### Next Steps

1. [Explore more integrations →](/integrations)
2. [Manage your agent’s leads →](/agents/leads)
3. [Check workflow performance →](/analytics)

{% /section %}