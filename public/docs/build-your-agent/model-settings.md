---
type: docs
title: Model Settings
order: 2
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "Docs", href: "/docs/intro" }
  - { label: "Build Your Agent", href: "" }
  - { label: "Model Settings" }
prev:
  href: /docs/build-your-agent/basic-settings
  title: "Basic Settings"
next:
  href: /docs/build-your-agent/appearance
  title: "Appearance"
---
# Model Settings

{% section id="model-settings" title="Overview" %}

The Model Settings section allows you to configure the AI model that powers your chatbot. Choosing the right model and adjusting its parameters ensures that responses are aligned with your business needs—whether that’s creative, factual, concise, or conversational.

{% section id="configuration-fields" title="Configuration Fields" %}

| Field | Description | Example |
|-------|-------------|---------|
| **Model** | Selects the AI model provider and version. Available options include:{% br /%}• **OpenAI** (e.g., GPT 5.2){% br /%}• **Groq** (e.g., Llama){% br /%}• **Google Gemini** (e.g., Gemini 3){% br /%}• **Mistral** (e.g., Mistral Large) | `OpenAI GPT 5.2` |
| **Temperature** | Controls the creativity vs. consistency of the model’s responses.{% br /%}• **Lower values** (e.g., `0.2`) → More factual, deterministic.{% br /%}• **Higher values** (e.g., `0.9`) → More creative, varied.{% br /%}• **Recommended:** `0.5`–`0.7` for balanced responses. | `0.7` |

{% callout type="tip" title="Best Practices for Model Settings" collapsible=true %}

| Setting | Best Practice |
|---------|---------------|
| **Model Selection** | Use `OpenAI models` for advanced reasoning and nuanced conversations. |
| | Choose `Google Gemini` for knowledge-intensive tasks with access to Google-trained LLMs. |
| | Select `Mistral models` for lightweight, cost-efficient, or high-speed interactions. |
| **Temperature** | `0.2` – `0.4`: Best for factual Q&A, customer support, and knowledge-base lookups. |
| | `0.5` – `0.7`: Balanced setting for most business chatbots. |
| | `0.8` – `1.0`: Best for brainstorming, creative writing, or casual conversational tone. |

{% /callout %}

{% section id="example-use-cases" title="Example Use Cases" %}

| Use Case | Model | Temperature |
|----------|-------|-------------|
| **Customer Support Bot** | `OpenAI GPT 5.2` | `0.7` |
| **Creative Marketing Assistant** | `Groq Llama` | `0.9` |
| **Research Helper** | `Google Gemini` | `0.6` |
| **Fast FAQ Bot** | `Mistral Large` | `0.4` |

{% /section %}