---
type: api
title: Agent Object
order: 1
prev: 
  href: /api/api-reference/agent/list-all-agents
  title: "List All Agents"
next: 
  href: /api/api-reference/agent/update-agent
  title: "Update Agent"
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "API", href: "/api/api-reference/introduction/" }
  - { label: "Agent Object" }
---

Here is the json object structure and its description.


{% parameter-list title="Attributes" %}
```
[
  {
    "name": "id",
    "type": "integer",
    "description": "Unique identifier for the agent. Example: 169"
  },
  {
    "name": "owner",
    "type": "integer",
    "description": "ID of the user who owns the agent. Example: 21"
  },
  {
    "name": "name",
    "type": "string",
    "description": "Name of the agent. Example: \"Innovated Agent\""
  },
  {
    "name": "description",
    "type": "string",
    "description": "Description of the agent's purpose. Example: \"A new AI agent ready to be configured.\""
  },
  {
    "name": "status",
    "type": "string",
    "description": "Current status of the agent. Example: \"Active\""
  },
  {
    "name": "appearance",
    "type": "object",
    "description": "Visual appearance settings for the agent.",
    "children": [
      {
        "name": "avatar",
        "type": "object",
        "description": "Avatar settings for the agent.",
        "children": [
          {
            "name": "src",
            "type": "string",
            "description": "URL or path to the avatar image, empty if using default. Example: \"\""
          },
          {
            "name": "type",
            "type": "string",
            "description": "Type of avatar. Example: \"default\""
          }
        ]
      },
      {
        "name": "position",
        "type": "string",
        "description": "Position of the chat widget. Example: \"bottom-right\""
      },
      {
        "name": "buttonText",
        "type": "string",
        "description": "Text for the chat button, empty if not set. Example: \"\""
      },
      {
        "name": "fontFamily",
        "type": "string",
        "description": "Font family used in the chat interface. Example: \"Inter\""
      },
      {
        "name": "chatbotName",
        "type": "string",
        "description": "Name displayed for the chatbot. Example: \"Innovated Assistant\""
      },
      {
        "name": "primaryColor",
        "type": "string",
        "description": "Primary color for the chat interface. Example: \"#3b82f6\""
      },
      {
        "name": "secondaryColor",
        "type": "string",
        "description": "Secondary color for the chat interface. Example: \"#ffffff\""
      },
      {
        "name": "welcomeMessage",
        "type": "string",
        "description": "Welcome message displayed to users, empty if not set. Example: \"\""
      }
    ]
  },
  {
    "name": "behavior",
    "type": "object",
    "description": "Behavior and interaction settings for the agent.",
    "children": [
      {
        "name": "guidelines",
        "type": "object",
        "description": "Guidelines for agent behavior, containing dos and donts arrays.",
        "children": [
          {
            "name": "dos",
            "type": "array",
            "description": "List of allowed actions for the agent (empty in this case). Example: []"
          },
          {
            "name": "donts",
            "type": "array",
            "description": "List of prohibited actions for the agent (empty in this case). Example: []"
          }
        ]
      },
      {
        "name": "suggestions",
        "type": "array",
        "description": "List of suggested user prompts (empty in this case). Example: []"
      },
      {
        "name": "showOnMobile",
        "type": "boolean",
        "description": "Whether the chat widget is displayed on mobile devices. Example: true"
      },
      {
        "name": "aiToAiHandoff",
        "type": "boolean",
        "description": "Whether AI-to-AI handoff is enabled. Example: false"
      },
      {
        "name": "autoShowAfter",
        "type": "integer",
        "description": "Time (in seconds) before the chat widget auto-appears. Example: 30"
      },
      {
        "name": "expertHandoff",
        "type": "boolean",
        "description": "Whether handoff to a human expert is enabled. Example: true"
      },
      {
        "name": "collectVisitorData",
        "type": "boolean",
        "description": "Whether visitor data collection is enabled. Example: true"
      },
      {
        "name": "continuousLearning",
        "type": "boolean",
        "description": "Whether continuous learning is enabled. Example: false"
      },
      {
        "name": "conversationMemory",
        "type": "boolean",
        "description": "Whether conversation memory is enabled. Example: false"
      },
      {
        "name": "multilingualSupport",
        "type": "boolean",
        "description": "Whether multilingual support is enabled. Example: false"
      }
    ]
  },
  {
    "name": "model",
    "type": "object",
    "description": "AI model configuration for the agent.",
    "children": [
      {
        "name": "temperature",
        "type": "number",
        "description": "Model temperature for response creativity. Example: 0.7"
      },
      {
        "name": "token_length",
        "type": "integer",
        "description": "Maximum token length for responses. Example: 16000"
      },
      {
        "name": "response_model",
        "type": "string",
        "description": "AI model used. Example: \"gpt-3.5-turbo\""
      }
    ]
  },
  {
    "name": "agentType",
    "type": "string",
    "description": "Type of agent. Example: \"general_assistant\""
  },
  {
    "name": "systemPrompt",
    "type": "string",
    "description": "Custom system prompt for the agent. Example: \"You are a helpful AI assistant. Be friendly, professional, and provide accurate information.\""
  },
  {
    "name": "created_at",
    "type": "string",
    "description": "Timestamp when the agent was created. Example: \"2025-08-04T11:18:38.934851Z\""
  },
  {
    "name": "updated_at",
    "type": "string",
    "description": "Timestamp when the agent was last updated. Example: \"2025-08-05T07:38:35.903607Z\""
  }
]
```
{% /parameter-list %}

{% response status="200" hasDropdown="false" title="Response" %}
```json
{
  "status": "success",
  "data": {
    "id": 169,
    "owner": 21,
    "name": "Innovated Agent",
    "description": "A new AI agent ready to be configured.",
    "status": "Active",
    "appearance": {
      "avatar": {
        "src": "",
        "type": "default"
      },
      "position": "bottom-right",
      "buttonText": "",
      "fontFamily": "Inter",
      "chatbotName": "Innovated Assistant",
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
    knowledge_sources: [],
    "model": {
      "temperature": 0.7,
      "token_length": 16000,
      "response_model": "gpt-3.5-turbo"
    },
    "agentType": "general_assistant",
    "systemPrompt": "You are a helpful AI assistant. Be friendly, professional, and provide accurate information.",
    "created_at": "2025-08-04T11:18:38.934851Z",
    "updated_at": "2025-08-05T07:38:35.903607Z"
  }
}
```
{% /response %}
