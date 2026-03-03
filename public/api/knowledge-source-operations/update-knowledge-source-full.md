---
type: api
title: Update Knowledge Source (Full)
endpoint: PUT /api/knowledgesource/{id}
order: 5
---

# Update Knowledge Source (Full)

Replace a knowledge source's configuration entirely using a full PUT request.

## Overview

The Update Knowledge Source (Full) endpoint replaces the entire knowledge source record. Use this when you need to change the source content or metadata. For partial updates, use the [PATCH endpoint](/api/knowledge-source-operations/update-knowledge-source-partial). After updating, [retrain the agent](/api/agent-training/retrain-agent) to apply the changes.

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

{% parameter-list title="Request Body" %}
```
[
  {
    "name": "title",
    "type": "string",
    "description": "New title for the knowledge source. Example: \"Updated Help Center\""
  },
  {
    "name": "urls",
    "type": "array of string",
    "description": "Updated list of URLs (for URL-type sources). Example: [\"https://help.acme.com/v2/\"]",
    "optional": true
  },
  {
    "name": "plain_text",
    "type": "string",
    "description": "Updated plain text content (for text-type sources).",
    "optional": true
  },
  {
    "name": "agent_knowledge_folder",
    "type": "integer",
    "description": "Knowledge folder ID. Example: 42"
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

{% request title="Update Knowledge Source (Full)" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X PUT 'https://{% $api.base_url %}knowledgesource/101/' -H 'Authorization: {% $api.key %}' -H 'Content-Type: application/json' -d '{\"title\": \"Updated Help Center\", \"urls\": [\"https://help.acme.com/v2/\"], \"agent_knowledge_folder\": 42}'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}knowledgesource/101/', {\n  method: 'PUT',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({\n    title: 'Updated Help Center',\n    urls: ['https://help.acme.com/v2/'],\n    agent_knowledge_folder: 42\n  })\n})"
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
    "title": "Updated Help Center",
    "type": "url",
    "status": "Pending",
    "urls": ["https://help.acme.com/v2/"],
    "agent_knowledge_folder": 42
  },
  "status_code": 200
}
```
{% /response %}

## Best Practices

- **Retrain after update**: Call [Retrain Agent](/api/agent-training/retrain-agent) after updating sources to apply changes to the vector index.
- **Prefer PATCH**: For partial updates use [Update Knowledge Source (Partial - PATCH)](/api/knowledge-source-operations/update-knowledge-source-partial).

## Rate Limits

- 100 requests per minute for free tier
- 1000 requests per minute for pro tier
- 10000 requests per minute for enterprise tier
