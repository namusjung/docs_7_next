---
type: faq
title: Frequently Asked Questions
order: 1
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "FAQ" }
---

# Frequently Asked Questions

---

## Getting Started

**What is 7en.ai?**

7en.ai is an AI agent platform that lets you build, train, and deploy intelligent AI agents for your business. Whether you need 24/7 customer support, automated lead qualification, or instant FAQ handling, 7en.ai lets you create agents tailored to your brand, workflows, and data — no coding required.

**How quickly can I deploy an AI agent?**

You can have a functional AI agent running in minutes. Sign up, complete your workspace profile, connect a knowledge source, and your agent is ready to go.

**Do I need technical skills to use 7en.ai?**

No. The platform is designed for both technical and non-technical users. Non-developers can train agents through a visual interface, while developers can leverage the full REST API and webhook integrations for deeper customization.

**Who is 7en.ai for?**

7en.ai is built for businesses of all sizes across industries including Financial Services, Healthcare, E-commerce, Hospitality, Education, Manufacturing, Professional Services, and Technology.

---

## Features & Capabilities

**What can I train my AI agent on?**

You can train agents on documents (PDF, DOC, DOCX, TXT), website URLs, raw text snippets, structured Q&A pairs, and folder-based knowledge sources. The Knowledge Base section lets you manage all training data in one place.

**Can multiple team members collaborate on the same workspace?**

Yes. You can invite collaborators to your workspace and assign role-based permissions. For example, only users with the `MANAGE_API_KEY` permission can create or delete API keys — others get view-only access.

**What integrations does 7en.ai support?**

7en.ai integrates with a range of third-party services. Check the Integrations section of your dashboard for the current list of available connectors.

**Can I test my agent before deploying it?**

Yes. The Agent Playground lets you test agent behavior, tone, and responses before going live.

**Can I customize how my agents behave?**

Yes. During setup you can configure default behaviors, tone, and handoff workflows for each agent. These can be adjusted at any time from the Agent Builder.

---

## API & Programmatic Access

**Does 7en.ai have an API?**

Yes. You can access 7en programmatically via the REST API. Full documentation is available in the [API Reference](/api/api-reference/introduction).

**How do I create an API key?**

Go to **Settings → Business → API Keys** and click **Create new**. You'll need to be on a paid plan and have the `MANAGE_API_KEY` permission. API keys support expiry periods of 1 week, 15 days, 1 month, or 3 months.

**Is my API key shown after creation?**

Yes, but only once. After creating or refreshing a key, copy and store it securely — it will not be displayed again.

**Can I refresh an expired API key?**

Yes. From the API Keys table, click the refresh icon next to any key, choose a new expiry period, and confirm. The old key is immediately invalidated.

**Are API keys tied to my account permissions?**

Yes. API keys carry the same permissions as the account that created them. Keep them secure and never share them publicly.

---

## Plans & Pricing

**Is API access available on all plans?**

No. API key creation is available on paid plans only. Users on a free plan will see an upgrade prompt in the API Keys section.

**What happens when I upgrade my plan?**

API access and other advanced features are unlocked immediately upon upgrading. You can upgrade from **Settings → Business → Pricing**.

---

## Security & Privacy

**How is my data stored?**

Your data is stored securely in the cloud with enterprise-grade security standards applied.

**Who can manage API keys in my workspace?**

Only workspace members with the `MANAGE_API_KEY` permission can create, refresh, or delete API keys. Members without this permission have view-only access to the API Keys section.

---

## Troubleshooting

**My agent is giving poor responses — what should I do?**

Check that your knowledge sources are up to date and cover the topics your users ask about. Add more specific Q&A pairs to handle edge cases, and use the Agent Playground to test and iterate on agent behavior.

**I can't create an API key — why?**

Two common reasons: (1) your workspace is on a free plan — upgrade to a paid plan to enable API access; or (2) your role doesn't have the `MANAGE_API_KEY` permission — ask a workspace admin to grant it.

**I lost my API key — what should I do?**

If you didn't save your key after creation, you'll need to refresh it. Go to **Settings → Business → API Keys**, click the refresh icon, and a new key will be generated. The old key will be permanently invalidated.

**I'm having trouble with an integration — where do I get help?**

Check the Integrations section of your dashboard for setup guides, or contact 7en.ai support.
