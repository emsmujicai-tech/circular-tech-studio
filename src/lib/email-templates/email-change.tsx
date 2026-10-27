import * as React from 'react';
import { Body, Button, Container, Head, Heading, Html, Link, Preview, Text } from '@react-email/components';
import { content } from '@/lib/content';
import { emailStyles as s } from './styles';
interface Props { siteName: string; oldEmail: string; email: string; newEmail: string; confirmationUrl: string }
const a = content.nb.authEmail;
export const EmailChangeEmail = (p: Props) => <Html lang="nb" dir="ltr"><Head /><Preview>{a.changeTitle} · EMS Mujic Smart Solutions</Preview><Body style={s.main}><Container style={s.container}><Text style={s.brand}>EMS Mujic Smart Solutions</Text><Heading style={s.h1}>{a.changeTitle}</Heading><Text style={s.text}>{a.changeIntro} {p.siteName}.</Text><Text style={s.text}>{a.from}: {p.oldEmail}<br />{a.to}: {p.newEmail}</Text><Button style={s.button} href={p.confirmationUrl}>{a.changeButton}</Button><Text style={s.footer}>{a.changeFooter}</Text></Container></Body></Html>;
export default EmailChangeEmail;
