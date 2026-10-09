# MARKEX Forex Trading Academy

Production website for [markex-academy.com](https://markex-academy.com/).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Configure

Copy `.env.example` to `.env.local`. Leave contact fields empty until MARKEX publishes a real phone, email, WhatsApp number or social URL. Do not invent them in the code.

Editable content lives in `data/`:

- `data/site.ts` — pricing, curriculum, payout captions, navigation
- `data/faq.ts` — questions and answers
- `data/legal.ts` — policies. Refund eligibility stays empty until MARKEX adds official conditions to `refundEligibility`
- `data/blog.ts` — market insight notes
- `types/index.ts` — `testimonials` are listed in `data/site.ts` and start empty

## Payments and CRM

Enquiry form: `POST /api/leads`

Payment session: `POST /api/payments/create` with `{ leadId, purpose }`. Amounts are set on the server (`₹5,000` or `₹10,000`). The browser cannot mark a payment as paid.

Confirmation: `POST /api/payments/webhook` with header `x-markex-signature` set to the hex HMAC-SHA256 of the raw body using `PAYMENT_WEBHOOK_SECRET`.

Paid webhooks create a non-sequential student id (`MKX-26-XXXXX`), enrollment id and receipt.

Admin read API: `GET /api/admin/overview` with `Authorization: Bearer $ADMIN_API_KEY`.

Records are stored in `data/store/crm.json` on the server. Point `CRM_WEBHOOK_URL` at an external CRM when one is ready.

WhatsApp Business sending stays disabled until `WHATSAPP_TOKEN`, `WHATSAPP_PHONE_NUMBER_ID` and `WHATSAPP_TEMPLATE_NAME` are set. Tokens are never sent to the browser.
