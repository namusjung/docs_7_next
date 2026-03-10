---
type: api
title: Train Agent
endpoint: POST /api/v1/agents/{id}/train-agent/
order: 1
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "Agent Training", href: "/api/agent-training/train-agent" }
  - { label: "Train Agent" }
---

# Train Agent

## Overview

The Train Agent endpoint queues a background job that re-ingests all knowledge sources linked to the agent and rebuilds the vector index. This is required after adding or removing knowledge sources, or after updating source content, to ensure the agent's responses reflect the latest information.

{% parameter-list title="Request Header" %}
```
[
  {
    "name": "Authorization",
    "type": "api key",
    "description": "Your 7en API key. Example: Api-Key 43NKLN3LKN4nlkn"
  }
]
```
{% /parameter-list %}

## Path Parameters

{% parameter-list title="Parameters" %}
```
[
  {
    "name": "id",
    "type": "int",
    "description": "Unique identifier of the agent to train. Example: \"23\""
  }
]
```
{% /parameter-list %}

{% request title="Request" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X POST 'https://{% $api.base_url %}/api/v1/agents/{id}/train-agent/' -H 'Authorization: {% $api.key %}'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}/api/v1/agents/{id}/train-agent/', {\n  method: 'POST',\n  headers: {\n    'Authorization': '{% $api.key %}'\n  }\n})"
  },
  {
    "language": "python",
    "code": "import requests\n\nresponse = requests.post(\n    'https://{% $api.base_url %}/api/v1/agents/{id}/train-agent/',\n    headers={'Authorization': '{% $api.key %}'}\n)\ndata = response.json()"
  },
  {
    "language": "php",
    "code": "$ch = curl_init('https://{% $api.base_url %}/api/v1/agents/{id}/train-agent/');\ncurl_setopt_array($ch, [\n    CURLOPT_RETURNTRANSFER => true,\n    CURLOPT_POST => true,\n    CURLOPT_HTTPHEADER => ['Authorization: {% $api.key %}']\n]);\n$data = json_decode(curl_exec($ch), true);\ncurl_close($ch);"
  }
]
```
{% /request %}

{% response status="200" hasDropdown="false" title="Response" %}
```json

Connection closed
15:14:30.663
training_active
{"agent_id": "687", "status": "Active", "timestamp": "2026-03-08T09:29:30.531662+00:00", "train_data": {"phase": "embedding_completed", "message": "Embedding completed", "total_count": 1, "current_sou
15:14:30.607
training_training
{"agent_id": "687", "status": "Training", "timestamp": "2026-03-08T09:29:29.521317+00:00", "train_data": {"phase": "embedding_start", "message": "Starting embedding for 1 chunks", "total_count": 1, "c
15:14:29.576
training_training
{"agent_id": "687", "status": "Training", "timestamp": "2026-03-08T09:29:27.503232+00:00", "train_data": {"phase": "extracting", "message": "Starting text extraction", "total_count": 1, "current_sourc
15:14:27.578
training_started
{"message": "Agent training has started for 'Customer Support'", "agent_id": "687", "task_id": "4ef6f88c-2414-4cb5-a5df-524d88115894", "status": "Training", "timestamp": "2026-03-08T09:29:26.995116+00
15:14:27.577
Connected to https://api-staging.7en.ai/api/v1/agents/687/train-agent/

```
{% /response %}

## Error Responses

##### 404
```json
{
    "error": {
        "code": "agent_not_found",
        "message": "Agent not found.",
        "status": 404
    }
}

```

##### 400
```json
{
    "error": {
        "code": "knowledge_sources_required",
        "message": "The agent must have at least one active knowledge source to start training.",
        "status": 400
    }
}


```

## Side Effects

- Agent `status` is immediately set to `"Training"`.
- All linked knowledge source statuses are set to `"Training"`.
- On completion, agent status transitions to `"Active"` (success) or `"Issues"` (partial failure).

## Best Practices

- **Batch Changes First**: Make all knowledge source additions and removals before triggering retrain to avoid multiple training cycles.
- **Do Not Retrain Unnecessarily**: Retraining is resource-intensive. Only trigger it when the knowledge base has actually changed.


