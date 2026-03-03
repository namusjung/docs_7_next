---
type: api
title: List All Agents
endpoint: GET /$api.version/agents/
order: 2
---

# List All Agents

Retrieve a list of all AI agents associated with the authenticated user.

## Overview

The List All Agents endpoint allows you to fetch all agents created by the user, including their configurations and metadata. This is useful for managing and reviewing all agents in your account.

## Parameters

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

{% request title="List Agents" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X GET 'https://{% $api.base_url %}v1/agents/' -H 'Authorization: {% $api.key %}'\\ -H 'Content-Type: application/json'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}v1/agents/', {\n  method: 'GET',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  },\n})"
  }
]
```
{% /request %}


{% response status="200" hasDropdown="false" title="Response" %}
```json
{
    "message": "List retrieved successfully",
    "data": [
        {
            "id": 414,
            "owner": 83,
            "name": "New Chatbot 1763878362359",
            "description": "A new AI chatbot ready to be configured.",
            "status": "Active",
            "model": {
                "temperature": 0.7,
                "response_model": "gpt-4-turbo",
                "display_model": "Open AI GPT 4 Turbo"
            },
            "agentType": "Sales Agent",
            "agent_category": "Chatbot",
            "created_at": "2025-11-23T06:12:45.975626Z",
            "updated_at": "2025-11-24T07:17:27.607052Z",
            "conversations": 22
        }
    ],
    "status": "success"
}
```
{% /response %}


## Best Practices

- **Pagination**: For large numbers of agents, consider implementing pagination by adding query parameters like `?page=1&limit=10`.
- **Caching**: Cache the response to reduce API calls if the agent list doesn't change frequently.
- **Error Handling**: Handle authentication errors gracefully to ensure smooth user experience.

## Rate Limits

- 100 requests per minute for free tier
- 1000 requests per minute for pro tier
- 10000 requests per minute for enterprise tier
