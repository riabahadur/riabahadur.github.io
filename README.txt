RIA BAHADUR — FORMSPREE + TURNSTILE ACTIVATION
==============================================

Complete replacement files:
- _config.yml
- contact/index.html

Configured public values:
- Formspree endpoint: https://formspree.io/f/xkjwvbdy
- Cloudflare Turnstile Site Key: 0x4AAAAAAERJlYnJZqJ0Qqyi

NOT INCLUDED:
- destination email address
- Cloudflare Turnstile Secret Key
- any API key or private credential

Before testing:
1. In Formspree CAPTCHA settings:
   - CAPTCHA status ON
   - solution Turnstile
   - paste the Cloudflare Turnstile SECRET KEY there
   - Save
2. In Formspree, restrict the form to:
   riabahadur.github.io
   (add/switch to riabahadur.com at domain cutover)
3. In Cloudflare Turnstile, ensure the widget hostnames include:
   riabahadur.github.io
   riabahadur.com
4. Upload this pack to the repo root and push.
5. Open /contact/ over HTTPS and submit one real test message.

Implementation:
- Formspree recipient remains server-side.
- Turnstile secret remains server-side at Formspree.
- Turnstile site key is public by design.
- Turnstile uses responsive/flexible sizing and only appears when interaction is needed.
- Existing _gotcha honeypot remains active.

Suggested commit:
Activate secure Formspree contact form
