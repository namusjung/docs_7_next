---
title: "Invite member"
type: "docs"
order: 1
breadcrumb_chain:
  - { label: "Home", href: "/" }
  - { label: "Docs", href: "/docs/intro" }
  - { label: "Team", href: "" }
  - { label: "Team Management" }
prev:
  title: "Zapier"
  href: "/docs/integrations/zapier"
---

# Invite Team Member

7en supports multi-users so your team can collaborate on agent configuration, knowledge management, and conversations. This page covers inviting members to your 7en account.

{% section id="roles" title="User Roles" %}

Every workspace has two role levels:

| Role | What they can do |
|---|---|
| **Owner** | Full access — manage agents, knowledge, billing, API keys, and team members. Can invite and remove members. |
| **Member** | Agent administration — create and configure agents, manage knowledge sources, and view conversations. Cannot access billing or manage other team members. |

Assign roles carefully. Owners have full control over billing and can remove other users.

{% /section %}

{% section id="inviting" title="Inviting Team Members" %}

1. Go to **Settings** → **Team**
2. Enter the person's email address
3. Select their role: **Owner** or **Member**
4. Click **Send** to send invitation

The invited person receives an email with a link to join your workspace. Invitations expire after **7 days** — resend if they miss the window.

{% callout type="info" %}
Invitees must create a 7en account. The invitation link will prompt them to register.
{% /callout %}

{% /section %}

{% section id="managing" title="Managing Existing Members" %}

To view, change roles, or remove team members:

1. Go to **Settings** → **Team**
2. The member list shows all active members and their roles

**Assign agent:** Click **+** icon to assign the specific AI agents to the member. The team member will get access to that specific agent and its conversations history.

**Remove a member:** Click the menu **trash** icon next to a member and confirm deletion. This immediately revokes their access — they will no longer be able to log in to your workspace.

{% callout type="warning" title="Removing an Owner" %}
You cannot remove yourself if you are the only Owner in the workspace.
{% /callout %}

{% /section %}

{% section id="pending" title="Pending Invitations" %}

Invitations that have been sent but not yet accepted appear in the **Pending Invitations** list. From here you can:
- **Resend** — send a fresh invite email if the original expired
- **Cancel** — revoke the invitation before it is accepted

{% /section %}
