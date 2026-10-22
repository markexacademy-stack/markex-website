# MARKEX Trading Academy — compliance implementation report

Internal document for the developer and business owner. Not a public website page.

Date: 16 October 2026  
Production domain: https://markex-academy.com/

## Summary of this pass

Business identity: operated by **MARKEX Academy**, phone/WhatsApp **+91 8590861862**. Personal proprietor name and Mittathanickal/Idukki address removed from public pages.

No CODESPULSE HOSPITALS string was found in the project source controlled by this repository.

## Pages updated

| Page | Route | Change |
| --- | --- | --- |
| About Us | `/about` | Owner, address, enrollment steps, intensive vs advanced membership, risk, support |
| Contact Us | `/contact` | Owner, new address/phone, grievance method, response target |
| Pricing | `/pricing` | Clear ₹5,000 / ₹10,000 split, policy links |
| Enroll | `/enroll` | Pricing clarity + policy links |
| Program | `/program` | Pricing wording |
| FAQ | `/faq` | Full answer set |
| Privacy | `/privacy-policy` | Operator, address, processors, retention, support |
| Terms | `/terms` | Identity, pricing, delivery, cancellation/refund pointers |
| Refund | `/refund-policy` | Initial ₹5,000 commitment; 7 business-day initiation after approval |
| Cancellation | `/cancellation-policy` | Before classes begin, rescheduling, refund relationship |
| Shipping | `/shipping-policy` | Digital delivery / no physical shipping |
| Risk / Disclaimer | `/risk-disclosure`, `/disclaimer` | Education vs advice; brand name cleanup |

## Files changed (primary)

- `data/site.ts`, `data/legal.ts`, `data/faq.ts`
- `lib/utils.ts`, `lib/seo.ts`
- `app/about/page.tsx`, `app/contact/page.tsx`, `app/pricing/page.tsx`, `app/enroll/page.tsx`, `app/program/page.tsx`, `app/faq/page.tsx`
- `app/refund-policy/page.tsx`, `app/shipping-policy/page.tsx`, `app/manifest.ts`, `app/opengraph-image.tsx`
- `components/pricing/Pricing.tsx`, `components/footer/Footer.tsx`, `components/contact/EnrollmentForm.tsx`, `components/ui/Logo.tsx`
- `.env.example`, `README.md`, `docs/WEBSITE_IMPLEMENTATION_REPORT.md`, `docs/PAYMENT_PROVIDER_READINESS.md`

## Old contact details removed from app source

| Item | Status |
| --- | --- |
| Phone / WhatsApp | `+91 8590861862` / `918590861862` |
| Operator | MARKEX Academy |
| Personal proprietor / Idukki address | Removed from public site |
| Brand “MARKEX Forex Trading Academy” in public metadata/manifest/logo alt | Updated to MARKEX Trading Academy |
| CODESPULSE HOSPITALS | Not present in controlled source |

## Pricing consistency

- Total advertised fee: ₹15,000  
- Initial enrollment: ₹5,000 (two-week intensive)  
- Advanced membership: ₹10,000 (separate)  
- Copy states that ₹5,000 does not purchase advanced-membership benefits  

## Refund policy alignment

Published commitment: after completing the two-week program, a dissatisfied student may request a refund of the **initial enrollment amount actually paid** (₹5,000 when that is the amount paid). The policy does **not** state that the full ₹15,000 is refundable under this commitment.

Published initiation target: within **7 business days after approval**. Bank/provider credit time is stated separately. **Owner should confirm this 7-day figure can be met consistently.**

## Payment-provider readiness

See `docs/PAYMENT_PROVIDER_READINESS.md`.

This website project does **not** claim that Razorpay (or any provider) has approved the merchant account. Website text does not change the legal name recorded with a payment provider.

## Owner actions still required

1. Confirm the 7-business-day refund initiation target.  
2. Confirm the “acknowledge within 2 business days” support target.  
3. Confirm 6+ years / 150+ students figures remain accurate to publish.  
4. Obtain written payment-provider / legal review for **trading signals / market updates** and **funded-account preparation** before treating live payments as cleared.  
5. Commit, push, and redeploy; then verify https://markex-academy.com/ live.  
6. Update any payment-provider dashboard merchant profile separately if the recorded business name or phone differs.

## Validation status

| Check | Result |
| --- | --- |
| `npx next build` | PASS — compiled; 31 static pages including all policy routes |
| ESLint on key edited files | PASS |
| Local route HTTP 200 | PASS — home, about, contact, pricing, faq, enroll, program, privacy, terms, refund, cancellation, shipping, risk, disclaimer |
| Old phone / Kazhakuttam / CODESPULSE in rendered HTML | PASS — absent |
| Phone, WhatsApp `wa.me/918590861862`, address, email | PASS — present |
| Refund copy: initial amount + 7 business days | PASS |
| Live https://markex-academy.com/ after deploy | NOT TESTED |
| Real payment transaction | NOT TESTED |
| Razorpay / payment-provider approval | NOT CLAIMED |

Deployment of these changes is still required before the live domain reflects them.
