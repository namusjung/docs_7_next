---
type: api
title: List All Knowledge Sources
endpoint: GET /api/knowledgesource
order: 2
---

# List All Knowledge Sources

Retrieve a list of knowledge sources, optionally filtered by agent or folder.

## Overview

The List All Knowledge Sources endpoint returns all knowledge sources accessible to the authenticated user. You can filter by agent knowledge folder, agent ID, or training status to find specific sources.

## Parameters

{% parameter-list title="Query Parameters" %}
```
[
  {
    "name": "agent_knowledge_folder",
    "type": "integer",
    "description": "Filter by knowledge folder ID. Example: 42",
    "optional": true
  },
  {
    "name": "agent_id",
    "type": "UUID",
    "description": "Filter by agent ID to return only sources linked to that agent. Example: \"b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654\"",
    "optional": true
  },
  {
    "name": "status",
    "type": "string",
    "description": "Filter by training status. Choices: Pending, Training, Trained, Failed, Deleted. Example: \"Trained\"",
    "optional": true
  },
  {
    "name": "limit",
    "type": "integer",
    "description": "Number of records to return. Default: 20.",
    "optional": true
  },
  {
    "name": "offset",
    "type": "integer",
    "description": "Number of records to skip. Default: 0.",
    "optional": true
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

{% request title="List Knowledge Sources" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X GET 'https://{% $api.base_url %}knowledgesource/?agent_id=b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654' -H 'Authorization: {% $api.key %}' -H 'Content-Type: application/json'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}knowledgesource/?agent_id=b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654', {\n  method: 'GET',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  }\n})"
  }
]
```
{% /request %}

{% response status="200" hasDropdown="false" title="Response" %}
```json
{
  "message": "List retrieved successfully",
  "data": {
    "count": 2,
    "results": [
      {
        "id": 101,
        "title": "Help Center",
        "type": "url",
        "status": "Trained",
        "urls": ["https://help.acme.com/"],
        "agent_knowledge_folder": 42,
        "training_status": "Success",
        "created_at": "2026-01-10T08:00:00Z"
      },
      {
        "id": 102,
        "title": "Product Manual v3.pdf",
        "type": "docs",
        "status": "Trained",
        "agent_knowledge_folder": 42,
        "training_status": "Success",
        "created_at": "2026-01-12T11:30:00Z"
      }
    ]
  },
  "status_code": 200
}
```
{% /response %}

## Best Practices

- **Filter by agent**: Always pass `agent_id` or `agent_knowledge_folder` to scope results to a specific agent's knowledge base.
- **Monitor training status**: Poll this endpoint with `status=Training` to track in-progress ingestion jobs.

## Rate Limits

- 100 requests per minute for free tier
- 1000 requests per minute for pro tier
- 10000 requests per minute for enterprise tier
