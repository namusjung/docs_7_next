---
type: api
title: Get Knowledge Source Details
endpoint: GET /api/knowledgesource/{id}
order: 4
---

# Get Knowledge Source Details

Retrieve complete details of a single knowledge source by its ID.

## Overview

The Get Knowledge Source Details endpoint returns the full object for a specific knowledge source, including its type, training status, metadata, and storage usage.

## Parameters

{% parameter-list title="Path Parameters" %}
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

{% parameter-list title="Request Header" %}
```
[
  {
    "name": "Authorization",
    "type": "api key",
    "description": "Api key generated from 7en.i platform. Example: Api-Key 43NKLN3LKN4nlkn"
  }
]
```
{% /parameter-list %}

{% request title="Get Knowledge Source Details" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X GET 'https://{% $api.base_url %}knowledgesource/101/' -H 'Authorization: {% $api.key %}' -H 'Content-Type: application/json'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}knowledgesource/101/', {\n  method: 'GET',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  }\n})"
  }
]
```
{% /request %}

{% response status="200" hasDropdown="false" title="Response" %}
```json
{
  "message": "Resource retrieved successfully",
  "data": {
    "id": 101,
    "title": "Help Center",
    "type": "url",
    "status": "Trained",
    "urls": ["https://help.acme.com/"],
    "file": null,
    "plain_text": null,
    "google_drive_file_id": null,
    "agent_knowledge_folder": 42,
    "owner": "a4e6b7c8-c8a9-5d79-7abc-1234567890ab",
    "is_selected": true,
    "training_status": "Success",
    "total_training_usage_bytes": 204800,
    "max_training_usage_bytes": 31457280,
    "metadata": {
      "page_count": 48,
      "scraped_at": "2026-01-10T08:00:00Z"
    },
    "created_at": "2026-01-10T08:00:00Z"
  },
  "status_code": 200
}
```
{% /response %}

## Error Responses

##### 404 Not Found
```json
{
  "error": {
    "code": "resource_not_found",
    "message": "Knowledge source not found.",
    "status": 404,
    "fields": {
      "general": ["Knowledge source not found"]
    }
  }
}
```

## Rate Limits

- 100 requests per minute for free tier
- 1000 requests per minute for pro tier
- 10000 requests per minute for enterprise tier
