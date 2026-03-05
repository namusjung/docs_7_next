---
type: api
title: Update Agent
order: 4
---

# Update Agent

Update an existing agent's configuration. Two methods are supported depending on whether you want to replace the full configuration or change only specific fields.

| Method | Endpoint | Behaviour |
|---|---|---|
| `PUT` | `/$api.version/agents/{id}` | Full replacement — omitted fields reset to defaults |
| `PATCH` | `/$api.version/agents/{id}` | Partial update — only provided fields are changed |

---

## PUT/PATCH — Update

{% parameter-list title="Request Body" %}
```
[
  {
    "name": "name",
    "type": "string",
    "description": "Name of the agent. Example: \"Updated Agent\""
  },
  {
    "name": "description",
    "type": "string",
    "description": "Description of the agent's purpose."
  },
  {
    "name": "systemPrompt",
    "type": "string",
    "description": "Custom system prompt for the agent."
  },
  {
    "name": "appearance",
    "type": "object",
    "description": "Visual appearance settings for the agent.",
    "optional": true
  },
  {
    "name": "behavior",
    "type": "object",
    "description": "Behavior and interaction settings for the agent.",
    "optional": true
  },
  {
    "name": "model",
    "type": "object",
    "description": "AI model configuration for the agent.",
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
    "description": "Your 7en API key. Example: Api-Key 43NKLN3LKN4nlkn"
  }
]
```
{% /parameter-list %}

{% request title="PUT — Full Update" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X PUT 'https://{% $api.base_url %}v1/agents/{id}' \\\n  -H 'Authorization: {% $api.key %}' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n    \"name\": \"Updated Support Bot\",\n    \"description\": \"Enhanced AI agent for customer support\",\n    \"appearance\": {\n      \"primaryColor\": \"#0e1215\",\n      \"secondaryColor\": \"#ffffff\",\n      \"fontFamily\": \"Inter\",\n      \"chatbotName\": \"AI Assistant\",\n      \"welcomeMessage\": \"\",\n      \"buttonText\": \"\",\n      \"position\": \"bottom-right\",\n      \"avatar\": {\n        \"type\": \"default\",\n        \"src\": \"\"\n      }\n    },\n    \"behavior\": {\n      \"suggestions\": [],\n      \"guidelines\": {\n        \"dos\": [],\n        \"donts\": []\n      },\n      \"expertHandoff\": false,\n      \"aiToAiHandoff\": true,\n      \"autoTicketReply\": false,\n      \"email\": null,\n      \"ticketType\": \"email\",\n      \"escalationPrompt\": \"\",\n      \"agentHandoffPrompt\": \"- if user asks about Pujan, transfer to {{doc}}\",\n      \"followupCount\": 2,\n      \"followupInterval\": 5,\n      \"followupMessages\": [\n        \"I\\'m available to help. Where are you ?\",\n        \"Seems like you are offline.\"\n      ]\n    },\n    \"model\": {\n      \"response_model\": \"gpt-5.2\",\n      \"temperature\": 0.7\n    },\n    \"agentType\": \"General Assistant\",\n    \"agent_category\": \"Assistant\",\n    \"systemPrompt\": \"You are a helpful AI assistant. Be friendly, professional, and provide accurate information.\",\n    \"default_ticketing_provider\": null,\n    \"is_slack_enabled\": false\n  }'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}v1/agents/{id}', {\n  method: 'PUT',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({\n    name: 'Updated Support Bot',\n    description: 'Enhanced AI agent for customer support',\n    appearance: {\n      primaryColor: '#0e1215',\n      secondaryColor: '#ffffff',\n      fontFamily: 'Inter',\n      chatbotName: 'AI Assistant',\n      welcomeMessage: '',\n      buttonText: '',\n      position: 'bottom-right',\n      avatar: {\n        type: 'default',\n        src: ''\n      }\n    },\n    behavior: {\n      suggestions: [],\n      guidelines: {\n        dos: [],\n        donts: []\n      },\n      expertHandoff: false,\n      aiToAiHandoff: true,\n      autoTicketReply: false,\n      email: null,\n      ticketType: 'email',\n      escalationPrompt: '',\n      agentHandoffPrompt: '- if user asks about Pujan, transfer to {{doc}}',\n      followupCount: 2,\n      followupInterval: 5,\n      followupMessages: [\n        \"I'm available to help. Where are you ?\",\n        'Seems like you are offline.'\n      ]\n    },\n    model: {\n      response_model: 'gpt-5.2',\n      temperature: 0.7\n    },\n    agentType: 'General Assistant',\n    agent_category: 'Assistant',\n    systemPrompt: 'You are a helpful AI assistant. Be friendly, professional, and provide accurate information.',\n    default_ticketing_provider: null,\n    is_slack_enabled: false\n  })\n})"
  }
]
```
{% /request %}

{% response status="200" hasDropdown="false" title="Response" %}
```json
{
    "message": "Resource updated successfully",
    "data": {
        "id": 671,
        "owner": 193,
        "name": "Updated Support Bot",
        "description": "Enhanced AI agent for customer support",
        "status": "Idle",
        "appearance": {
            "primaryColor": "#0E1215",
            "secondaryColor": "#FFFFFF",
            "fontFamily": "Inter",
            "chatbotName": "AI Assistant",
            "welcomeMessage": "",
            "buttonText": "",
            "position": "bottom-right",
            "avatar": {
                "type": "default",
                "src": ""
            }
        },
        "behavior": {
            "suggestions": [],
            "guidelines": {
                "dos": [],
                "donts": []
            },
            "expertHandoff": false,
            "aiToAiHandoff": true,
            "autoTicketReply": false,
            "email": null,
            "ticketType": "email",
            "escalationPrompt": "",
            "agentHandoffPrompt": "- if user asks about Pujan, transfer to {{doc}}",
            "followupCount": 2,
            "followupInterval": 5,
            "followupMessages": [
                "I'm available to help. Where are you ?",
                "Seems like you are offline."
            ]
        },
        "model": {
            "response_model": "gpt-5.2",
            "temperature": 0.7,
            "display_model": "GPT 5.2"
        },
        "agentType": "General Assistant",
        "agent_category": "Assistant",
        "systemPrompt": "You are a helpful AI assistant. Be friendly, professional, and provide accurate information.",
        "knowledge_sources": [],
        "created_at": "2026-03-04T07:27:06.264485Z",
        "updated_at": "2026-03-04T08:11:34.281909Z",
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
        "MANAGE_INTEGRATIONS",
        "VIEW_SETTINGS",
        "SEND_INVITE",
        "MANAGE_AGENTS",
        "CONFIGURE_BUSINESS",
        "VIEW_BILLING",
        "MANAGE_BILLING",
        "MANAGE_KNOWLEDGE",
        "MANAGE_API_KEY",
        "VIEW_AGENTS",
        "MANAGE_SETTINGS",
        "MANAGE_ADMIN",
        "VIEW_KNOWLEDGE",
        "VIEW_ANALYTICS",
        "VIEW_USERS",
        "VIEW_INTEGRATIONS",
        "MANAGE_USERS",
        "MANAGE_CHAT",
        "TRAIN_AGENT",
        "VIEW_CHAT"
    ]
}
```
{% /response %}

---



---

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

- **Use PATCH for most updates** — it is safer since only fields you provide are touched.
- **Use PUT when replacing entirely** — include all required fields to avoid unintentional resets.
- **Test after updating** — verify the agent behaves as expected, especially after changing `systemPrompt` or `model`.

