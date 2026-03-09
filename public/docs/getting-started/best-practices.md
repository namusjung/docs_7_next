---
title: "Best Practices"
type: "docs"
order: 3
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "Docs", href: "/docs/intro" }
  - { label: "Getting Started", href: "" }
  - { label: "Best Practices" }
prev:
  title: "Quick Start Guide"
  href: "/docs/getting-started/quick-start"
next:
  title: "Response Quality"
  href: "/docs/getting-started/response-quality"
---

# Best Practices

Getting the most out of your 7en agent comes down to a few core areas: clear instructions, high-quality data, and continuous improvement. This page covers the key practices that separate great agents from mediocre ones.

{% section id="instructions" title="Write Clear Instructions" %}

Your agent's **System Prompt** is the single biggest lever for improving response quality. A well-written prompt produces consistent, on-brand answers. A vague one produces unpredictable results.

**Do:**
- Be specific about the agent's role. *"You are a customer support agent for Acme Corp, helping users with billing, account access, and product questions."*
- Define what the agent should **not** do. Add clear Don'ts in the Guidelines section — for example, *"Do not discuss competitor products"* or *"Do not provide legal advice."*
- Set the tone explicitly. *"Respond in a friendly, concise manner. Avoid jargon."*

**Avoid:**
- Overly long prompts that contradict themselves.
- Leaving the system prompt blank — the agent will default to generic behaviour.
- Writing instructions that conflict with your knowledge base content.

{% /section %}

{% section id="data-quality" title="Prioritise Data Quality" %}

Your agent answers from what you give it. Garbage in, garbage out.

**Use accurate, up-to-date sources.** Stale documentation causes the agent to give outdated answers. Set a regular review schedule for your knowledge sources — especially for pricing pages, product specs, and policy documents.

**Be specific, not broad.** A focused help center article outperforms a 200-page PDF where 90% is irrelevant. Break large documents into topic-specific chunks where possible.

**Remove conflicting information.** If two sources say different things about the same topic, the agent may hallucinate a blend of both. Audit your sources regularly from the Knowledge Management section.

**Prefer structured content.** Numbered steps, bullet lists, and clear headings are easier for the AI to extract and present accurately than dense paragraphs.

{% /section %}

{% section id="model-selection" title="Choose the Right Model" %}

Different tasks benefit from different models. As a starting point:

| Use case | Recommended setting |
|---|---|
| Customer support / FAQ | Lower temperature (0.2–0.4), faster model |
| Sales or lead generation | Medium temperature (0.5–0.6) |
| Creative or long-form content | Higher temperature (0.7–0.9) |
| Technical documentation | Lower temperature (0.1–0.3) for precision |

You can change the model and temperature at any time from **Model Settings** without retraining.

{% /section %}

{% section id="testing" title="Test Before You Deploy" %}

Never deploy an untested agent. Use the **Playground** to run your agent through real scenarios before going live.

Test for:
- **Accuracy** — Does it answer from your knowledge base correctly?
- **Scope** — Does it refuse questions outside its purpose?
- **Tone** — Does it sound like your brand?
- **Edge cases** — What happens when a user asks something ambiguous or off-topic?

Keep a short list of 10–15 test questions that cover your most common and most critical use cases. Re-run them after every major knowledge base update.

{% /section %}

{% section id="iteration" title="Iterate Continuously" %}

Launching your agent is the beginning, not the end.

**Review conversations regularly.** The Conversations section shows what real users are asking. Look for patterns — repeated questions with poor answers signal gaps in your knowledge base.

**Update sources after product changes.** Whenever your product, pricing, or policy changes, update the relevant knowledge sources and retrain the agent the same day.

**Refine your system prompt over time.** If you notice the agent going off-topic or using the wrong tone, tighten the instructions rather than adding more data.

{% /section %}
