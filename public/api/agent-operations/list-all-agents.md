---
type: api
title: List All Agents
endpoint: GET /$api.version/agents/
order: 2
---

# List All Agents

Retrieve a list of all AI agents associated with the authenticated user.

## Overview

The List All Agents endpoint allows you to fetch all agents created by the user, including their configurations and metadata. This is useful for managing and reviewing all agents in your account.

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

{% request title="List Agents" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X GET 'https://{% $api.base_url %}v1/agents/' -H 'Authorization: {% $api.key %}'\\ -H 'Content-Type: application/json'"
  },
  {
    "language": "javascript",
    "code": "fetch('https://{% $api.base_url %}v1/agents/', {\n  method: 'GET',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  },\n})"
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
            "id": 642,
            "owner": 193,
            "name": "New Chatbot 147",
            "description": "A new AI chatbot ready to be configured.",
            "status": "Active",
            "appearance": {
                "avatar": {
                    "src": "",
                    "type": "default"
                },
                "position": "bottom-right",
                "buttonText": "",
                "fontFamily": "Inter",
                "chatbotName": "AI Assistant",
                "primaryColor": "#0e1215",
                "secondaryColor": "#ffffff",
                "welcomeMessage": ""
            },
            "behavior": {
                "email": null,
                "guidelines": {
                    "dos": [],
                    "donts": []
                },
                "ticketType": "thirdparty",
                "suggestions": [],
                "aiToAiHandoff": false,
                "expertHandoff": true,
                "autoTicketReply": true,
                "escalationPrompt": ""
            },
            "model": {
                "temperature": 0.7,
                "response_model": "gpt-5.2",
                "display_model": "GPT 5.2"
            },
            "agentType": "General Assistant",
            "agent_category": "Chatbot",
            "systemPrompt": "You are a helpful AI assistant. Be friendly, professional, and provide accurate information.",
            "knowledge_sources": [
                {
                    "id": 1134,
                    "urls": [],
                    "file": null,
                    "plain_text": "TestPlainText",
                    "google_drive_file_id": null,
                    "title": "TestPlainText",
                    "status": "Pending",
                    "type": "plain_text",
                    "agent_knowledge_folder": 562,
                    "parent_knowledge_source": null,
                    "metadata": {
                        "format": "txt",
                        "file_size": "13B",
                        "no_of_rows": 1,
                        "no_of_chars": 13,
                        "no_of_pages": null,
                        "upload_date": "2026-02-23T10:50:25.523809+00:00"
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
                    "id": 1135,
                    "urls": [
                        "https://softwarica.edu.np/",
                        "https://softwarica.edu.np/about-us/about-college",
                        "https://softwarica.edu.np/about-us/coventry-university",
                        "https://softwarica.edu.np/apply",
                        "https://softwarica.edu.np/cdn-cgi/l/email-protection",
                        "https://softwarica.edu.np/contact",
                        "https://softwarica.edu.np/courses",
                        "https://softwarica.edu.np/student-center/notices"
                    ],
                    "file": null,
                    "plain_text": null,
                    "google_drive_file_id": null,
                    "title": "TestPlainURL",
                    "status": "Pending",
                    "type": "website",
                    "agent_knowledge_folder": 562,
                    "parent_knowledge_source": null,
                    "metadata": {
                        "format": "url",
                        "file_size": null,
                        "no_of_rows": null,
                        "no_of_chars": null,
                        "no_of_pages": 8,
                        "upload_date": "2026-02-23T10:51:12.040120+00:00"
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
            "created_at": "2026-01-26T12:22:49.823976Z",
            "updated_at": "2026-02-18T08:24:18.290211Z",
            "conversations": 0,
            "ticketing_providers": [
                "freshdesk"
            ],
            "default_ticketing_provider": "freshdesk",
            "is_slack_enabled": false,
            "privacy_url": null,
            "gdpr_settings": {
                "data_retention_days": null,
                "data_retention_message": null,
                "gdpr_message_display": false
            },
            "is_white_label": false,
            "total_training_usage_bytes": 13,
            "max_training_usage_bytes": 51200000,
            "character_limit": 200000
        },
        {
            "id": 670,
            "owner": 193,
            "name": "Customer Support Agents",
            "description": null,
            "status": "Idle",
            "appearance": {},
            "behavior": {},
            "model": {
                "display_model": null
            },
            "agentType": "General Assistant",
            "agent_category": null,
            "systemPrompt": "",
            "knowledge_sources": [],
            "created_at": "2026-03-04T06:58:17.122359Z",
            "updated_at": "2026-03-04T06:58:17.122385Z",
            "conversations": 0,
            "ticketing_providers": [],
            "default_ticketing_provider": null,
            "is_slack_enabled": false,
            "privacy_url": null,
            "gdpr_settings": {
                "data_retention_days": null,
                "data_retention_message": null,
                "gdpr_message_display": false
            },
            "is_white_label": false,
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
    "features": {
        "WHITE_LABELING": false,
        "PREMIUM_MODELS": false,
        "AUTO_TICKET_RESPONSE": true,
        "ADD_ON_AGENT": false,
        "EMAIL_HANDOFF": true,
        "AGENT_HANDOFF": true,
        "INTEGRATION_HANDOFF": true
    },
    "status": "success",
    "permissions": [
        "VIEW_ANALYTICS",
        "MANAGE_USERS",
        "MANAGE_ADMIN",
        "MANAGE_API_KEY",
        "CONFIGURE_BUSINESS",
        "VIEW_SETTINGS",
        "MANAGE_CHAT",
        "SEND_INVITE",
        "MANAGE_AGENTS",
        "VIEW_KNOWLEDGE",
        "MANAGE_KNOWLEDGE",
        "VIEW_INTEGRATIONS",
        "MANAGE_INTEGRATIONS",
        "MANAGE_BILLING",
        "VIEW_CHAT",
        "VIEW_USERS",
        "MANAGE_SETTINGS",
        "VIEW_AGENTS",
        "TRAIN_AGENT",
        "VIEW_BILLING"
    ]
}
```
{% /response %}


## Best Practices

- **Caching**: Cache the response to reduce API calls if the agent list doesn't change frequently.
- **Error Handling**: Handle authentication errors gracefully to ensure smooth user experience.


