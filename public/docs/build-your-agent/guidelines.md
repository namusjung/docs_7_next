---
type: docs
title: Guidelines
order: 4
next: 
  href: /docs/integrations
  title: "Integrations"
prev: 
  href: /docs/getting-started/introduction
  title: "Getting Started with 7en.ai"
---
{% section id="behavior-guidelines" title="Guidelines" %}

The Behavior Guidelines section defines how your chatbot interacts with users. This is where you configure the agent’s personality, tone, and boundaries to ensure consistent, brand-appropriate responses.

### Configuration Fields

| Field | Description | Example |
|-------|-------------|---------|
| **Agent Type** | Selects a predefined role for the chatbot. Each agent type comes with a recommended system prompt template. Options include: - General Assistant - Sales Agent - Language Tutor - Tech Expert - Life Coach - Travel Agent | `General Assistant` |
| **System Prompt** | The foundational instruction that guides the chatbot’s behavior. You can: 1. Use the default template provided. 2.  Customize the text to fine-tune tone, scope, and style. | “You are a helpful General Assistant designed to provide accurate...” |
| **Do’s** | Add specific behaviors the chatbot should **always** follow. | Always greet the user politely. |
| **Don’ts** | Add specific behaviors the chatbot should **avoid**. | Do not provide legal or medical advice. |

### Agent Type Templates

Each Agent Type comes with a ready-to-use system prompt template. This can be applied as-is or modified to suit your requirements.

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
| **Use Do’s and Don’ts** | **Do:** Add behaviors for brand alignment (e.g., “Always thank the user”). |
| | **Don't:** Add rules for compliance (e.g., “Don’t provide investment recommendations”). |

{% /callout %}

### Example Configurations

| Use Case | Configuration Details |
|----------|-----------------------|
| **E-commerce Bot (Sales Agent)** | **Do's:** • Recommend related products • Offer discounts when available /n **Don'ts:** • Never disclose internal pricing strategy |
| **Health Bot (General Assistant)** | **Do's:** • Provide links to trusted resources — **Don'ts:** • Never provide diagnosis or prescriptions |
| **Travel Bot (Travel Agent)** | **Do's:** • Suggest attractions, flights, hotels — **Don'ts:** • Avoid making financial commitments |


{% /section %}