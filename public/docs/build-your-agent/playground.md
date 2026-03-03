---
title: "Playground"
type: "docs"
order: 7
---

# Playground

The Playground is a private testing environment where you can interact with your agent exactly as a real user would — before it goes live. Use it to validate accuracy, tune model settings, and catch problems before deployment.

{% section id="accessing" title="Accessing the Playground" %}

1. Open your agent from the [7en Dashboard](https://app.7en.ai)
2. Click **Playground** in the left navigation panel

The chat interface loads with your agent's current configuration — the same knowledge base, system prompt, and model settings that will be used in production.

{% /section %}

{% section id="testing" title="Testing Your Agent" %}

The Playground behaves exactly like the live chat widget. Type any message and the agent responds using your trained knowledge sources.

**What to test:**

- **Core questions** — The most common things your users will ask. Does the agent answer them correctly and concisely?
- **Edge cases** — Ambiguous, off-topic, or adversarial questions. Does the agent stay in scope?
- **Escalation triggers** — Does the agent correctly offer to escalate when it cannot help?
- **Tone and persona** — Does the response match your brand guidelines?

Keep a saved list of 10–15 test questions that represent your most critical use cases. Re-run them after every training update.

{% /section %}

{% section id="model-settings" title="Adjusting Model Settings in the Playground" %}

You can change the model and temperature directly inside the Playground without affecting the live agent. This makes it easy to experiment and compare.

**Model** — Switch between available LLMs (GPT-4o, Claude, Gemini, and others depending on your plan) to compare how each handles your content.

**Temperature** — Controls how creative vs. deterministic the responses are:
- **0.1 – 0.3**: Precise, consistent answers. Best for support and FAQ agents.
- **0.4 – 0.6**: Balanced. Good for general-purpose assistants.
- **0.7 – 1.0**: More varied, expressive responses. Better for creative or conversational agents.

Changes made in the Playground are temporary. To apply them permanently, save the settings in **Build Agent → Model Settings**.

{% /section %}

{% section id="comparison" title="Side-by-Side Comparison" %}

If you're deciding between two model configurations, you can run both in parallel to compare responses side by side.

1. Open the Playground
2. Enable **Compare Mode** from the toolbar
3. Select a second model or temperature setting
4. Ask the same questions to both — responses appear in two columns

This is especially useful when upgrading to a newer model and verifying that response quality improves before switching.

{% /section %}

{% section id="clearing" title="Clearing the Conversation" %}

Playground conversations are not saved as real chat logs. To start fresh:
- Click **Clear conversation** at the top of the chat window

This resets the context window, which is useful for testing how the agent handles a new user session with no prior context.

{% /section %}
