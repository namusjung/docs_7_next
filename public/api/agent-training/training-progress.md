---
type: api
title: Training Progress
endpoint: SSE /api/v1/agents/{{Agent ID}}/train-agent-sse/
order: 1
---

## Training Progress via SSE

- **Events**: `training_connected` | `training_training` | `training_active` | `training_completed` | `training_failed`

Connect to the SSE endpoint with a long-lived `GET` request to receive push updates whenever the training job state changes. Each event delivers a JSON payload describing the agent, task, and current progress.

### How to Subscribe

1. Obtain an API key with permission to read the target agent.
2. Replace `{{Agent ID}}` with the numeric ID from the training request.
3. Keep the HTTP connection open to continuously stream events until `training_completed` or `training_failed` is received.

{% request title="Subscribe to Training Progress" %}
```json
[
  {
    "language": "javascript",
    "code": "const source = new EventSource('https://{% $api.base_url %}/v1/agents/{{id}}/train-agent-sse/?api_key={% $api.key %}');\n\nsource.addEventListener('training_training', (event) => {\n  const data = JSON.parse(event.data);\n  console.log('Progress:', data.progress);\n});\n\nsource.addEventListener('training_completed', (event) => {\n  console.log('Training finished:', JSON.parse(event.data));\n  source.close();\n});\n\nsource.addEventListener('training_failed', (event) => {\n  console.error('Training failed:', JSON.parse(event.data));\n  source.close();\n});"
  }
]
```
{% /request %}

{% response status="200" hasDropdown="false" title="Event Stream" %}
```text
event: training_connected
data: {"message": "Connected to training status stream", "agent_id": "661"}

event: training_training
data: {"agent_id": "661", "status": "Training", "timestamp": "2026-02-24T07:34:13.110032+00:00", "train_data": {"phase": "extracting", "message": "Starting text extraction", "total_count": 3, "current_source": null, "processed_count": 0}}

event: training_active
data: {"agent_id": "661", "status": "Active", "timestamp": "2026-02-24T07:34:13.110032+00:00", "train_data": {"phase": "embedding_completed", "message": "Embedding completed", "total_count": 3, "current_source": null, "processed_count": 11}}

```
{% /response %}

If an error occurs mid-stream, the server emits `training_failed` with details about the failing knowledge source. Reconnect using the same endpoint to resume monitoring if the HTTP connection drops unexpectedly.
