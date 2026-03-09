---
type: api
title: Delete Knowledge Source
endpoint: DELETE /api/v1/knowledge-source/{id}
order: 7
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "Knowledge Sources", href: "/api/knowledge-source-operations/create-knowledge-source" }
  - { label: "Delete Knowledge Source" }
---

# Delete Knowledge Source

## Overview

Remove a knowledge source from an agent's knowledge folder.
It only performs a **soft delete** — the knowledge source is marked as `Deleted` but is not permanently removed. After deletion, [train the agent](/api/agent-training/train-agent) to remove the deleted source from the vector database.


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
    "type": "integer",
    "description": "Unique identifier of the knowledge source to delete. Example: 101"
  }
]
```
{% /parameter-list %}

{% request title="Request" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X DELETE 'https://{% $api.base_url %}/api/v1/knowledge-source/{id}/' -H 'Authorization: {% $api.key %}'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}/api/v1/knowledge-source/{id}/', {\n  method: 'DELETE',\n  headers: {\n    'Authorization': '{% $api.key %}'\n  }\n})"
  },
  {
    "language": "python",
    "code": "import requests\n\nresponse = requests.delete(\n    'https://{% $api.base_url %}/api/v1/knowledge-source/{id}/',\n    headers={'Authorization': '{% $api.key %}'}\n)\ndata = response.json()"
  },
  {
    "language": "php",
    "code": "$ch = curl_init('https://{% $api.base_url %}/api/v1/knowledge-source/{id}/');\ncurl_setopt_array($ch, [\n    CURLOPT_RETURNTRANSFER => true,\n    CURLOPT_CUSTOMREQUEST => 'DELETE',\n    CURLOPT_HTTPHEADER => ['Authorization: {% $api.key %}']\n]);\n$data = json_decode(curl_exec($ch), true);\ncurl_close($ch);"
  }
]
```
{% /request %}

{% response status="204" hasDropdown="false" title="Response" %}
```json
{
    "message": "Knowledge source deleted successfully.",
    "status": "success"
}

```
{% /response %}

## Error Responses

##### 404
```json
{
    "error": {
        "code": "knowledge_source_not_found",
        "message": "Knowledge source not found.",
        "status": 404
    }
}

```

## Best Practices

- **Train after deletion**: The agent will continue using a deleted source until retrained. Call [Train Agent](/api/agent-training/train-agent) after deleting sources.
- **Bulk delete**: To delete multiple sources at once, use [Bulk Delete Knowledge Sources](/api/knowledge-source-operations/bulk-delete-knowledge-sources).
