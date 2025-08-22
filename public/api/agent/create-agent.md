---
type: api
title: Create Agent
endpoint: POST /v1/agents
next: 
  href: /docs/getting-started/introduction
  title: "Introduciton"
prev: 
  href: /api/api-reference/agent/agent-object
  title: "Agent Object"
order: 1
---

# Create Agent

Create a new AI agent with custom configuration and knowledge sources. Agents can be configured with different models, prompts, and knowledge bases to handle specific use cases.



## Overview

The Create Agent endpoint allows you to set up a new AI agent tailored to your specific needs. You can configure the agent's behavior, knowledge sources, and response characteristics to optimize performance for your use case.

## Parameters


{% parameter-list title="Request Body" %}
```
[
  {
    "name": "name",
    "type": "string",
    "description": "Name of the agent. Example: \"Innovated Agent\""
  },
  {
    "name": "description",
    "type": "string",
    "description": "Description of the agent's purpose. Example: \"A new AI agent ready to be configured.\""
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
    "description": "Api key generation from 7en.i platform. eg. Api-Key 43NKLN3LKN4nlkn"
  }
]
```
{% /parameter-list %}

{% request-code title="Create agent" %}
[
  {
    "language": "curl",
    "code": "curl -X POST 'https://{% $api.base_url %}v1/agents/' -H 'Authorization: {% $api.key %}' -H 'Content-Type: application/json' -d '{\"name\": \"Updated Agent\", \"description\": \"An updated AI assistant\", \"systemPrompt\": \"You are an updated AI assistant. Provide concise and accurate responses.\"}'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}v1/agents/', {\n  method: 'POST',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({\n    \"name\": \"Updated Agent\",\n    \"description\": \"An updated AI assistant\",\n    \"systemPrompt\": \"You are an updated AI assistant. Provide concise and accurate responses.\"\n  })\n})"
  }
]
{% /request-code %}

{% response status="200" hasDropdown="false" title="Response" %}
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
{% /response %}

## Error Responses


{% code-block status="401" title="400 Bad Request" %}
```
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request parameters",
    "details": [
      {
        "field": "system_prompt",
        "message": "System prompt is required"
      }
    ]
  }
}
```
{% /code-block %}

### 401 Unauthorized

{% code-block status="401" title="Unauthorized" language="json" %}
```
{
  error: {
    code: "authentication_required",
    message: "Authentication fialed.",
    status: 401,
    fields: {
      []
    }
  }
}
```
{% /code-block %}

## Best Practices

- **System Prompts**: Be specific and clear in your system prompts to get consistent behavior
- **Temperature**: Use lower values (0.1-0.3) for factual responses, higher values (0.7-1.0) for creative tasks
- **Knowledge Sources**: Ensure your knowledge sources are up-to-date and relevant to the agent's purpose
- **Testing**: Test your agent thoroughly before deploying to production


## Rate Limits

- 100 requests per minute for free tier
- 1000 requests per minute for pro tier
- 10000 requests per minute for enterprise tier


