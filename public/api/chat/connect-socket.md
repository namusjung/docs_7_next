---
type: api
title: "Chat Socket"
endpoint: WSS /ws/api/chat/{{agent_id}}/?api_key={{API Key}}
order: 1
---
# Chat Web Socket

## Parameters

{% parameter-list title="Query parameters" %}
```
[
  {
    "name": "api_key",
    "type": "string",
    "description": "Your api key. Example: \"453jb45b3k5wm435\""
  }
]
```
{% /parameter-list %}

{% parameter-list title="Path parameters" %}
```
[
  {
    "name": "agent_id",
    "type": "string",
    "description": "Your api key. Example: \"453\""
  }
]
```
{% /parameter-list %}

## Request Body
{% parameter-list title="Message object" %}
```
[
  {
    "name": "type",
    "type": "string",
    "description": "Type of the event or object. example `set_reaction`, `history`, `feedback`"
  },
  {
    "name": "content",
    "type": "object",
    "description": "Primary content payload.sometimes we can pass string json {\"rating\":1,\"text\":\"Accurate info\"}`",
    "optional": true
  },
  {
    "name": "sessionId",
    "type": "object",
    "description": "Session id for conversation",
    "optional": true
  },
  {
    "name": "source",
    "type": "string",
    "description": "Source of the event or message.",
    "optional": true
  },
  {
    "name": "messageId",
    "type": "int",
    "description": "Message Id inside conversation",
    "optional": true
  },
  {
    "name": "message",
    "type": "int",
    "description": "Feedback message",
    "optional": true
  },
  {
    "name": "agentId",
    "type": "string",
    "description": "Identifier of the agent.",
    "optional": true
  },
  {
    "name": "reaction",
    "type": "string",
    "description": "Reaction associated with the message.",
    "optional": true
  },
  {
    "name": "reason",
    "type": "string",
    "description": "Reason associated with a reaction or status.",
    "optional": true
  }
]
```
{% /parameter-list %}

## Message Types

Type | Description |
|---|---|
 `feedback` | Used to send feedback with stars and text. `rating` is stars from 1 to 5 and `text` is template text. Send as  `{\"rating\":1,\"text\":\"Accurate info\"}` inside `content` property. See the examples below. |
 `set_reaction` | Used to like or dislike message. See the examples below |
 `export` | Used to export chat |
 `user` | Message from user |
 `timeout` | To end the chat session |
 `delete` | To delete the chat | 
 `session_init` | To start a new chat session |
 `private` | To start a private chat session | 


{% request title="Minimal request" %}
```json
[
  {
    "language": "javascript",
    "code": "{\n   \"type\": \"user\",\n   \"content\": \"how to get agent\",\n   \"timestamp\": \"2026-02-09T13:10:32.554Z\",\n   \"source\": \"widget\" \n }"
  }
]
```
{% /request %}

{% response status="201" hasDropdown="false" title="Response" %}
```json
{
    "type": "bot_response",
    "content": "Hello! I'm web. I am here to answer your questions.",
    "timestamp": "2026-03-04T08:02:41.989787+00:00Z",
    "session_id": "dfe2ebcc-00dc-465b-852e-77898da834d2"
}
```
{% /response %}

##### Send Conversation Feedback

```json
{
    "type": "feedback",
    "content": "{\"rating\":1,\"text\":\"Accurate info\"}",
    "message": "very good",
    "agentId": "123",
    "sessionId": "dfe2ebcc-00dc-cs-852e-77898da834d2",
    "timestamp": 1772623350946
}
```

##### Set Message Reaction [Like / Dislike]

```json
{
    "type": "set_reaction",
    "message_id": "31906",
    "reaction": "like"
}
```
```json
{
    "type": "set_reaction",
    "message_id": "31906",
    "reaction": "dislike",
    "reason": "Not satisfied"
}
```

##### Export chat to email

```json
{
    "type": "export",
    "content": "pujan@ampm.cloud",
    "agentId": "660",
    "source": "website",
    "timestamp": 1772625625327
}
```

##### End Chat

```json
{
    "type": "timeout",
    "message": "",
    "agentId": "660",
    "sessionId": "bb5fa3a4-70ed-4366-9554-62115da683c9",
    "timestamp": 1772700820969
}
```

##### Delete Chat

```json
{
    "type": "delete",
    "message": "",
    "agentId": "660",
    "sessionId": "bb5fa3a4-70ed-4366-9554-62115da683c9",
    "timestamp": 1772700890258
}
```
