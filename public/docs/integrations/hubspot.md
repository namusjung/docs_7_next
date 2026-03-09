---
title: "HubSpot"
type: "docs"
order: 4
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "Docs", href: "/docs/intro" }
  - { label: "Integrations", href: "" }
  - { label: "HubSpot" }
prev:
  title: "Zoho"
  href: "/docs/integrations/zoho"
next:
  title: "Slack"
  href: "/docs/integrations/slack"
---

# HubSpot

Connect 7en to HubSpot to automatically create CRM contacts and tickets from agent conversations. When a user interacts with your agent and shares their details, that data flows directly into HubSpot — no manual entry required.

{% section id="why" title="Why Connect HubSpot?" %}

**Capture leads automatically.** Every conversation where a user shares their name or email can create or update a contact record in HubSpot without your team lifting a finger.

**Log support activity.** When the agent escalates a conversation, a HubSpot ticket is created automatically with the full conversation transcript attached.

**Sync your CRM.** Keep your sales and support data in one place. 7en pushes conversation context to HubSpot so your team always has the full picture before reaching out.

{% /section %}

{% section id="prerequisites" title="Prerequisites" %}

- A HubSpot account (any plan — Free, Starter, Professional, or Enterprise)
- A trained 7en agent with escalation configured
- Admin access to your HubSpot account to generate a Private App token

{% /section %}

{% section id="setup" title="Step-by-Step Setup" %}

### Step 1: Create a HubSpot Private App

1. In HubSpot, go to **Settings** → **Integrations** → **Private Apps**
2. Click **Create a private app**
3. Give it a name (e.g., "7en Integration")
4. Under **Scopes**, enable:
   - `crm.objects.contacts.write`
   - `crm.objects.tickets.write`
   - `crm.objects.tickets.read`
5. Click **Create app** and copy the **Access Token**

### Step 2: Connect in 7en

1. Go to the [Integrations](https://app.7en.ai/integrations) page in 7en
2. Find **HubSpot** and click **Configure**
3. Paste your HubSpot **Access Token**
4. Click **Save Configuration**

7en will verify the token and confirm the connection is active.

### Step 3: Configure What Gets Synced

Once connected, choose what triggers a sync:

- **Create contact** — when a user provides their email address during a conversation
- **Create ticket** — when the agent escalates a conversation to a human
- **Update existing contact** — if the email matches a contact already in HubSpot

{% /section %}

{% section id="tickets" title="How Tickets Are Created" %}

When the agent escalates a conversation:

1. A new ticket is created in HubSpot under **Service** → **Tickets**
2. The ticket includes:
   - Subject: the user's first message
   - Description: full conversation transcript
   - Contact: linked to the matching HubSpot contact (or a new one is created)
   - Source: "7en AI Agent"
3. Your team is notified according to your HubSpot ticket routing rules

{% /section %}

{% section id="best-practices" title="Best Practices" %}

- **Map custom fields.** If you collect custom data (e.g., company name, product type) via your agent, configure field mapping in the integration settings so it populates the right HubSpot properties.
- **Avoid duplicate contacts.** 7en matches on email address — ensure your users always provide an email before escalation to prevent duplicate records.
- **Test with a real conversation.** After setup, run a test conversation through the Playground, trigger an escalation, and verify the ticket appears in HubSpot.

{% /section %}
