---
type: api
title: Create Knowledge Source
endpoint: POST /api/v1/knowledge-source/
order: 1
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "Knowledge Sources", href: "/api/knowledge-source-operations/create-knowledge-source" }
  - { label: "Create Knowledge Source" }
---

# Create Knowledge Source

## Overview

The Create Knowledge Source endpoint ingests content into an agent's knowledge base. Exactly **one** of `urls`, `file` or `plain_text` must be provided per request. After creation, the source enters `Pending` status and is queued for ingestion.


{% parameter-list title="Request Header" %}
```
[
  {
    "name": "Authorization",
    "type": "api key",
    "description": "Your 7en API key. Example: Api-Key 43NKLN3LKN4nlkn"
  },
  {
    "name": "Content-Type",
    "type": "string",
    "description": "Use application/json for URL, plain_text, and Google Drive types. Use multipart/form-data for file uploads."
  }
]
```
{% /parameter-list %}

## Source Types

| Type | Field | Accepted Formats |
|---|---|---|
| URL | `urls` | Array of HTTP/HTTPS URLs |
| File upload | `file` | PDF, DOCX, TXT, CSV, XLSX |
| Plain text | `plain_text` | Free-form string |

## Request

{% parameter-list title="Request Body — Plain Text" %}
```
[
  {
    "name": "agent_id",
    "type": "int",
    "required": true,
    "description": "ID of specific agent. example: `42`"
  },
  {
    "name": "title",
    "type": "string",
    "required": true,
    "description": "Title of knowledge source. example: `FAQ document`"
  },
  {
    "name": "plain_text",
    "type": "string",
    "required": true,
    "description": "Text content for knowledge source. example: `This is knowledge document`"
  }
]
```
{% /parameter-list %}

{% parameter-list title="Request Body — URL" %}
```
[
    {
    "name": "agent_id",
    "type": "int",
    "required": true,
    "description": "ID of specific agent. example: `42`"
  },
  {
    "name": "urls",
    "type": "array of string",
    "required": true,
    "description": "List of URLs to scrape and ingest. Example: [\"https://help.acme.com/\", \"https://help.acme.com/faq\"]"
  },
  {
    "name": "title",
    "type": "string",
    "required": true,
    "description": "Human-readable label for the knowledge source. Example: \"Help Center\""
  }
]
```
{% /parameter-list %}

{% parameter-list title="Request Body — File (multipart/form-data)" %}
```
[
    {
    "name": "agent_id",
    "type": "int",
    "required": true,
    "description": "ID of specific agent. example: `42`"
  },
  {
    "name": "file",
    "type": "file",
    "required": true,
    "description": "Binary file to upload. Supported formats: PDF, DOCX, TXT, CSV, XLSX. Max size: 10 MB. per upload."
  },
  {
    "name": "title",
    "type": "string",
    "required": true,
    "description": "Human-readable label for the knowledge source. Example: \"Product Manual v3\""
  }
]
```
{% /parameter-list %}


