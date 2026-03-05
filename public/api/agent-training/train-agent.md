---
type: api
title: Train Agent
endpoint: POST /api/v1/agents/{{id}}/train-agent/
order: 1
---

# Train Agent

Trigger a full retraining of an agent to rebuild its knowledge vector index from all attached sources.

## Overview

The Retrain Agent endpoint queues a background job that re-ingests all knowledge sources linked to the agent and rebuilds the vector index. This is required after adding or removing knowledge sources, or after updating source content, to ensure the agent's responses reflect the latest information.

## Parameters

{% parameter-list title="Path Parameters" %}
```
[
  {
    "name": "id",
    "type": "int",
    "description": "Unique identifier of the agent to retrain. Example: \"23\""
  }
]
```
{% /parameter-list %}

{% parameter-list title="Request Header" %}
```
[
  {
    "name": "Authorization",
    "type": "api key",
    "description": "Api key generated from 7en.i platform. Example: Api-Key 43NKLN3LKN4nlkn"
  }
]
```
{% /parameter-list %}

{% request title="Retrain Agent" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X POST 'https://{% $api.base_url %}/v1/agents/{{id}}/train-agent/' -H 'Authorization: {% $api.key %}' -H 'Content-Type: application/json'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}/v1/agents/{{id}}/train-agent/', {\n  method: 'POST',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  }\n})"
  }
]
```
{% /request %}

{% response status="200" hasDropdown="false" title="Response" %}
```json
{
    "message": "Agent training has started for 'web'",
    "task_id": "6a948f42-064d-4e09-9105-5e521d7dcab7"
}
```
{% /response %}

## Error Responses

##### 403
```json
{
    "message": "Invalid or inactive API key.",
    "status": "error",
    "error": {
        "code": "error",
        "message": "Invalid or inactive API key.",
        "status": 403,
        "fields": {
            "general": [
                "Invalid or inactive API key."
            ]
        }
    }
}
```

##### 404
```json
{
    "message": "Agent not found.",
    "status": "error",
    "error": {
        "code": "agent_not_found",
        "message": "Agent not found.",
        "status": 404,
        "fields": {
            "general": [
                "Agent not found."
            ]
        }
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

## Training Progress via SSE

- **Url**: `{{BASE_URL}}/api/v1/agents/{{Agent ID}}/train-agent-sse/`
- **Events**: `training_connected` | `training_progress` | `training_completed` | `training_failed`

