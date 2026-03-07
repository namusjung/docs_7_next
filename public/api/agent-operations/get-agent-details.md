---
type: api
title: Get Agent Details
endpoint: GET api/$api.version/agents/{id}
order: 3
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "Agent Operations", href: "/api/agent-operations/create-agent" }
  - { label: "Get Agent Details" }
---

# Get Agent Details

## Overview

The Get Agent Details endpoint returns the full configuration object for a specific agent accessible to the authenticated user. This includes appearance settings, behavior configuration, model settings, and associated knowledge sources.

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

{% parameter-list title="Parameter" %}
```
[
  {
    "name": "id",
    "type": "int",
    "description": "Unique identifier of the agent to retrieve. Example: \"34\""
  }
]
```
{% /parameter-list %}

{% request title="Request" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X GET 'https://{% $api.base_url %}api/v1/agents/{id}' -H 'Authorization: {% $api.key %}' -H 'Content-Type: application/json'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}api/v1/agents/{id}', {\n  method: 'GET',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  }\n})"
  }
]
```
{% /request %}

{% response status="200" hasDropdown="false" title="Response" %}
```json
{
    "message": "Resource retrieved successfully",
    "data": {
        "id": 671,
        "owner": 193,
        "name": "Support Bot",
        "description": null,
        "status": "Idle",
        "appearance": {},
        "behavior": {},
        "model": {
            "display_model": null
        },
        "agentType": "General Assistant",
        "agent_category": null,
        "systemPrompt": "",
        "knowledge_sources": [],
        "created_at": "2026-03-04T07:27:06.264485Z",
        "updated_at": "2026-03-04T07:27:06.264500Z",
        "conversations": 0,
        "ticketing_providers": [],
        "default_ticketing_provider": null,
        "is_slack_enabled": false,
        "privacy_url": null,
        "gdpr_settings": {
            "data_retention_days": null,
            "data_retention_message": null,
            "gdpr_message_display": false
        },
        "is_white_label": false,
        "total_training_usage_bytes": 0,
        "max_training_usage_bytes": 51200000,
        "character_limit": 200000
    },
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
        "VIEW_ANALYTICS",
        "MANAGE_INTEGRATIONS",
        "SEND_INVITE",
        "MANAGE_AGENTS",
        "CONFIGURE_BUSINESS",
        "MANAGE_BILLING",
        "VIEW_CHAT",
        "MANAGE_SETTINGS",
        "VIEW_SETTINGS",
        "MANAGE_USERS",
        "VIEW_KNOWLEDGE",
        "VIEW_BILLING",
        "MANAGE_CHAT",
        "VIEW_INTEGRATIONS",
        "VIEW_AGENTS",
        "MANAGE_KNOWLEDGE",
        "MANAGE_ADMIN",
        "VIEW_USERS",
        "TRAIN_AGENT",
        "MANAGE_API_KEY"
    ]
}
```
{% /response %}

## Error Responses

##### 403
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

- **Access Control**: Only agents belonging to the authenticated user's team are returned. A `404` is returned for inaccessible agents to prevent enumeration.
- **Caching**: Cache retrieved agent configurations client-side where appropriate to reduce API calls.

