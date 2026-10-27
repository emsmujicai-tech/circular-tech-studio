import * as React from 'react';
import { Body, Button, Container, Head, Heading, Html, Link, Preview, Text } from '@react-email/components';
import { content } from '@/lib/content';
import { emailStyles as s } from './styles';
interface Props { siteName: string; siteUrl: string; recipient: string; confirmationUrl: string }
const a = content.nb.authEmail;
export const SignupEmail = (p: Props) => <Html lang="nb" dir="ltr"><Head /><Preview>{a.signupTitle} · EMS Mujic Smart Solutions</Preview><Body style={s.main}><Container style={s.container}><Text style={s.brand}>EMS Mujic Smart Solutions</Text><Heading style={s.h1}>{a.signupTitle}</Heading><Text style={s.text}>{a.signupIntro} <Link href={p.siteUrl} style={s.link}>{p.siteName}</Link>.</Text><Text style={s.text}>{a.signupPrompt} {p.recipient}</Text><Button style={s.button} href={p.confirmationUrl}>{a.signupButton}</Button><Text style={s.footer}>{a.signupFooter}</Text></Container></Body></Html>;
export default SignupEmail;