{% request title="Request" %}
```json
{
  "tabs": [
    {
      "label": "Plain Text",
      "examples": [
        {
          "language": "curl",
          "code": "curl -X POST 'https://{% $api.base_url %}/api/v1/knowledge-source/' \\\n  -H 'Authorization: {% $api.key %}' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n    \"agent_id\": \"{agent_id}\",\n    \"plain_text\": \"This is a\",\n    \"title\": \"Knowledge Base Articles\"\n  }'"
        },
        {
          "language": "javascript",
          "code": "fetch('https://{% $api.base_url %}/api/v1/knowledge-source/', {\n  method: 'POST',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({\n    agent_id: '{agent_id}',\n    plain_text: 'This is a',\n    title: 'Knowledge Base Articles'\n  })\n})"
        },
        {
          "language": "python",
          "code": "import requests\n\nresponse = requests.post(\n    'https://{% $api.base_url %}/api/v1/knowledge-source/',\n    headers={\n        'Authorization': '{% $api.key %}',\n        'Content-Type': 'application/json'\n    },\n    json={\n        'agent_id': '{agent_id}',\n        'plain_text': 'This is a',\n        'title': 'Knowledge Base Articles'\n    }\n)\ndata = response.json()"
        },
        {
          "language": "php",
          "code": "$ch = curl_init('https://{% $api.base_url %}/api/v1/knowledge-source/');\ncurl_setopt_array($ch, [\n    CURLOPT_RETURNTRANSFER => true,\n    CURLOPT_POST => true,\n    CURLOPT_HTTPHEADER => [\n        'Authorization: {% $api.key %}',\n        'Content-Type: application/json'\n    ],\n    CURLOPT_POSTFIELDS => json_encode([\n        'agent_id' => '{agent_id}',\n        'plain_text' => 'This is a',\n        'title' => 'Knowledge Base Articles'\n    ])\n]);\n$data = json_decode(curl_exec($ch), true);\ncurl_close($ch);"
        }
      ]
    },
    {
      "label": "URL",
      "examples": [
        {
          "language": "curl",
          "code": "curl -X POST 'https://{% $api.base_url %}/api/v1/knowledge-source/' \\\n  -H 'Authorization: {% $api.key %}' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n    \"agent_id\": \"{agent_id}\",\n    \"type\": \"url\",\n    \"urls\": [\n      \"https://example.com/knowledge-base\",\n      \"https://example.com/tutorials\"\n    ],\n    \"title\": \"Knowledge Base URLS\"\n  }'"
        },
        {
          "language": "javascript",
          "code": "fetch('https://{% $api.base_url %}/api/v1/knowledge-source/', {\n  method: 'POST',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  },\n  body: JSON.stringify({\n    agent_id: '{agent_id}',\n    type: 'url',\n    urls: [\n      'https://example.com/knowledge-base',\n      'https://example.com/tutorials'\n    ],\n    title: 'Knowledge Base URLS'\n  })\n})"
        },
        {
          "language": "python",
          "code": "import requests\n\nresponse = requests.post(\n    'https://{% $api.base_url %}/api/v1/knowledge-source/',\n    headers={\n        'Authorization': '{% $api.key %}',\n        'Content-Type': 'application/json'\n    },\n    json={\n        'agent_id': '{agent_id}',\n        'type': 'url',\n        'urls': [\n            'https://example.com/knowledge-base',\n            'https://example.com/tutorials'\n        ],\n        'title': 'Knowledge Base URLS'\n    }\n)\ndata = response.json()"
        },
        {
          "language": "php",
          "code": "$ch = curl_init('https://{% $api.base_url %}/api/v1/knowledge-source/');\ncurl_setopt_array($ch, [\n    CURLOPT_RETURNTRANSFER => true,\n    CURLOPT_POST => true,\n    CURLOPT_HTTPHEADER => [\n        'Authorization: {% $api.key %}',\n        'Content-Type: application/json'\n    ],\n    CURLOPT_POSTFIELDS => json_encode([\n        'agent_id' => '{agent_id}',\n        'type' => 'url',\n        'urls' => [\n            'https://example.com/knowledge-base',\n            'https://example.com/tutorials'\n        ],\n        'title' => 'Knowledge Base URLS'\n    ])\n]);\n$data = json_decode(curl_exec($ch), true);\ncurl_close($ch);"
        }
      ]
    },
    {
      "label": "File Upload",
      "examples": [
        {
          "language": "curl",
          "code": "curl -X POST 'https://{% $api.base_url %}/api/v1/knowledge-source/' \\\n  -H 'Authorization: {% $api.key %}' \\\n  -F 'agent_id={agent_id}' \\\n  -F 'title=Knowledge Source File' \\\n  -F 'file=@/path/to/document.pdf'"
        },
        {
          "language": "javascript",
          "code": "const formData = new FormData();\nformData.append('agent_id', '{agent_id}');\nformData.append('title', 'Knowledge Source File');\nformData.append('file', fileInput.files[0]);\n\nfetch('https://{% $api.base_url %}/api/v1/knowledge-source/', {\n  method: 'POST',\n  headers: {\n    'Authorization': '{% $api.key %}'\n  },\n  body: formData\n})"
        },
        {
          "language": "python",
          "code": "import requests\n\nwith open('/path/to/document.pdf', 'rb') as f:\n    response = requests.post(\n        'https://{% $api.base_url %}/api/v1/knowledge-source/',\n        headers={'Authorization': '{% $api.key %}'},\n        data={'agent_id': '{agent_id}', 'title': 'Knowledge Source File'},\n        files={'file': f}\n    )\ndata = response.json()"
        },
        {
          "language": "php",
          "code": "$ch = curl_init('https://{% $api.base_url %}/api/v1/knowledge-source/');\ncurl_setopt_array($ch, [\n    CURLOPT_RETURNTRANSFER => true,\n    CURLOPT_POST => true,\n    CURLOPT_HTTPHEADER => ['Authorization: {% $api.key %}'],\n    CURLOPT_POSTFIELDS => [\n        'agent_id' => '{agent_id}',\n        'title' => 'Knowledge Source File',\n        'file' => new CURLFile('/path/to/document.pdf')\n    ]\n]);\n$data = json_decode(curl_exec($ch), true);\ncurl_close($ch);"
        }
      ]
    }
  ]
}
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

##### 400
```json
{
    "error": {
        "code": "knowledge_source_validation_error",
        "message": "File validation failed: File size (10.21 MB) exceeds maximum allowed size (10.0 MB)",
        "status": 400
    }
}

```

## Best Practices

- **One type at a time**: Only provide one of `urls`, `file`, `plain_text`, or `google_drive_file_id` per request.
- **Retrain after adding**: New sources are not automatically used by the agent. Call [Retrain Agent](/api/agent-training/retrain-agent) after adding sources.

