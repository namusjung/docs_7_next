---
type: api
title: Bulk Delete Knowledge Sources
endpoint: DELETE /api/v1/knowledge-source/bulk-delete/
order: 8
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "Knowledge Sources", href: "/api/knowledge-source-operations/create-knowledge-source" }
  - { label: "Bulk Delete Knowledge Sources" }
---

# Bulk Delete Knowledge Sources

## Overview

Use the Bulk Delete endpoint to remove several knowledge sources at once, avoiding the need to make individual delete requests. Like single deletion, this performs a **soft delete** — sources are marked as `Deleted`. Retrain the agent afterwards to apply the changes.

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

## Request

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

{% request title="Request" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X DELETE 'https://{% $api.base_url %}/api/v1/knowledge-source/bulk-delete/' \\\n  -H 'Authorization: {% $api.key %}' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\"ids\": [101, 102]}'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}/api/v1/knowledge-source/bulk-delete/', {\n  method: 'DELETE',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({ ids: [101, 102] })\n})"
  },
  {
    "language": "python",
    "code": "import requests\n\nresponse = requests.delete(\n    'https://{% $api.base_url %}/api/v1/knowledge-source/bulk-delete/',\n    headers={\n        'Authorization': '{% $api.key %}',\n        'Content-Type': 'application/json'\n    },\n    json={'ids': [101, 102]}\n)\ndata = response.json()"
  },
  {
    "language": "php",
    "code": "$ch = curl_init('https://{% $api.base_url %}/api/v1/knowledge-source/bulk-delete/');\ncurl_setopt_array($ch, [\n    CURLOPT_RETURNTRANSFER => true,\n    CURLOPT_CUSTOMREQUEST => 'DELETE',\n    CURLOPT_HTTPHEADER => [\n        'Authorization: {% $api.key %}',\n        'Content-Type: application/json'\n    ],\n    CURLOPT_POSTFIELDS => json_encode(['ids' => [101, 102]])\n]);\n$data = json_decode(curl_exec($ch), true);\ncurl_close($ch);"
  }
]
```
{% /request %}

{% response status="200" hasDropdown="false" title="Response" %}
```json
{
    "message": "2 knowledge source(s) deleted successfully.",
    "status": "success"
}

```
{% /response %}

## Error Responses

##### 400
```json
{
    "error": {
        "code": "knowledge_source_not_found",
        "message": "Some knowledge sources were not found.",
        "status": 404
    }
}

```

## Best Practices

- **Retrain after deletion**: Call [Retrain Agent](/api/agent-training/retrain-agent) after bulk deleting to update the vector index.
- **Prefer bulk over single**: Minimise API calls and retraining cycles by batching all deletions into one request.

