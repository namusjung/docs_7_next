---
type: api
title: "5. View Knowledge Folder"
order: 5
---

# Step 5: View Knowledge Folder

Verify that all knowledge sources have trained successfully by inspecting the agent's knowledge folder.

## Overview

Call [List Knowledge Sources for Agent](/api/knowledge-source-operations/list-knowledge-sources-for-agent) to retrieve the knowledge folder and confirm each source has a `training_status` of `"Success"`.

## Example

{% request title="View Knowledge Folder" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X GET 'https://{% $api.base_url %}v1/agents/{id}/knowledge-folder' -H 'Authorization: {% $api.key %}' -H 'Content-Type: application/json'"
  },
  {
    "language": "javascript",
    "code": "const res = await fetch('https://{% $api.base_url %}v1/agents/{id}/knowledge-folder', {\n  method: 'GET',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  }\n});\nconst { data } = await res.json();\nconst allTrained = data.knowledge_sources.every(s => s.training_status === 'Success');"
  }
]
```
{% /request %}

{% response status="200" hasDropdown="false" title="Response" %}
```json
{
  "message": "Resource retrieved successfully",
  "data": {
    "id": 42,
    "agent": "{id}",
    "name": "Support Bot Knowledge",
    "knowledge_sources": [
      {
        "id": 101,
        "title": "Help Center",
        "type": "url",
        "status": "Trained",
        "training_status": "Success",
        "total_training_usage_bytes": 204800,
        "max_training_usage_bytes": 31457280
      },
      {
        "id": 102,
        "title": "Return Policy",
        "type": "text",
        "status": "Trained",
        "training_status": "Success",
        "total_training_usage_bytes": 1024,
        "max_training_usage_bytes": 31457280
      }
    ]
  },
  "status_code": 200
}
```
{% /response %}

## Workflow Complete

Your agent is now fully configured and ready to handle queries. All knowledge sources show `"Success"` — the vector index is up to date.

**Summary of steps completed:**
1. ✓ Created the agent
2. ✓ Added multiple knowledge sources
3. ✓ Triggered retraining
4. ✓ Confirmed `Active` status
5. ✓ Verified all sources trained successfully
