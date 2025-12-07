---
type: docs
title: Model Settings
order: 2
next: 
  href: /docs/integrations
  title: "Integrations"
prev: 
  href: /docs/getting-started/introduction
  title: "Getting Started with 7en.ai"
---
{% section id="model-settings" title="Model Settings" %}

The Model Settings section allows you to configure the AI model that powers your chatbot. Choosing the right model and adjusting its parameters ensures that responses are aligned with your business needs—whether that’s creative, factual, concise, or conversational.

### Configuration Fields

| Field | Description | Example |
|-------|-------------|---------|
| **Model** | Selects the AI model provider and version. Available options include:<br>• **OpenAI** (e.g., GPT-4 Turbo)<br>• **Anthropic** (e.g., Claude 3.5 Sonnet)<br>• **Google Gemini** (e.g., Gemini 1.5 Pro)<br>• **Mistral** (e.g., Mistral Large) | `OpenAI GPT-4 Turbo` |
| **Temperature** | Controls the creativity vs. consistency of the model’s responses.<br>• **Lower values** (e.g., `0.2`) → More factual, deterministic.<br>• **Higher values** (e.g., `0.9`) → More creative, varied.<br>• **Recommended:** `0.5`–`0.7` for balanced responses. | `0.7` |
| **Max Tokens** | Defines the maximum length of the model’s response in tokens (1 token ≈ 4 characters).<br>• **More tokens:** Allow for longer, detailed responses.<br>• **Fewer tokens:** Restrict output length for concise answers.<br>_Note: The maximum available depends on the selected model._ | `4,000` tokens |

{% callout type="tip" title="Best Practices for Model Settings" collapsible=true %}

| Setting | Best Practice |
|---------|---------------|
| **Model Selection** | Use `OpenAI GPT-4 Turbo` or `Anthropic Claude` for advanced reasoning and nuanced conversations. |
| | Choose `Google Gemini` for knowledge-intensive tasks with access to Google-trained LLMs. |
| | Select `Mistral models` for lightweight, cost-efficient, or high-speed interactions. |
| **Temperature** | `0.2` – `0.4`: Best for factual Q&A, customer support, and knowledge-base lookups. |
| | `0.5` – `0.7`: Balanced setting for most business chatbots. |
| | `0.8` – `1.0`: Best for brainstorming, creative writing, or casual conversational tone. |

{% /callout %}

### Example Use Cases

| Use Case | Model | Temperature |
|----------|-------|-------------|
| **Customer Support Bot** | `OpenAI GPT-4 Turbo` | `0.7` |
| **Creative Marketing Assistant** | `Anthropic Claude` | `0.9` |
| **Research Helper** | `Google Gemini` | `0.6` |
| **Fast FAQ Bot** | `Mistral Large` | `0.4` |

{% /section %}