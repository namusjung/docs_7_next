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
--header 'Authorization: Api-Key {YOUR_API_KEY}'

```

### Error Responses

| Status | Description |
|--------|-------------|
| `401` | The API key is required |
| `404` | API key expired |
| `403` | Invalid, or revoked API key |
| `429` | Rate limit exceeded |
| `500` | Server error |

##### 401
```json
{
    "error": {
        "code": "missing_api_key",
        "message": "The API key is required.",
        "status": 401
    }
}
```
##### 404
```json
{
    "error": {
        "code": "api_key_expired",
        "message": "API key expired.",
        "status": 404
    }
}

```

##### 403
```json
{
    "error": {
        "code": "invalid_api_key",
        "message": "The provided API key is invalid or has been revoked.",
        "status": 403
    }
}

```

##### 429
```json
{
    "error": {
        "code": "rate_limit_exceeded",
        "message": "Rate limit exceeded: 500 requests per day.",
        "status": 429
    }
}
```

##### 500
```json
{
    "error": {
        "code": "server_error",
        "message": "Server error during API key check.",
        "status": 500
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
