---
type: api
title: Introduction
order: 1
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "API Reference", href: "/api/api-reference/introduction" }
---

# Introduction

> Complete guide to integrating 7en AI Agents using our REST and WebSocket APIs for custom integrations and applications.

The 7en Platform API is built around REST principles and WebSocket for real-time interactions. It features predictable resource-oriented URLs, JSON request and response bodies, standard HTTP status codes, and API key authentication. Use it to programmatically create agents, manage knowledge sources, and integrate real-time AI capabilities into your own products.

---

## Overview

Build custom chat experiences, automate customer interactions, and manage your AI agents programmatically.

{% section id="overview-features" %}
{% card %}
[
  {
    "icon": "message",
    "title": "Send Messages",
    "link": "/api/chat-messages/send-message"
  },
  {
    "icon": "robot",
    "title": "Manage Agents",
    "link": "/api/agent-operations/create-agent"
  },
  {
    "icon": "database",
    "title": "Access Data",
    "link": "/api/knowledge-source-operations/list-knowledge-sources"
  }
]
{% /card %}
{% /section %}

---

## Quick Start

### 1. Get your API key

1. Log in to the [7en Dashboard](https://app.7en.ai)
2. Navigate to **Settings** → **API Keys**
3. Click **Create API Key** and copy the generated key

> **Security Note:** Store your API key securely. Never expose it in client-side code or commit it to version control.

### 2. Get your Agent ID

1. Open the [7en Dashboard](https://app.7en.ai) and select your agent
2. Go to **Settings** → **General**
3. Copy the **Agent ID** (int format)

### 3. Connect via WebSocket

Integrate real-time chat into your application using our WebSocket endpoint. This allows for persistent connections and low-latency bot responses.

**WebSocket URL**
```
wss://api-staging.7en.ai/ws/api/chat/YOUR_AGENT_ID/?api_key=YOUR_API_KEY
```

**Example Response**
```json
{
  "type": "bot_response",
  "content_id": 31950,
  "content": "Hi! How can we help you today?",
  "timestamp": "2026-03-03T14:07:42.165068+00:00Z",
  "session_id": "f5a48aab-9b43-4e88-b3a1-319475e385e0",
  "sentiment_score": 4,
  "llm_used": "gpt-5.2",
  "agent_used": "621",
  "agent_name": "HMIE",
  "input_tokens": 3702,
  "output_tokens": 13
}
```

---

## Performance Best Practices

> **Optimization Strategies:**
> - **Use WebSocket for Chat:** For real-time responses, WebSocket provides better perceived performance than polling.
> - **Cache Agent Config:** Store agent configuration locally to reduce unnecessary API calls.
> - **Monitor Context:** Manage conversation history length to optimize token usage and processing speed.

---

## Key API Endpoints

{% section id="explore" title="Explore the Full API" %}
{% card %}
[
  {
    "icon": "api",
    "title": "Agent Operations",
    "link": "/api/agent-operations/create-agent"
  },
  {
    "icon": "tool",
    "title": "Agent Training",
    "link": "/api/agent-training/retrain-agent"
  },
  {
    "icon": "quickstart",
    "title": "Knowledge Sources",
    "link": "/api/knowledge-source-operations/create-knowledge-source"
  },
  {
    "icon": "guide",
    "title": "Complete Workflow",
    "link": "/api/complete-workflow-examples/1-create-agent"
  }
]
{% /card %}
{% /section %}

