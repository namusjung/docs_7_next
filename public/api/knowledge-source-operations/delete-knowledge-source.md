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
    "code": "curl -X DELETE 'https://{% $api.base_url %}/v1/knowledge-source/{{id}}/' -H 'Authorization: {% $api.key %}' -H 'Content-Type: application/json'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}/v1/knowledge-source/{{id}}/', {\n  method: 'DELETE',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  }\n})"
  }
]
```
{% /request %}

{% response status="204" hasDropdown="false" title="Response" %}
```json
{
    "message": "Knowledge source deleted successfully.",
    "subscription": {
        "planName": "EU Sovereign",
        "planId": "36",
        "started_at": "2026-02-18T08:16:03+00:00",
        "ended_at": "2026-03-18T08:16:03+00:00",
        "cancelled_at": null,
        "failed_at": null
    },
    "status": "success",
    "permissions": [
        "MANAGE_AGENTS",
        "MANAGE_ADMIN",
        "MANAGE_INTEGRATIONS",
        "VIEW_INTEGRATIONS",
        "MANAGE_API_KEY",
        "MANAGE_BILLING",
        "MANAGE_KNOWLEDGE",
        "VIEW_BILLING",
        "MANAGE_SETTINGS",
        "VIEW_AGENTS",
        "MANAGE_CHAT",
        "CONFIGURE_BUSINESS",
        "VIEW_USERS",
        "VIEW_ANALYTICS",
        "TRAIN_AGENT",
        "MANAGE_USERS",
        "VIEW_CHAT",
        "VIEW_KNOWLEDGE",
        "SEND_INVITE",
        "VIEW_SETTINGS"
    ]
}
```
{% /response %}

## Error Responses

##### 404
```json
{
    "message": "Knowledge source not found.",
    "status": "error",
    "error": {
        "code": "knowledge_source_not_found",
        "message": "Knowledge source not found.",
        "status": 404,
        "fields": {
            "general": [
                "Knowledge source not found."
            ]
        }
    }
}
```

## Best Practices

- **Train after deletion**: The agent will continue using a deleted source until retrained. Call [Train Agent](/api/agent-training/train-agent) after deleting sources.
- **Bulk delete**: To delete multiple sources at once, use [Bulk Delete Knowledge Sources](/api/knowledge-source-operations/bulk-delete-knowledge-sources).
