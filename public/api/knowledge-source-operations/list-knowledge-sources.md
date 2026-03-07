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
    "code": "curl -X GET 'https://{% $api.base_url %}v1/knowledge-source/?agent_id={agent ID}' -H 'Authorization: {% $api.key %}' -H 'Content-Type: application/json'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}v1/knowledge-source/?agent_id={agent ID}, {\n  method: 'GET',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  }\n})"
  }
]
```
{% /request %}

{% response status="200" hasDropdown="false" title="Response" %}
```json
{
    "message": "List retrieved successfully",
    "data": [
        {
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
        {
            "id": 1146,
            "urls": [],
            "file": null,
            "plain_text": "This is a Plain Text for the knowledge Source.This is a Plain Text for the knowledge Source.This is a Plain Text for the knowledge Source.This is a Plain Text for the knowledge Source.This is a Plain Text for the knowledge Source.",
            "google_drive_file_id": null,
            "title": "Knowledge Base Articles",
            "status": "Pending",
            "type": "plain_text",
            "agent_knowledge_folder": 591,
            "parent_knowledge_source": null,
            "metadata": {
                "format": "txt",
                "file_size": "230B",
                "no_of_rows": 1,
                "no_of_chars": 230,
                "no_of_pages": null,
                "upload_date": "2026-03-04T08:47:23.751398+00:00"
            },
            "owner": 193,
            "is_selected": true,
            "training_status": "Idle",
            "sub_urls": null,
            "total_training_usage_bytes": 0,
            "max_training_usage_bytes": 51200000,
            "character_limit": 200000
        },
        {
            "id": 1147,
            "urls": [],
            "file": null,
            "plain_text": "This is a",
            "google_drive_file_id": null,
            "title": "Knowledge Base Articles",
            "status": "Pending",
            "type": "plain_text",
            "agent_knowledge_folder": 591,
            "parent_knowledge_source": null,
            "metadata": {
                "format": "txt",
                "file_size": "9B",
                "no_of_rows": 1,
                "no_of_chars": 9,
                "no_of_pages": null,
                "upload_date": "2026-03-04T08:57:37.328117+00:00"
            },
            "owner": 193,
            "is_selected": true,
            "training_status": "Idle",
            "sub_urls": null,
            "total_training_usage_bytes": 0,
            "max_training_usage_bytes": 51200000,
            "character_limit": 200000
        },
        {
            "id": 1148,
            "urls": [
                "https://example.com/knowledge-base",
                "https://example.com/tutorials"
            ],
            "file": null,
            "plain_text": null,
            "google_drive_file_id": null,
            "title": "Knowledge Base Articles",
            "status": "Pending",
            "type": "website",
            "agent_knowledge_folder": 591,
            "parent_knowledge_source": null,
            "metadata": {
                "format": "url",
                "file_size": null,
                "no_of_rows": null,
                "no_of_chars": null,
                "no_of_pages": 2,
                "upload_date": "2026-03-04T09:01:02.262151+00:00"
            },
            "owner": 193,
            "is_selected": true,
            "training_status": "Idle",
            "sub_urls": null,
            "total_training_usage_bytes": 0,
            "max_training_usage_bytes": 51200000,
            "character_limit": 200000
        }
    ],
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
    "message": "Agent not found.",
    "status": "error",
    "error": {
        "code": "agent_not_found",
        "message": "Agent not found.",
        "status": 404,
        "fields": {
            "general": [
                "Agent not found."
            ]
        }
    }
}
```

## Best Practices

- **Training Status**: Check `training_status` on each knowledge source to confirm it is `"Success"` before relying on the agent's responses.
- **Training Size Limits**: Compare `total_training_usage_bytes` against `max_training_usage_bytes` to monitor remaining training size.

