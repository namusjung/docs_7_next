---
type: api
title: Get Knowledge Source Details
endpoint: GET /api/v1/knowledge-source/{{id}}/
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
    "code": "curl -X GET 'https://{% $api.base_url %}/v1/knowledge-source/{{id}}/' -H 'Authorization: {% $api.key %}' -H 'Content-Type: application/json'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}/v1/knowledge-source/{{id}}/', {\n  method: 'GET',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  }\n})"
  }
]
```
{% /request %}

{% response status="200" hasDropdown="false" title="Response" %}
```json
{
    "message": "Resource retrieved successfully",
    "data": {
        "id": 1149,
        "urls": [],
        "file": "https://api-staging.7en.ai/media/knowledge_sources/CREATE_TEST_DATA_GUIDE_Vt7rpIlmLW0.md",
        "plain_text": null,
        "google_drive_file_id": null,
        "title": "CREATE_TEST_DATA_GUIDE.md",
        "status": "Active",
        "type": "docs",
        "agent_knowledge_folder": 591,
        "parent_knowledge_source": null,
        "metadata": {
            "format": "md",
            "file_size": "8306B",
            "no_of_rows": null,
            "no_of_chars": null,
            "no_of_pages": null,
            "upload_date": "2026-03-04T09:07:01.031416+00:00"
        },
        "owner": 193,
        "is_selected": true,
        "training_status": "Active",
        "sub_urls": null,
        "total_training_usage_bytes": 0,
        "max_training_usage_bytes": 51200000,
        "character_limit": 200000
    },
    "subscription": {
        "planName": "EU Sovereign",
        "planId": "36",
        "started_at": "2026-02-18T08:16:03+00:00",
        "ended_at": "2026-03-18T08:16:03+00:00",
        "cancelled_at": null,
        "failed_at": null
    },
    "features": null,
    "status": "success",
    "permissions": [
        "MANAGE_AGENTS",
        "MANAGE_ADMIN",
        "MANAGE_INTEGRATIONS",
        "VIEW_INTEGRATIONS",
        "MANAGE_API_KEY",
        "MANAGE_BILLING",
        "MANAGE_KNOWLEDGE",
        "VIEW_BILLING",
        "MANAGE_SETTINGS",
        "VIEW_AGENTS",
        "MANAGE_CHAT",
        "CONFIGURE_BUSINESS",
        "VIEW_USERS",
        "VIEW_ANALYTICS",
        "TRAIN_AGENT",
        "MANAGE_USERS",
        "VIEW_CHAT",
        "VIEW_KNOWLEDGE",
        "SEND_INVITE",
        "VIEW_SETTINGS"
    ]
}
```
{% /response %}

## Error Responses

##### 404
```json
{
    "message": "Knowledge source not found.",
    "status": "error",
    "error": {
        "code": "knowledge_source_not_found",
        "message": "Knowledge source not found.",
        "status": 404,
        "fields": {
            "general": [
                "Knowledge source not found."
            ]
        }
    }
}
```
