# Payment provider readiness checklist

Internal checklist only. Not a public page.  
Does **not** claim that Razorpay or any other payment provider has approved the website or activated payments.

Last reviewed: 16 October 2026

## Business identity

| Item | Status | Notes |
| --- | --- | --- |
| Brand name MARKEX TRADING ACADEMY used consistently on the site | PASS (code) | Confirm dashboard brand matches |
| Owner / Proprietor Akhil Shijo identified | PASS (code) | |
| Business address published | PASS (code) | Mittathanickal House, Prakash P.O., Udayagiri, Idukki, Kerala, India – 685609 |
| Phone +91 81378 64105 | PASS (code) | |
| Email markexacademy@gmail.com | PASS (code) | |
| Website text equals payment-provider legal name | OWNER ACTION | Changing the website does not update the merchant legal name recorded with the provider |

## Business activity

| Item | Status | Notes |
| --- | --- | --- |
| Described as educational service | PASS | |
| Not described as broker / bank / investment firm / fund manager / licensed adviser | PASS | |
| Forex education described accurately | PASS | |
| Trading signals / market updates mentioned for advanced membership | FLAGGED | May need written provider or regulatory confirmation before live acceptance |
| Funded-account preparation described | FLAGGED | Educational preparation only; no funding guarantee. Confirm provider category eligibility |
| Trade execution / fund management claimed | PASS (not claimed) | Site states academy does not execute trades or hold client funds |

## Commercial terms

| Item | Status | Notes |
| --- | --- | --- |
| Course prices in INR | PASS | ₹5,000 / ₹10,000 / ₹15,000 |
| Initial vs advanced membership distinguished | PASS | |
| Refund policy published and linked | PASS | Covers initial ₹5,000 enrollment commitment |
| Refund processing timeline published | PASS (pending owner confirm) | 7 business days to initiate after approval |
| Cancellation policy published | PASS | |
| Privacy policy published | PASS | |
| Terms and conditions published | PASS | |
| Shipping / digital delivery policy published | PASS | |
| Risk disclosure and disclaimer published | PASS | |
| Customer grievance path published | PASS | Contact form + email + phone; acknowledge within 2 business days |
| Functional policy footer links | PASS (code) | Verify after deploy |
| Unsupported profit / funding guarantees | PASS (not claimed) | |
| Broken enrollment / payment API routes | NOT TESTED live | Local integration preserved; live payment not run in this pass |

## External decisions (outside this repo)

- Actual payment-account activation or underwriting decision  
- Whether signals or funded-prep content requires a different MCC / approval  
- Merchant KYC documents, bank account, and dashboard profile fields  

Do not alter website descriptions to evade underwriting. Flag category questions instead.
