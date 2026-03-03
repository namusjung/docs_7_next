---
type: api
title: List Knowledge Sources for Agent
endpoint: GET /$api.version/agents/{id}/knowledge-folder
order: 3
---

# List Knowledge Sources for Agent

Retrieve the knowledge folder and all associated knowledge sources for a specific agent.

## Overview

Every agent is automatically assigned a knowledge folder when created. This endpoint returns the folder details along with a list of all knowledge sources linked to the agent. Use this to inspect what data the agent has been trained on.

## Parameters

{% parameter-list title="Path Parameters" %}
```
[
  {
    "name": "id",
    "type": "UUID",
    "description": "Unique identifier of the agent. Example: \"b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654\""
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

{% request title="List Knowledge Sources for Agent" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X GET 'https://{% $api.base_url %}v1/agents/b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654/knowledge-folder' -H 'Authorization: {% $api.key %}' -H 'Content-Type: application/json'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}v1/agents/b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654/knowledge-folder', {\n  method: 'GET',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  }\n})"
  }
]
```
{% /request %}

{% response status="200" hasDropdown="false" title="Response" %}
```json
{
  "message": "Resource retrieved successfully",
  "data": {
    "id": 42,
    "agent": "b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654",
    "name": "Support Bot Knowledge",
    "knowledge_sources": [
      {
        "id": 101,
        "title": "Help Center",
        "type": "url",
        "status": "Trained",
        "urls": ["https://help.acme.com/"],
        "training_status": "Success",
        "total_training_usage_bytes": 204800,
        "max_training_usage_bytes": 31457280
      },
      {
        "id": 102,
        "title": "Product Manual v3.pdf",
        "type": "docs",
        "status": "Trained",
        "training_status": "Success",
        "total_training_usage_bytes": 2097152,
        "max_training_usage_bytes": 31457280
      }
    ]
  },
  "status_code": 200
}
```
{% /response %}

## Error Responses

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

## Best Practices

- **Training Status**: Check `training_status` on each knowledge source to confirm it is `"Success"` before relying on the agent's responses.
- **Storage Limits**: Compare `total_training_usage_bytes` against `max_training_usage_bytes` to monitor storage usage.

## Rate Limits

- 100 requests per minute for free tier
- 1000 requests per minute for pro tier
- 10000 requests per minute for enterprise tier
