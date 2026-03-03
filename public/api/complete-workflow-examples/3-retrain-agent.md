---
type: api
title: "3. Retrain Agent"
order: 3
---

# Step 3: Retrain Agent

After adding all knowledge sources, trigger a retraining to make the agent aware of the new content.

## Overview

Call [Retrain Agent](/api/agent-training/retrain-agent) with the agent `id`. This queues a background job that re-ingests all attached knowledge sources and rebuilds the vector index.

## Example

{% request title="Retrain Agent" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X POST 'https://{% $api.base_url %}v1/agents/b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654/retrain' -H 'Authorization: {% $api.key %}' -H 'Content-Type: application/json'"
  },
  {
    "language": "javascript",
    "code": "await fetch('https://{% $api.base_url %}v1/agents/b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654/retrain', {\n  method: 'POST',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  }\n});"
  }
]
```
{% /request %}

{% response status="200" hasDropdown="false" title="Response" %}
```json
{
  "message": "Agent retraining started.",
  "data": {
    "agent_id": "b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654",
    "task_id": "celery-task-a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "status": "Training"
  },
  "status_code": 200
}
```
{% /response %}

## What happens next?

- The agent's status immediately changes to `"Training"`.
- When complete, status becomes `"Active"` (success) or `"Issues"` (partial failure).

➡ Continue to [Step 4: Check Agent Status](/api/complete-workflow-examples/4-check-agent-status)
