---
type: api
title: "2. Add Multiple Knowledge Sources"
order: 2
---

# Step 2: Add Multiple Knowledge Sources

With the agent created, add the content it should learn from.

## Overview

Call [Create Knowledge Source](/api/knowledge-source-operations/create-knowledge-source) once for each source you want to attach. Use the `agent_knowledge_folder` ID returned when you created the agent (or retrieve it via [List Knowledge Sources for Agent](/api/knowledge-source-operations/list-knowledge-sources-for-agent)).

Send one request per source — URL, file, plain text, or Google Drive file.

## Example: Add a URL source

{% request title="Add URL Source" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X POST 'https://{% $api.base_url %}knowledgesource/' -H 'Authorization: {% $api.key %}' -H 'Content-Type: application/json' -d '{\"urls\": [\"https://help.acme.com/\"], \"title\": \"Help Center\", \"agent_knowledge_folder\": 42}'"
  },
  {
    "language": "javascript",
    "code": "await fetch('https://{% $api.base_url %}knowledgesource/', {\n  method: 'POST',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({\n    urls: ['https://help.acme.com/'],\n    title: 'Help Center',\n    agent_knowledge_folder: 42\n  })\n});"
  }
]
```
{% /request %}

## Example: Add a plain text source

{% request title="Add Plain Text Source" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X POST 'https://{% $api.base_url %}knowledgesource/' -H 'Authorization: {% $api.key %}' -H 'Content-Type: application/json' -d '{\"plain_text\": \"Our return policy allows returns within 30 days of purchase.\", \"title\": \"Return Policy\", \"agent_knowledge_folder\": 42}'"
  },
  {
    "language": "javascript",
    "code": "await fetch('https://{% $api.base_url %}knowledgesource/', {\n  method: 'POST',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({\n    plain_text: 'Our return policy allows returns within 30 days of purchase.',\n    title: 'Return Policy',\n    agent_knowledge_folder: 42\n  })\n});"
  }
]
```
{% /request %}

{% response status="201" hasDropdown="false" title="Response" %}
```json
{
  "message": "Knowledge source created successfully.",
  "data": {
    "id": 105,
    "title": "Help Center",
    "type": "url",
    "status": "Pending",
    "agent_knowledge_folder": 42
  },
  "status_code": 201
}
```
{% /response %}

## Tips

- Repeat this request for each source you want to add before retraining.
- Batching all sources before retraining avoids multiple costly training cycles.

➡ Continue to [Step 3: Retrain Agent](/api/complete-workflow-examples/3-retrain-agent)
