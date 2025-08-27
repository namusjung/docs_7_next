---
type: "docs"
title: "Getting Started"
order: 1
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "Getting Started", href: "" }
  - { label: "Introduction"}
next: 
  title: "Quick Start Guide"
  href: "/docs/getting-started/quick-start"
---

# Getting Started with 7en.ai

{% section id="welcome" title="Welcome to 7en.ai" %}

**7en.ai** is a powerful AI Agent management platform that empowers businesses to create, deploy, and manage intelligent conversational AI agents across multiple channels. Our platform combines cutting-edge language models with intuitive tools to help you automate customer support, streamline business processes, and enhance user experiences.

Whether you're looking to automate customer support tickets, integrate with popular platforms like WhatsApp and Slack, or build sophisticated knowledge-driven AI agents, 7en.ai provides everything you need in one comprehensive solution.

{% callout type="warning" title="Getting Started" %}
Ensure you have your API token ready. You can obtain it after logging in. Check the dashboard under Settings > API Keys for your token. Rate limits apply (10 requests per minute per IP for authentication endpoints, 60 requests per minute per token for team management endpoints).
{% /callout %}


{% /section %}

## Key Feature 

{% section id="key-features" title="Key Features" %}

{% card %}
[
  {
    "icon": "quickstart",
    "title": "AI Agent Builder",
    "description": "Create and customize AI agents with our intuitive visual builder. Configure prompts, train with custom knowledge sources, and deploy across multiple channels with ease.",
    "link": "/docs/agent-builder"
  },
  {
    "icon": "tool",
    "title": "Knowledge Manage",
    "description": "Upload documents, connect websites, integrate spreadsheets, and manage plain text sources to train your AI agents with domain-specific knowledge.",
    "link": "/docs/knowledge"
  },
  {
    "icon": "chat",
    "title": "Integrations",
    "description": "Connect your AI agents to popular platforms including WhatsApp Business, Slack, Facebook Messenger, Instagram, and major ticketing systems.",
    "link": "/docs/integrations"
  },
  {
    "icon": "guide",
    "title": "Conversation Manage",
    "description": "Monitor and manage all customer conversations in real-time with advanced filtering, agent handoff capabilities, and comprehensive analytics.",
    "link": "/docs/conversations"
  },
  {
    "icon": "api",
    "title": "Team Collaboration",
    "description": "Invite team members, manage permissions, and collaborate on agent development with role-based access controls.",
    "link": "/docs/team"
  },
  {
    "icon": "image",
    "title": "Analytics & Insights",
    "description": "Track agent performance, conversation metrics, customer satisfaction, and gain valuable insights into your AI operations.",
    "link": "/docs/analytics"
  }
]
{% /card %}

### Platform Capabilities

- **Multi-Model Support**: Choose from various LLM providers and models
- **Real-time Training**: Train agents with live knowledge source updates
- **Advanced Analytics**: Comprehensive dashboards and reporting
- **Enterprise Security**: Role-based permissions and secure integrations
- **API Access**: Programmatic control via REST APIs

{% /section %}

{% section id="quick-start" title="Quick Start Guide" %}

Get up and running with 7en.ai in just a few minutes:
---

### Step 1: Create Your First Agent
1. Navigate to **AI Agents** in the sidebar
2. Click **Create Agent** to open the agent builder
3. Configure your agent's name, description, and basic settings
4. Choose your preferred language model

### Step 2: Add Knowledge Sources
1. Go to the **Knowledge** tab in the agent builder
2. Upload documents, add website URLs, or import spreadsheets
3. Wait for the training process to complete
4. Test your agent's understanding of the knowledge

### Step 3: Configure Integrations
1. Visit the **Integrations** page
2. Connect your preferred messaging platforms
3. Configure webhooks and authentication
4. Test the integration with sample messages

### Step 4: Monitor & Optimize
1. Check the **Conversations** page for real-time activity
2. Review analytics in the **Dashboard**
3. Refine your agent based on conversation patterns
4. Update knowledge sources as needed


{% /section %}

{% section id="platform-overview" title="Platform Overview" %}

### Core Components

| Component | Description | Key Features |
|-----------|-------------|--------------|
| **Dashboard** | Central hub for monitoring | Agent statistics, conversation metrics, performance analytics |
| **AI Agents** | Agent creation and management | Visual builder, model selection, deployment controls |
| **Knowledge Base** | Document and data management | Multi-format support, automatic training, version control |
| **Conversations** | Real-time conversation monitoring | Live chat, agent handoff, customer satisfaction tracking |
| **Integrations** | Third-party platform connections | 10+ platform integrations, API webhooks, authentication |
| **Settings** | Platform configuration | Team management, billing, security settings |

### Supported Integrations

- **Messaging**: WhatsApp Business, Facebook Messenger, Instagram DM
- **Communication**: Slack, Microsoft Teams
- **Ticketing**: Zendesk, Freshdesk, Zoho Desk, Salesforce Service Cloud
- **CRM**: HubSpot Service Hub
- **Storage**: Google Drive
- **Automation**: Zapier

### Knowledge Source Types

- **Documents**: PDF, DOCX, TXT files
- **Websites**: URL crawling and content extraction
- **Spreadsheets**: CSV, Excel files
- **Plain Text**: Direct text input
- **APIs**: Custom data source integrations

{% /section %}

{% section id="getting-help" title="Getting Help" %}

Need assistance? We're here to help:

- **Documentation**: Comprehensive guides and API references
- **Support Tickets**: Create tickets directly from the platform
- **Community**: Join our Discord community for discussions
- **Training**: Video tutorials and best practices

### Next Steps

1. [Create your first AI agent →](/agents/builder)
2. [Upload knowledge sources →](/knowledge/upload)
3. [Configure integrations →](/integrations)
4. [Monitor conversations →](/conversations)

{% /section %}
