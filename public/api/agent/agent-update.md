---
type: api
title: Update Agent
endpoint: PUT /{% $api.version %}/agents/{id}
prev: 
  href: /api/api-reference/agent/create-agent
  title: "Create Agent"
next: 
  href: /api/api-reference/agent/agent-object
  title: "Agent Object"
---

# Update Agent

Update an existing AI agent with new configuration and knowledge sources. This endpoint allows you to modify the agent's settings, such as its name, description, behavior, and model configuration.

## Overview

The Update Agent endpoint enables you to modify an existing AI agent's properties. You can update fields like the agent's name, description, system prompt, appearance, behavior, and model settings to tailor the agent to your evolving needs.


## Parameters

{% parameter-list title="Request Body" %}
```
[
  {
    "name": "name",
    "type": "string",
    "description": "Name of the agent. Example: \"Innovated Agent\"",
    "optional": true
  },
  {
    "name": "description",
    "type": "string",
    "description": "Description of the agent's purpose. Example: \"A new AI agent ready to be configured.\"",
    "optional": true
  },
  {
    "name": "systemPrompt",
    "type": "string",
    "description": "Custom system prompt for the agent. Example: \"You are a helpful AI assistant. Be friendly, professional, and provide accurate information.\"",
    "optional": true
  },
  {
    "name": "appearance",
    "type": "object",
    "description": "Visual appearance settings for the agent.",
    "optional": true,
    "children": [
      {
        "name": "avatar",
        "type": "object",
        "description": "Avatar settings for the agent.",
        "optional": true,
        "children": [
          {
            "name": "src",
            "type": "string",
            "description": "URL or path to the avatar image, empty if using default. Example: \"\"",
            "optional": true
          },
          {
            "name": "type",
            "type": "string",
            "description": "Type of avatar. Example: \"default\"",
            "optional": true
          }
        ]
      },
      {
        "name": "position",
        "type": "string",
        "description": "Position of the chat widget. Example: \"bottom-right\"",
        "optional": true
      },
      {
        "name": "buttonText",
        "type": "string",
        "description": "Text for the chat button, empty if not set. Example: \"\"",
        "optional": true
      },
      {
        "name": "fontFamily",
        "type": "string",
        "description": "Font family used in the chat interface. Example: \"Inter\"",
        "optional": true
      },
      {
        "name": "chatbotName",
        "type": "string",
        "description": "Name displayed for the chatbot. Example: \"Innovated Assistant\"",
        "optional": true
      },
      {
        "name": "primaryColor",
        "type": "string",
        "description": "Primary color for the chat interface. Example: \"#3b82f6\"",
        "optional": true
      },
      {
        "name": "secondaryColor",
        "type": "string",
        "description": "Secondary color for the chat interface. Example: \"#ffffff\"",
        "optional": true
      },
      {
        "name": "welcomeMessage",
        "type": "string",
        "description": "Welcome message displayed to users, empty if not set. Example: \"\"",
        "optional": true
      }
    ]
  },
  {
    "name": "behavior",
    "type": "object",
    "description": "Behavior and interaction settings for the agent.",
    "optional": true,
    "children": [
      {
        "name": "guidelines",
        "type": "object",
        "description": "Guidelines for agent behavior, containing dos and donts arrays.",
        "optional": true,
        "children": [
          {
            "name": "dos",
            "type": "array",
            "description": "List of allowed actions for the agent (empty in this case). Example: []",
            "optional": true
          },
          {
            "name": "donts",
            "type": "array",
            "description": "List of prohibited actions for the agent (empty in this case). Example: []",
            "optional": true
          }
        ]
      },
      {
        "name": "suggestions",
        "type": "array",
        "description": "List of suggested user prompts (empty in this case). Example: []",
        "optional": true
      },
      {
        "name": "showOnMobile",
        "type": "boolean",
        "description": "Whether the chat widget is displayed on mobile devices. Example: true",
        "optional": true
      },
      {
        "name": "aiToAiHandoff",
        "type": "boolean",
        "description": "Whether AI-to-AI handoff is enabled. Example: false",
        "optional": true
      },
      {
        "name": "autoShowAfter",
        "type": "integer",
        "description": "Time (in seconds) before the chat widget auto-appears. Example: 30",
        "optional": true
      },
      {
        "name": "expertHandoff",
        "type": "boolean",
        "description": "Whether handoff to a human expert is enabled. Example: true",
        "optional": true
      },
      {
        "name": "collectVisitorData",
        "type": "boolean",
        "description": "Whether visitor data collection is enabled. Example: true",
        "optional": true
      },
      {
        "name": "continuousLearning",
        "type": "boolean",
        "description": "Whether continuous learning is enabled. Example: false",
        "optional": true
      },
      {
        "name": "conversationMemory",
        "type": "boolean",
        "description": "Whether conversation memory is enabled. Example: false",
        "optional": true
      },
      {
        "name": "multilingualSupport",
        "type": "boolean",
        "description": "Whether multilingual support is enabled. Example: false",
        "optional": true
      }
    ]
  },
  {
    "name": "model",
    "type": "object",
    "description": "AI model configuration for the agent.",
    "optional": true,
    "children": [
      {
        "name": "temperature",
        "type": "number",
        "description": "Model temperature for response creativity. Example: 0.7",
        "optional": true
      },
      {
        "name": "token_length",
        "type": "integer",
        "description": "Maximum token length for responses. Example: 16000",
        "optional": true
      },
      {
        "name": "response_model",
        "type": "string",
        "description": "AI model used. Example: \"gpt-3.5-turbo\"",
        "optional": true
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
    "description": "Api key generated from 7en.i platform. Example: Api-Key 43NKLN3LKN4nlkn"
  }
]
```
{% /parameter-list %}

