---
type: docs
title: Slack
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "Docs", href: "/docs/intro" }
  - { label: "Integrations", href: "" }
  - { label: "Slack" }
---

{% image src="/img/banner-zoho.png" alt="7en ai x Zoho" lightbox=false /%}

{% section id="slack-introduction" title="Introduction to Slack Integration" %}

7en provides a seamless way to embed your intelligent AI agent directly into your Slack workspace. By integrating 7en, you unlock the full potential of your custom knowledge base right within your team's daily communication channel.

In just a few minutes, you can deploy a 7en agent across your company’s Slack channels. This empowers your employees to get instant answers, resolve technical issues, and access critical information without ever leaving the chat window—supercharging your workspace with round-the-clock automated support.

{% /section %}

{% section id="why-connect" title="Why create a 7en Slack Bot?" %}

Integrating your 7en agent with Slack transforms it from a website widget into a powerful internal team member. Here is why you should enable this channel:

**Access Your Custom Knowledge Base Instantly**: Your Slack bot isn't just a generic AI; it accesses the specific URLs, PDFs, and documents you trained it on in 7en. Whether it's an employee handbook, technical documentation, or sales scripts, your team can query this proprietary data directly inside Slack without searching through drive folders or wikis.

**Stop Context Switching**: Employees lose time constantly switching tabs to find answers. With 7en, the answer is just a Direct Message or an @mention away. By bringing the knowledge source to where the conversation happens, you streamline workflows and keep your team focused.

**Automate Internal Helpdesk Support**: Turn your 7en agent into an always-on IT or HR assistant. Instead of human agents answering the same "How do I reset my password?" or "What is the holiday policy?" questions repeatedly, your Slack bot handles these routine queries instantly, freeing up your team to focus on complex tasks.

{% /section %}

{% section id="connection-guide" title="Step-by-Step Connection Guide" %}

Follow these quick steps to connect Slack to 7en.ai, with visual aids to simplify the process.

### Step 1: Navigate to Integrations
1. Log in to your 7en.ai account.
2. Go to the [Integrations](https://app.7en.ai/integrations) page.
3. Locate the **Slack** under Messaging and click *Configure* button.

{% image src="/img/slack/choose-slack.png" alt="Screenshot of 7en.ai Integrations page with Slack option" caption="Selecting Slack integration in 7en.ai" /%}

### Step 2: Slack App Configuration
1. Enter Client ID, Client Secret & Signing Secret. 
2. Click *Save Configuration* button to save the details.

{% callout type="warning" title="Attention" %}
You must have a Slack app to get the required details for configuration. Don't have Slack app? [Learn to create](/docs/integrations/slack#create-slack-app)
{% /callout %}

{% image src="/img/slack/configuration.png" alt="Screenshot of Slack integration page with Connect button" caption="Slack app details configuration" /%}

### Step 3: Connect to Slack
1. After configuration, click *Connect to Slack* button to connect with your Slack Workspace.

{% image src="/img/slack/connect-slack.png" alt="Screenshot of Slack workspace connection section" caption="Connect to your Slack workspace" /%}

2. Review the permissions requested by 7en.ai and click *Allow* button.

{% image src="/img/slack/allow-slack.png" alt="Screenshot of Permission requested by Slack Workspace" caption="Allow requested permissions" /%}

{% /section %}

{% section id="create-slack-app" title="Create a Slack App" %}

### Step 1: Create a New Slack App
1. Navigate to api.slack.com/apps and sign in.
{% image src="/img/slack/apps.png" alt="Screenshot of Your apps in Slack Workspace" caption="Your apps page of Slack" /%}

2. Click Create New App and select From scratch.
{% image src="/img/slack/from-scratch.png" alt="Screenshot of app creation from scratch in Slack Workspace" caption="Choose From Scratch option" /%}

3. Enter your App Name (e.g., "Support Bot" or "7en Assistant") and select your Workspace.
{% image src="/img/slack/enter-name.png" alt="Screenshot of app name and workspace form" caption="Enter app name and select workspace" /%}

4. Click *Create App* button to generate your App ID.

### Step 2: Configure Event Subscriptions 

{% callout type="info" %}
To allow the bot to "hear" messages, you must enable events.
{% /callout %}

{% /section %}

### Next Steps

1. [Test your Zoho Desk integration →](/integrations/test)
2. [Configure agent ticketing settings →](/agents/settings)
3. [Monitor ticket interactions →](/conversations)

{% /section %}