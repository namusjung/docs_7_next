---
type: api
title: Create Agent
endpoint: POST /$api.version/agents/
order: 1
---

Create a new AI agent with custom configuration. Agents can be set up as chatbots or assistants with tailored prompts, models, and appearance settings.

## Parameters

{% parameter-list title="Required Fields" %}
```
[
  {
    "name": "name",
    "type": "string",
    "description": "Display name of the agent. Example: \"Support Bot\""
  },
  {
    "name": "agentType",
    "type": "string",
    "description": "Type of agent. Accepted values: \"chatbot\", \"assistant\""
  },
  {
    "name": "agent_category",
    "type": "string",
    "description": "Category of the agent. Accepted values: \"chatbot\", \"assistant\""
  }
]
```
{% /parameter-list %}

{% parameter-list title="Optional Fields" %}
```
[
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

{% parameter-list title="Request Header" %}
```
[
  {
    "name": "Authorization",
    "type": "api key",
    "required": true,
    "description": "Your 7en API key. Example: Api-Key 43NKLN3LKN4nlkn"
  },
  {
    "name": "Content-Type",
    "type": "string",
    "required": true,
    "description": "Must be application/json"
  }
]
```
{% /parameter-list %}

{% request title="Minimal request" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X POST 'https://{% $api.base_url %}v1/agents/' \\\n  -H 'Authorization: {% $api.key %}' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n    \"name\": \"Support Bot\",\n    \"agentType\": \"chatbot\",\n    \"agent_category\": \"chatbot\"\n  }'"
  },
  {
    "language": "javascript",
    "code": "const res = await fetch('https://{% $api.base_url %}v1/agents/', {\n  method: 'POST',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({\n    name: 'Support Bot',\n    agentType: 'chatbot',\n    agent_category: 'chatbot'\n  })\n});\nconst { data } = await res.json();"
  }
]
```
{% /request %}

{% request title="Full request" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X POST 'https://{% $api.base_url %}v1/agents/' \\\n  -H 'Authorization: {% $api.key %}' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n    \"name\": \"Support Bot\",\n    \"agentType\": \"chatbot\",\n    \"agent_category\": \"chatbot\",\n    \"description\": \"Handles tier-1 customer support\",\n    \"systemPrompt\": \"You are a helpful support agent for Acme Corp.\",\n    \"model\": { \"response_model\": \"gpt-4o\", \"temperature\": 0.5 },\n    \"appearance\": { \"primaryColor\": \"#2563eb\", \"chatbotName\": \"Acme Support\" },\n    \"behavior\": { \"expertHandoff\": true, \"suggestions\": [\"How do I reset my password?\"] }\n  }'"
  },
  {
    "language": "javascript",
    "code": "const res = await fetch('https://{% $api.base_url %}v1/agents/', {\n  method: 'POST',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({\n    name: 'Support Bot',\n    agentType: 'chatbot',\n    agent_category: 'chatbot',\n    description: 'Handles tier-1 customer support',\n    systemPrompt: 'You are a helpful support agent for Acme Corp.',\n    model: { response_model: 'gpt-4o', temperature: 0.5 },\n    appearance: { primaryColor: '#2563eb', chatbotName: 'Acme Support' },\n    behavior: { expertHandoff: true, suggestions: ['How do I reset my password?'] }\n  })\n});\nconst { data } = await res.json();"
  }
]
```
{% /request %}

{% response status="201" hasDropdown="false" title="Response" %}
```json
{
  "status": "success",
  "data": {
    "id": "b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654",
    "owner": 21,
    "name": "Support Bot",
    "description": "Handles tier-1 customer support",
    "status": "Active",
    "agentType": "chatbot",
    "agent_category": "chatbot",
    "systemPrompt": "You are a helpful support agent for Acme Corp.",
    "model": {
      "temperature": 0.5,
      "token_length": 16000,
      "response_model": "gpt-4o"
    },
    "appearance": {
      "avatar": { "src": "", "type": "default" },
      "position": "bottom-right",
      "chatbotName": "Acme Support",
      "primaryColor": "#2563eb",
      "secondaryColor": "#ffffff",
      "welcomeMessage": "",
      "fontFamily": "Inter",
      "buttonText": ""
    },
    "behavior": {
      "expertHandoff": true,
      "aiToAiHandoff": false,
      "suggestions": ["How do I reset my password?"],
      "showOnMobile": true,
      "autoShowAfter": 30,
      "conversationMemory": false,
      "multilingualSupport": false,
      "guidelines": { "dos": [], "donts": [] }
    },
    "knowledge_sources": [],
    "created_at": "2025-08-04T11:18:38.934851Z",
    "updated_at": "2025-08-04T11:18:38.934851Z"
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

##### 400 Validation Error
```json
{
  "error": {
    "code": "validation_error",
    "message": "Validation error",
    "status": 400,
    "fields": {
      "name": ["This field is required."],
      "agentType": ["This field is required."]
    }
  }
}
```

##### 401 Unauthorized
```json
{
  "error": {
    "code": "authentication_failed",
    "message": "Authentication failed.",
    "status": 401,
    "fields": []
  }
}
```

##### 403 Forbidden
```json
{
  "error": {
    "code": "agent_limit_reached",
    "message": "You have reached the maximum number of agents for your plan.",
    "status": 403,
    "fields": []
  }
}
```

## Best Practices

- **System prompts**: Be specific and concise. A well-scoped system prompt produces more consistent agent behavior.
- **Temperature**: Use `0.1–0.3` for factual/support agents, `0.7–1.0` for creative tasks.
- **Required fields first**: Always include `name`, `agentType`, and `agent_category` — omitting any returns a `400` error.
- **Retrain after adding knowledge**: Creating an agent does not trigger training. Add knowledge sources and call [Retrain Agent](/api/agent-training/retrain-agent) to activate them.

## Rate Limits

- 100 requests per minute for free tier
- 1,000 requests per minute for pro tier
- 10,000 requests per minute for enterprise tier
