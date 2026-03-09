---
type: api
title: Create Agent
endpoint: POST api/$api.version/agents/
order: 1
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "Agent Operations", href: "/api/agent-operations/create-agent" }
  - { label: "Create Agent" }
---

# Create Agent

## Overview

Create a new AI agent with custom configuration. Agents can be set up as chatbots or assistants with tailored prompts, models, and appearance settings.

{% parameter-list title="Request Header" %}
```
[
  {
    "name": "Authorization",
    "type": "api key",
    "description": "Your 7en API key. Example: Api-Key 43NKLN3LKN4nlkn"
  },
  {
    "name": "Content-Type",
    "type": "string",
    "description": "Must be application/json"
  }
]
```
{% /parameter-list %}

## Request

{% parameter-list title="Request Body" %}
```
[
  {
    "name": "name",
    "type": "string",
    "required": true,
    "description": "Display name of the agent. Example: \"Support Bot\""
  },
  {
    "name": "agent_category",
    "type": "string",
    "required": true,
    "description": "Category of the agent. Accepted values: \"chatbot\", \"assistant\""
  }
]
```
{% /parameter-list %}

{% parameter-list title="Optional Fields" %}
```
[
  {
    "name": "agentType",
    "type": "string",
    "description": "Type of agent. Accepted values: \"General Assistant\", \"Tech Expert\""
  },
  {
    "name": "description",
    "type": "string",
    "description": "Short description of the agent's purpose. Example: \"Handles tier-1 customer support queries.\"",
    "optional": true
  },
  {
    "name": "systemPrompt",
    "type": "string",
    "description": "System-level instructions that define the agent's behavior and persona.",
    "optional": true
  },
  {
    "name": "model",
    "type": "object",
    "description": "LLM model configuration.",
    "optional": true,
    "children": [
      {
        "name": "response_model",
        "type": "string",
        "description": "Model identifier. Example: \"gpt-4o\"",
        "optional": true
      },
      {
        "name": "temperature",
        "type": "number",
        "description": "Sampling temperature between 0 and 1. Lower = more deterministic. Example: 0.7",
        "optional": true
      },
      {
        "name": "token_length",
        "type": "integer",
        "description": "Maximum response token length. Example: 16000",
        "optional": true
      }
    ]
  },
  {
    "name": "appearance",
    "type": "object",
    "description": "Visual customization for the chat widget.",
    "optional": true,
    "children": [
      {
        "name": "chatbotName",
        "type": "string",
        "description": "Name shown in the chat interface. Example: \"Acme Support\"",
        "optional": true
      },
      {
        "name": "primaryColor",
        "type": "string",
        "description": "Hex color for the primary UI elements. Example: \"#3b82f6\"",
        "optional": true
      },
      {
        "name": "secondaryColor",
        "type": "string",
        "description": "Hex color for secondary UI elements. Example: \"#ffffff\"",
        "optional": true
      },
      {
        "name": "position",
        "type": "string",
        "description": "Widget position on the page. Example: \"bottom-right\"",
        "optional": true
      },
      {
        "name": "welcomeMessage",
        "type": "string",
        "description": "Opening message shown to users. Example: \"Hi! How can I help you today?\"",
        "optional": true
      },
      {
        "name": "fontFamily",
        "type": "string",
        "description": "Font used in the chat interface. Example: \"Inter\"",
        "optional": true
      }
    ]
  },
  {
    "name": "behavior",
    "type": "object",
    "description": "Behavioral settings for the agent.",
    "optional": true,
    "children": [
      {
        "name": "expertHandoff",
        "type": "boolean",
        "description": "Enable handoff to a human expert. Default: true",
        "optional": true
      },
      {
        "name": "aiToAiHandoff",
        "type": "boolean",
        "description": "Enable handoff to another AI agent. Default: false",
        "optional": true
      },
      {
        "name": "suggestions",
        "type": "array of string",
        "description": "Pre-defined suggested prompts shown to users. Example: [\"How do I reset my password?\"]",
        "optional": true
      },
      {
        "name": "showOnMobile",
        "type": "boolean",
        "description": "Show the chat widget on mobile devices. Default: true",
        "optional": true
      },
      {
        "name": "autoShowAfter",
        "type": "integer",
        "description": "Seconds before the widget auto-opens. Example: 30",
        "optional": true
      },
      {
        "name": "conversationMemory",
        "type": "boolean",
        "description": "Retain context across sessions. Default: false",
        "optional": true
      },
      {
        "name": "multilingualSupport",
        "type": "boolean",
        "description": "Enable automatic language detection and multilingual responses. Default: false",
        "optional": true
      },
      {
        "name": "guidelines",
        "type": "object",
        "description": "Dos and don'ts for the agent's responses.",
        "optional": true,
        "children": [
          {
            "name": "dos",
            "type": "array of string",
            "description": "Behaviors the agent should follow.",
            "optional": true
          },
          {
            "name": "donts",
            "type": "array of string",
            "description": "Behaviors the agent should avoid.",
            "optional": true
          }
        ]
      }
    ]
  }
]
```
{% /parameter-list %}


