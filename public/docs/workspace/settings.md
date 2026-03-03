---
title: "Workspace Settings"
type: "docs"
order: 2
---

# Workspace Settings

Workspace Settings controls your account-level configuration — separate from individual agent settings. Access it from the gear icon in the bottom-left of the dashboard.

{% section id="general" title="General" %}

**Workspace name** — The name shown across the dashboard and in invitation emails. Update it here if your company name or branding changes.

**Workspace URL** — Your unique 7en subdomain (e.g., `acme.7en.ai`). This is set at creation and cannot be changed without contacting support.

{% /section %}

{% section id="api-keys" title="API Keys" %}

API keys allow you to interact with the 7en platform programmatically — creating agents, managing knowledge sources, and triggering retraining via the REST API.

**Creating a key:**
1. Go to **Workspace Settings** → **API Keys**
2. Click **Create API Key**
3. Give the key a descriptive name (e.g., "Production", "CI/CD Pipeline")
4. Copy the key immediately — it will not be shown again

**Managing keys:**
- Each key is listed with its name, creation date, and last-used date
- Click **Revoke** next to a key to permanently disable it
- Create separate keys for different environments (development, staging, production)

{% callout type="warning" title="Keep keys secret" %}
API keys grant full access to your workspace. Never commit them to source control or expose them in client-side code. If a key is compromised, revoke it immediately and create a new one.
{% /callout %}

For full API documentation, see the [API Reference →](/api/api-reference/introduction)

{% /section %}

{% section id="billing" title="Billing & Subscription" %}

The Billing section shows your current plan, usage, and payment details.

**Plan overview:**
- Current plan name and billing cycle (monthly / annual)
- Usage indicators for agents, messages, and training storage
- Upgrade or downgrade options

**Add-ons** — Expand your plan with optional extras such as additional agents, increased message limits, or custom domain support.

**Payment details** — Update your credit card or billing email. All payments are processed securely.

**Invoices** — Download past invoices as PDF for accounting purposes.

{% /section %}

{% section id="audit-logs" title="Audit Logs" %}

{% callout type="info" title="Enterprise plan feature" %}
Audit logs are available on the Enterprise plan only.
{% /callout %}

Audit logs record every significant action taken in your workspace — who did what, and when. This includes:
- Agent creation, updates, and deletion
- Knowledge source changes and training runs
- Team member invitations and role changes
- API key creation and revocation
- Billing changes

Use audit logs for security reviews, compliance requirements, or debugging unexpected changes.

{% /section %}
