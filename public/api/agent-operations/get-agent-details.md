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
    "code": "curl -X GET 'https://{% $api.base_url %}/api/v1/agents/{id}' -H 'Authorization: {% $api.key %}' -H 'Content-Type: application/json'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}/api/v1/agents/{id}', {\n  method: 'GET',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  }\n})"
  },
  {
    "language": "python",
    "code": "import requests\n\nresponse = requests.get(\n    'https://{% $api.base_url %}/api/v1/agents/{id}',\n    headers={'Authorization': '{% $api.key %}'}\n)\ndata = response.json()"
  },
  {
    "language": "php",
    "code": "$ch = curl_init('https://{% $api.base_url %}/api/v1/agents/{id}');\ncurl_setopt_array($ch, [\n    CURLOPT_RETURNTRANSFER => true,\n    CURLOPT_HTTPHEADER => ['Authorization: {% $api.key %}']\n]);\n$data = json_decode(curl_exec($ch), true);\ncurl_close($ch);"
  }
]
```
{% /request %}

{% response status="200" hasDropdown="false" title="Response" %}
```json
{
    "message": "Resource retrieved successfully",
    "status": "success",
    "data": {
        "id": 689,
        "owner": 2,
        "name": "Customer Support Agents",
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
        "created_at": "2026-03-09T07:28:11.656646Z",
        "updated_at": "2026-03-09T07:28:11.656660Z",
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
        "is_white_label": true,
        "total_training_usage_bytes": 0,
        "max_training_usage_bytes": 51200000,
        "character_limit": 200000
    }
}
```
{% /response %}

## Error Response

##### 404
```json
{
    "error": {
        "code": "agent_not_found",
        "message": "Agent not found.",
        "status": 404
    }
}

```

## Best Practices

- **Access Control**: Only agents belonging to the authenticated user's team are returned. A `404` is returned for inaccessible agents to prevent enumeration.
- **Caching**: Cache retrieved agent configurations client-side where appropriate to reduce API calls.

