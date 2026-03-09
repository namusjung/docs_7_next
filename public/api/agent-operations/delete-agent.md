---
type: api
title: Delete Agent
endpoint: DELETE api/$api.version/agents/{id}
order: 5
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "Agent Operations", href: "/api/agent-operations/create-agent" }
  - { label: "Delete Agent" }
---
# Delete Agent

## Overview

The Delete Agent endpoint allows you to remove an AI agent from your account. This action is irreversible, so ensure the agent is no longer needed before deleting.

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

## Parameters

{% parameter-list title="Path Parameters" %}
```
[
  {
    "name": "id",
    "type": "int",
    "description": "Unique identifier of the agent to delete. Example: \"{id}\""
  }
]
```
{% /parameter-list %}

{% request title="Delete Agent" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X DELETE 'https://{% $api.base_url %}/api/v1/agents/{id}' -H 'Authorization: {% $api.key %}' -H 'Content-Type: application/json'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}/api/v1/agents/{id}', {\n  method: 'DELETE',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  }\n})"
  },
  {
    "language": "python",
    "code": "import requests\n\nresponse = requests.delete(\n    'https://{% $api.base_url %}/api/v1/agents/{id}',\n    headers={'Authorization': '{% $api.key %}'}\n)\ndata = response.json()"
  },
  {
    "language": "php",
    "code": "$ch = curl_init('https://{% $api.base_url %}/api/v1/agents/{id}');\ncurl_setopt_array($ch, [\n    CURLOPT_RETURNTRANSFER => true,\n    CURLOPT_CUSTOMREQUEST => 'DELETE',\n    CURLOPT_HTTPHEADER => ['Authorization: {% $api.key %}']\n]);\n$data = json_decode(curl_exec($ch), true);\ncurl_close($ch);"
  }
]
```
{% /request %}

{% response status="200" hasDropdown="false" title="Response" %}
```json
{
    "message": "Agent and its knowledge folder deleted successfully",
    "status": "success"
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

## Best Practices

- **Confirmation**: Always verify the agent ID before deletion to avoid accidental removal.
- **Backup**: Consider backing up critical agent configurations before deletion.

