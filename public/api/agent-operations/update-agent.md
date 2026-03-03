---
type: api
title: Update Agent
order: 4
---

# Update Agent

Update an existing agent's configuration. Two methods are supported depending on whether you want to replace the full configuration or change only specific fields.

| Method | Endpoint | Behaviour |
|---|---|---|
| `PUT` | `/$api.version/agents/{id}` | Full replacement — omitted fields reset to defaults |
| `PATCH` | `/$api.version/agents/{id}` | Partial update — only provided fields are changed |

---

## PUT — Full Update

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

{% request title="PUT — Full Update" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X PUT 'https://{% $api.base_url %}v1/agents/b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654' \\\n  -H 'Authorization: {% $api.key %}' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n    \"name\": \"Updated Agent\",\n    \"description\": \"An updated AI assistant\",\n    \"systemPrompt\": \"You are an updated AI assistant.\"\n  }'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}v1/agents/b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654', {\n  method: 'PUT',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({\n    name: 'Updated Agent',\n    description: 'An updated AI assistant',\n    systemPrompt: 'You are an updated AI assistant.'\n  })\n})"
  }
]
```
{% /request %}

{% response status="200" hasDropdown="false" title="Response" %}
```json
{
  "status": "success",
  "data": {
    "id": "b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654",
    "name": "Updated Agent",
    "description": "An updated AI assistant",
    "status": "Active",
    "systemPrompt": "You are an updated AI assistant.",
    "updated_at": "2025-08-18T09:31:00.000000Z"
  }
}
```
{% /response %}

---

## PATCH — Partial Update

{% parameter-list title="Request Body (all fields optional)" %}
```
[
  {
    "name": "name",
    "type": "string",
    "description": "New name for the agent.",
    "optional": true
  },
  {
    "name": "description",
    "type": "string",
    "description": "Updated description of the agent's purpose.",
    "optional": true
  },
  {
    "name": "systemPrompt",
    "type": "string",
    "description": "Updated system prompt.",
    "optional": true
  },
  {
    "name": "appearance",
    "type": "object",
    "description": "Partial appearance overrides. Only provided sub-fields are updated.",
    "optional": true
  },
  {
    "name": "behavior",
    "type": "object",
    "description": "Partial behavior overrides. Only provided sub-fields are updated.",
    "optional": true
  },
  {
    "name": "model",
    "type": "object",
    "description": "Partial model configuration overrides.",
    "optional": true
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
    "description": "Your 7en API key. Example: Api-Key 43NKLN3LKN4nlkn"
  }
]
```
{% /parameter-list %}

{% request title="PATCH — Partial Update" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X PATCH 'https://{% $api.base_url %}v1/agents/b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654' \\\n  -H 'Authorization: {% $api.key %}' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\"appearance\": {\"primaryColor\": \"#ff0000\"}}'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}v1/agents/b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654', {\n  method: 'PATCH',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({\n    appearance: { primaryColor: '#ff0000' }\n  })\n})"
  }
]
```
{% /request %}

{% response status="200" hasDropdown="false" title="Response" %}
```json
{
  "status": "success",
  "data": {
    "id": "b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654",
    "name": "Support Bot",
    "appearance": {
      "primaryColor": "#ff0000"
    },
    "updated_at": "2026-01-20T15:00:00Z"
  }
}
```
{% /response %}

---

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
    "code": "NOT_FOUND",
    "message": "Agent not found.",
    "status": 404,
    "fields": []
  }
}
```

## Best Practices

- **Use PATCH for most updates** — it is safer since only fields you provide are touched.
- **Use PUT when replacing entirely** — include all required fields to avoid unintentional resets.
- **Test after updating** — verify the agent behaves as expected, especially after changing `systemPrompt` or `model`.

## Rate Limits

- 100 requests per minute for free tier
- 1,000 requests per minute for pro tier
- 10,000 requests per minute for enterprise tier
