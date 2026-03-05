---
type: api
title: Create Knowledge Source
endpoint: POST /api/v1/knowledge-source/
order: 1
---

# Create Knowledge Source

Add a new knowledge source to an agent's knowledge folder.

## Overview

The Create Knowledge Source endpoint ingests content into an agent's knowledge base. Exactly **one** of `urls`, `file`, `plain_text`, or `google_drive_file_id` must be provided per request. After creation, the source enters `Pending` status and is queued for ingestion.

## Source Types

| Type | Field | Accepted Formats |
|---|---|---|
| URL scraping | `urls` | Array of HTTP/HTTPS URLs |
| File upload | `file` | PDF, DOCX, TXT, CSV, XLSX — max 10 MB |
| Plain text | `plain_text` | Free-form string |
| Google Drive | `google_drive_file_id` | Google Drive file ID (requires linked account) |

## Parameters
{% parameter-list title="Request Body — Plain Text" %}
```
[
  {
    "name": "agent_id",
    "type": "int",
    "description": "ID of specific agent. example: `42`"
  },
  {
    "name": "title",
    "type": "string",
    "description": "Title of knowledge source. example: `FAQ document`"
  },
  {
    "name": "plain_text",
    "type": "string",
    "description": "Text content for knowledge source. example: `This is knowledge document`"
  }
]
```
{% /parameter-list %}

{% parameter-list title="Request Body — URL Scraping" %}
```
[
    {
    "name": "agent_id",
    "type": "int",
    "description": "ID of specific agent. example: `42`"
  },
  {
    "name": "urls",
    "type": "array of string",
    "description": "List of URLs to scrape and ingest. Example: [\"https://help.acme.com/\", \"https://help.acme.com/faq\"]"
  },
  {
    "name": "title",
    "type": "string",
    "description": "Human-readable label for the knowledge source. Example: \"Help Center\""
  }
]
```
{% /parameter-list %}

{% parameter-list title="Request Body — File Upload (multipart/form-data)" %}
```
[
    {
    "name": "agent_id",
    "type": "int",
    "description": "ID of specific agent. example: `42`"
  },
  {
    "name": "file",
    "type": "file",
    "description": "Binary file to upload. Supported formats: PDF, DOCX, TXT, CSV, XLSX. Max size: 10 MB. per upload."
  },
  {
    "name": "title",
    "type": "string",
    "description": "Human-readable label for the knowledge source. Example: \"Product Manual v3\""
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
  },
  {
    "name": "Content-Type",
    "type": "string",
    "description": "Use application/json for URL, plain_text, and Google Drive types. Use multipart/form-data for file uploads."
  }
]
```
{% /parameter-list %}

{% request title="Create via URL" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X POST 'https://{% $api.base_url %}knowledgesource/' -H 'Authorization: {% $api.key %}' -H 'Content-Type: application/json' -d '{\"agent_id\": \"{agent_id}\" \"type\": \"url\" ,\"urls\": [\"https://example.com/knowledge-base\",\"https://example.com/tutorials\"], \"title\": \"Knowledge Base Articles\"}'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}knowledgesource/', {\n  method: 'POST',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({\n    agent_id: \"{agent_id}\" \n type: \"url\" ,\n urls: [\"https://example.com/knowledge-base\",\n\"https://example.com/tutorials\"],\n title: \"Knowledge Base Articles\"\n  })\n})"
  }
]
```
{% /request %}

{% response status="201" hasDropdown="false" title="Response" %}
```json
{
    "message": "1 knowledge source(s) created.",
    "data": [
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

## Error Responses

##### 400 Bad Request
```json
{
    "message": "Character limit exceeded for this plan.",
    "status": "error",
    "error": {
        "code": "character_limit_exceeded",
        "message": "Character limit exceeded for this plan.",
        "status": 400,
        "fields": {
            "general": [
                "Character limit exceeded for this plan."
            ]
        }
    }
}
```
```json
{
    "message": "Only 0.05 MB of knowledge size per agent is allowed in your current plan.",
    "status": "error",
    "error": {
        "code": "training_limit_reached",
        "message": "Only 0.05 MB of knowledge size per agent is allowed in your current plan.",
        "status": 400,
        "fields": {
            "general": [
                "Only 0.05 MB of knowledge size per agent is allowed in your current plan."
            ]
        }
    }
}
```
##### 10 MB per upload
```json
{
    "message": "File validation failed: File size (13.51 MB) exceeds maximum allowed size (10.0 MB)",
    "status": "error",
    "error": {
        "code": "knowledge_source_validation_error",
        "message": "File validation failed: File size (13.51 MB) exceeds maximum allowed size (10.0 MB)",
        "status": 400,
        "fields": {
            "file": [
                "File validation failed: File size (13.51 MB) exceeds maximum allowed size (10.0 MB)"
            ]
        }
    }
}
```
##### Not Supported Files
```json
{
    "message": "File validation failed: File content does not match expected format for extension '.docx'",
    "status": "error",
    "error": {
        "code": "knowledge_source_validation_error",
        "message": "File validation failed: File content does not match expected format for extension '.docx'",
        "status": 400,
        "fields": {
            "file": [
                "File validation failed: File content does not match expected format for extension '.docx'"
            ]
        }
    }
}
```

## Best Practices

- **One type at a time**: Only provide one of `urls`, `file`, `plain_text`, or `google_drive_file_id` per request.
- **Retrain after adding**: New sources are not automatically used by the agent. Call [Retrain Agent](/api/agent-training/retrain-agent) after adding sources.

## Source Limits

- 500 KB document size and 2000 characters in plain text for free tier
- 30000 KB document size and 100000 characters in plain text for pro tier
- 50000 KB document size and 500000 characters in plain text for plus tier
