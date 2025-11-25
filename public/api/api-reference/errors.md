---
type: api
title: Error handling
next: 
  href: /api/api-reference/agent/agent-object
  title: "Agent Object"
prev: 
  href: /docs/integrations/zoho
  title: "Zoho Integration"
order: 2
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "API", href: "/api/api-reference/introduction" }
  - { label: "Errors" }
---

# Errors

The 7en Platform API uses conventional HTTP response codes to indicate the success or failure of an API request. Codes in the `2xx` range indicate success, codes in the `4xx` range indicate client-side errors (e.g., missing parameters or invalid requests), and codes in the `5xx` range indicate server-side errors (these are rare).

Some `4xx` errors include specific error codes that can be handled programmatically, providing details about the issue encountered.

## Error Codes

| Error Code                        | What It Means                                      |
|------------------------------------|----------------------------------------------------|
| `agent_validation_error`             | Agent not found, not accessible, or invalid        |
| `knowledge_source_validation_error`  | Knowledge source not found or invalid              |
| `user_validation_error`              | User input or data is invalid                      |
| `authentication_required`            | Authentication is required or API key missing      |
| `insufficient_permissions`           | User lacks required permissions                    |
| `throttle_exceeded`                  | Too many requests (rate limit exceeded)            |
| `object_not_found`                   | Object not found in the database                   |
| `api_key_duplicate`                  | Duplicate API key for the team                     |
| `malformed_api_key`                  | API key header is malformed                        |
| `inactive_api_key`                   | API key is invalid or inactive                     |
| `team_required`                     | User must belong to a team                         |

## Error Object

{% parameter-list title="Error Object" %}
```
[
  {
    "name": "code",
    "type": "string",
    "description": "A human-readable message code. Refer to the error types table for details. Example: \"authentication_required\""
  },
  {
    "name": "message",
    "type": "string",
    "description": "A human-readable message providing details about the error. Example: \"Authentication failed.\""
  },
  {
    "name": "status",
    "type": "number",
    "description": "The HTTP status code associated with the error. Refer to HTTP status code summary for possible values. Example: 401"
  },
  {
    "name": "fields",
    "type": "object",
    "description": "Additional details about the error, often an array of field-specific error messages. Example: []"
  }
]
```
{% /parameter-list %}

#### Error Handling

```javascript
async function makeApiRequest(endpoint, options) {
  try {
    const response = await fetch(endpoint, options);
    if (!response.ok) {
      const errorData = await response.json();
      if (errorData.error) {
        const { code, message, fields } = errorData.error;

        // Handle field-specific errors for user_validation_error
        if (code === 'user_validation_error' && fields) {
          const fieldErrors = Object.entries(fields)
            .map(([field, errors]) => {
              // Map field names to user-friendly labels
              const fieldLabel = field === 'email' ? 'Email' : field === 'name' ? 'Name' : field;
              return `${fieldLabel}: ${errors.join(', ')}`;
            })
            .join('; ');
          console.error('Validation errors:', fieldErrors);
          alert(`Please fix the following errors: ${fieldErrors}`);
          throw new Error(`Validation failed: ${fieldErrors}`);
        }
        throw new Error(message);
      }
    }
    return response.json();
  } catch (error) {
    console.error('Error:', error.message);
    alert('An error occurred. Please try again.');
    throw error;
  }
}

// Usage example
makeApiRequest('https://api.example.com/v3/agents', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: '', email: 'invalid' })
}).then(data => console.log('Success:', data))
  .catch(error => console.error('Request failed:', error));
```

{% response status="200" hasDropdown="false" title="Error" %}
```json
{
    "error": {
        "code": "user_validation_error",
        "message": "Email already exists",
        "status": 400,
        "fields": {
            "email": [
                "Email already exists"
            ]
        }
    }
}
```
{% /response %}

## Best Practices

- **Check Error Codes**: Always inspect the `code` field in the error response to handle specific errors programmatically. For example, handle `authentication_required` by prompting the user to re-authenticate or verify the API key.
- **Handle Field-Specific Errors**: Use the `fields` object to identify and display specific validation errors to users, such as duplicate emails or invalid inputs, to improve user experience.
- **Rate Limit Awareness**: Monitor for `throttle_exceeded` errors and implement exponential backoff or retry logic to respect rate limits (e.g., 100 requests/min for free tier, 1000 for pro, 10000 for enterprise).
- **Graceful Degradation**: For `5xx` server errors, implement fallback mechanisms or retry logic with a reasonable delay to handle temporary server issues.
- **Logging and Monitoring**: Log errors with their `code`, `message`, and `status` for debugging and monitoring. This helps identify recurring issues like `object_not_found` or `insufficient_permissions`.
- **User Feedback**: Translate error messages into user-friendly notifications. For instance, convert `user_validation_error` into a clear message like "This email is already in use" for better usability.
- **Secure API Key Management**: For `malformed_api_key` or `inactive_api_key` errors, ensure API keys are securely stored and refreshed as needed via the dashboard settings at [https://app.7en.ai/settings](https://app.7en.ai/settings).
- **Test Error Scenarios**: Simulate common errors like `agent_validation_error` or `team_required` during development to ensure your application handles them robustly.
