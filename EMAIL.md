# Email / Contact Forms

All client contact forms are handled by a centralized service at **forms.caltechweb.com** (repo: `caltechweb-forms`). Individual client sites do not need their own email API keys or Resend accounts.

## How it works

1. Client site POSTs to `https://forms.caltechweb.com/api/submit`
2. The service looks up the domain in `src/config/sites.ts` to determine the recipient
3. Resend sends the email from `forms@mail.caltechweb.com` with a styled HTML template

## Adding a new client

Edit `src/config/sites.ts` in the `caltechweb-forms` repo:

```ts
"newclient.com": {
  name: "New Client",
  to: "owner@newclient.com",
},
```

Optional fields:
- `from` — custom "From" display name (e.g. `"New Client <forms@mail.caltechweb.com>"`)
- `cc` — CC address (e.g. `"brandon@caltechweb.com"`)

Deploy the forms service after adding the entry.

## Client-side integration

POST JSON to `/api/submit`:

```json
{
  "site": "newclient.com",
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello",
  "source": "contact-page"
}
```

Valid `source` values: `contact-page`, `free-quote`, `rfp-rfq`, `support`, `registration`, `service-request`

Submissions with `source: "support"` are routed to support@caltechweb.com instead of the client.

## Security

- CORS restricts requests to registered domains and Vercel previews
- Rate limited to 5 submissions per IP per hour
- No per-client API keys needed — the single `RESEND_API_KEY` is set on the forms service only
