import * as React from 'react';
import { Body, Button, Container, Head, Heading, Html, Link, Preview, Text } from '@react-email/components';
import { content } from '@/lib/content';
import { emailStyles as s } from './styles';
interface Props { token: string }
const a = content.nb.authEmail;
export const ReauthenticationEmail = (p: Props) => <Html lang="nb" dir="ltr"><Head /><Preview>{a.codeTitle} · EMS Mujic Smart Solutions</Preview><Body style={s.main}><Container style={s.container}><Text style={s.brand}>EMS Mujic Smart Solutions</Text><Heading style={s.h1}>{a.codeTitle}</Heading><Text style={s.text}>{a.codeIntro}</Text><Text style={s.codeStyle}>{p.token}</Text><Text style={s.footer}>{a.ignore}</Text></Container></Body></Html>;
export default ReauthenticationEmail;
