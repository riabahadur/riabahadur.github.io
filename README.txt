RIA BAHADUR — SPAM-SAFE PRESS + CONTACT CORRECTION
==================================================

This pack REPLACES the earlier Press + Contact pack.

Files:
- _config.yml
- press/index.html
- contact/index.html

Privacy rule:
- No destination email appears in visible text.
- No destination email appears in HTML source.
- No mailto link exposes the destination address.
- The form posts to a relay endpoint stored as a site configuration value.

Activation:
1. Create a Formspree form whose notification recipient is Ria's private/public-facing email.
2. Copy the ID-based endpoint, which looks like:
   https://formspree.io/f/FORM_ID
3. Put that endpoint into `contact_form_endpoint` in `_config.yml`.
4. In Formspree settings:
   - keep CAPTCHA protection enabled;
   - restrict submissions to the live site domain;
   - optionally configure the site's own thank-you redirect.
5. The form already includes Formspree's `_gotcha` honeypot field.

Until `contact_form_endpoint` is configured, the page shows LinkedIn as the fallback.

IMPORTANT:
Do not put the recipient email itself anywhere in the public repository.

Suggested commit:
Remove public email and secure contact routing
