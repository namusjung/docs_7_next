---
type: api
title: Update Knowledge Source (Partial - PATCH)
endpoint: PATCH /api/knowledgesource/{id}
order: 6
---

# Update Knowledge Source (Partial - PATCH)

Partially update a knowledge source by sending only the fields you want to change.

## Overview

The PATCH endpoint allows selective updates to a knowledge source. Only the fields included in the request body are modified. After updating, [retrain the agent](/api/agent-training/retrain-agent) to apply changes.

## Parameters

{% parameter-list title="Path Parameters" %}
```
[
  {
    "name": "id",
    "type": "integer",
    "description": "Unique identifier of the knowledge source to update. Example: 101"
  }
]
```
{% /parameter-list %}

{% parameter-list title="Request Body (all fields optional)" %}
```
[
  {
    "name": "title",
    "type": "string",
    "description": "New title for the knowledge source.",
    "optional": true
  },
  {
    "name": "is_selected",
    "type": "boolean",
    "description": "Whether this source is active and used by the agent.",
    "optional": true
  },
  {
    "name": "urls",
    "type": "array of string",
    "description": "Updated list of URLs (for URL-type sources).",
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

{% request title="Update Knowledge Source (Partial)" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X PATCH 'https://{% $api.base_url %}knowledgesource/101/' -H 'Authorization: {% $api.key %}' -H 'Content-Type: application/json' -d '{\"title\": \"Help Center v2\", \"is_selected\": false}'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}knowledgesource/101/', {\n  method: 'PATCH',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({\n    title: 'Help Center v2',\n    is_selected: false\n  })\n})"
  }
]
```
{% /request %}

{% response status="200" hasDropdown="false" title="Response" %}
```json
{
  "message": "Knowledge source updated successfully.",
  "data": {
    "id": 101,
    "title": "Help Center v2",
    "is_selected": false,
    "status": "Trained"
  },
  "status_code": 200
}
```
{% /response %}

## Best Practices

- **Retrain after update**: Call [Retrain Agent](/api/agent-training/retrain-agent) after updating to apply changes to the vector index.
- **Deactivating sources**: Set `is_selected: false` to exclude a source from training without deleting it.

## Rate Limits

- 100 requests per minute for free tier
- 1000 requests per minute for pro tier
- 10000 requests per minute for enterprise tier
