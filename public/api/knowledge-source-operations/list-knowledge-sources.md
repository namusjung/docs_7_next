---
type: api
title: List Knowledge Sources
endpoint: GET api/v1/knowledge-source/?agent_id={agent ID}
order: 3
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "Knowledge Sources", href: "/api/knowledge-source-operations/create-knowledge-source" }
  - { label: "List Knowledge Sources" }
---

# List Knowledge Sources

## Overview

Every agent is automatically assigned a knowledge folder when created. This endpoint returns the folder details along with a list of all knowledge sources linked to the agent. Use this to inspect what data the agent has been trained on.


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

## Query Parameters

{% parameter-list title="Parameter" %}
```
[
  {
    "name": "agent_id",
    "type": "int",
    "description": "Unique identifier of the agent. Example: \"{agent id}\""
  }
]
```
{% /parameter-list %}

{% request title="Request" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X GET 'https://{% $api.base_url %}/api/v1/knowledge-source/?agent_id={agent_id}' -H 'Authorization: {% $api.key %}'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}/api/v1/knowledge-source/?agent_id={agent_id}', {\n  method: 'GET',\n  headers: {\n    'Authorization': '{% $api.key %}'\n  }\n})"
  },
  {
    "language": "python",
    "code": "import requests\n\nresponse = requests.get(\n    'https://{% $api.base_url %}/api/v1/knowledge-source/',\n    params={'agent_id': '{agent_id}'},\n    headers={'Authorization': '{% $api.key %}'}\n)\ndata = response.json()"
  },
  {
    "language": "php",
    "code": "$ch = curl_init('https://{% $api.base_url %}/api/v1/knowledge-source/?agent_id={agent_id}');\ncurl_setopt_array($ch, [\n    CURLOPT_RETURNTRANSFER => true,\n    CURLOPT_HTTPHEADER => ['Authorization: {% $api.key %}']\n]);\n$data = json_decode(curl_exec($ch), true);\ncurl_close($ch);"
  }
]
```
{% /request %}

{% response status="200" hasDropdown="false" title="Response" %}
```json
{
    "message": "List retrieved successfully",
    "status": "success",
    "data": [
        {
            "id": 1158,
            "urls": [],
            "file": null,
            "plain_text": "This is a",
            "google_drive_file_id": null,
            "title": "Knowledge Base Articles",
            "status": "Pending",
            "type": "plain_text",
            "agent_knowledge_folder": 609,
            "parent_knowledge_source": null,
            "metadata": {
                "format": "txt",
                "file_size": "9B",
                "no_of_rows": 1,
                "no_of_chars": 9,
                "no_of_pages": null,
                "upload_date": "2026-03-09T07:38:20.411336+00:00"
            },
            "owner": 2,
            "is_selected": true,
            "training_status": "Idle",
            "sub_urls": null,
            "total_training_usage_bytes": 0,
            "max_training_usage_bytes": 51200000,
            "character_limit": 200000
        },
        {
            "id": 1159,
            "urls": [
                "https://example.com/knowledge-base",
                "https://example.com/tutorials"
            ],
            "file": null,
            "plain_text": null,
            "google_drive_file_id": null,
            "title": "Knowledge Base URLS",
            "status": "Pending",
            "type": "website",
            "agent_knowledge_folder": 609,
            "parent_knowledge_source": null,
            "metadata": {
                "format": "url",
                "file_size": null,
                "no_of_rows": null,
                "no_of_chars": null,
                "no_of_pages": 2,
                "upload_date": "2026-03-09T07:38:54.854360+00:00"
            },
            "owner": 2,
            "is_selected": true,
            "training_status": "Idle",
            "sub_urls": null,
            "total_training_usage_bytes": 0,
            "max_training_usage_bytes": 51200000,
            "character_limit": 200000
        }
    ]
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

- **Training Status**: Check `training_status` on each knowledge source to confirm it is `"Success"` before relying on the agent's responses.
- **Training Size Limits**: Compare `total_training_usage_bytes` against `max_training_usage_bytes` to monitor remaining training size.

