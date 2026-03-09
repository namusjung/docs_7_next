---
title: "Response Quality"
type: "docs"
order: 4
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "Docs", href: "/docs/intro" }
  - { label: "Getting Started", href: "" }
  - { label: "Response Quality" }
prev:
  title: "Best Practices"
  href: "/docs/getting-started/best-practices"
next:
  title: "Basic Settings"
  href: "/docs/build-your-agent/basic-settings"
---

# Response Quality

If your agent is giving inaccurate, incomplete, or off-topic answers, this guide walks you through the most effective ways to fix it.

{% section id="diagnose" title="Diagnose the Problem First" %}

Before changing anything, identify what kind of problem you're seeing:

| Symptom | Likely cause |
|---|---|
| Agent says "I don't know" for things it should know | Knowledge source missing or not trained |
| Agent gives outdated information | Source content is stale — needs updating and retraining |
| Agent goes off-topic | System prompt too permissive or missing scope limits |
| Agent gives inconsistent answers | Conflicting content across multiple sources |
| Answers are too long or too short | Temperature or max tokens need adjustment |
| Wrong tone or personality | System prompt needs a clearer persona definition |

{% /section %}

{% section id="knowledge" title="Fix Your Knowledge Sources" %}

Most quality issues trace back to the knowledge base, not the model.

**Check coverage.** Go to **Knowledge Management** and look at what sources are trained. If users are asking about something not covered, add a source for it and retrain.

**Check training status.** A source that failed to train is invisible to the agent. Re-upload it and trigger a new training run.

**Remove duplicate or conflicting sources.** If you have two documents that say different things about the same topic, consolidate them into one authoritative version.

**Add Q&A pairs for stubborn issues.** If the agent keeps getting a specific question wrong despite having relevant content, add an explicit Q&A pair in plain text or upload a excel sheet containing the Q&A pairs. Direct Q&A pairs take priority over scraped content.

{% /section %}

{% section id="prompts" title="Refine Your System Prompt" %}

The system prompt controls how the agent uses its knowledge. Small changes can have a big impact.

**Add explicit scope boundaries:**
> *"Only answer questions about [your product]. If a user asks about anything outside this scope, politely tell them that you cannot answer the question."*

**Specify citation behaviour:**
> *"When answering, reference the relevant section of our help center where applicable."*

**Control response length:**
> *"Keep answers concise — no more than 3 short paragraphs unless the question requires a step-by-step process."*

**Improve tone consistency:**
> *"Always use first person plural ('we', 'our'). Never use technical jargon unless the user has used it first."*

{% /section %}

{% section id="model-tuning" title="Adjust Model Settings" %}

**Temperature** is the most impactful setting for response consistency:
- Drop it to **0.1–0.3** for factual support agents where accuracy matters most.
- Raise it to **0.6–0.8** if answers feel robotic and you want more natural phrasing.

Changes to model settings take effect immediately — no retraining needed.

{% /section %}

{% section id="retrain" title="Retrain After Every Change" %}

Adding or editing knowledge sources does **not** automatically update the agent. You must retrain it.

After updating any source:
1. Go to **Agent Builder**
2. Click **Train Agent**
3. Wait for the training status to show **Trained** before testing

If you've made several changes, batch them all before retraining to avoid multiple cycles.

{% /section %}
