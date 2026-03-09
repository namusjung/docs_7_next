---
type: "docs"
title: Introduction
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

{% /section %}

{% section id="key-features" title="Key Features" %}

{% card %}
[
  {
    "icon": "quickstart",
    "title": "AI Agent Builder",
    "description": "Create and customize AI agents with our intuitive visual builder. Configure prompts, train with custom knowledge sources, and deploy across multiple channels with ease."
  },
  {
    "icon": "tool",
    "title": "Auto Ticket Reply",
    "description": "Automatically respond to support tickets on Zendesk, Freshdesk, and Zoho Desk using your AI agents — resolving common issues instantly without human intervention."
  },
  {
    "icon": "chat",
    "title": "Integrations",
    "description": "Connect your AI agents to popular platforms including WhatsApp Business, Slack, Facebook Messenger, Instagram, and major ticketing systems."
  },
  {
    "icon": "guide",
    "title": "Auto Handoff",
    "description": "Set custom rules to hand off between AI agents or escalate to humans. Human handoff automatically creates a support ticket or sends an email."
  },
  {
    "icon": "api",
    "title": "Team Collaboration",
    "description": "Invite team members, manage permissions, and collaborate on agent development with role-based access controls."
  },
  {
    "icon": "image",
    "title": "Analytics & Insights",
    "description": "Track agent performance, conversation metrics, customer satisfaction, and gain valuable insights into your AI operations."
  }
]
{% /card %}

### Platform Capabilities

- **Multi-Model Support**: Choose from various LLM providers and models
- **Real-time Training**: Train agents with live knowledge source updates
- **Auto Ticket Reply**: AI agents automatically handle and respond to tickets on Zendesk, Freshdesk, and Zoho Desk
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
1. Go to the **Knowledge** panel in the agent builder
2. Upload documents, add plain text, website URLs, or import from Google drive
3. Wait for the training process to complete
4. Test your agent's understanding of the knowledge

### Step 3: Configure Integrations
1. Visit the **Integrations** page
2. Connect your preferred ticketing or messaging platforms
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
- **Ticketing** *(with auto ticket reply)*: Zendesk, Freshdesk, Zoho Desk
- **CRM**: HubSpot Service Hub (coming soon)
- **Storage**: Google Drive
- **Automation**: Zapier (coming soon)

### Knowledge Source Types

- **Documents**: PDF, DOCX, TXT files
- **Websites**: URL crawling and content extraction
- **Spreadsheets**: CSV, Excel files
- **Plain Text**: Direct text input
- **Google Drive**: Google Drive files

{% /section %}

{% section id="handoff" title="Agent Handoff & Human Handoff" %}

7en.ai provides seamless handoff capabilities that ensure customers always reach the right resource — whether that's another AI agent or a human agent.

### Agent Handoff

Agent handoff allows one AI agent to transfer a conversation to another specialized AI agent based on context, intent, or topic. This enables you to:

- **Route by expertise**: Direct conversations to agents trained on specific knowledge domains (e.g., billing, technical support, onboarding)
- **Chain workflows**: Build multi-step automation where each agent handles a distinct stage of the conversation
- **Fallback handling**: Automatically escalate to a more capable or broadly trained agent when the primary agent cannot resolve the query
- **Custom routing rules**: Define triggers and conditions that determine when and where a handoff occurs

### Human Handoff

Human handoff escalates the conversation out of the AI agent and into your human support workflow. Instead of transferring to a live chat agent, it triggers an automated action:

- **Ticket creation**: Automatically opens a ticket in Zendesk, Freshdesk, or Zoho Desk with the full conversation context attached
- **Email notification**: Sends an email to the appropriate team or individual so they can follow up with the customer directly
- **Custom rules**: Define your own conditions — keywords or topic — to decide when human handoff fires
- **Context included**: The ticket or email always includes the full chat history so no context is lost

Handoff rules are configured per agent in the **Agent Builder** under the **Escalation** settings tab.

{% /section %}

### Next Steps

1. [Create your first AI agent →](/agents/builder)
2. [Upload knowledge sources →](/knowledge/upload)
3. [Configure integrations →](/integrations)
4. [Monitor conversations →](/conversations)
