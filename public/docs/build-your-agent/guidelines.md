---
type: docs
title: Guidelines
order: 4
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "Docs", href: "/docs/intro" }
  - { label: "Build Your Agent", href: "" }
  - { label: "Guidelines" }
prev:
  href: /docs/build-your-agent/appearance
  title: "Appearance"
next:
  href: /docs/build-your-agent/escalation
  title: "Escalation"
---
#  Guidelines

{% section id="behavior-guidelines" title="Overview" %}

The Behavior Guidelines section defines how your chatbot interacts with users. This is where you configure the agent’s personality, tone, and boundaries to ensure consistent, brand-appropriate responses.

{% /section %}

{% section id="agent-type-templates" title="Agent Type Templates" %}

Each Agent Type comes with a ready-to-use system prompt template. This can be applied as-is or modified to suit your requirements.

{% callout type="tip" title="Generate from Knowledge Sources" %}
Instead of writing a system prompt from scratch, use the **Prompt Generate** icon in the System Prompt field. The platform analyzes your uploaded knowledge sources — documents, websites, spreadsheets — and automatically generates a tailored system prompt that reflects your content, domain, and tone. This is the fastest way to get an accurate, context-aware prompt for your agent.
{% /callout %}

**Example: General Assistant**
> "Respond with accurate, relevant, and up-to-date information. Maintain a friendly, helpful, and conversational tone. Respect user privacy and avoid unnecessary personal data requests. Provide balanced perspectives on complex topics. Use simple, clear language."

_Example interaction starter:_
> “I’d be happy to help you with that. Based on the information available, here’s what I can tell you…”

{% callout type="tip" title="Best Practices for Behavior Guidelines" collapsible=true %}

| Category | Best Practice |
|----------|---------------|
| **Choose the Agent Type** | **General Assistant:** For multipurpose, broad coverage. |
| | **Sales Agent:** To drive conversions, product recommendations, and upselling. |
| | **Life Coach:** For motivational and personal guidance (non-clinical). |
| | **Tech Expert:** For troubleshooting and technical queries. |
| | **Travel Agent:** For itinerary planning, destination tips, and booking guidance. |
| **Customize the Prompt** | Start with the provided template, then tailor it to your brand’s voice. |
| | _Example:_ Make a Sales Agent sound more persuasive but still polite. |
| **Generate from Knowledge** | Use it to auto-generate a system prompt based on your uploaded knowledge sources. Ideal when you have rich documentation but aren’t sure how to phrase the prompt. |
| **Use Do’s and Don’ts** | **Do:** Add behaviors for brand alignment (e.g., “Always thank the user”). |
| | **Don't:** Add rules for compliance (e.g., “Don’t provide investment recommendations”). |

{% /callout %}

{% section id="example-configurations" title="Example Configurations" %}

| Use Case | Configuration Details |
|----------|-----------------------|
| **E-commerce Bot (Sales Agent)** | **Do's:** Recommend related products • Offer discounts when available {% br /%} **Don'ts:** Never disclose internal pricing strategy |
| **Health Bot (General Assistant)** | **Do's:** Provide links to trusted resources {% br /%} **Don'ts:** Never provide diagnosis or prescriptions |
| **Travel Bot (Travel Agent)** | **Do's:** Suggest attractions, flights, hotels {% br /%} **Don'ts:** Avoid making financial commitments |


{% /section %}