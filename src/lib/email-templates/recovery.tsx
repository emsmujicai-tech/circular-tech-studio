import * as React from 'react';
import { Body, Button, Container, Head, Heading, Html, Link, Preview, Text } from '@react-email/components';
import { content } from '@/lib/content';
import { emailStyles as s } from './styles';
interface Props { siteName: string; confirmationUrl: string }
const a = content.nb.authEmail;
export const RecoveryEmail = (p: Props) => <Html lang="nb" dir="ltr"><Head /><Preview>{a.recoveryTitle} · EMS Mujic Smart Solutions</Preview><Body style={s.main}><Container style={s.container}><Text style={s.brand}>EMS Mujic Smart Solutions</Text><Heading style={s.h1}>{a.recoveryTitle}</Heading><Text style={s.text}>{a.recoveryIntro} {p.siteName}.</Text><Button style={s.button} href={p.confirmationUrl}>{a.recoveryButton}</Button><Text style={s.footer}>{a.recoveryFooter}</Text></Container></Body></Html>;
export default RecoveryEmail;
