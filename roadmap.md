# Audit roadmap

## Current request
- [x] Replace the old phone number with +47 90 626 626 in site and chat facts; tested desktop/mobile links, all 17 tests pass, live site verified.
- [x] Research eight communities, forums and directories and draft Norwegian posts, prioritizing electric scooters and e-bikes; saved sourced report in Files. No external posts submitted.
- [x] Connect Google Search Console, verify the root property, submit the live sitemap; Google confirms homepage indexed. No query rows for 2026-10-15 through 2026-11-11, so keyword positions are not yet available.

## Done
- [x] Security: .gitignore ignores .env / .env.* (keeps .env.example); safe .env.example added
- [x] Security: response headers (nosniff, Referrer-Policy, Permissions-Policy; CSP + frame protection in production)
- [x] Auth: /login (sign in, register, forgot password), /reset-password, protected /account, header auth control
- [x] Footer: full nav, contact links, legal links, language switcher
- [x] Legal: /personvern and /vilkar in NB/EN/BS
- [x] Customer chat mounted site-wide; chat and service assistant answer correctly
- [x] Translations: all three languages have identical keys (content test)
- [x] Mobile: every page checked at phone width, no sideways overflow, no page errors
- [x] Tests (16), lint (0 errors), production build pass

## Remaining
- [ ] Untrack .env from git history (needs a git command run from GitHub/locally; file only holds public keys)
- [ ] Add TXT record `_lovable.www` in Domeneshop so www.emsmujic.tech verifies
- [ ] Run full security scan, then publish
- [ ] Real prices for IT packages (currently "Be om tilbud")

- [x] Support chat answers from site text + service orders, hands over by email
- [x] SEO titles, descriptions and share images
- [ ] www.emsmujic.tech: TXT _lovable.www missing in Domeneshop (user must add)
- [ ] Email domain notify.emsmujic.tech failing DNS check (user: More → Emails) — then handover can send automatically
