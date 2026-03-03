---
type: api
title: Delete Knowledge Source
endpoint: DELETE /api/knowledgesource/{id}
order: 7
---

# Delete Knowledge Source

Remove a knowledge source from an agent's knowledge folder.

## Overview

Performs a **soft delete** — the knowledge source is marked as `Deleted` but is not permanently removed. After deletion, [retrain the agent](/api/agent-training/retrain-agent) to remove the deleted source from the vector index.

## Parameters

{% parameter-list title="Path Parameters" %}
```
[
  {
    "name": "id",
    "type": "integer",
    "description": "Unique identifier of the knowledge source to delete. Example: 101"
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

{% request title="Delete Knowledge Source" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X DELETE 'https://{% $api.base_url %}knowledgesource/101/' -H 'Authorization: {% $api.key %}' -H 'Content-Type: application/json'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}knowledgesource/101/', {\n  method: 'DELETE',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  }\n})"
  }
]
```
{% /request %}

{% response status="204" hasDropdown="false" title="Response" %}
```json
{}
```
{% /response %}

## Error Responses

##### 404 Not Found
```json
{
  "error": {
    "code": "resource_not_found",
    "message": "Knowledge source not found.",
    "status": 404,
    "fields": {
      "general": ["Knowledge source not found"]
    }
  }
}
```

## Best Practices

- **Retrain after deletion**: The agent will continue using a deleted source until retrained. Call [Retrain Agent](/api/agent-training/retrain-agent) after deleting sources.
- **Bulk delete**: To delete multiple sources at once, use [Bulk Delete Knowledge Sources](/api/knowledge-source-operations/bulk-delete-knowledge-sources).

## Rate Limits

- 100 requests per minute for free tier
- 1000 requests per minute for pro tier
- 10000 requests per minute for enterprise tier
