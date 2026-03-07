---
type: api
title: Delete Agent
endpoint: DELETE api/$api.version/agents/{id}
order: 5
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "Agent Operations", href: "/api/agent-operations/create-agent" }
  - { label: "Delete Agent" }
---
# Delete Agent

## Overview

The Delete Agent endpoint allows you to remove an AI agent from your account. This action is irreversible, so ensure the agent is no longer needed before deleting.

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

## Parameters

{% parameter-list title="Path Parameters" %}
```
[
  {
    "name": "id",
    "type": "int",
    "description": "Unique identifier of the agent to delete. Example: \"{id}\""
  }
]
```
{% /parameter-list %}

{% request title="Delete Agent" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X DELETE 'https://{% $api.base_url %}/api/v1/agents/{id}' -H 'Authorization: {% $api.key %}' -H 'Content-Type: application/json'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}/api/v1/agents/{id}', {\n  method: 'DELETE',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  }\n})"
  }
]
```
{% /request %}

{% response status="200" hasDropdown="false" title="Response" %}
```json
{
    "message": "Agent and its knowledge folder deleted successfully",
    "subscription": {
        "planName": "EU Sovereign",
        "planId": "36",
        "started_at": "2026-02-18T08:16:03+00:00",
        "ended_at": "2026-03-18T08:16:03+00:00",
        "cancelled_at": null,
        "failed_at": null
    },
    "features": {
        "WHITE_LABELING": false,
        "PREMIUM_MODELS": false,
        "AUTO_TICKET_RESPONSE": true,
        "ADD_ON_AGENT": false,
        "EMAIL_HANDOFF": true,
        "AGENT_HANDOFF": true,
        "INTEGRATION_HANDOFF": true
    },
    "status": "success",
    "permissions": [
        "MANAGE_ADMIN",
        "MANAGE_SETTINGS",
        "VIEW_AGENTS",
        "MANAGE_API_KEY",
        "MANAGE_INTEGRATIONS",
        "VIEW_KNOWLEDGE",
        "MANAGE_AGENTS",
        "VIEW_SETTINGS",
        "MANAGE_BILLING",
        "TRAIN_AGENT",
        "CONFIGURE_BUSINESS",
        "MANAGE_USERS",
        "SEND_INVITE",
        "VIEW_USERS",
        "VIEW_ANALYTICS",
        "VIEW_CHAT",
        "VIEW_BILLING",
        "MANAGE_KNOWLEDGE",
        "MANAGE_CHAT",
        "VIEW_INTEGRATIONS"
    ]
}
```
{% /response %}

## Error Responses

##### 401
```json
{
    "message": "Invalid or inactive API key.",
    "status": "error",
    "error": {
        "code": "error",
        "message": "Invalid or inactive API key.",
        "status": 403,
        "fields": {
            "general": [
                "Invalid or inactive API key."
            ]
        }
    }
}
```

##### 404
```json
{
    "message": "Agent not found.",
    "status": "error",
    "error": {
        "code": "agent_not_found",
        "message": "Agent not found.",
        "status": 404,
        "fields": {
            "general": [
                "Agent not found."
            ]
        }
    }
}
```

## Best Practices

- **Confirmation**: Always verify the agent ID before deletion to avoid accidental removal.
- **Backup**: Consider backing up critical agent configurations before deletion.

## Rate Limits

- 100 requests per minute for free tier
- 1000 requests per minute for pro tier
- 10000 requests per minute for enterprise tier
