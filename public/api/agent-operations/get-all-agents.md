---
type: api
title: Get All Agents
endpoint: GET api/$api.version/agents/
order: 2
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "Agent Operations", href: "/api/agent-operations/create-agent" }
  - { label: "Get All Agents" }
---

# Get All Agents

## Overview

The Get All Agents endpoint allows you to fetch all agents created by the user, including their configurations and metadata. This is useful for managing and reviewing all agents in your account.

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

{% request title="Request" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X GET 'https://{% $api.base_url %}/api/v1/agents/' -H 'Authorization: {% $api.key %}'\\ -H 'Content-Type: application/json'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}/api/v1/agents/', {\n  method: 'GET',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  },\n})"
  },
  {
    "language": "python",
    "code": "import requests\n\nresponse = requests.get(\n    'https://{% $api.base_url %}/api/v1/agents/',\n    headers={'Authorization': '{% $api.key %}'}\n)\ndata = response.json()"
  },
  {
    "language": "php",
    "code": "$ch = curl_init('https://{% $api.base_url %}/api/v1/agents/');\ncurl_setopt_array($ch, [\n    CURLOPT_RETURNTRANSFER => true,\n    CURLOPT_HTTPHEADER => ['Authorization: {% $api.key %}']\n]);\n$data = json_decode(curl_exec($ch), true);\ncurl_close($ch);"
  }
]
```
{% /request %}


{% response status="200" hasDropdown="false" title="Response" %}
```json
{
    "message": "List retrieved successfully",
    "status": "success",
    "data": [
        {
            "id": 685,
            "owner": 2,
            "name": "Customer Support Agent",
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
            "created_at": "2026-03-08T05:48:37.616015Z",
            "updated_at": "2026-03-08T05:48:37.616042Z",
            "conversations": 0,
            "ticketing_providers": [
                "freshdesk"
            ],
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
        },
        {
            "id": 689,
            "owner": 2,
            "name": "Updated Customer Support Agent",
            "description": "Enhanced AI agent for customer support",
            "status": "Idle",
            "appearance": {
                "theme": "green",
                "avatar": "https://example.com/new-avatar.png"
            },
            "behavior": {
                "greeting": "Welcome! I'm here to help you."
            },
            "model": {
                "display_model": null
            },
            "agentType": "chatbot",
            "agent_category": "Assistant",
            "systemPrompt": "You are an expert customer support assistant with extensive product knowledge.",
            "knowledge_sources": [],
            "created_at": "2026-03-09T07:28:11.656646Z",
            "updated_at": "2026-03-09T07:30:18.694454Z",
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
    ]
}

```
{% /response %}


## Best Practices

- **Caching**: Cache the response to reduce API calls if the agent list doesn't change frequently.
- **Error Handling**: Handle authentication errors gracefully to ensure smooth user experience.