{% request title="Update agent" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X PUT 'https://{% $api.base_url %}{% $api.version %}/agents/11' -H 'Authorization: {% $api.key %}' -H 'Content-Type: application/json' -d '{\"name\": \"Updated Agent\", \"description\": \"An updated AI assistant\", \"systemPrompt\": \"You are an updated AI assistant. Provide concise and accurate responses.\"}'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}{% $api.version %}/agents/11', {\n  method: 'PUT',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({\n    \"name\": \"Updated Agent\",\n    \"description\": \"An updated AI assistant\",\n    \"systemPrompt\": \"You are an updated AI assistant. Provide concise and accurate responses.\"\n  })\n})"
  }
]
```
{% /request %}

{% response status="200" hasDropdown="false" title="Response" %}
```json
{
  "status": "success",
  "data": {
    "id": 11,
    "owner": 21,
    "name": "Updated Agent",
    "description": "An updated AI assistant",
    "status": "Active",
    "appearance": {
      "avatar": {
        "src": "",
        "type": "default"
      },
      "position": "bottom-right",
      "buttonText": "",
      "fontFamily": "Inter",
      "chatbotName": "Updated Assistant",
      "primaryColor": "#3b82f6",
      "secondaryColor": "#ffffff",
      "welcomeMessage": ""
    },
    "behavior": {
      "guidelines": {
        "dos": [],
        "donts": []
      },
      "suggestions": [],
      "showOnMobile": true,
      "aiToAiHandoff": false,
      "autoShowAfter": 30,
      "expertHandoff": true,
      "collectVisitorData": true,
      "continuousLearning": false,
      "conversationMemory": false,
      "multilingualSupport": false
    },
    "knowledge_sources": [],
    "model": {
      "temperature": 0.7,
      "token_length": 16000,
      "response_model": "gpt-3.5-turbo"
    },
    "agentType": "general_assistant",
    "systemPrompt": "You are an updated AI assistant. Provide concise and accurate responses.",
    "created_at": "2025-08-04T11:18:38.934851Z",
    "updated_at": "2025-08-18T09:31:00.000000Z"
  }
}
```
{% /response %}

## Error Responses

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Agent with ID 11 not found.",
    "status": 404,
    "fields": []
  }
}
```

## Best Practices

- **Partial Updates**: Only include the fields you want to update in the request body to avoid unintentionally resetting other fields. Use `PATCH` method to partial update.
  {% endpoint url="/{% $api.version %}/agents/{id}" method="PATCH" /%}
  ##### Request Body
  ```json
  {
    "appearance": {
      "aiToAiHandoff": true
    }
  }
  ```
- **System Prompts**: Ensure the system prompt is clear and aligns with the agent's updated purpose.
- **Testing**: Test the updated agent thoroughly to verify that changes behave as expected.
- **Rate Limits**: Be mindful of the rate limits when updating multiple agents in succession.

## Rate Limits

- 100 requests per minute for free tier
- 1000 requests per minute for pro tier
- 10000 requests per minute for enterprise tier