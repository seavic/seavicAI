# Analytics Event Dictionary

This staging build includes a central analytics event dictionary, with all providers disabled by default.

| Event | Purpose | PII allowed | Default status |
| --- | --- | --- | --- |
| `cta_discovery_click` | Track intent to start a SeaVic Discovery Call. | No | Disabled |
| `cta_how_we_work_click` | Track interest in the SeaVic delivery method. | No | Disabled |
| `contact_email_click` | Track email-fallback contact intent without collecting message content. | No | Disabled |
| `service_page_view` | Track aggregate service-page interest. | No | Disabled |
| `faq_open` | Track aggregate FAQ engagement. | No | Disabled |

Provider flags remain separate for GA4, Microsoft Clarity and Cloudflare Web Analytics. No analytics script should load unless its provider flag and ID/token are explicitly enabled.
