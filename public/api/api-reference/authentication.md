---
type: api
title: Authentication
order: 2
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "API Reference", href: "/api/api-reference/introduction" }
  - { label: "Authentication" }
---

# Authentication

All 7en API endpoints require authentication via an API key. Requests without a valid key are rejected with a `401 Unauthorized` response.

---

## Obtaining an API Key

1. Log in to the [7en Dashboard](https://app.7en.ai)
2. Navigate to **Settings** → **API Keys**
3. Click **Create API Key**
4. Copy and store the key securely — it will not be shown again

> **Keep your API key secret.** It grants full access to your workspace. Never expose it in client-side code, browser requests, public repositories, or `.env` files committed to version control.

---

## Using Your API Key

Include your API key in the `Authorization` header of every request:

```
Authorization: Api-Key YOUR_API_KEY
```

### Example

{% request title="Authenticated request" %}
```json
[
  {
    "language": "curl",
    "code": "curl -X GET 'https://{% $api.base_url %}v1/agents/' \\\n  -H 'Authorization: {% $api.key %}' \\\n  -H 'Content-Type: application/json'"
  },
  {
    "language": "javascript",
    "code": "const res = await fetch('https://{% $api.base_url %}v1/agents/', {\n  method: 'GET',\n  headers: {\n    'Authorization': '{% $api.key %}',\n    'Content-Type': 'application/json'\n  }\n});"
  },
  {
    "language": "python",
    "code": "import requests\n\nresponse = requests.get(\n    'https://{% $api.base_url %}v1/agents/',\n    headers={\n        'Authorization': '{% $api.key %}',\n        'Content-Type': 'application/json'\n    }\n)"
  }
]
```
{% /request %}

---

## Rate Limiting

The API enforces rate limits per API key. Limits vary by plan:

| Plan | Limit |
|---|---|
| Free | 100 requests / minute |
| Pro | 1,000 requests / minute |
| Enterprise | 10,000 requests / minute |

Every response includes rate limit headers so you can track your usage:

| Header | Description |
|---|---|
| `X-RateLimit-Limit` | Maximum requests allowed in the current window |
| `X-RateLimit-Remaining` | Requests remaining in the current window |
| `X-RateLimit-Reset` | Unix timestamp (ms) when the window resets |
| `Retry-After` | Seconds to wait before retrying (only on `429` responses) |

### Handling rate limit errors

When you exceed the limit, the API returns `429 Too Many Requests`. Use the `Retry-After` header to determine how long to wait before retrying:

{% request title="Retry after rate limit" %}
```json
[
  {
    "language": "javascript",
    "code": "async function fetchWithRetry(url, options, retries = 3) {\n  const res = await fetch(url, options);\n\n  if (res.status === 429 && retries > 0) {\n    const retryAfter = parseInt(res.headers.get('Retry-After') || '1', 10);\n    await new Promise(r => setTimeout(r, retryAfter * 1000));\n    return fetchWithRetry(url, options, retries - 1);\n  }\n\n  return res;\n}"
  },
  {
    "language": "python",
    "code": "import time\nimport requests\n\ndef fetch_with_retry(url, headers, retries=3):\n    for attempt in range(retries):\n        response = requests.get(url, headers=headers)\n        if response.status_code == 429:\n            retry_after = int(response.headers.get('Retry-After', 1))\n            time.sleep(retry_after)\n            continue\n        return response\n    return response"
  }
]
```
{% /request %}

---

## Error Responses

##### 401 Unauthorized — Missing or invalid API key
```json
{
  "error": {
    "code": "authentication_failed",
    "message": "Authentication failed.",
    "status": 401,
    "fields": []
  }
}
```

##### 401 Unauthorized — Expired or revoked key
```json
{
  "error": {
    "code": "invalid_api_key",
    "message": "The provided API key is invalid or has been revoked.",
    "status": 401,
    "fields": []
  }
}
```

##### 403 Forbidden — Plan restriction
```json
{
  "error": {
    "code": "plan_restriction",
    "message": "Your current plan does not have access to this resource.",
    "status": 403,
    "fields": []
  }
}
```

##### 429 Too Many Requests
```json
{
  "error": {
    "code": "rate_limit_exceeded",
    "message": "Too many requests. Please wait before retrying.",
    "status": 429,
    "fields": []
  }
}
```

---

## Debugging

Every API response includes an `x-request-id` header with a unique identifier for that request. Include this value when contacting support to help diagnose issues quickly.

```
x-request-id: req_a1b2c3d4e5f6
```

---

## Security Best Practices

- **Never hardcode keys** in source code. Use environment variables or a secrets manager.
- **Rotate keys regularly** — especially after any suspected exposure.
- **Use separate keys** per environment (development, staging, production) so you can revoke one without affecting others.
- **Restrict key scope** where possible — create read-only keys for services that only need to read data.
- **Monitor usage** in the dashboard for unexpected spikes that may indicate a compromised key.
