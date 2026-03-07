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

The 7en API uses API key authentication. Keys grant read and write access across all available APIs in your workspace. You can create and maintain multiple active keys simultaneously to support seamless rotation.

---

{% section id="api-key" title="Generate an API Key" %}

1. Log in to the [7en Dashboard](https://app.7en.ai)
2. Navigate to **Settings** → **API Keys**
![API Keys](/img/quick-start/api-key.png)
3. Click **Create API Key**
![Create API Key](/img/quick-start/create-api-key.png)
4. Then copy and store it securely
![Save API Key](/img/quick-start/save-api-key.png)

{% /section %}

{% callout type="warning" title="Attention" %}
Your API key is displayed once at creation. If you lose access to it, you will need to create a new one. Keep your key secret — it grants full access to your workspace.
{% /callout %}


---

{% section id="refresh-api-key" title="Refresh an API Key" %}

If your API key is compromised or you need to rotate it, you can refresh it. A new key will be generated and the old key will be invalidated.

1. Click refresh button in the **Actions** column. 
![Refresh button](/img/quick-start/refresh-button.png)
2. Set expiration and refresh the API Key
![Refresh API Key](/img/quick-start/refresh-api-key.png)

{% /section %}

---

{% section id="delete-api-key" title="Delete an API Key" %}

If your API key is compromised or you need to revoke it, you can delete it. A new key will be generated and the old key will be invalidated.

1. Click delete button in the **Actions** column. 
![Delete button](/img/quick-start/refresh-button.png)
2. Confirm deletion
![Delete API Key](/img/quick-start/delete-key.png)

{% /section %}

---

{% section id="authenticate" title="Authenticate your requests" %}

To authenticate your requests, you have to send your API key in the `Authorization` header in all requests to the API. Without it, your requests will fail.

{% parameter-list title="Request Header" %}
```
[
  {
    "name": "Authorization",
    "type": "api key",
    "required": true,
    "description": "Your 7en API key. Example: Api-Key 43NKLN3LKN4nlkn"
  }
]
```
{% /parameter-list %}

### Example of request

```json

curl --location '{base_url}/api/v1/agents/' \
--header 'Authorization: Api-Key {YOUR_API_TOKEN}'

```

### Error Responses

| Status | Description |
|--------|-------------|
| `401` | Invalid or missing Authorization header |
| `429` | API key expired |
| `403` | Missing, invalid, or revoked API key |
| `500` | Rate limit exceeded |




```json
//If the authorization header is missing
{
    "message": "No or missing Authorization header.",
    "status": "error",
    "error": {
        "code": "missing_authorization_header",
        "message": "No or missing Authorization header.",
        "status": 401,
        "fields": {
            "general": [
                "No or missing Authorization header."
            ]
        }
    }
}

//If the API key is expired
{
    "message": "API key expired.",
    "status": "error",
    "error": {
        "code": "api_key_expired",
        "message": "API key expired.",
        "status": 429,
        "fields": {
            "api_key": [
                "This API key has expired."
            ]
        }
    }
}

//If the API key is invalid or inactive
{
    "message": "Invalid or inactive API key.",
    "status": "error",
    "error": {
        "code": "invalid_or_inactive_api_key",
        "message": "Invalid or inactive API key.",
        "status": 403,
        "fields": {
            "general": [
                "Invalid or inactive API key."
            ]
        }
    }
}

//If the API rate limit is exceeded
{
    "message": "An unexpected error occurred",
    "status": "error",
    "error": {
        "code": "server_error",
        "message": "An unexpected error occurred",
        "status": 500,
        "fields": {
            "general": [
                "Rate limit exceeded: 500 requests per day."
            ]
        }
    }
}
```
{% /section %}
---

## Security Best Practices

- **Never hardcode keys** in source code. Use environment variables or a secrets manager.
- **Rotate keys regularly** — especially after any suspected exposure.
- **Limit key scope** — use separate keys per environment (development, staging, production) so you can revoke one without affecting others.
- **Never expose keys client-side** — do not include API keys in browser requests, public repositories, or `.env` files committed to version control.
