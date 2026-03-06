---
type: api
title: Quick Start
order: 3
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "API Reference", href: "/api/api-reference/introduction" }
  - { label: "Quick Start" }
---

# Quick Start

Get an AI agent running in four steps — create an agent, add a knowledge source, train it, then start chatting.

---

{% section id="step-1" title="Step 1 — Create an Agent" %}

Create your agent with a name and category. Save the `id` from the response — you'll need it in every subsequent step.

[Full reference →](/api/agent-operations/create-agent)

```bash
curl -X POST 'https://api.7en.ai/api/v1/agents/' \
  -H 'Authorization: Api-Key YOUR_API_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Support Bot",
    "agent_category": "chatbot"
  }'
```

```json
// Save the agent id from the response
{
  "data": {
    "id": 671,
    "name": "Support Bot",
    "status": "Idle"
  }
}
```

{% /section %}

---

{% section id="step-2" title="Step 2 — Add a Knowledge Source" %}

Attach content to your agent so it has something to learn from. Supported types include `url`, `text`, and `file`.

[Full reference →](/api/knowledge-source-operations/create-knowledge-source)

```bash
curl -X POST 'https://api.7en.ai/api/v1/knowledge-source/' \
  -H 'Authorization: Api-Key YOUR_API_KEY' \
  -H 'Content-Type: application/json' \
  -d '{
    "agent": 671,
    "source_type": "url",
    "url": "https://your-site.com/help"
  }'
```

```json
{
  "data": {
    "id": 42,
    "agent": 671,
    "source_type": "url",
    "status": "Pending"
  }
}
```

{% /section %}

---

{% section id="step-3" title="Step 3 — Train the Agent" %}

Trigger training to index all attached knowledge sources. Poll the [training progress](/api/agent-training/training-progress) endpoint until `status` is `Trained`.

[Full reference →](/api/agent-training/train-agent)

```bash
curl -X POST 'https://api.7en.ai/api/v1/agents/671/train-agent/' \
  -H 'Authorization: Api-Key YOUR_API_KEY'
```

```json
{
  "message": "Agent training initiated",
  "data": {
    "agent_id": 671,
    "status": "Training"
  }
}
```

{% callout type="info" title="Training time" %}
Training typically completes within a few seconds to a few minutes depending on the size of the knowledge sources. Wait for `status: "Trained"` before starting a chat session.
{% /callout %}

{% /section %}

---

{% section id="step-4" title="Step 4 — Chat via WebSocket" %}

Connect to the WebSocket endpoint and send messages to start a real-time conversation with your agent.

[Full reference →](/api/chat/connect-socket)

```bash
# WebSocket URL
wss://api.7en.ai/ws/api/chat/671/?api_key=YOUR_API_KEY
```

```json
// Send a message
{ "message": "Hello, how can you help me?" }

// Receive a response
{
  "type": "bot_response",
  "content": "Hi! I'm your Support Bot. How can I help you today?",
  "session_id": "f5a48aab-9b43-4e88-b3a1-319475e385e0"
}
```

{% /section %}

---

## What's next

- [Authentication](/api/api-reference/authentication) — learn how to manage and rotate API keys
- [Agent Operations](/api/agent-operations/create-agent) — full agent configuration options
- [Knowledge Sources](/api/knowledge-source-operations/create-knowledge-source) — all supported source types
- [Error Handling](/api/api-reference/errors) — understand error codes and responses
