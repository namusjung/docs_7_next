---
type: api
title: Update Agent
endpoint: PATCH api/$api.version/agents/{id}
order: 4
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "Agent Operations", href: "/api/agent-operations/create-agent" }
  - { label: "Update Agent" }
---

# Update Agent

## Overview

Update an existing agent's configuration. 

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

## Request

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

{% request title="Request" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X PUT 'https://{% $api.base_url %}/api/v1/agents/{id}' \\\n  -H 'Authorization: {% $api.key %}' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n    \"name\": \"Updated Support Bot\",\n    \"description\": \"Enhanced AI agent for customer support\",\n    \"appearance\": {\n      \"primaryColor\": \"#0e1215\",\n      \"secondaryColor\": \"#ffffff\",\n      \"fontFamily\": \"Inter\",\n      \"chatbotName\": \"AI Assistant\",\n      \"welcomeMessage\": \"\",\n      \"buttonText\": \"\",\n      \"position\": \"bottom-right\",\n      \"avatar\": {\n        \"type\": \"default\",\n        \"src\": \"\"\n      }\n    },\n    \"behavior\": {\n      \"suggestions\": [],\n      \"guidelines\": {\n        \"dos\": [],\n        \"donts\": []\n      },\n      \"expertHandoff\": false,\n      \"aiToAiHandoff\": true,\n      \"autoTicketReply\": false,\n      \"email\": null,\n      \"ticketType\": \"email\",\n      \"escalationPrompt\": \"\",\n      \"agentHandoffPrompt\": \"- if user asks about Pujan, transfer to {{doc}}\",\n      \"followupCount\": 2,\n      \"followupInterval\": 5,\n      \"followupMessages\": [\n        \"I\\'m available to help. Where are you ?\",\n        \"Seems like you are offline.\"\n      ]\n    },\n    \"model\": {\n      \"response_model\": \"gpt-5.2\",\n      \"temperature\": 0.7\n    },\n    \"agentType\": \"General Assistant\",\n    \"agent_category\": \"Assistant\",\n    \"systemPrompt\": \"You are a helpful AI assistant. Be friendly, professional, and provide accurate information.\",\n    \"default_ticketing_provider\": null,\n    \"is_slack_enabled\": false\n  }'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}/api/v1/agents/{id}', {\n  method: 'PUT',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({\n    name: 'Updated Support Bot',\n    description: 'Enhanced AI agent for customer support',\n    appearance: {\n      primaryColor: '#0e1215',\n      secondaryColor: '#ffffff',\n      fontFamily: 'Inter',\n      chatbotName: 'AI Assistant',\n      welcomeMessage: '',\n      buttonText: '',\n      position: 'bottom-right',\n      avatar: {\n        type: 'default',\n        src: ''\n      }\n    },\n    behavior: {\n      suggestions: [],\n      guidelines: {\n        dos: [],\n        donts: []\n      },\n      expertHandoff: false,\n      aiToAiHandoff: true,\n      autoTicketReply: false,\n      email: null,\n      ticketType: 'email',\n      escalationPrompt: '',\n      agentHandoffPrompt: '- if user asks about Pujan, transfer to {{doc}}',\n      followupCount: 2,\n      followupInterval: 5,\n      followupMessages: [\n        \"I'm available to help. Where are you ?\",\n        'Seems like you are offline.'\n      ]\n    },\n    model: {\n      response_model: 'gpt-5.2',\n      temperature: 0.7\n    },\n    agentType: 'General Assistant',\n    agent_category: 'Assistant',\n    systemPrompt: 'You are a helpful AI assistant. Be friendly, professional, and provide accurate information.',\n    default_ticketing_provider: null,\n    is_slack_enabled: false\n  })\n})"
  },
  {
    "language": "python",
    "code": "import requests\n\nresponse = requests.put(\n    'https://{% $api.base_url %}/api/v1/agents/{id}',\n    headers={\n        'Authorization': '{% $api.key %}',\n        'Content-Type': 'application/json'\n    },\n    json={\n        'name': 'Updated Support Bot',\n        'description': 'Enhanced AI agent for customer support',\n        'appearance': {\n            'primaryColor': '#0e1215',\n            'secondaryColor': '#ffffff',\n            'fontFamily': 'Inter',\n            'chatbotName': 'AI Assistant',\n            'welcomeMessage': '',\n            'buttonText': '',\n            'position': 'bottom-right',\n            'avatar': {'type': 'default', 'src': ''}\n        },\n        'behavior': {\n            'suggestions': [],\n            'guidelines': {'dos': [], 'donts': []},\n            'expertHandoff': False,\n            'aiToAiHandoff': True,\n            'autoTicketReply': False,\n            'email': None,\n            'ticketType': 'email',\n            'escalationPrompt': '',\n            'agentHandoffPrompt': '- if user asks about Pujan, transfer to {{doc}}',\n            'followupCount': 2,\n            'followupInterval': 5,\n            'followupMessages': [\"I'm available to help. Where are you ?\", 'Seems like you are offline.']\n        },\n        'model': {'response_model': 'gpt-5.2', 'temperature': 0.7},\n        'agentType': 'General Assistant',\n        'agent_category': 'Assistant',\n        'systemPrompt': 'You are a helpful AI assistant. Be friendly, professional, and provide accurate information.',\n        'default_ticketing_provider': None,\n        'is_slack_enabled': False\n    }\n)\ndata = response.json()"
  },
  {
    "language": "php",
    "code": "$payload = [\n    'name' => 'Updated Support Bot',\n    'description' => 'Enhanced AI agent for customer support',\n    'appearance' => [\n        'primaryColor' => '#0e1215',\n        'secondaryColor' => '#ffffff',\n        'fontFamily' => 'Inter',\n        'chatbotName' => 'AI Assistant',\n        'welcomeMessage' => '',\n        'buttonText' => '',\n        'position' => 'bottom-right',\n        'avatar' => ['type' => 'default', 'src' => '']\n    ],\n    'behavior' => [\n        'suggestions' => [],\n        'guidelines' => ['dos' => [], 'donts' => []],\n        'expertHandoff' => false,\n        'aiToAiHandoff' => true,\n        'autoTicketReply' => false,\n        'email' => null,\n        'ticketType' => 'email',\n        'escalationPrompt' => '',\n        'agentHandoffPrompt' => '- if user asks about Pujan, transfer to {{doc}}',\n        'followupCount' => 2,\n        'followupInterval' => 5,\n        'followupMessages' => [\"I'm available to help. Where are you ?\", 'Seems like you are offline.']\n    ],\n    'model' => ['response_model' => 'gpt-5.2', 'temperature' => 0.7],\n    'agentType' => 'General Assistant',\n    'agent_category' => 'Assistant',\n    'systemPrompt' => 'You are a helpful AI assistant. Be friendly, professional, and provide accurate information.',\n    'default_ticketing_provider' => null,\n    'is_slack_enabled' => false\n];\n$ch = curl_init('https://{% $api.base_url %}/api/v1/agents/{id}');\ncurl_setopt_array($ch, [\n    CURLOPT_RETURNTRANSFER => true,\n    CURLOPT_CUSTOMREQUEST => 'PUT',\n    CURLOPT_HTTPHEADER => [\n        'Authorization: {% $api.key %}',\n        'Content-Type: application/json'\n    ],\n    CURLOPT_POSTFIELDS => json_encode($payload)\n]);\n$data = json_decode(curl_exec($ch), true);\ncurl_close($ch);"
  }
]
```
{% /request %}

{% response status="200" hasDropdown="false" title="Response" %}
```json
{
    "message": "Resource updated successfully",
    "status": "success",
    "data": {
        "id": 689,
        "owner": 2,
        "name": "Updated Customer Support Agent",
        "description": "Enhanced AI agent for customer support",
        "status": "Idle",
        "appearance": {
            "avatar": "https://example.com/new-avatar.png",
            "theme": "green"
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

