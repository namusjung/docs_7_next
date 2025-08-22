---
title: "API Reference"
type: "api"
order: 1
---

# API Reference

## Agent Object

{% endpoint method="POST" url="/api/v3/agents" %}
Create a new AI agent with custom configuration.
{% /endpoint %}

{% parameter-list %}
- name (string, required): The name of the agent
- description (string): Description of the agent's purpose  
- model (string): AI model to use (gpt-4, claude-3, etc.)
{% /parameter-list %}


