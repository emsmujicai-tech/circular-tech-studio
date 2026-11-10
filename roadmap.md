# Audit roadmap

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
