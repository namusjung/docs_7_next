---
type: api
title: Delete Agent
endpoint: DELETE /$api.version/agents/{id}
order: 5
---

# Delete Agent

Delete an existing AI agent by its ID.

## Overview

The Delete Agent endpoint allows you to remove an AI agent from your account. This action is irreversible, so ensure the agent is no longer needed before deleting.

## Parameters

{% parameter-list title="Path Parameters" %}
```
[
  {
    "name": "id",
    "type": "UUID",
    "description": "Unique identifier of the agent to delete. Example: \"b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654\""
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

{% request title="Delete Agent" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X DELETE 'https://{% $api.base_url %}v1/agents/b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654' -H 'Authorization: {% $api.key %}' -H 'Content-Type: application/json'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}v1/agents/b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654', {\n  method: 'DELETE',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  }\n})"
  }
]
```
{% /request %}

{% response status="200" hasDropdown="false" title="Response" %}
```json
{
  "status": "success",
  "message": "Agent deleted successfully."
}
```
{% /response %}

## Error Responses

##### 401 Unauthorized
```json
{
  "error": {
    "code": "authentication_required",
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
    "code": "NOT_FOUND",
    "message": "Agent not found.",
    "status": 404,
    "fields": []
  }
}
```

## Best Practices

- **Confirmation**: Always verify the agent ID before deletion to avoid accidental removal.
- **Backup**: Consider backing up critical agent configurations before deletion.

## Rate Limits

- 100 requests per minute for free tier
- 1000 requests per minute for pro tier
- 10000 requests per minute for enterprise tier
