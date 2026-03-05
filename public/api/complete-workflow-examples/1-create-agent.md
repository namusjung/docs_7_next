---
type: api
title: "1. Create Agent"
order: 1
---

# Step 1: Create Agent

The first step in setting up a working AI agent is creating it via the API.

## Overview

Call [Create Agent](/api/agent-operations/create-agent) to provision a new agent. The response includes the agent's `id`, which you'll use in all subsequent steps.

## Example

{% request title="Create Agent" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X POST 'https://{% $api.base_url %}v1/agents/' -H 'Authorization: {% $api.key %}' -H 'Content-Type: application/json' -d '{\"name\": \"Support Bot\", \"description\": \"Handles tier-1 customer queries\", \"systemPrompt\": \"You are a helpful support agent.\"}'"
  },
  {
    "language": "javascript",
    "code": "const res = await fetch('https://{% $api.base_url %}v1/agents/', {\n  method: 'POST',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({\n    name: 'Support Bot',\n    description: 'Handles tier-1 customer queries',\n    systemPrompt: 'You are a helpful support agent.'\n  })\n});\nconst { data } = await res.json();\nconst agentId = data.id; // save this for next steps"
  }
]
```
{% /request %}

{% response status="200" hasDropdown="false" title="Response" %}
```json
{
  "status": "success",
  "data": {
    "id": "{id}",
    "name": "Support Bot",
    "description": "Handles tier-1 customer queries",
    "status": "Active"
  }
}
```
{% /response %}

## What's next?

Save the `id` from the response — you'll use it to add knowledge sources and trigger retraining in the following steps.

➡ Continue to [Step 2: Add Multiple Knowledge Sources](/api/complete-workflow-examples/2-add-multiple-knowledge-sources)
