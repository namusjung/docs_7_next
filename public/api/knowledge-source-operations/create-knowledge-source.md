---
type: api
title: Create Knowledge Source
endpoint: POST /api/knowledgesource
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

{% parameter-list title="Request Body — URL Scraping" %}
```
[
  {
    "name": "urls",
    "type": "array of string",
    "description": "List of URLs to scrape and ingest. Example: [\"https://help.acme.com/\", \"https://help.acme.com/faq\"]"
  },
  {
    "name": "title",
    "type": "string",
    "description": "Human-readable label for the knowledge source. Example: \"Help Center\""
  },
  {
    "name": "agent_knowledge_folder",
    "type": "integer",
    "description": "ID of the knowledge folder to add this source to. Example: 42"
  }
]
```
{% /parameter-list %}

{% parameter-list title="Request Body — File Upload (multipart/form-data)" %}
```
[
  {
    "name": "file",
    "type": "file",
    "description": "Binary file to upload. Supported formats: PDF, DOCX, TXT, CSV, XLSX. Max size: 10 MB."
  },
  {
    "name": "title",
    "type": "string",
    "description": "Human-readable label for the knowledge source. Example: \"Product Manual v3\""
  },
  {
    "name": "agent_knowledge_folder",
    "type": "integer",
    "description": "ID of the knowledge folder to add this source to. Example: 42"
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
    "code": "curl -X POST 'https://{% $api.base_url %}knowledgesource/' -H 'Authorization: {% $api.key %}' -H 'Content-Type: application/json' -d '{\"urls\": [\"https://help.acme.com/\"], \"title\": \"Help Center\", \"agent_knowledge_folder\": 42}'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}knowledgesource/', {\n  method: 'POST',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({\n    urls: ['https://help.acme.com/'],\n    title: 'Help Center',\n    agent_knowledge_folder: 42\n  })\n})"
  }
]
```
{% /request %}

{% response status="201" hasDropdown="false" title="Response" %}
```json
{
  "message": "Knowledge source created successfully.",
  "data": {
    "id": 105,
    "title": "Help Center",
    "type": "url",
    "status": "Pending",
    "urls": ["https://help.acme.com/"],
    "agent_knowledge_folder": 42
  },
  "status_code": 201
}
```
{% /response %}

## Error Responses

##### 400 Bad Request
```json
{
  "error": {
    "code": "validation_error",
    "message": "Validation error",
    "status": 400,
    "fields": {
      "general": ["Character limit exceeded for your current subscription plan."]
    }
  }
}
```

## Best Practices

- **One type at a time**: Only provide one of `urls`, `file`, `plain_text`, or `google_drive_file_id` per request.
- **Retrain after adding**: New sources are not automatically used by the agent. Call [Retrain Agent](/api/agent-training/retrain-agent) after adding sources.

## Rate Limits

- 100 requests per minute for free tier
- 1000 requests per minute for pro tier
- 10000 requests per minute for enterprise tier
