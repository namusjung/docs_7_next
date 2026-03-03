---
type: api
title: Retrain Agent
endpoint: POST /$api.version/agents/{id}/retrain
order: 1
---

# Retrain Agent

Trigger a full retraining of an agent to rebuild its knowledge vector index from all attached sources.

## Overview

The Retrain Agent endpoint queues a background job that re-ingests all knowledge sources linked to the agent and rebuilds the vector index. This is required after adding or removing knowledge sources, or after updating source content, to ensure the agent's responses reflect the latest information.

## Parameters

{% parameter-list title="Path Parameters" %}
```
[
  {
    "name": "id",
    "type": "UUID",
    "description": "Unique identifier of the agent to retrain. Example: \"b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654\""
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
    "code": "curl -X POST 'https://{% $api.base_url %}v1/agents/b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654/retrain' -H 'Authorization: {% $api.key %}' -H 'Content-Type: application/json'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}v1/agents/b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654/retrain', {\n  method: 'POST',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  }\n})"
  }
]
```
{% /request %}

{% response status="200" hasDropdown="false" title="Response" %}
```json
{
  "message": "Agent retraining started.",
  "data": {
    "agent_id": "b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654",
    "task_id": "celery-task-a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "status": "Training"
  },
  "status_code": 200
}
```
{% /response %}

## Error Responses

##### 401 Unauthorized
```json
{
  "error": {
    "code": "authentication_failed",
    "message": "Authentication failed.",
    "status": 401,
    "fields": []
  }
}
```

##### 404 Not Found
```json
{
  "error": {
    "code": "resource_not_found",
    "message": "Agent not found.",
    "status": 404,
    "fields": {
      "general": ["Agent not found"]
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

## Rate Limits

- 100 requests per minute for free tier
- 1000 requests per minute for pro tier
- 10000 requests per minute for enterprise tier
