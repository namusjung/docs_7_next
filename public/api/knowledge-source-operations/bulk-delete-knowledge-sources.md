---
type: api
title: Bulk Delete Knowledge Sources
endpoint: DELETE /api/knowledgesource/bulk-delete
order: 8
---

# Bulk Delete Knowledge Sources

Delete multiple knowledge sources in a single request.

## Overview

Use the Bulk Delete endpoint to remove several knowledge sources at once, avoiding the need to make individual delete requests. Like single deletion, this performs a **soft delete** — sources are marked as `Deleted`. Retrain the agent afterwards to apply the changes.

## Parameters

{% parameter-list title="Request Body" %}
```
[
  {
    "name": "ids",
    "type": "array of integer",
    "description": "List of knowledge source IDs to delete. Example: [101, 102, 103]"
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

{% request title="Bulk Delete Knowledge Sources" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X DELETE 'https://{% $api.base_url %}knowledgesource/bulk-delete/' -H 'Authorization: {% $api.key %}' -H 'Content-Type: application/json' -d '{\"ids\": [101, 102, 103]}'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}knowledgesource/bulk-delete/', {\n  method: 'DELETE',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({ ids: [101, 102, 103] })\n})"
  }
]
```
{% /request %}

{% response status="200" hasDropdown="false" title="Response" %}
```json
{
  "message": "3 knowledge sources deleted.",
  "status_code": 200
}
```
{% /response %}

## Error Responses

##### 400 Bad Request
```json
{
  "error": {
    "code": "validation_error",
    "message": "Validation error",
    "status": 400,
    "fields": {
      "ids": ["This field is required."]
    }
  }
}
```

## Best Practices

- **Retrain after deletion**: Call [Retrain Agent](/api/agent-training/retrain-agent) after bulk deleting to update the vector index.
- **Prefer bulk over single**: Minimise API calls and retraining cycles by batching all deletions into one request.

## Rate Limits

- 100 requests per minute for free tier
- 1000 requests per minute for pro tier
- 10000 requests per minute for enterprise tier