{% request title="Request" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X POST 'https://{% $api.base_url %}/api/v1/agents/' \\\n  -H 'Authorization: {% $api.key %}' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n    \"name\": \"Support Bot\",\n    \"agent_category\": \"chatbot\"\n  }'"
  },
  {
    "language": "javascript",
    "code": "const res = await fetch('https://{% $api.base_url %}/api/v1/agents/', {\n  method: 'POST',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({\n    name: 'Support Bot',\n    agent_category: 'chatbot'\n  })\n});\nconst { data } = await res.json();"
  },
  {
    "language": "python",
    "code": "import requests\n\nresponse = requests.post(\n    'https://{% $api.base_url %}/api/v1/agents/',\n    headers={\n        'Authorization': '{% $api.key %}',\n        'Content-Type': 'application/json'\n    },\n    json={\n        'name': 'Support Bot',\n        'agent_category': 'chatbot'\n    }\n)\ndata = response.json()"
  },
  {
    "language": "php",
    "code": "$ch = curl_init('https://{% $api.base_url %}/api/v1/agents/');\ncurl_setopt_array($ch, [\n    CURLOPT_RETURNTRANSFER => true,\n    CURLOPT_POST => true,\n    CURLOPT_HTTPHEADER => [\n        'Authorization: {% $api.key %}',\n        'Content-Type: application/json'\n    ],\n    CURLOPT_POSTFIELDS => json_encode([\n        'name' => 'Support Bot',\n        'agent_category' => 'chatbot'\n    ])\n]);\n$data = json_decode(curl_exec($ch), true);\ncurl_close($ch);"
  }
]
```
{% /request %}


{% response status="201" hasDropdown="false" title="Response" %}
```json
{
    "message": "Resource created successfully",
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

## Validations

| Rule | Details |
|---|---|
| **Agent limit** | The number of agents you can create is capped by your subscription plan. Exceeding the limit returns `403 Forbidden` with code `agent_limit_reached`. |
| **Model permissions** | Certain models (e.g. GPT-4o, Claude) require a Pro or Enterprise plan. Requesting an unavailable model returns `403 Forbidden` with code `model_not_permitted`. |
| **Payment status** | Requests are blocked if your account has an outstanding payment issue. Returns `403 Forbidden` with code `payment_required`. |

## Error Responses

##### 400
```json
{
    "error": {
        "code": "name_required",
        "message": "The name field is required.",
        "status": 400
    }
}

```

##### 403
```json
{
    "error": {
        "code": "invalid_api_key",
        "message": "The provided API key is invalid or has been revoked.",
        "status": 403
    }
}

```

##### 400
```json

{
    "error": {
        "code": "agent_limit_reached",
        "message": "Agent limit reached. Upgrade your plan or add seats.",
        "status": 400
    }
}
```

## Best Practices

- **System prompts**: Be specific and concise. A well-scoped system prompt produces more consistent agent behavior.
- **Temperature**: Use `0.1–0.3` for factual/support agents, `0.7–1.0` for creative tasks.
- **Required fields first**: Always include `name` and `agent_category` — omitting any returns a `400` error.
- **Retrain after adding knowledge**: Creating an agent does not trigger training. Add knowledge sources and call [Train Agent](/api/agent-training/train-agent) to activate them.

