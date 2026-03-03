# 7en Platform — API Documentation

> **Audience:** Frontend developers and third-party integrators.
> **Version:** v1 (current)
> **Last updated:** 2026-02-26

---

## Table of Contents

1. [Base URL](#base-url)
2. [Authentication](#authentication)
3. [Common Headers](#common-headers)
4. [Response Envelope](#response-envelope)
5. [Pagination](#pagination)
6. [Error Response Format](#error-response-format)
7. [Rate Limiting](#rate-limiting)
8. [User & Authentication Endpoints](#user--authentication-endpoints)
9. [Agent Endpoints](#agent-endpoints)
10. [Knowledge Source Endpoints](#knowledge-source-endpoints)
11. [AI & Training Endpoints](#ai--training-endpoints)
12. [Chat Session Endpoints](#chat-session-endpoints)
13. [Chat Message Endpoints](#chat-message-endpoints)
14. [Dashboard Endpoints](#dashboard-endpoints)
15. [Subscription & Billing Endpoints](#subscription--billing-endpoints)
16. [API Key Management](#api-key-management)
17. [Integrations Status](#integrations-status)
18. [Slack Integration](#slack-integration)
19. [WhatsApp Integration](#whatsapp-integration)
20. [Ticketing — Freshdesk & Zendesk](#ticketing--freshdesk--zendesk)
21. [Ticketing — Zoho](#ticketing--zoho)
22. [Ticketing — HubSpot](#ticketing--hubspot)
23. [Ticketing — Salesforce](#ticketing--salesforce)
24. [Platform Admin Endpoints](#platform-admin-endpoints)
25. [Settings Endpoints](#settings-endpoints)
26. [Public Endpoints](#public-endpoints)
27. [WebSocket Endpoints](#websocket-endpoints)
28. [Outbound Webhook Callbacks](#outbound-webhook-callbacks)

---

## Base URL

```
https://api.7en.ai/api/
```

All paths in this document are relative to this base. For local development:

```
http://localhost:8000/api/
```

---

## Authentication

The API uses **JWT Bearer tokens** issued by the `/api/token/` endpoint.

### Obtain Tokens

```http
POST /api/token/
Content-Type: application/json

{
  "username": "sarah@acme.com",
  "password": "S3cur3P@ssword!"
}
```

**Response `200 OK`:**
```json
{
  "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

The access token payload also contains `user_role`, `team_role`, `team_id`, and `permissions` claims added by the custom serializer.

### Refresh Token

```http
POST /api/token/refresh/
Content-Type: application/json

{
  "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Response `200 OK`:**
```json
{
  "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Token Lifetimes (configurable via env vars)

| Token | Default Lifetime |
|---|---|
| Access | 60 minutes |
| Refresh | 7 days |

### Attach to Requests

```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Alternative — API Key (v1 endpoints)

For machine-to-machine integrations and Zapier, pass the raw API key as a Bearer token:

```http
Authorization: Bearer 7en_live_a1b2c3d4e5f6...
```

API keys are created via the [API Key Management](#api-key-management) endpoints (requires API access add-on).

---

## Common Headers

| Header | Required | Value | Notes |
|---|---|---|---|
| `Authorization` | Yes (most endpoints) | `Bearer <token>` | JWT or API key |
| `Content-Type` | Yes (POST/PUT/PATCH) | `application/json` | Use `multipart/form-data` for file uploads |
| `Accept` | No | `application/json` | Default |
| `X-CSRFToken` | No | — | Not required for API (JWT-based) |

---

## Response Envelope

Every successful response is wrapped in a consistent envelope:

```json
{
  "message": "Resource retrieved successfully",
  "data": { ... },
  "status_code": 200,
  "features": {
    "white_label": true,
    "premium_models": false
  },
  "permissions": ["VIEW_AGENTS", "MANAGE_AGENTS", "VIEW_CHAT"]
}
```

| Field | Type | Description |
|---|---|---|
| `message` | string | Human-readable status message |
| `data` | object \| array | Response payload |
| `status_code` | integer | HTTP status code (mirrors the HTTP status) |
| `features` | object | Feature flags for the authenticated user's subscription; present on agent endpoints |
| `permissions` | array | RBAC permissions attached to authenticated user responses |

---

## Pagination

List endpoints that return large datasets use **limit-offset pagination**.

### Query Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| `limit` | integer | 20 | Number of records to return |
| `offset` | integer | 0 | Number of records to skip |

### Response Structure

```json
{
  "message": "List retrieved successfully",
  "data": {
    "count": 142,
    "next": "https://api.7en.ai/api/agents/?limit=20&offset=20",
    "previous": null,
    "results": [ ... ]
  },
  "status_code": 200
}
```

---

## Error Response Format

All errors follow a consistent structure. There are two variants:

### Validation Error (field-level)

```json
{
  "message": "Validation error",
  "error": {
    "code": "validation_error",
    "message": "Validation error",
    "status": 400,
    "fields": {
      "email": ["Enter a valid email address."],
      "password": ["This field is required."],
      "general": ["Passwords do not match."]
    }
  }
}
```

### Resource / Auth Error

```json
{
  "message": "Agent not found",
  "error": {
    "code": "resource_not_found",
    "message": "Agent not found",
    "status": 404,
    "fields": {
      "general": ["Agent not found"]
    }
  }
}
```

### Common Error Codes

| HTTP Status | `error.code` | Meaning |
|---|---|---|
| 400 | `validation_error` | Input validation failed; see `fields` for field-level details |
| 401 | `authentication_failed` | Missing or invalid/expired JWT or API key |
| 403 | `insufficient_permissions` | Authenticated but lacks required RBAC permission |
| 404 | `resource_not_found` | Requested resource does not exist |
| 429 | `throttle_exceeded` | Rate limit hit; back off and retry |
| 500 | `server_error` | Unexpected server error |

---

## Rate Limiting

A **global IP-based rate limit** applies to all endpoints:

| Limit | Scope | Behavior when exceeded |
|---|---|---|
| 100 requests / minute | Per IP address | `429 Too Many Requests` |

Sensitive auth actions have **stricter per-endpoint limits** enforced in the view layer:

| Action | Limit |
|---|---|
| Registration | 5 attempts / 5 minutes |
| OTP verification | 10 attempts / 5 minutes |
| Login | 10 attempts / 5 minutes |
| Resend OTP | 5 attempts / 5 minutes |
| Code login request | 1 attempt / minute |
| Forgot password | 5 attempts / hour |
| Reset password | 10 attempts / hour |

Skipped paths: `/admin/`, `/static/`, `/health/`

---

## User & Authentication Endpoints

### Register

```
POST /api/users/register/
```

Creates a new user account and sends an email OTP for verification. Requires reCAPTCHA v3 token.

**Authentication:** None

**Request Body:**
```json
{
  "email": "sarah@acme.com",
  "username": "sarah_acme",
  "password": "S3cur3P@ssword!",
  "business_name": "Acme Corp",
  "recaptcha_token": "03AGdBq25..."
}
```

| Field | Type | Required | Validation |
|---|---|---|---|
| `email` | string | Yes | Valid email; must be unique |
| `username` | string | Yes | Unique; no spaces |
| `password` | string | Yes | Min 8 characters |
| `business_name` | string | No | Max 255 chars |
| `recaptcha_token` | string | Yes | Google reCAPTCHA v3 token |

**Response `201 Created`:**
```json
{
  "message": "Registration successful. Please check your email for OTP.",
  "data": {
    "id": "a4e6b7c8-c8a9-5d79-7abc-1234567890ab",
    "email": "sarah@acme.com",
    "username": "sarah_acme"
  },
  "status_code": 201
}
```

**Error Responses:**
- `400` — Email already registered, username taken, or reCAPTCHA score too low
- `429` — More than 5 registration attempts from this IP in 5 minutes

**Side Effects:** Sends OTP verification email. Creates `UserProfile`, `Team`, and assigns Owner role.

---

### Verify OTP

```
POST /api/users/verify/
```

Verifies the email OTP sent after registration or resend.

**Authentication:** None

**Request Body:**
```json
{
  "email": "sarah@acme.com",
  "otp": "847291"
}
```

**Response `200 OK`:**
```json
{
  "message": "Account verified successfully.",
  "data": {
    "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  },
  "status_code": 200
}
```

**Error Responses:**
- `400` — Invalid or expired OTP
- `429` — More than 10 attempts in 5 minutes

---

### Resend OTP

```
POST /api/users/resend-otp/
```

Resends a new OTP to the registered email.

**Authentication:** None

**Request Body:**
```json
{
  "email": "sarah@acme.com"
}
```

**Response `200 OK`:**
```json
{
  "message": "OTP sent successfully.",
  "status_code": 200
}
```

---

### Login

```
POST /api/users/login/
```

Authenticates a user with email/username + password. Returns JWT tokens.

**Authentication:** None

**Request Body:**
```json
{
  "username": "sarah@acme.com",
  "password": "S3cur3P@ssword!",
  "recaptcha_token": "03AGdBq25..."
}
```

> `username` accepts either the username or email address.

**Response `200 OK`:**
```json
{
  "message": "Login successful.",
  "data": {
    "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "a4e6b7c8-c8a9-5d79-7abc-1234567890ab",
      "email": "sarah@acme.com",
      "username": "sarah_acme",
      "business_name": "Acme Corp",
      "team_role": "Owner",
      "team_id": 12
    }
  },
  "status_code": 200
}
```

**Error Responses:**
- `400` — Invalid credentials or reCAPTCHA failed
- `403` — Account disabled or pending deletion (7-day grace period)
- `429` — More than 10 login attempts in 5 minutes

---

### SSO Login

```
POST /api/users/sso-login/
```

Authenticates via Google or Apple SSO token.

**Authentication:** None

**Request Body:**
```json
{
  "token": "ya29.a0AfH6SMBx...",
  "provider": "google"
}
```

| Field | Type | Required | Choices |
|---|---|---|---|
| `token` | string | Yes | ID token from Google/Apple SDK |
| `provider` | string | Yes | `google`, `apple` |

**Response `200 OK`:** Same as Login response.

**Side Effects:** Creates account if email not found (first SSO login = auto-registration).

---

### Passwordless Code Login — Request Code

```
POST /api/users/code-login/
```

Sends a one-time login code to the user's email.

**Authentication:** None

**Request Body:**
```json
{
  "email": "sarah@acme.com",
  "delete_requested": false
}
```

**Response `200 OK`:**
```json
{
  "message": "Login code sent to your email.",
  "status_code": 200
}
```

**Error Responses:**
- `429` — Only 1 attempt per minute allowed

---

### Passwordless Code Login — Verify Code

```
POST /api/users/verify-code-login/
```

**Authentication:** None

**Request Body:**
```json
{
  "email": "sarah@acme.com",
  "code": "293847"
}
```

**Response `200 OK`:** Same as Login response.

---

### Get User Profile

```
GET /api/users/{id}/
```

Returns the authenticated user's full profile.

**Authentication:** Required (JWT)

**Path Parameters:**

| Parameter | Type | Description |
|---|---|---|
| `id` | UUID | User ID |

**Response `200 OK`:**
```json
{
  "message": "Resource retrieved successfully",
  "data": {
    "id": "a4e6b7c8-c8a9-5d79-7abc-1234567890ab",
    "email": "sarah@acme.com",
    "username": "sarah_acme",
    "business_name": "Acme Corp",
    "phone_number": "+14155552671",
    "avatar": "https://api.7en.ai/media/avatars/sarah_acme.jpg",
    "team_role": "Owner",
    "team_id": 12,
    "reply_credits": 4820,
    "monthly_quota": 5000,
    "is_verified": true,
    "created_at": "2025-11-01T09:22:00Z"
  },
  "status_code": 200
}
```

---

### Edit Profile

```
PATCH /api/users/{id}/edit-profile/
Content-Type: multipart/form-data
```

**Authentication:** Required (JWT)

**Request Body (form-data):**

| Field | Type | Required | Validation |
|---|---|---|---|
| `business_name` | string | No | Max 255 chars |
| `phone_number` | string | No | E.164 format |
| `avatar` | file | No | JPEG/PNG/GIF; max 2 MB |

**Response `200 OK`:**
```json
{
  "message": "Profile updated successfully.",
  "data": {
    "id": "a4e6b7c8-c8a9-5d79-7abc-1234567890ab",
    "business_name": "Acme Corp Ltd",
    "phone_number": "+14155552671",
    "avatar": "https://api.7en.ai/media/avatars/sarah_acme_v2.jpg"
  },
  "status_code": 200
}
```

---

### Change Password

```
POST /api/users/{id}/change-password/
```

**Authentication:** Required (JWT)

**Request Body:**
```json
{
  "current_password": "S3cur3P@ssword!",
  "new_password": "N3wS3cur3P@ss!",
  "confirm_password": "N3wS3cur3P@ss!"
}
```

**Response `200 OK`:**
```json
{
  "message": "Password changed successfully.",
  "status_code": 200
}
```

**Error Responses:**
- `400` — Current password incorrect or new passwords don't match

---

### Forgot Password

```
POST /api/users/forgot-password/
```

Sends a password reset link to the user's email.

**Authentication:** None

**Request Body:**
```json
{
  "email": "sarah@acme.com"
}
```

**Response `200 OK`:**
```json
{
  "message": "Password reset link sent to your email.",
  "status_code": 200
}
```

**Error Responses:**
- `429` — More than 5 attempts per hour

---

### Reset Password

```
POST /api/users/reset-password/
```

**Authentication:** None

**Request Body:**
```json
{
  "token": "c8f3a9b2e1d4...",
  "new_password": "N3wS3cur3P@ss!",
  "confirm_password": "N3wS3cur3P@ss!"
}
```

**Response `200 OK`:**
```json
{
  "message": "Password reset successfully.",
  "status_code": 200
}
```

---

### Upload Avatar

```
POST /api/users/upload-file/
Content-Type: multipart/form-data
```

**Authentication:** Required (JWT)

**Request Body:**

| Field | Type | Required | Validation |
|---|---|---|---|
| `file` | file | Yes | JPEG/PNG/GIF; max 5 MB |

**Response `200 OK`:**
```json
{
  "message": "File uploaded successfully.",
  "data": {
    "url": "https://api.7en.ai/media/avatars/sarah_acme_20251101.jpg"
  },
  "status_code": 200
}
```

---

### Create Team Invite

```
POST /api/users/create-team-invite/
```

Invites a new member to the team via email.

**Authentication:** Required (JWT) · Permission: `MANAGE_USERS`

**Request Body:**
```json
{
  "email": "james@acme.com",
  "role": "Support Agent",
  "agent_ids": [
    "b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654",
    "c6g8d9e0-f1b2-5c3d-ae4f-0123456789ab"
  ]
}
```

| Field | Type | Required | Description |
|---|---|---|---|
| `email` | string | Yes | Invitee email |
| `role` | string | Yes | Role name from `CustomTeamRole` |
| `agent_ids` | array of UUID | No | Agents to pre-assign to this member |

**Response `201 Created`:**
```json
{
  "message": "Invitation sent to james@acme.com.",
  "data": {
    "invite_id": 88,
    "email": "james@acme.com",
    "role": "Support Agent",
    "token": "inv_abc123...",
    "expires_at": "2026-03-05T09:00:00Z"
  },
  "status_code": 201
}
```

**Side Effects:** Sends invitation email with a registration link containing the invite token. Enforces team seat limits from subscription plan.

---

### Validate Invite Token

```
GET /api/users/validate-invite-token/?token=inv_abc123...
```

**Authentication:** None

**Query Parameters:**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `token` | string | Yes | Invite token from email link |

**Response `200 OK`:**
```json
{
  "message": "Invite token is valid.",
  "data": {
    "email": "james@acme.com",
    "role": "Support Agent",
    "team_name": "Acme Corp"
  },
  "status_code": 200
}
```

---

### Register with Invite

```
POST /api/users/register-with-invite/
```

Registers a new user account using an invite token.

**Authentication:** None

**Request Body:**
```json
{
  "token": "inv_abc123...",
  "username": "james_acme",
  "password": "S3cur3P@ssword!",
  "first_name": "James",
  "last_name": "Martin"
}
```

**Response `201 Created`:** Same as Register response (with JWT tokens).

---

### List Team Members

```
GET /api/users/team-members/
```

**Authentication:** Required (JWT) · Permission: `VIEW_USERS`

**Response `200 OK`:**
```json
{
  "message": "Team members retrieved successfully.",
  "data": [
    {
      "id": "a4e6b7c8-c8a9-5d79-7abc-1234567890ab",
      "email": "sarah@acme.com",
      "username": "sarah_acme",
      "role": "Owner",
      "is_active": true,
      "avatar": "https://api.7en.ai/media/avatars/sarah.jpg",
      "assigned_agents": [
        { "id": "b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654", "name": "Support Bot" }
      ]
    },
    {
      "id": "d7h9e0f1-g2c3-6d4e-bf5g-1234567890cd",
      "email": "james@acme.com",
      "username": "james_acme",
      "role": "Support Agent",
      "is_active": true,
      "avatar": null,
      "assigned_agents": []
    }
  ],
  "status_code": 200
}
```

---

### Assign Agents to Team Member

```
POST /api/users/assign-agents/
```

**Authentication:** Required (JWT) · Permission: `MANAGE_USERS`

**Request Body:**
```json
{
  "user_id": "d7h9e0f1-g2c3-6d4e-bf5g-1234567890cd",
  "agent_ids": ["b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654"]
}
```

**Response `200 OK`:**
```json
{
  "message": "Agents assigned successfully.",
  "status_code": 200
}
```

---

### Remove Team Member

```
POST /api/users/remove-from-team/
```

**Authentication:** Required (JWT) · Permission: `MANAGE_USERS`

**Request Body:**
```json
{
  "user_id": "d7h9e0f1-g2c3-6d4e-bf5g-1234567890cd"
}
```

**Response `200 OK`:**
```json
{
  "message": "User removed from team.",
  "status_code": 200
}
```

---

### Delete Account

```
DELETE /api/users/{id}/delete-account/
```

Initiates a **7-day soft-delete grace period**. The account and all data will be permanently deleted after 7 days unless cancelled.

**Authentication:** Required (JWT — must be own account)

**Response `200 OK`:**
```json
{
  "message": "Account scheduled for deletion in 7 days.",
  "data": {
    "deletion_date": "2026-03-05T09:00:00Z"
  },
  "status_code": 200
}
```

---

### Cancel Account Deletion

```
POST /api/users/cancel-delete-account/
```

**Authentication:** None (uses token from email)

**Request Body:**
```json
{
  "token": "del_cancel_xyz789..."
}
```

**Response `200 OK`:**
```json
{
  "message": "Account deletion cancelled successfully.",
  "status_code": 200
}
```

---

## Agent Endpoints

### List Agents

```
GET /api/agents/
```

Returns all agents accessible to the authenticated user, filtered by team membership and agent assignments.

**Authentication:** Required (JWT) · Permission: `VIEW_AGENTS`

**Query Parameters:**

| Parameter | Type | Required | Description | Default |
|---|---|---|---|---|
| `limit` | integer | No | Records per page | 20 |
| `offset` | integer | No | Records to skip | 0 |
| `status` | string | No | Filter: `Active`, `Idle`, `Training`, `Issues`, `Offline`, `Deactivate` | — |

**Response `200 OK`:**
```json
{
  "message": "List retrieved successfully",
  "data": {
    "count": 3,
    "next": null,
    "previous": null,
    "results": [
      {
        "id": "b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654",
        "name": "Support Bot",
        "description": "Handles tier-1 customer support queries for Acme Corp",
        "status": "Active",
        "agentType": "Chatbot",
        "agent_category": "Chatbot",
        "model": "gpt-4o",
        "display_model": "GPT-4o",
        "systemPrompt": "You are a helpful support agent for Acme Corp...",
        "owner": "sarah@acme.com",
        "knowledge_sources": 12,
        "conversations": 347,
        "ticketing_providers": ["freshdesk"],
        "default_ticketing_provider": "freshdesk",
        "is_slack_enabled": true,
        "total_training_usage_bytes": 5242880,
        "max_training_usage_bytes": 52428800,
        "character_limit": 1000000,
        "created_at": "2025-11-15T10:30:00Z",
        "updated_at": "2026-01-20T14:22:00Z",
        "appearance": {
          "primaryColor": "#2563EB",
          "secondaryColor": "#DBEAFE",
          "fontFamily": "Inter",
          "chatbotName": "Acme Support",
          "welcomeMessage": "Hi! How can I help you today?",
          "buttonText": "Chat with us",
          "position": "bottom-right"
        },
        "behavior": {
          "suggestions": ["How do I reset my password?", "Where is my order?"],
          "followupCount": 2,
          "followupInterval": 300,
          "followupMessages": ["Still need help?", "Don't hesitate to ask!"]
        }
      }
    ]
  },
  "features": {
    "white_label": false,
    "premium_models": true,
    "auto_ticket_response": true
  },
  "status_code": 200
}
```

---

### Create Agent

```
POST /api/agents/
```

**Authentication:** Required (JWT) · Permission: `MANAGE_AGENTS`

**Request Body:**
```json
{
  "name": "Sales Assistant",
  "description": "Handles pre-sales queries and product demos",
  "agentType": "Chatbot",
  "model": "gpt-4o-mini",
  "systemPrompt": "You are a sales assistant for Acme Corp. Be concise and helpful.",
  "appearance": {
    "primaryColor": "#16A34A",
    "secondaryColor": "#DCFCE7",
    "fontFamily": "Inter",
    "chatbotName": "Acme Sales",
    "welcomeMessage": "Hello! Interested in our products?",
    "buttonText": "Talk to Sales",
    "position": "bottom-right"
  },
  "behavior": {
    "suggestions": ["View pricing", "Book a demo"],
    "followupCount": 1,
    "followupInterval": 600,
    "followupMessages": ["Can I help with anything else?"]
  }
}
```

| Field | Type | Required | Notes |
|---|---|---|---|
| `name` | string | Yes | Max 255 chars |
| `description` | string | No | — |
| `agentType` | string | No | `Assistant` or `Chatbot` (case-insensitive) |
| `model` | string | Yes | Must be available in the user's subscription |
| `systemPrompt` | string | No | Appended with platform guidelines |
| `appearance` | object | No | Widget visual configuration |
| `behavior` | object | No | Suggestions, follow-up messages |
| `ticketing_providers` | array | No | e.g. `["freshdesk"]` — must have active integration |

**Response `201 Created`:**
```json
{
  "message": "Resource created successfully",
  "data": {
    "id": "c6g8d9e0-f1b2-5c3d-ae4f-0123456789ab",
    "name": "Sales Assistant",
    "status": "Idle",
    "created_at": "2026-02-26T10:00:00Z"
  },
  "status_code": 201
}
```

**Error Responses:**
- `400` — Agent limit reached for current plan; payment failure active (within 48h); ticketing provider not connected
- `403` — Model not available on current subscription

**Side Effects:** Auto-creates an `AgentKnowledgeFolder` linked to the agent.

---

### Retrieve Agent

```
GET /api/agents/{id}/
```

**Authentication:** Required (JWT) · Permission: `VIEW_AGENTS`

**Path Parameters:**

| Parameter | Type | Description |
|---|---|---|
| `id` | UUID | Agent ID |

**Response `200 OK`:** Full agent object (same structure as list results above).

**Error Responses:**
- `404` — Agent not found or not accessible to this user/team

---

### Update Agent

```
PATCH /api/agents/{id}/
```

**Authentication:** Required (JWT) · Permission: `MANAGE_AGENTS`

**Request Body:** Any subset of the Create Agent fields.

```json
{
  "name": "Sales Assistant v2",
  "model": "gpt-4o",
  "appearance": {
    "primaryColor": "#0EA5E9"
  }
}
```

**Response `200 OK`:** Updated full agent object.

---

### Delete Agent

```
DELETE /api/agents/{id}/
```

**Authentication:** Required (JWT) · Permission: `MANAGE_AGENTS`

**Response `204 No Content`**

**Side Effects:** Deletes the Weaviate vector collection for this agent. Reduces Stripe add-on agent quantity by 1 if applicable. Cascades to all related knowledge sources.

---

### Get Knowledge Folder

```
GET /api/agents/{id}/knowledge-folder/
```

**Authentication:** Required (JWT) · Permission: `VIEW_KNOWLEDGE`

**Response `200 OK`:**
```json
{
  "message": "Resource retrieved successfully",
  "data": {
    "id": 42,
    "agent": "b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654",
    "name": "Support Bot Knowledge",
    "knowledge_sources": [
      {
        "id": 101,
        "title": "Help Center",
        "type": "url",
        "status": "Trained",
        "urls": ["https://help.acme.com/"]
      }
    ]
  },
  "status_code": 200
}
```

---

### Add Knowledge Sources to Agent

```
POST /api/agents/{id}/add-knowledge-sources/
```

**Authentication:** Required (JWT) · Permission: `MANAGE_KNOWLEDGE`

**Request Body:**
```json
{
  "knowledge_source_ids": [101, 102, 103]
}
```

**Response `200 OK`:**
```json
{
  "message": "Knowledge sources added successfully.",
  "status_code": 200
}
```

---

### Remove Knowledge Sources from Agent

```
POST /api/agents/{id}/remove-knowledge-sources/
```

**Authentication:** Required (JWT) · Permission: `MANAGE_KNOWLEDGE`

**Request Body:**
```json
{
  "knowledge_source_ids": [102]
}
```

**Response `200 OK`:**
```json
{
  "message": "Knowledge sources removed successfully.",
  "status_code": 200
}
```

---

### Retrain Agent

```
POST /api/agents/{id}/retrain/
```

Triggers a background Celery task to re-ingest all knowledge sources and rebuild the Weaviate vector index.

**Authentication:** Required (JWT) · Permission: `TRAIN_AGENT`

**Request Body:** None

**Response `200 OK`:**
```json
{
  "message": "Agent retraining started.",
  "data": {
    "agent_id": "b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654",
    "status": "Training"
  },
  "status_code": 200
}
```

**Side Effects:** Sets agent `status` → `Training`. Queues `train_agent_task` on Celery. Progress streams via the SSE endpoint.

---

### My Assigned Agents

```
GET /api/agents/my_agents/
```

Returns only the agents explicitly assigned to the currently authenticated team member (relevant for non-owner roles).

**Authentication:** Required (JWT)

**Response `200 OK`:** Array of agent objects (same structure as List Agents results).

---

## Knowledge Source Endpoints

### List Knowledge Sources

```
GET /api/knowledgesource/
```

**Authentication:** Required (JWT) · Permission: `VIEW_KNOWLEDGE`

**Query Parameters:**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `agent_knowledge_folder` | integer | No | Filter by folder ID |
| `agent_id` | UUID | No | Filter by agent ID |
| `status` | string | No | `Pending`, `Training`, `Trained`, `Failed`, `Deleted` |

**Response `200 OK`:**
```json
{
  "message": "List retrieved successfully",
  "data": {
    "count": 5,
    "results": [
      {
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
        "total_training_usage_bytes": 204800,
        "metadata": {
          "page_count": 48,
          "scraped_at": "2026-01-10T08:00:00Z"
        },
        "created_at": "2026-01-10T08:00:00Z"
      },
      {
        "id": 102,
        "title": "Product Manual v3.pdf",
        "type": "file",
        "status": "Trained",
        "urls": null,
        "file": "https://api.7en.ai/media/knowledge/product_manual_v3.pdf",
        "plain_text": null,
        "google_drive_file_id": null,
        "agent_knowledge_folder": 42,
        "total_training_usage_bytes": 2097152,
        "metadata": {},
        "created_at": "2026-01-12T11:30:00Z"
      }
    ]
  },
  "status_code": 200
}
```

---

### Create Knowledge Source

```
POST /api/knowledgesource/
Content-Type: application/json  (or multipart/form-data for file upload)
```

**Authentication:** Required (JWT) · Permission: `MANAGE_KNOWLEDGE`

Exactly **one** of `urls`, `file`, `plain_text`, or `google_drive_file_id` must be provided.

**Option A — URL Scraping:**
```json
{
  "urls": [
    "https://help.acme.com/",
    "https://help.acme.com/faq"
  ],
  "title": "Help Center",
  "agent_knowledge_folder": 42
}
```

**Option B — File Upload (multipart/form-data):**
```
file=<binary>
title=Product Manual
agent_knowledge_folder=42
```

Supported formats: PDF, DOCX, TXT, CSV, XLSX.
Max file size: configured via `KNOWLEDGE_SOURCE_MAX_FILE_SIZE_MB` (default 10 MB).

**Option C — Plain Text:**
```json
{
  "plain_text": "Our return policy allows returns within 30 days of purchase...",
  "title": "Return Policy",
  "agent_knowledge_folder": 42
}
```

**Option D — Google Drive File:**
```json
{
  "google_drive_file_id": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms",
  "title": "Q4 Knowledge Base",
  "agent_knowledge_folder": 42
}
```

**Response `201 Created`:**
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

**Error Responses:**
- `400` — More than one source type provided; invalid URL format; file too large; subscription character limit exceeded

---

### Delete Knowledge Source

```
DELETE /api/knowledgesource/{id}/
```

Performs a **soft delete** — marks the source as `Deleted`. Hard delete requires the `MANAGE_ADMIN` permission.

**Authentication:** Required (JWT) · Permission: `MANAGE_KNOWLEDGE`

**Response `204 No Content`**

---

### Bulk Delete Knowledge Sources

```
DELETE /api/knowledgesource/bulk-delete/
```

**Authentication:** Required (JWT) · Permission: `MANAGE_KNOWLEDGE`

**Request Body:**
```json
{
  "ids": [101, 102, 103]
}
```

**Response `200 OK`:**
```json
{
  "message": "3 knowledge sources deleted.",
  "status_code": 200
}
```

---

### Get Sub-links

```
GET /api/knowledgesource/{id}/sublinks/
```

Returns child URLs discovered during scraping of a URL knowledge source.

**Authentication:** Required (JWT) · Permission: `VIEW_KNOWLEDGE`

**Response `200 OK`:**
```json
{
  "data": {
    "sub_urls": [
      { "id": 110, "url": "https://help.acme.com/faq", "status": "Trained" },
      { "id": 111, "url": "https://help.acme.com/billing", "status": "Trained" }
    ]
  },
  "status_code": 200
}
```

---

### Scrape Website URLs

```
POST /api/knowledge/scrape-urls/
```

Crawls a website and returns discovered URLs (preview only — does not save).

**Authentication:** Required (JWT)

**Request Body:**
```json
{
  "url": "https://help.acme.com/"
}
```

**Response `200 OK`:**
```json
{
  "data": {
    "urls": [
      "https://help.acme.com/",
      "https://help.acme.com/faq",
      "https://help.acme.com/billing",
      "https://help.acme.com/account"
    ]
  },
  "status_code": 200
}
```

---

### Google Drive — Get OAuth URL

```
GET /api/auth/google/url/
```

Returns the Google OAuth authorization URL to link a user's Google Drive.

**Authentication:** Required (JWT)

**Response `200 OK`:**
```json
{
  "data": {
    "auth_url": "https://accounts.google.com/o/oauth2/auth?client_id=..."
  },
  "status_code": 200
}
```

---

### Google Drive — OAuth Callback

```
GET /api/auth/google/callback/?code=4/0AX4XfWi...&state=...
```

Handles the Google OAuth redirect. Stores credentials for the user.

**Authentication:** Session (follows OAuth flow redirect)

---

### Google Drive — List Files

```
GET /api/drive/files/?page_token=abc&page_size=20
```

**Authentication:** Required (JWT — must have linked Google Drive)

**Query Parameters:**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `page_token` | string | No | Token for next page of Google Drive results |
| `page_size` | integer | No | Results per page (default 20) |

**Response `200 OK`:**
```json
{
  "data": {
    "files": [
      {
        "id": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms",
        "name": "Q4 Knowledge Base.docx",
        "mimeType": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "modifiedTime": "2026-01-15T10:00:00Z"
      }
    ],
    "next_page_token": "xyz456"
  },
  "status_code": 200
}
```

---

### Google Drive — Add File to Agent Folder

```
POST /api/drive/add-to-agent-folder/
```

**Authentication:** Required (JWT)

**Request Body:**
```json
{
  "google_drive_file_id": "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgVE2upms",
  "agent_knowledge_folder": 42
}
```

**Response `201 Created`:** Knowledge source object (same as Create Knowledge Source response).

---

### Unlink Google Drive

```
POST /api/drive/unlink/
```

Revokes stored Google OAuth credentials.

**Authentication:** Required (JWT)

**Response `200 OK`:**
```json
{
  "message": "Google Drive unlinked successfully.",
  "status_code": 200
}
```

---

## AI & Training Endpoints

### Start Agent Training

```
POST /api/ai/train-agent/
```

Queues a full knowledge ingestion and Weaviate indexing job.

**Authentication:** Required (JWT) · Permission: `TRAIN_AGENT`

**Request Body:**
```json
{
  "agent_id": "b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654"
}
```

**Response `200 OK`:**
```json
{
  "message": "Training started.",
  "data": {
    "agent_id": "b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654",
    "task_id": "celery-task-a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "status": "Training"
  },
  "status_code": 200
}
```

**Side Effects:** Sets agent `status` → `Training`; sets all `KnowledgeSource` statuses → `Training`; enqueues `train_agent_task` on Celery.

---

### Training Status — SSE Stream

```
GET /api/ai/v1/agents/{agent_id}/training-status-sse/
Accept: text/event-stream
```

Server-Sent Events stream that pushes training progress updates. Close the connection when `status` becomes `Active` or `Issues`.

**Authentication:** Required (JWT)

**Path Parameters:**

| Parameter | Type | Description |
|---|---|---|
| `agent_id` | UUID | Agent being trained |

**Event Stream Format:**

```
data: {"status": "Training", "progress": 0.25, "current_source": "Help Center", "completed_sources": 3, "total_sources": 12}

data: {"status": "Training", "progress": 0.58, "current_source": "Product Manual v3.pdf", "completed_sources": 7, "total_sources": 12}

data: {"status": "Active", "progress": 1.0, "completed_sources": 12, "total_sources": 12}
```

---

### Training Status — Poll

```
GET /api/ai/v1/agents/{agent_id}/training-status/
```

Single-shot training status check (for clients that cannot consume SSE).

**Authentication:** Required (JWT)

**Response `200 OK`:**
```json
{
  "data": {
    "agent_id": "b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654",
    "status": "Training",
    "progress": 0.42,
    "completed_sources": 5,
    "total_sources": 12,
    "failed_sources": 0
  },
  "status_code": 200
}
```

---

### All Agents Training Status

```
GET /api/ai/v1/agents/training-status-all/
```

**Authentication:** Required (JWT)

**Response `200 OK`:**
```json
{
  "data": [
    {
      "agent_id": "b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654",
      "name": "Support Bot",
      "status": "Active"
    },
    {
      "agent_id": "c6g8d9e0-f1b2-5c3d-ae4f-0123456789ab",
      "name": "Sales Assistant",
      "status": "Training",
      "progress": 0.30
    }
  ],
  "status_code": 200
}
```

---

### Generate Knowledge Base Prompt

```
POST /api/ai/v1/knowledge-bases/{knowledge_base_id}/prompt/
```

Generates a suggested system prompt based on the contents of a knowledge base.

**Authentication:** Required (JWT)

**Path Parameters:**

| Parameter | Type | Description |
|---|---|---|
| `knowledge_base_id` | integer | Knowledge folder ID |

**Response `200 OK`:**
```json
{
  "data": {
    "suggested_prompt": "You are a helpful customer support assistant for Acme Corp. You specialize in answering questions about product returns, billing, and account management. Always be polite and concise."
  },
  "status_code": 200
}
```

---

## Chat Session Endpoints

### List Chat Sessions

```
GET /api/chatsessions/
```

**Authentication:** Required (JWT) · Permission: `VIEW_CHAT`

**Query Parameters:**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `agent` | UUID | No | Filter by agent ID |
| `status` | string | No | `open`, `resolved`, `pending` |
| `source` | string | No | `website`, `whatsapp`, `slack`, `api` |
| `limit` | integer | No | Default 20 |
| `offset` | integer | No | Default 0 |
| `search` | string | No | Search by customer name or email |

**Response `200 OK`:**
```json
{
  "message": "List retrieved successfully",
  "data": {
    "count": 248,
    "next": "https://api.7en.ai/api/chatsessions/?limit=20&offset=20",
    "previous": null,
    "results": [
      {
        "id": "f9e2d3c4-b5a6-7890-cdef-1234567890ab",
        "customer": {
          "full_name": "Marcus Johnson",
          "email": "marcus@example.com"
        },
        "lastMessage": "What is your refund policy?",
        "time": "2026-02-25T14:37:00Z",
        "agent": {
          "id": "b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654",
          "name": "Support Bot"
        },
        "satisfaction": 4.5,
        "duration": 342,
        "handoffCount": 1,
        "topic": "Refund Request",
        "channel": "website",
        "agentType": "AI",
        "priority": "normal",
        "email": "marcus@example.com",
        "status": "resolved"
      }
    ]
  },
  "status_code": 200
}
```

---

### Create Chat Session

```
POST /api/chatsessions/
```

**Authentication:** Required (JWT) or API Key

**Request Body:**
```json
{
  "full_name": "Marcus Johnson",
  "email": "marcus@example.com",
  "phone": "+14155559876",
  "agents": ["b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654"],
  "source": "website",
  "priority": "normal"
}
```

| Field | Type | Required | Choices / Notes |
|---|---|---|---|
| `full_name` | string | No | Customer name |
| `email` | string | No | Valid email |
| `phone` | string | No | E.164 format |
| `agents` | array of UUID | Yes | At least one agent |
| `source` | string | No | `website`, `whatsapp`, `slack`, `api`; default `website` |
| `priority` | string | No | `low`, `normal`, `high`, `urgent`; default `normal` |

**Response `201 Created`:**
```json
{
  "data": {
    "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "full_name": "Marcus Johnson",
    "email": "marcus@example.com",
    "status": "open",
    "source": "website",
    "start_time": "2026-02-26T09:15:00Z",
    "agents": ["b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654"],
    "current_participant": "b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654"
  },
  "status_code": 201
}
```

---

### Retrieve Chat Session

```
GET /api/chatsessions/{id}/
```

**Authentication:** Required (JWT) · Permission: `VIEW_CHAT`

**Response `200 OK`:** Full session object including message history and transfer log.

---

### Update Chat Session

```
PATCH /api/chatsessions/{id}/
```

**Authentication:** Required (JWT) · Permission: `MANAGE_CHAT`

**Request Body:**
```json
{
  "status": "resolved",
  "priority": "high",
  "current_participant": "d7h9e0f1-g2c3-6d4e-bf5g-1234567890cd"
}
```

**Side Effects:** Status changes push WebSocket events to all connected admin clients subscribed to `ws/chat/sessions/`.

---

### Export Conversations

```
GET /api/chat/admin/conversations/export/
```

**Authentication:** Required (JWT) · Permission: `VIEW_CHAT`

**Query Parameters:**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `format` | string | Yes | `pdf`, `docx`, `json`, `csv` |
| `agent` | UUID | No | Filter by agent |
| `from_date` | date | No | ISO 8601 e.g. `2026-01-01` |
| `to_date` | date | No | ISO 8601 |

**Response:** Binary file download with appropriate `Content-Type` header.

---

### Bulk Delete Conversations

```
POST /api/chat/admin/conversations/bulk-delete/
```

**Authentication:** Required (JWT) · Permission: `MANAGE_CHAT`

**Request Body:**
```json
{
  "session_ids": [
    "f9e2d3c4-b5a6-7890-cdef-1234567890ab",
    "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
  ]
}
```

**Response `200 OK`:**
```json
{
  "message": "2 conversations deleted.",
  "status_code": 200
}
```

---

### Bulk Resolve Conversations

```
POST /api/chat/admin/conversations/bulk-resolve/
```

**Authentication:** Required (JWT) · Permission: `MANAGE_CHAT`

**Request Body:**
```json
{
  "session_ids": [
    "f9e2d3c4-b5a6-7890-cdef-1234567890ab"
  ]
}
```

**Response `200 OK`:**
```json
{
  "message": "1 conversation resolved.",
  "status_code": 200
}
```

---

### Create Ticket from Chat

```
POST /api/chat/tickets/create/
```

Creates a support ticket in the connected ticketing system (Freshdesk, Zendesk, Zoho, HubSpot, or Salesforce) from a chat session.

**Authentication:** Required (JWT) · Permission: `MANAGE_CHAT`

**Request Body:**
```json
{
  "session_id": "f9e2d3c4-b5a6-7890-cdef-1234567890ab",
  "provider": "freshdesk",
  "subject": "Customer cannot reset password",
  "priority": 2,
  "tags": ["password", "account"]
}
```

**Response `201 Created`:**
```json
{
  "message": "Ticket created successfully.",
  "data": {
    "ticket_id": "FD-48291",
    "provider": "freshdesk",
    "ticket_url": "https://acme.freshdesk.com/helpdesk/tickets/48291"
  },
  "status_code": 201
}
```

---

## Chat Message Endpoints

### List Messages

```
GET /api/chatmessages/?session={session_id}
```

**Authentication:** Required (JWT) · Permission: `VIEW_CHAT`

**Query Parameters:**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `session` | UUID | Yes | Chat session ID |
| `limit` | integer | No | Default 50 |
| `offset` | integer | No | — |

**Response `200 OK`:**
```json
{
  "data": {
    "count": 12,
    "results": [
      {
        "id": "m1a2b3c4-d5e6-7890-fghi-jklm12345678",
        "session": "f9e2d3c4-b5a6-7890-cdef-1234567890ab",
        "message": "Hi, I can't reset my password.",
        "message_by": "customer",
        "timestamp": "2026-02-25T14:32:00Z",
        "agent": null,
        "llm_name": null,
        "tokens_used": null,
        "sentiment": "neutral"
      },
      {
        "id": "m2b3c4d5-e6f7-8901-ghij-klmn23456789",
        "session": "f9e2d3c4-b5a6-7890-cdef-1234567890ab",
        "message": "I can help! Please click 'Forgot Password' on the login page and enter your email...",
        "message_by": "agent",
        "timestamp": "2026-02-25T14:32:05Z",
        "agent": {
          "id": "b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654",
          "name": "Support Bot"
        },
        "llm_name": "gpt-4o-mini",
        "tokens_used": 148,
        "sentiment": null
      }
    ]
  },
  "status_code": 200
}
```

---

### Delete Session Messages

```
DELETE /api/chat/chatmessages/{session_id}/delete/
```

**Authentication:** Required (JWT) · Permission: `MANAGE_CHAT`

**Response `204 No Content`**

---

## Dashboard Endpoints

### Overview

```
GET /api/dashboard/overview/
```

Aggregated analytics for the authenticated user's team. Response is **cached for 2 minutes**.

**Authentication:** Required (JWT)

**Response `200 OK`:**
```json
{
  "message": "Dashboard data retrieved successfully",
  "data": {
    "agents": {
      "total": 3,
      "active": 2,
      "training": 1
    },
    "conversations": {
      "total": 1482,
      "open": 14,
      "resolved": 1421,
      "pending": 47,
      "by_channel": {
        "website": 1100,
        "whatsapp": 290,
        "slack": 92
      }
    },
    "satisfaction": {
      "average_rating": 4.3,
      "rated_count": 312
    },
    "response_time": {
      "average_seconds": 4.2
    },
    "performance": {
      "daily": [
        { "date": "2026-02-20", "conversations": 58 },
        { "date": "2026-02-21", "conversations": 72 },
        { "date": "2026-02-22", "conversations": 44 }
      ]
    },
    "team": {
      "total_members": 4,
      "pending_invites": 1
    },
    "credits": {
      "used": 3180,
      "total": 5000,
      "remaining": 1820
    }
  },
  "status_code": 200
}
```

---

## Subscription & Billing Endpoints

### List Plans

```
GET /api/subscriptions/
```

**Authentication:** Required (JWT)

**Response `200 OK`:**
```json
{
  "data": [
    {
      "id": 1,
      "name": "Starter",
      "price_monthly": "29.00",
      "price_annual": "290.00",
      "duration_days": 30,
      "total_replies": 2000,
      "character_limit": 500000,
      "max_agents": 2,
      "allowed_team_members": 3,
      "allowed_domains_to_embed": 1,
      "stripe_price_id_monthly": "price_1ABC...",
      "stripe_price_id_annual": "price_1DEF..."
    },
    {
      "id": 2,
      "name": "Professional",
      "price_monthly": "79.00",
      "price_annual": "790.00",
      "duration_days": 30,
      "total_replies": 10000,
      "character_limit": 5000000,
      "max_agents": 10,
      "allowed_team_members": 10,
      "allowed_domains_to_embed": 0
    }
  ],
  "status_code": 200
}
```

> `allowed_domains_to_embed: 0` means unlimited.

---

### Get Current Subscription

```
GET /api/subscriptions/current/
```

**Authentication:** Required (JWT)

**Response `200 OK`:**
```json
{
  "data": {
    "id": 55,
    "user": "a4e6b7c8-c8a9-5d79-7abc-1234567890ab",
    "plan": {
      "id": 2,
      "name": "Professional",
      "price_monthly": "79.00"
    },
    "status": "active",
    "started_at": "2026-01-01T00:00:00Z",
    "ended_at": "2026-02-01T00:00:00Z",
    "total_replies": 10000,
    "replies_used": 3180,
    "is_expired": false,
    "cancellation_date": null
  },
  "status_code": 200
}
```

---

### Create Checkout Session (Subscription)

```
POST /api/subscriptions/{plan_id}/checkout/
```

Creates a Stripe Checkout session for subscribing to a plan.

**Authentication:** Required (JWT)

**Request Body:**
```json
{
  "billing_cycle": "monthly"
}
```

| Field | Type | Required | Choices |
|---|---|---|---|
| `billing_cycle` | string | Yes | `monthly`, `annual` |

**Response `200 OK`:**
```json
{
  "data": {
    "checkout_url": "https://checkout.stripe.com/pay/cs_live_a1b2c3..."
  },
  "status_code": 200
}
```

Redirect the user to `checkout_url`. Stripe will redirect back to `STRIPE_SUB_SUCCESS_URL` or `STRIPE_SUB_CANCEL_URL` after payment.

---

### Upgrade Subscription

```
POST /api/subscriptions/{subscription_id}/upgrade/{new_plan_id}/
```

**Authentication:** Required (JWT)

**Response `200 OK`:**
```json
{
  "message": "Subscription upgraded to Professional successfully.",
  "data": {
    "subscription_id": 55,
    "new_plan": "Professional"
  },
  "status_code": 200
}
```

---

### Reactivate Subscription

```
POST /api/subscriptions/reactivate/
```

Reactivates a cancelled subscription that is still within the 30-day grace period.

**Authentication:** Required (JWT)

**Response `200 OK`:**
```json
{
  "message": "Subscription reactivated successfully.",
  "status_code": 200
}
```

---

### List Invoices

```
GET /api/subscriptions/invoices/
```

**Authentication:** Required (JWT)

**Response `200 OK`:**
```json
{
  "data": [
    {
      "id": 201,
      "amount": "79.00",
      "currency": "usd",
      "status": "paid",
      "invoice_pdf": "https://pay.stripe.com/invoice/acct_1ABC/invst_xyz/pdf",
      "created_at": "2026-02-01T00:00:00Z"
    }
  ],
  "status_code": 200
}
```

---

### Get Credit Summary

```
GET /api/subscriptions/credits/summary/
```

**Authentication:** Required (JWT)

**Response `200 OK`:**
```json
{
  "data": {
    "reply_credits": 1820,
    "monthly_quota": 5000,
    "used_this_month": 3180,
    "auto_topup_enabled": true,
    "auto_topup_threshold": 500,
    "auto_topup_amount": 1000
  },
  "status_code": 200
}
```

---

### List Topup Options

```
GET /api/subscriptions/topups/options/
```

**Authentication:** Required (JWT)

**Response `200 OK`:**
```json
{
  "data": {
    "packages": [
      {
        "id": 10,
        "name": "Small Top-up",
        "replies": 1000,
        "price": "9.99",
        "currency": "usd"
      },
      {
        "id": 11,
        "name": "Medium Top-up",
        "replies": 5000,
        "price": "39.99",
        "currency": "usd"
      }
    ]
  },
  "status_code": 200
}
```

---

### Create Topup Checkout

```
POST /api/subscriptions/topups/checkout/
```

**Authentication:** Required (JWT)

**Request Body:**
```json
{
  "package_id": 10
}
```

**Response `200 OK`:**
```json
{
  "data": {
    "checkout_url": "https://checkout.stripe.com/pay/cs_live_topup_a1b2c3..."
  },
  "status_code": 200
}
```

---

### List Available Add-ons

```
GET /api/subscriptions/addons/available/
```

**Authentication:** Required (JWT)

**Response `200 OK`:**
```json
{
  "data": [
    {
      "id": 5,
      "type": "WHITE_LABELING",
      "name": "White Label",
      "description": "Remove 7en branding from chat widget",
      "price_monthly": "19.00",
      "price_annual": "190.00"
    },
    {
      "id": 6,
      "type": "ADD_ON_AGENT",
      "name": "Extra Agent",
      "description": "Add one additional AI agent",
      "price_monthly": "15.00",
      "price_annual": "150.00",
      "per_unit": true
    },
    {
      "id": 7,
      "type": "PREMIUM_MODELS",
      "name": "Premium Models",
      "description": "Access to GPT-4o, Claude 3.5 Sonnet, and other premium LLMs",
      "price_monthly": "29.00",
      "price_annual": "290.00"
    },
    {
      "id": 8,
      "type": "AUTO_TICKET_RESPONSE",
      "name": "Auto Ticket Response",
      "description": "AI-powered automatic ticket response drafts",
      "price_monthly": "24.00",
      "price_annual": "240.00"
    }
  ],
  "status_code": 200
}
```

---

### Get Current Add-on Subscriptions

```
GET /api/subscriptions/addons/current/
```

**Authentication:** Required (JWT)

**Response `200 OK`:**
```json
{
  "data": [
    {
      "id": 88,
      "type": "WHITE_LABELING",
      "status": "active",
      "billing_cycle": "monthly",
      "started_at": "2026-01-15T00:00:00Z",
      "next_billing_date": "2026-02-15T00:00:00Z"
    }
  ],
  "status_code": 200
}
```

---

### Subscribe to Add-on

```
POST /api/subscriptions/addons/subscribe/
```

**Authentication:** Required (JWT)

**Request Body:**
```json
{
  "addon_type": "WHITE_LABELING",
  "billing_cycle": "monthly"
}
```

| Field | Type | Required | Choices |
|---|---|---|---|
| `addon_type` | string | Yes | `AUTO_TICKET_RESPONSE`, `WHITE_LABELING`, `ADD_ON_AGENT`, `PREMIUM_MODELS` |
| `billing_cycle` | string | Yes | `monthly`, `annual` |
| `quantity` | integer | No | Only for `ADD_ON_AGENT`; default 1 |

**Response `200 OK`:**
```json
{
  "message": "Add-on subscribed successfully.",
  "data": {
    "addon_subscription_id": 88,
    "type": "WHITE_LABELING",
    "status": "active"
  },
  "status_code": 200
}
```

---

### Cancel Add-on

```
POST /api/subscriptions/addons/cancel/
```

**Authentication:** Required (JWT)

**Request Body:**
```json
{
  "addon_type": "WHITE_LABELING"
}
```

**Response `200 OK`:**
```json
{
  "message": "Add-on cancelled.",
  "status_code": 200
}
```

---

### Update Add-on Quantity

```
PATCH /api/subscriptions/addons/quantity/
```

Used to increase or decrease the quantity of the `ADD_ON_AGENT` add-on.

**Authentication:** Required (JWT)

**Request Body:**
```json
{
  "addon_type": "ADD_ON_AGENT",
  "quantity": 3
}
```

**Response `200 OK`:**
```json
{
  "message": "Add-on quantity updated.",
  "status_code": 200
}
```

---

### List Allowed Embed Domains

```
GET /api/subscriptions/domains/
```

**Authentication:** Required (JWT)

**Response `200 OK`:**
```json
{
  "data": [
    { "id": 1, "domain": "https://acme.com" },
    { "id": 2, "domain": "https://shop.acme.com" }
  ],
  "status_code": 200
}
```

---

### Add Embed Domain

```
POST /api/subscriptions/domains/add/
```

**Authentication:** Required (JWT)

**Request Body:**
```json
{
  "domain": "https://partner.acme.com"
}
```

**Response `201 Created`:**
```json
{
  "data": { "id": 3, "domain": "https://partner.acme.com" },
  "status_code": 201
}
```

**Error Responses:**
- `400` — Domain limit reached for current plan (check `allowed_domains_to_embed` on plan)

---

### Delete Embed Domain

```
DELETE /api/subscriptions/domains/{domain_id}/
```

**Authentication:** Required (JWT)

**Response `204 No Content`**

---

### Stripe Webhook

```
POST /api/subscriptions/webhook/
```

Receives Stripe events. Signature verified via `STRIPE_WEBHOOK_SECRET`. **For Stripe only — do not call directly.**

Handled events: `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`, `invoice.payment_failed`, `invoice.payment_succeeded`.

All events are idempotency-checked against the `StripeEvent` table before processing.

---

## API Key Management

Requires the **API Access** add-on subscription.

### List API Keys

```
GET /api/v1/keys/
```

**Authentication:** Required (JWT) · Permission: `MANAGE_API_KEY`

**Response `200 OK`:**
```json
{
  "data": {
    "api_keys": [
      {
        "id": 7,
        "name": "Production Integration",
        "masked_key": "*****e9f2a",
        "created_at": "2026-01-15T08:00:00Z",
        "expires": "2027-01-15T08:00:00Z"
      }
    ],
    "has_api_key": true,
    "count": 1
  },
  "status_code": 200
}
```

---

### Create API Key

```
POST /api/v1/keys/
```

> **Important:** The raw API key is returned **only once** at creation. Store it securely — it cannot be retrieved again.

**Authentication:** Required (JWT) · Permission: `MANAGE_API_KEY`

**Request Body:**
```json
{
  "name": "Production Integration",
  "expires_in": "365d"
}
```

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | string | No | Human-readable label |
| `expires_in` | string | No | Expiry duration: `30d`, `90d`, `365d`, or omit for no expiry |

**Response `201 Created`:**
```json
{
  "data": {
    "id": 7,
    "name": "Production Integration",
    "raw_key": "7en_live_a1b2c3d4e5f6g7h8i9j0klmnopqrstuvwxyz",
    "masked_key": "*****rstuvwxyz",
    "created_at": "2026-02-26T10:00:00Z",
    "expires": "2027-02-26T10:00:00Z"
  },
  "status_code": 201
}
```

**Error Responses:**
- `400` — `api_access_not_enabled`: Plan does not include API access
- `400` — `api_key_creation_disabled_payment_failure`: Payment failure older than 48 hours

---

### Refresh API Key

```
POST /api/v1/keys/{id}/refresh/
```

Rotates the API key. The **old key remains valid for a 30-minute grace period** to allow zero-downtime rotation.

**Authentication:** Required (JWT) · Permission: `MANAGE_API_KEY`

**Response `200 OK`:**
```json
{
  "data": {
    "id": 7,
    "raw_key": "7en_live_newkeyhere_abc123xyz...",
    "expires": "2027-02-26T10:00:00Z",
    "grace_period_until": "2026-02-26T10:30:00Z"
  },
  "status_code": 200
}
```

---

### Delete API Key

```
DELETE /api/v1/keys/{id}/
```

**Authentication:** Required (JWT) · Permission: `MANAGE_API_KEY`

**Response `204 No Content`**

**Side Effects:** Starts a 30-minute grace period before full invalidation.

---

### API Key Audit Log

```
GET /api/v1/audit-log/
```

**Authentication:** Required (JWT) · Permission: `MANAGE_API_KEY`

**Response `200 OK`:**
```json
{
  "data": [
    {
      "id": 301,
      "timestamp": "2026-02-26T10:00:00Z",
      "event_type": "create",
      "entity_id": "7",
      "user": "sarah@acme.com",
      "ip_address": "203.0.113.45",
      "status": "success"
    },
    {
      "id": 300,
      "timestamp": "2026-02-20T08:30:00Z",
      "event_type": "refresh",
      "entity_id": "7",
      "user": "sarah@acme.com",
      "ip_address": "203.0.113.45",
      "status": "success"
    }
  ],
  "status_code": 200
}
```

---

## Integrations Status

### Get All Integrations Status

```
GET /api/integrations-status/
```

Returns the connection status of all CRM, ticketing, and channel integrations for the authenticated user's team.

**Authentication:** Required (JWT)

**Response `200 OK`:**
```json
{
  "data": {
    "freshdesk": { "connected": true, "domain": "acme.freshdesk.com" },
    "zendesk": { "connected": false },
    "zoho": { "connected": true, "org": "Acme Corp" },
    "hubspot": { "connected": false },
    "salesforce": { "connected": false },
    "slack": { "connected": true, "workspace": "Acme Corp Slack" },
    "whatsapp": { "connected": true, "phone": "+14155559876" },
    "google_drive": { "connected": false }
  },
  "status_code": 200
}
```

---

## Slack Integration

### List Slack Integrations

```
GET /api/slack/
```

**Authentication:** Required (JWT) · Permission: `VIEW_INTEGRATIONS`

**Response `200 OK`:** Array of Slack workspace integrations for the team.

---

### Initiate Slack OAuth

```
GET /api/slack/oauth/init/
```

Returns the Slack OAuth authorization URL to start the installation flow.

**Authentication:** Required (JWT)

**Response `200 OK`:**
```json
{
  "data": {
    "auth_url": "https://slack.com/oauth/v2/authorize?client_id=..."
  },
  "status_code": 200
}
```

---

### Slack OAuth Callback

```
GET /api/slack/oauth/callback/?code=abc123&state=xyz
```

Handles the OAuth redirect from Slack. Stores Fernet-encrypted credentials.

**Authentication:** None (OAuth flow redirect from Slack)

**Side Effects:** Creates `SlackIntegration` record. Sets up event subscriptions for the workspace.

---

## WhatsApp Integration

### WhatsApp Webhook — Meta Verification

```
GET /api/chat/whatsapp/webhook/?hub.mode=subscribe&hub.verify_token=<token>&hub.challenge=<challenge>
```

Meta's webhook verification handshake. Returns `hub.challenge` if verify token matches `WHATSAPP_VERIFY_TOKEN`.

**Authentication:** None (Meta verification)

---

### WhatsApp Webhook — Incoming Messages

```
POST /api/chat/whatsapp/webhook/
```

Receives incoming WhatsApp messages from Meta. HMAC signature is verified via `X-Hub-Signature-256`.

**Authentication:** Meta HMAC signature

**Side Effects:** Creates or continues a `ChatSession`, creates a `ChatMessage`, triggers AI response generation.

---

### Create WhatsApp Message Template

```
POST /api/chat/whatsapp/template-create/
```

**Authentication:** Required (JWT)

**Request Body:**
```json
{
  "name": "order_confirmation",
  "language": "en_US",
  "category": "MARKETING",
  "components": [
    {
      "type": "BODY",
      "text": "Your order #{{1}} has been confirmed! Expected delivery: {{2}}."
    }
  ]
}
```

**Response `201 Created`:**
```json
{
  "data": {
    "template_id": "wa_template_abc123",
    "name": "order_confirmation",
    "status": "PENDING"
  },
  "status_code": 201
}
```

---

### List WhatsApp Templates

```
GET /api/chat/whatsapp/template-list/
```

**Authentication:** Required (JWT)

**Response `200 OK`:** Array of Meta-approved message templates for the connected WABA account.

---

## Ticketing — Freshdesk & Zendesk

### List Ticketing Integrations

```
GET /api/ticketing/integrations/
```

**Authentication:** Required (JWT) · Permission: `VIEW_INTEGRATIONS`

**Response `200 OK`:**
```json
{
  "data": [
    {
      "id": 14,
      "provider": "freshdesk",
      "team": 12,
      "webhook_path": "fd_wh_abc123xyz",
      "is_active": true,
      "created_at": "2025-12-01T09:00:00Z"
    }
  ],
  "status_code": 200
}
```

---

### Create Freshdesk Integration

```
POST /api/ticketing/freshdesk-integrations/
```

**Authentication:** Required (JWT) · Permission: `MANAGE_INTEGRATIONS`

**Request Body:**
```json
{
  "domain": "acme.freshdesk.com",
  "api_key": "xxxxxxxxxxxxxxxxxxx"
}
```

**Response `201 Created`:**
```json
{
  "data": {
    "id": 14,
    "provider": "freshdesk",
    "webhook_path": "fd_wh_abc123xyz",
    "webhook_url": "https://api.7en.ai/api/ticketing/webhook/fd_wh_abc123xyz/"
  },
  "status_code": 201
}
```

**Side Effects:** Stores API key Fernet-encrypted. Syncs agents with Freshdesk. Generates a unique `webhook_path` — configure this as a webhook URL in your Freshdesk admin panel to receive ticket updates.

---

### Unlink Freshdesk

```
POST /api/freshdesk/unlink/
```

**Authentication:** Required (JWT) · Permission: `MANAGE_INTEGRATIONS`

**Response `200 OK`:**
```json
{
  "message": "Freshdesk integration removed.",
  "status_code": 200
}
```

---

### Create Zendesk Integration

```
POST /api/ticketing/zendesk-integrations/
```

**Authentication:** Required (JWT) · Permission: `MANAGE_INTEGRATIONS`

**Request Body:**
```json
{
  "domain": "acme.zendesk.com",
  "email": "admin@acme.com",
  "api_token": "xxxxxxxxxxxxxxxxxxx"
}
```

**Response `201 Created`:** Same structure as Freshdesk, with `"provider": "zendesk"`.

---

### Ticketing Webhook Receiver

```
POST /api/ticketing/webhook/{webhook_path}/
```

Receives ticket update events from Freshdesk or Zendesk. HMAC signature is verified per-provider.

**Authentication:** Provider HMAC signature (automatic — do not call directly)

**Path Parameters:**

| Parameter | Type | Description |
|---|---|---|
| `webhook_path` | string | Unique path assigned at integration creation |

---

## Ticketing — Zoho

### Initiate Zoho OAuth

```
GET /api/zoho/auth/
```

**Authentication:** Required (JWT)

**Response:** Redirects browser to Zoho Desk authorization page.

---

### Zoho OAuth Callback

```
GET /api/zoho/callback/?code=abc123
```

**Authentication:** None (OAuth redirect)

**Side Effects:** Creates `ZohoIntegration` with Fernet-encrypted tokens.

---

### Zoho Integration Status

```
GET /api/zoho/status/
```

**Authentication:** Required (JWT)

**Response `200 OK`:**
```json
{
  "data": {
    "connected": true,
    "org": "Acme Corp",
    "org_id": "738291645"
  },
  "status_code": 200
}
```

---

### List Zoho Organizations

```
GET /api/zoho/orgs/
```

**Authentication:** Required (JWT)

**Response `200 OK`:**
```json
{
  "data": [
    { "id": "738291645", "name": "Acme Corp" }
  ],
  "status_code": 200
}
```

---

### List Zoho Departments

```
GET /api/zoho/departments/
```

**Authentication:** Required (JWT)

**Response `200 OK`:** Array of department objects from Zoho Desk.

---

### Create Zoho Ticket

```
POST /api/zoho/create-ticket/
```

**Authentication:** Required (JWT)

**Request Body:**
```json
{
  "session_id": "f9e2d3c4-b5a6-7890-cdef-1234567890ab",
  "subject": "Unable to login to account",
  "department_id": "dept_456",
  "contact_id": "contact_789",
  "priority": "High"
}
```

**Response `201 Created`:**
```json
{
  "data": {
    "ticket_id": "ZOHO-18473",
    "ticket_url": "https://desk.zoho.com/agent/acmecorp/tickets/18473"
  },
  "status_code": 201
}
```

---

### Update Zoho Config

```
POST /api/zoho/update-config/
```

Updates the Zoho integration configuration (e.g. default department, contact mapping).

**Authentication:** Required (JWT)

---

### Unlink Zoho

```
POST /api/zoho/unlink/
```

**Authentication:** Required (JWT)

**Response `200 OK`:**
```json
{
  "message": "Zoho integration removed.",
  "status_code": 200
}
```

---

## Ticketing — HubSpot

### Initiate HubSpot OAuth

```
GET /api/hubspot/auth/
```

**Authentication:** Required (JWT)

**Response:** Redirects browser to HubSpot authorization page.

---

### HubSpot OAuth Callback

```
GET /api/hubspot/callback/?code=abc123
```

**Authentication:** None (OAuth redirect)

**Side Effects:** Creates `HubSpotIntegration` with Fernet-encrypted tokens.

---

### HubSpot Integration Status

```
GET /api/hubspot/status/
```

**Authentication:** Required (JWT)

**Response `200 OK`:**
```json
{
  "data": {
    "connected": true,
    "portal_id": "29473841",
    "account_name": "Acme Corp"
  },
  "status_code": 200
}
```

---

### List HubSpot Pipelines

```
GET /api/hubspot/pipelines/
```

**Authentication:** Required (JWT)

**Response `200 OK`:**
```json
{
  "data": [
    {
      "id": "pipeline_abc",
      "label": "Support Pipeline",
      "stages": [
        { "id": "stage_1", "label": "New" },
        { "id": "stage_2", "label": "In Progress" },
        { "id": "stage_3", "label": "Closed" }
      ]
    }
  ],
  "status_code": 200
}
```

---

### Create HubSpot Ticket

```
POST /api/hubspot/ticket/create/
```

**Authentication:** Required (JWT)

**Request Body:**
```json
{
  "session_id": "f9e2d3c4-b5a6-7890-cdef-1234567890ab",
  "subject": "Cannot access billing portal",
  "pipeline": "pipeline_abc",
  "stage": "stage_1",
  "priority": "HIGH"
}
```

**Response `201 Created`:**
```json
{
  "data": {
    "ticket_id": "hs_ticket_9384721",
    "ticket_url": "https://app.hubspot.com/contacts/29473841/ticket/9384721"
  },
  "status_code": 201
}
```

---

### HubSpot Webhook

```
POST /api/hubspot/webhook/
```

Receives deal and ticket update events from HubSpot. Signature verified using `HUBSPOT_DEVELOPER_API_KEY`. **For HubSpot only — do not call directly.**

---

### Unlink HubSpot

```
POST /api/hubspot/unlink/
```

**Authentication:** Required (JWT)

**Response `200 OK`:**
```json
{
  "message": "HubSpot integration removed.",
  "status_code": 200
}
```

---

## Ticketing — Salesforce

### Initiate Salesforce OAuth

```
GET /api/salesforce/auth/
```

**Authentication:** Required (JWT)

**Response:** Redirects browser to Salesforce authorization page.

---

### Salesforce OAuth Callback

```
GET /api/salesforce/callback/?code=abc123
```

**Authentication:** None (OAuth redirect)

**Side Effects:** Creates `SalesforceIntegration` with Fernet-encrypted tokens and instance URL.

---

### Salesforce Integration Status

```
GET /api/salesforce/status/
```

**Authentication:** Required (JWT)

**Response `200 OK`:**
```json
{
  "data": {
    "connected": true,
    "instance_url": "https://acme.my.salesforce.com",
    "org_id": "00D1234567890ABC"
  },
  "status_code": 200
}
```

---

### Get Salesforce Config

```
GET /api/salesforce/config/
```

**Authentication:** Required (JWT)

**Response `200 OK`:** Current Salesforce integration settings (default object type, field mappings).

---

### Create Salesforce Case

```
POST /api/salesforce/case/create/
```

**Authentication:** Required (JWT)

**Request Body:**
```json
{
  "session_id": "f9e2d3c4-b5a6-7890-cdef-1234567890ab",
  "subject": "Product defect report",
  "description": "Customer reported issue with checkout flow on mobile.",
  "priority": "High",
  "origin": "Chat"
}
```

**Response `201 Created`:**
```json
{
  "data": {
    "case_id": "5001234567ABCDEF",
    "case_number": "00001042",
    "case_url": "https://acme.my.salesforce.com/5001234567ABCDEF"
  },
  "status_code": 201
}
```

---

### Unlink Salesforce

```
POST /api/salesforce/unlink/
```

**Authentication:** Required (JWT)

**Response `200 OK`:**
```json
{
  "message": "Salesforce integration removed.",
  "status_code": 200
}
```

---

## Platform Admin Endpoints

> Restricted to users with `MANAGE_ADMIN` permission or superadmin status.

### List Custom Team Roles

```
GET /api/admin/custom-team-roles/
```

**Authentication:** Required (JWT) · Permission: `MANAGE_ADMIN`

**Response `200 OK`:**
```json
{
  "data": [
    {
      "id": 3,
      "name": "Support Agent",
      "permissions": ["VIEW_AGENTS", "VIEW_CHAT", "MANAGE_CHAT"]
    },
    {
      "id": 4,
      "name": "Knowledge Manager",
      "permissions": ["VIEW_AGENTS", "VIEW_KNOWLEDGE", "MANAGE_KNOWLEDGE", "TRAIN_AGENT"]
    }
  ],
  "status_code": 200
}
```

---

### Create Custom Team Role

```
POST /api/admin/custom-team-roles/
```

**Authentication:** Required (JWT) · Permission: `MANAGE_ADMIN`

**Request Body:**
```json
{
  "name": "Billing Manager",
  "permissions": ["VIEW_BILLING", "MANAGE_BILLING"]
}
```

**Available permission codes:**

| Code | Description |
|---|---|
| `VIEW_USERS` | View team members list |
| `MANAGE_USERS` | Invite/remove members, change roles |
| `SEND_INVITE` | Send team invitations |
| `VIEW_AGENTS` | View agent list and details |
| `MANAGE_AGENTS` | Create, edit, and delete agents |
| `VIEW_KNOWLEDGE` | View knowledge sources |
| `MANAGE_KNOWLEDGE` | Add/remove/update knowledge sources |
| `TRAIN_AGENT` | Trigger agent retraining |
| `VIEW_CHAT` | View chat sessions and messages |
| `MANAGE_CHAT` | Resolve, delete, and export conversations |
| `VIEW_ANALYTICS` | View dashboard analytics |
| `VIEW_BILLING` | View invoices and subscription details |
| `MANAGE_BILLING` | Upgrade, cancel, and manage subscriptions |
| `VIEW_SETTINGS` | View platform settings |
| `MANAGE_SETTINGS` | Edit platform settings |
| `CONFIGURE_BUSINESS` | Configure business profile and branding |
| `VIEW_INTEGRATIONS` | View integrations connection status |
| `MANAGE_INTEGRATIONS` | Connect and disconnect integrations |
| `MANAGE_API_KEY` | Create, refresh, and delete API keys |
| `MANAGE_ADMIN` | Manage roles, permissions, and team structure |

**Response `201 Created`:**
```json
{
  "data": {
    "id": 5,
    "name": "Billing Manager",
    "permissions": ["VIEW_BILLING", "MANAGE_BILLING"]
  },
  "status_code": 201
}
```

---

### System Audit Logs

```
GET /api/admin/logs/
```

**Authentication:** Required (JWT) · Permission: `MANAGE_ADMIN`

**Query Parameters:**

| Parameter | Type | Description |
|---|---|---|
| `event_type` | string | e.g. `agent.created`, `user.login`, `api_key.create` |
| `user_id` | UUID | Filter by acting user |
| `from_date` | date | ISO 8601 start date |
| `to_date` | date | ISO 8601 end date |

**Response `200 OK`:**
```json
{
  "data": {
    "count": 1024,
    "results": [
      {
        "id": 8847,
        "timestamp": "2026-02-26T09:15:00Z",
        "event_type": "agent.created",
        "user": "sarah@acme.com",
        "details": {
          "agent_id": "b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654",
          "agent_name": "Support Bot"
        },
        "ip_address": "203.0.113.45"
      }
    ]
  },
  "status_code": 200
}
```

---

### Platform Settings

```
GET /api/admin/settings/
PATCH /api/admin/settings/
```

Singleton settings record (always ID=1).

**Authentication:** Required (JWT) · Permission: `MANAGE_SETTINGS`

**Response `200 OK`:**
```json
{
  "data": {
    "platform_name": "7en",
    "support_email": "support@7en.ai",
    "default_language": "en",
    "maintenance_mode": false
  },
  "status_code": 200
}
```

---

### Billing Configuration

```
GET /api/admin/billing-config/
PATCH /api/admin/billing-config/
```

**Authentication:** Required (JWT) · Superadmin only

**Side Effects on PATCH:** Syncs billing changes to Stripe products and prices via `transaction.on_commit`.

---

### Provider Configurations

```
GET /api/admin/provider-configs/
POST /api/admin/provider-configs/
PATCH /api/admin/provider-configs/{id}/
```

Manages AI provider API keys (stored Fernet-encrypted). Keys are returned **masked** in list/retrieve.

**Authentication:** Required (JWT) · Permission: `MANAGE_ADMIN`

---

## Settings Endpoints

### Get / Update User Settings

```
GET /api/settings/
PATCH /api/settings/
```

Per-user global settings applied as defaults to newly created agents.

**Authentication:** Required (JWT)

**Response `200 OK`:**
```json
{
  "data": {
    "preferred_model": "gpt-4o-mini",
    "max_token_length": 1024,
    "temperature": 0.7,
    "language": "en"
  },
  "status_code": 200
}
```

**PATCH Request Body:** Any subset of the fields above.

---

### Get / Set Default Ticketing Provider

```
GET /api/default-ticketing-provider/
PATCH /api/default-ticketing-provider/
```

**Authentication:** Required (JWT)

**PATCH Request Body:**
```json
{
  "provider": "freshdesk"
}
```

**Response `200 OK`:**
```json
{
  "data": {
    "provider": "freshdesk"
  },
  "status_code": 200
}
```

---

## Public Endpoints

### Chatbot Widget Configuration

```
GET /api/chatbot-config?agentId={agent_id}
```

Returns the public configuration for the embedded `agent.js` chat widget. Called automatically by the widget on load.

**Authentication:** None

**Query Parameters:**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `agentId` | UUID | Yes | Agent ID to configure widget for |

**Request Headers for domain validation:**

The endpoint reads `HTTP_ORIGIN` or `HTTP_REFERER` to validate against the agent owner's allowed domains list.

**Response `200 OK`:**
```json
{
  "message": "Details found",
  "agentId": "b5f7c8d9-e0a1-4b2c-9d3e-fedcba987654",
  "primaryColor": "#2563EB",
  "secondaryColor": "#DBEAFE",
  "fontFamily": "Inter",
  "chatbotName": "Acme Support",
  "welcomeMessage": "Hi! How can I help you today?",
  "buttonText": "Chat with us",
  "position": "bottom-right",
  "suggestions": ["Reset password", "Track my order", "Contact billing"],
  "avatarUrl": "https://api.7en.ai/media/agents/avatar_support_bot.jpg",
  "privacyUrl": "https://acme.com/privacy",
  "gdprSettings": {
    "data_retention_days": 90,
    "data_retention_message": "Your chat data is retained for 90 days.",
    "gdpr_message_display": true
  },
  "source": "website",
  "is_white_label": false,
  "followupCount": 2,
  "followupInterval": 300,
  "followupMessages": ["Still need help?", "Ask me anything!"]
}
```

**Error Responses:**
- `403` — Request origin not in the agent owner's allowed domains list
- `404` — `agentId` not found, or no `agentId` provided

---

## WebSocket Endpoints

All WebSocket connections are served by Django Channels over ASGI. JWT authentication is enforced via `AuthMiddlewareStack`.

**Connection pattern:**
```
wss://api.7en.ai/ws/{path}/?token=<access_token>
```

Pass the JWT access token as a `token` query parameter (browsers cannot send custom headers in WebSocket handshakes).

---

### Customer Chat — Website Widget

```
wss://api.7en.ai/ws/chat/{agent_id}/
```

The primary endpoint used by the embedded `agent.js` widget for real-time customer conversations.

**Authentication:** Not required (public widget)

**Path Parameters:**

| Parameter | Type | Description |
|---|---|---|
| `agent_id` | UUID | Agent to handle the conversation |

**Client → Server:**

```json
{
  "type": "chat.message",
  "message": "Hi, I need help with my order",
  "session_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "metadata": {
    "full_name": "Marcus Johnson",
    "email": "marcus@example.com"
  }
}
```

**Server → Client:**

```json
{ "type": "chat.typing", "sender": "agent" }
```
```json
{ "type": "chat.message", "message": "Of course! Please provide your order number.", "sender": "agent", "timestamp": "2026-02-26T09:15:05Z" }
```
```json
{ "type": "chat.session.updated", "status": "resolved" }
```

**Side Effects:** Each AI response deducts 1 reply credit from the agent owner's balance. Triggers auto-topup if `auto_topup_enabled` and credits fall below threshold.

---

### API-Authenticated Chat

```
wss://api.7en.ai/ws/api/chat/{agent_id}/
```

For programmatic integrations using API keys.

**Authentication:** Required — pass API key as `token` query parameter.

Same message/event format as the website widget endpoint.

---

### Chat Playground (Dashboard Testing)

```
wss://api.7en.ai/ws/chat-playground/{agent_id}/{chat_name}/
```

Used in the 7en dashboard for testing agent behavior before going live.

**Authentication:** Required (JWT)

**Note:** Does **not** consume reply credits.

---

### Admin — Chat Session Events

```
wss://api.7en.ai/ws/chat/sessions/
```

Real-time event stream for all chat sessions. Powers the admin dashboard inbox.

**Authentication:** Required (JWT) · Permission: `VIEW_CHAT`

**Server → Client Events:**

```json
{
  "type": "session.new",
  "session": {
    "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "customer": { "full_name": "Marcus Johnson", "email": "marcus@example.com" },
    "agent": { "id": "b5f7c8d9...", "name": "Support Bot" },
    "source": "whatsapp",
    "created_at": "2026-02-26T09:15:00Z"
  }
}
```

```json
{
  "type": "session.updated",
  "session_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "status": "resolved"
}
```

---

### Admin — Chat Messages (Live)

```
wss://api.7en.ai/ws/chat/messages/{session_id}/
```

Real-time message stream for a specific session. Used in the admin conversation detail view.

**Authentication:** Required (JWT) · Permission: `VIEW_CHAT`

**Server → Client:**

```json
{
  "type": "chat.message",
  "message": {
    "id": "m1a2b3c4-d5e6-7890-fghi-jklm12345678",
    "content": "I cannot find my invoice from last month.",
    "sender": "customer",
    "timestamp": "2026-02-26T09:16:00Z"
  }
}
```

**Client → Server (agent intervention / human takeover):**

```json
{
  "type": "agent.reply",
  "message": "I can look that up for you right away. What email is your account registered under?"
}
```

---

## Outbound Webhook Callbacks

These are webhooks that 7en **sends to external systems**. Documented for integrators configuring receiver endpoints.

### Ticketing Provider Callbacks

When a ticket is updated in Freshdesk or Zendesk, configure their webhook to call back to:

```
POST https://api.7en.ai/api/ticketing/webhook/{webhook_path}/
```

The `webhook_path` is returned when creating the integration. 7en verifies HMAC signatures and updates the linked `ChatSession` accordingly (e.g. marks session `resolved` when the ticket is closed in Freshdesk).

---

### Stripe Events

Stripe sends all billing events to:

```
POST https://api.7en.ai/api/subscriptions/webhook/
```

Configure this URL in your Stripe webhook settings. All events are idempotency-checked via the `StripeEvent` table before processing.

---

### HubSpot Events

HubSpot sends deal and ticket update events to:

```
POST https://api.7en.ai/api/hubspot/webhook/
```

---

### WhatsApp (Meta) Incoming Messages

All incoming WhatsApp messages arrive at:

```
POST https://api.7en.ai/api/chat/whatsapp/webhook/
```

Configure this as the webhook callback URL in your Meta Developer App settings. HMAC signature verification uses `WHATSAPP_APP_SECRET` (same as `FACEBOOK_APP_SECRET`).

---

*Endpoints marked as internal (superadmin dashboard, provider usage tracking, Zapier auth) are not intended for third-party integration and may change without notice.*
