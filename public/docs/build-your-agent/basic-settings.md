---
type: docs
title: Build your agent
order: 2
next: 
  href: /docs/integrations
  title: "Integrations"
prev: 
  href: /docs/getting-started/introduction
  title: "Getting Started with 7en.ai"
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "Docs", href: "/docs/getting-started/introduction" }
  - { label: "Tutorials", href: "/docs/tutorials" }
  - { label: "Build Your Agent"}
---


{% section id="build-agent" %}

This tutorial guides you through the process of configuring your AI agent on the 7en.ai platform. Learn how to set up basic settings, model configurations, and widget appearance to create a chatbot tailored to your business needs.

{% /section %}

{% section id="basic-settings" title="Basic Settings" %}

The Basic Settings section allows you to define the core identity and purpose of your chatbot agent. This is the first step in creating a new agent.

{% callout type="tip" title="Best Practices for Basic Settings" collapsible=true %}

| Setting         | Best Practice                                                                 |
|-----------------|-------------------------------------------------------------------------------|
| **Agent Name**  | Choose a clear and descriptive name for internal tracking (e.g., `CustomerSupportBot2025`). |
| **Display Name**| Set a friendly, brand-aligned name for user interaction (e.g., `Support Buddy`).       |
| **Description** | Summarize the agent’s purpose concisely, such as `Handles customer support inquiries` or `Generates sales leads.` |

{% /callout %}

{% /section %}

{% section id="model-settings" title="Model Settings" %}

The Model Settings section enables you to configure the AI model powering your chatbot. Selecting the appropriate model and tuning its parameters ensures responses align with your use case, whether you need factual, concise, or creative outputs.

{% callout type="tip" title="Best Practices for Model Settings" collapsible=true %}

| Setting            | Best Practice                                                                 |
|--------------------|-------------------------------------------------------------------------------|
| **Model Selection**| Use `OpenAI GPT-4 Turbo` or `Anthropic Claude` for advanced reasoning and nuanced conversations. |
|                    | Choose `Google Gemini` for knowledge-intensive tasks leveraging Google-trained LLMs. |
|                    | Select `Mistral models` for lightweight, cost-efficient, or high-speed interactions. |
| **Temperature**    | `0.2` – `0.4` : Ideal for factual Q&A, customer support, or knowledge-base lookups. |
|                    | `0.5` – `0.7` : Balanced for most business chatbots.                              |
|                    | `0.8` – `1.0` : Suitable for brainstorming, creative writing, or casual tones.    |
| **Max Tokens**     | `500` – `1,000` : For concise answers, such as FAQs.                              |
|                    | `3,000` – `8,000` : For detailed explanations or document summarization.          |

{% /callout %}

### Example Use Cases

| Use Case                     | Model                | Temperature | Max Tokens |
|------------------------------|----------------------|-------------|------------|
| Customer Support Bot         | `OpenAI GPT-4 Turbo`   | `0.3`         | 1,000      |
| Creative Marketing Assistant | `Anthropic Claude`     | `0.9`         | 3,000      |
| Research Helper             | `Google Gemini`        | `0.6`         | 5,000      |
| Fast FAQ Bot                | `Mistral Large`        | `0.4`        | 800        |

{% /section %}

{% section id="widget-appearance" title="Widget Appearance" %}

The Appearance Settings section lets you customize the visual look and feel of your chatbot widget to align with your brand identity and enhance user experience.

{% callout type="tip" title="Best Practices for Appearance Settings" collapsible=true %}

| Setting                     | Best Practice                                                                 |
|-----------------------------|-------------------------------------------------------------------------------|
| **Brand Alignment**         | Use **primary and secondary colors** that match your brand for consistency.   |
|                             | Select a **font family** that aligns with your website or product design.     |
| **User Experience**         | Position the **chat button** in an accessible location, typically **Bottom Right**. |
|                             | Keep **chat button text** short and action-oriented (e.g., “Chat Now”, “Support”). |
| **Professionalism & Trust** | Add a **custom avatar/logo** to personalize the chatbot.                     |
|                             | Include a **disclaimer message** if user data may be stored or monitored.     |
{% /callout %}

### Example Configurations

| Field              | Description                                                                 | Example           |
|--------------------|-----------------------------------------------------------------------------|-------------------|
| **Primary Color**      | The main color used in the chat widget, including the chat header and button background. Set using a HEX color code. | #3b82f6 (Blue)    |
| **Secondary Color**    | The accent/background color used for secondary UI elements inside the chat widget. | #ffffff (White)   |
| **Font Family**        | The font style applied to all chatbot text for consistency with your brand's typography. | Inter, Roboto, Arial |
| **Chat Button Position** | Defines where the chat widget button appears on your website. Options: Bottom Right, Bottom Left. | Bottom Right      |
| **Chat Button Text**   | Custom text displayed on the chat button. Leaving this empty shows only the chat icon. | Ask Us            |
| **Avatar Image**       | Upload a custom image/logo to represent the chatbot inside the widget header. | Company logo or bot avatar |
| **Disclaimer Message** | A short message displayed to users before or during the chat session. Commonly used for legal, compliance, or consent notices. | This chat may be monitored for quality purposes. |

{% /section %}

{% section id="next-steps" title="Next Steps" %}

Now that you’ve configured your agent, explore these resources to enhance its functionality:

- [Add Knowledge Sources →](/knowledge/upload)
- [Configure Integrations →](/integrations)
- [Monitor Conversations →](/conversations)
- [Review Analytics →](/docs/analytics)

{% /section %}