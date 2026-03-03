---
type: api
title: "4. Check Agent Status"
order: 4
---

# Step 4: Check Agent Status

Poll the agent's details to confirm training has completed before deploying.

## Overview

Call [Get Agent Details](/api/agent-operations/get-agent-details) and check the `status` field. Wait until it returns `"Active"` before considering the agent ready for use.

## Example

{% request title="Check Agent Status" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X GET 'https://{% $api.base_url %}v1/agents/b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654' -H 'Authorization: {% $api.key %}' -H 'Content-Type: application/json'"
  },
  {
    "language": "javascript",
    "code": "const res = await fetch('https://{% $api.base_url %}v1/agents/b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654', {\n  method: 'GET',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  }\n});\nconst { data } = await res.json();\nconsole.log(data.status); // 'Training' or 'Active'"
  }
]
```
{% /request %}

{% response status="200" hasDropdown="false" title="Response — Training Complete" %}
```json
{
  "message": "Resource retrieved successfully",
  "data": {
    "id": "b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654",
    "name": "Support Bot",
    "status": "Active",
    "updated_at": "2026-01-20T14:22:00Z"
  },
  "status_code": 200
}
```
{% /response %}

## Status values

| Status | Meaning |
|---|---|
| `Training` | Retraining is in progress — wait before deploying |
| `Active` | Training complete — agent is ready |
| `Issues` | Partial failure — some knowledge sources may not have trained correctly |

➡ Continue to [Step 5: View Knowledge Folder](/api/complete-workflow-examples/5-view-knowledge-folder)
