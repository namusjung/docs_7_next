---
type: api
title: Get Agent Details
endpoint: GET /$api.version/agents/{id}
order: 3
---

# Get Agent Details

Fetch complete details of a single AI agent by its ID.

## Overview

The Get Agent Details endpoint returns the full configuration object for a specific agent accessible to the authenticated user. This includes appearance settings, behavior configuration, model settings, and associated knowledge sources.

## Parameters

{% parameter-list title="Path Parameters" %}
```
[
  {
    "name": "id",
    "type": "UUID",
    "description": "Unique identifier of the agent to retrieve. Example: \"b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654\""
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

{% request title="Get Agent Details" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X GET 'https://{% $api.base_url %}v1/agents/b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654' -H 'Authorization: {% $api.key %}' -H 'Content-Type: application/json'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}v1/agents/b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654', {\n  method: 'GET',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  }\n})"
  }
]
```
{% /request %}

{% response status="200" hasDropdown="false" title="Response" %}
```json
{
  "message": "Resource retrieved successfully",
  "data": {
    "id": "b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654",
    "name": "Support Bot",
    "description": "Handles tier-1 customer support queries for Acme Corp",
    "status": "Active",
    "agentType": "Chatbot",
    "agent_category": "Chatbot",
    "model": "gpt-4o",
    "display_model": "GPT-4o",
    "systemPrompt": "You are a helpful support agent for Acme Corp...",
    "owner": "sarah@acme.com",
    "knowledge_sources": [
      {
        "id": 101,
        "title": "Help Center",
        "type": "url",
        "status": "Trained",
        "urls": ["https://help.acme.com/"]
      }
    ],
    "conversations": 347,
    "created_at": "2025-11-15T10:30:00Z",
    "updated_at": "2026-01-20T14:22:00Z"
  },
  "status_code": 200
}
```
{% /response %}

## Error Responses

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

##### 404 Not Found
```json
{
  "error": {
    "code": "resource_not_found",
    "message": "Agent not found.",
    "status": 404,
    "fields": {
      "general": ["Agent not found"]
    }
  }
}
```

## Best Practices

- **Access Control**: Only agents belonging to the authenticated user's team are returned. A `404` is returned for inaccessible agents to prevent enumeration.
- **Caching**: Cache retrieved agent configurations client-side where appropriate to reduce API calls.

## Rate Limits

- 100 requests per minute for free tier
- 1000 requests per minute for pro tier
- 10000 requests per minute for enterprise tier
