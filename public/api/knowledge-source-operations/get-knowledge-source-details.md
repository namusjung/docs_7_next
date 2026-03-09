---
type: api
title: Get Knowledge Source Details
endpoint: GET /api/v1/knowledge-source/{id}/
order: 4
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "Knowledge Sources", href: "/api/knowledge-source-operations/create-knowledge-source" }
  - { label: "Get Knowledge Source Details" }
---

# Get Knowledge Source Details


## Overview

The Get Knowledge Source Details endpoint returns the full object for a specific knowledge source, including its type, training status, metadata, and storage usage.

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

## Path Parameters

{% parameter-list title="Parameter" %}
```
[
  {
    "name": "id",
    "type": "integer",
    "description": "Unique identifier of the knowledge source. Example: 101"
  }
]
```
{% /parameter-list %}



{% request title="Request" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X GET 'https://{% $api.base_url %}/api/v1/knowledge-source/{id}/' -H 'Authorization: {% $api.key %}'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}/api/v1/knowledge-source/{id}/', {\n  method: 'GET',\n  headers: {\n    'Authorization': '{% $api.key %}'\n  }\n})"
  },
  {
    "language": "python",
    "code": "import requests\n\nresponse = requests.get(\n    'https://{% $api.base_url %}/api/v1/knowledge-source/{id}/',\n    headers={'Authorization': '{% $api.key %}'}\n)\ndata = response.json()"
  },
  {
    "language": "php",
    "code": "$ch = curl_init('https://{% $api.base_url %}/api/v1/knowledge-source/{id}/');\ncurl_setopt_array($ch, [\n    CURLOPT_RETURNTRANSFER => true,\n    CURLOPT_HTTPHEADER => ['Authorization: {% $api.key %}']\n]);\n$data = json_decode(curl_exec($ch), true);\ncurl_close($ch);"
  }
]
```
{% /request %}

{% response status="200" hasDropdown="false" title="Response" %}
```json
{
    "message": "Resource retrieved successfully",
    "status": "success",
    "data": {
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
}

```
{% /response %}

## Error Responses

##### 404
```json
{
    "error": {
        "code": "knowledge_source_not_found",
        "message": "Knowledge source not found.",
        "status": 404
    }
}

```
