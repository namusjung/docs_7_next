---
type: api
title: List All Knowledge Sources
endpoint: GET /api/v1/knowledge-source/
order: 2
---

# List All Knowledge Sources

Retrieve a list of knowledge sources, optionally filtered by agent or folder.

## Overview

The List All Knowledge Sources endpoint returns all knowledge sources accessible to the authenticated user. You can filter by agent knowledge folder, agent ID, or training status to find specific sources.

## Parameters

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

{% request title="List Knowledge Sources" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X GET 'https://{% $api.base_url %}knowledgesource/?agent_id={id}' -H 'Authorization: {% $api.key %}' -H 'Content-Type: application/json'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}knowledgesource/?agent_id={id}', {\n  method: 'GET',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  }\n})"
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
            "max_training_usage_bytes": 51200,
            "character_limit": 20
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
            "max_training_usage_bytes": 51200,
            "character_limit": 20
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
            "max_training_usage_bytes": 51200,
            "character_limit": 20
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
            "max_training_usage_bytes": 51200,
            "character_limit": 20
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
        "VIEW_KNOWLEDGE",
        "VIEW_SETTINGS",
        "VIEW_USERS",
        "MANAGE_API_KEY",
        "VIEW_AGENTS",
        "MANAGE_KNOWLEDGE",
        "VIEW_ANALYTICS",
        "MANAGE_USERS",
        "MANAGE_INTEGRATIONS",
        "CONFIGURE_BUSINESS",
        "MANAGE_CHAT",
        "VIEW_CHAT",
        "SEND_INVITE",
        "VIEW_INTEGRATIONS",
        "MANAGE_AGENTS",
        "MANAGE_ADMIN",
        "MANAGE_BILLING",
        "VIEW_BILLING",
        "TRAIN_AGENT",
        "MANAGE_SETTINGS"
    ]
}
```
{% /response %}

