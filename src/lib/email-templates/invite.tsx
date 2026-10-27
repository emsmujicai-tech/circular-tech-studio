import * as React from 'react';
import { Body, Button, Container, Head, Heading, Html, Link, Preview, Text } from '@react-email/components';
import { content } from '@/lib/content';
import { emailStyles as s } from './styles';
interface Props { siteName: string; siteUrl: string; confirmationUrl: string }
const a = content.nb.authEmail;
export const InviteEmail = (p: Props) => <Html lang="nb" dir="ltr"><Head /><Preview>{a.inviteTitle} · EMS Mujic Smart Solutions</Preview><Body style={s.main}><Container style={s.container}><Text style={s.brand}>EMS Mujic Smart Solutions</Text><Heading style={s.h1}>{a.inviteTitle}</Heading><Text style={s.text}>{a.inviteIntro} <Link href={p.siteUrl} style={s.link}>{p.siteName}</Link>.</Text><Button style={s.button} href={p.confirmationUrl}>{a.inviteButton}</Button><Text style={s.footer}>{a.ignore}</Text></Container></Body></Html>;
export default InviteEmail;
