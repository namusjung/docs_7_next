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


## Error Responses

##### 403 Unauthorized — Missing or invalid or expired API key
```json
{
    "message": "Invalid or inactive API key.",
    "status": "error",
    "error": {
        "code": "error",
        "message": "Invalid or inactive API key.",
        "status": 403,
        "fields": {
            "general": [
                "Invalid or inactive API key."
            ]
        }
    }
}
```

## Security Best Practices

- **Never hardcode keys** in source code. Use environment variables or a secrets manager.
- **Rotate keys regularly** — especially after any suspected exposure.
- **Use separate keys** per environment (development, staging, production) so you can revoke one without affecting others.
