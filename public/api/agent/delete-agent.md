---
type: api
title: Delete Agent
endpoint: DELETE /agents/{id}
next: 
  href: /api/api-reference/agent/list-all-agents
  title: "List All Agents"
prev: 
  href: /api/api-reference/agent/update-agent
  title: "Update Agent"
---

# Delete Agent

Delete an existing AI agent by its ID.

## Overview

The Delete Agent endpoint allows you to remove an AI agent from your account. This action is irreversible, so ensure the agent is no longer needed before deleting.

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

{% request title="Delete Agent" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X DELETE 'https://{% $api.base_url %}v1/agents/11' -H 'Authorization: {% $api.key %}' -H 'Content-Type: application/json'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}v1/agents/11', {\n  method: 'DELETE',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  })"
  }
]
```
{% /request %}

{% response status="200" hasDropdown="false" title="Response" %}
```json
{
  "status": "success",
  "message": "Agent with ID 11 deleted successfully."
}
```
{% /response %}

## Error Responses
Base url: {% $api.base_url %}

##### 401 unauthorized
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


##### 404 not found
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

- **Confirmation**: Always verify the agent ID before deletion to avoid accidental removal.
- **Backup**: Consider backing up critical agent configurations before deletion.
- **Rate Limits**: Be aware of rate limits when performing multiple delete operations.

## Rate Limits

- 100 requests per minute for free tier
- 1000 requests per minute for pro tier
- 10000 requests per minute for enterprise tier