import { content } from '@/lib/content'
import * as React from 'react'
import { createAuthEmailHandler } from '@lovable.dev/email-js'
import { createFileRoute } from '@tanstack/react-router'
import { SignupEmail } from '@/lib/email-templates/signup'
import { InviteEmail } from '@/lib/email-templates/invite'
import { MagicLinkEmail } from '@/lib/email-templates/magic-link'
import { RecoveryEmail } from '@/lib/email-templates/recovery'
import { EmailChangeEmail } from '@/lib/email-templates/email-change'
import { ReauthenticationEmail } from '@/lib/email-templates/reauthentication'

// Configuration
const SITE_NAME = "EMS Mujic Smart Solutions"
const SENDER_DOMAIN = "notify.emsmujic.tech"
const ROOT_DOMAIN = "emsmujic.tech"
const FROM_DOMAIN = "notify.emsmujic.tech"
const SITE_URL = `https://${ROOT_DOMAIN}`

// The SDK handler owns verification, dispatch, and retry semantics; this file
// owns only the email decisions: subjects, templates, and per-type props.
export const Route = createFileRoute("/lovable/email/auth/webhook")({
  server: {
    handlers: {
      POST: ({ request }) => {
        const handler = createAuthEmailHandler({
          apiKey: process.env['LOVABLE_API_KEY']!,
          from: { name: SITE_NAME, address: `noreply@${FROM_DOMAIN}` },
          senderDomain: SENDER_DOMAIN,
          replyTo: "ems.mujic@gmail.com",
          sendUrl: process.env['LOVABLE_SEND_URL'],
          emails: {
            signup: {
              subject: content.nb.authEmail.signupTitle,
              render: (data) =>
                React.createElement(SignupEmail, {
                  siteName: SITE_NAME,
                  siteUrl: SITE_URL,
                  recipient: data.email,
                  confirmationUrl: data.url,
                }),
            },
            invite: {
              subject: content.nb.authEmail.inviteTitle,
              render: (data) =>
                React.createElement(InviteEmail, {
                  siteName: SITE_NAME,
                  siteUrl: SITE_URL,
                  confirmationUrl: data.url,
                }),
            },
            magiclink: {
              subject: content.nb.authEmail.loginTitle,
              render: (data) =>
                React.createElement(MagicLinkEmail, {
                  siteName: SITE_NAME,
                  confirmationUrl: data.url,
                }),
            },
            recovery: {
              subject: content.nb.authEmail.recoveryTitle,
              render: (data) =>
                React.createElement(RecoveryEmail, {
                  siteName: SITE_NAME,
                  confirmationUrl: data.url,
                }),
            },
            email_change: {
              subject: content.nb.authEmail.changeTitle,
              render: (data) =>
                React.createElement(EmailChangeEmail, {
                  siteName: SITE_NAME,
                  oldEmail: data.old_email ?? '',
                  email: data.email,
                  newEmail: data.new_email ?? '',
                  confirmationUrl: data.url,
                }),
            },
            reauthentication: {
              subject: content.nb.authEmail.codeTitle,
              render: (data) =>
                React.createElement(ReauthenticationEmail, { token: data.token ?? '' }),
            },
          },
        })
        return handler(request)
      },
    },
  },
})
