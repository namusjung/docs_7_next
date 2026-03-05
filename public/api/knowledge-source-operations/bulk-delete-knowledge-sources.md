---
type: api
title: Bulk Delete Knowledge Sources
endpoint: DELETE /api/v1/knowledge-source/bulk-delete/
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
    "code": "curl -X DELETE 'https://{% $api.base_url %}/v1/knowledge-source/bulk-delete/' -H 'Authorization: {% $api.key %}' -H 'Content-Type: application/json' -d '{\"ids\": [101, 102]}'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}/v1/knowledge-source/bulk-delete/', {\n  method: 'DELETE',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({ ids: [101, 102] })\n})"
  }
]
```
{% /request %}

{% response status="200" hasDropdown="false" title="Response" %}
```json
{
    "message": "2 knowledge source(s) deleted successfully.",
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
        "CONFIGURE_BUSINESS",
        "MANAGE_CHAT",
        "VIEW_AGENTS",
        "MANAGE_USERS",
        "VIEW_KNOWLEDGE",
        "MANAGE_AGENTS",
        "VIEW_SETTINGS",
        "VIEW_ANALYTICS",
        "SEND_INVITE",
        "MANAGE_ADMIN",
        "MANAGE_API_KEY",
        "VIEW_CHAT",
        "MANAGE_BILLING",
        "MANAGE_SETTINGS",
        "MANAGE_KNOWLEDGE",
        "VIEW_INTEGRATIONS",
        "MANAGE_INTEGRATIONS",
        "VIEW_USERS",
        "TRAIN_AGENT",
        "VIEW_BILLING"
    ]
}
```
{% /response %}

## Error Responses

##### 400 Bad Request
```json
{
    "message": "No IDs provided for bulk deletion.",
    "subscription": {
        "planName": "EU Sovereign",
        "planId": "36",
        "started_at": "2026-02-18T08:16:03+00:00",
        "ended_at": "2026-03-18T08:16:03+00:00",
        "cancelled_at": null,
        "failed_at": null
    },
    "status": "error",
}
```

## Best Practices

- **Retrain after deletion**: Call [Retrain Agent](/api/agent-training/retrain-agent) after bulk deleting to update the vector index.
- **Prefer bulk over single**: Minimise API calls and retraining cycles by batching all deletions into one request.

## Rate Limits

- 100 requests per minute for free tier
- 1000 requests per minute for pro tier
- 10000 requests per minute for enterprise tier
