---
title: "Team Management"
type: "docs"
order: 1
---

# Team Management

7en supports multi-user workspaces so your team can collaborate on agent configuration, knowledge management, and conversations. This page covers inviting members, managing roles, and controlling access.

{% section id="roles" title="User Roles" %}

Every workspace has two role levels:

| Role | What they can do |
|---|---|
| **Owner** | Full access — manage agents, knowledge, billing, API keys, and team members. Can invite and remove members. |
| **Member** | Agent administration — create and configure agents, manage knowledge sources, and view conversations. Cannot access billing or manage other team members. |

Assign roles carefully. Owners have full control over billing and can remove other users.

{% /section %}

{% section id="inviting" title="Inviting Team Members" %}

1. Go to **Workspace Settings** → **Team**
2. Click **Invite Member**
3. Enter the person's email address
4. Select their role: **Owner** or **Member**
5. Click **Send Invite**

The invited person receives an email with a link to join your workspace. Invitations expire after **24 hours** — resend if they miss the window.

{% callout type="info" %}
Invitees must create a 7en account if they don't have one. The invitation link will prompt them to register.
{% /callout %}

{% /section %}

{% section id="managing" title="Managing Existing Members" %}

To view, change roles, or remove team members:

1. Go to **Workspace Settings** → **Team**
2. The member list shows all active members and their roles

**Change a role:** Click the role badge next to a member's name and select the new role.

**Remove a member:** Click the menu icon next to a member and select **Remove from workspace**. This immediately revokes their access — they will no longer be able to log in to your workspace.

{% callout type="warning" title="Removing an Owner" %}
You cannot remove yourself if you are the only Owner in the workspace. Promote another member to Owner first.
{% /callout %}

{% /section %}

{% section id="pending" title="Pending Invitations" %}

Invitations that have been sent but not yet accepted appear in the **Pending Invitations** list. From here you can:
- **Resend** — send a fresh invite email if the original expired
- **Cancel** — revoke the invitation before it is accepted

{% /section %}
