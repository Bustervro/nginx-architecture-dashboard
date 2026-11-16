
# NGINX Load Balancer Architecture Dashboard

## Project description
This companion proof-of-concept analyzes NGINX Open Source as an HTTP reverse proxy and load balancer. It visualizes a client-to-NGINX-to-two-Python-backends architecture and simulates round-robin distribution across two equal-weight backend servers.

**Important scope:** This is a browser-only simulation; it does not connect to real NGINX, Docker, or Python servers. The target architecture is a reverse-proxy/load-balancer pattern, not a claim that all NGINX deployments have exactly two backends.

## Architecture
- Client: sends HTTP requests.
- NGINX: reverse proxy in front of upstream app servers.
- Upstream group: configures servers; default load-balancing policy is round-robin.
- Python backends: illustrative app instances.
- No database, cache, or message broker is required for this simple example.

Official verification: https://nginx.org/en/docs/http/load_balancing.html and https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/

## Setup and run
1. Clone this repository: `git clone <YOUR_REPO_URL>`
2. `cd <YOUR_REPO_FOLDER>`
3. Open `index.html` in a browser, or run `python -m http.server 8000` and visit `http://localhost:8000`.
4. No API keys, environment variables, Docker, or package installs are needed for the dashboard.

## Features
- Architecture diagram with NGINX and two example backends
- Simulate 1–100 requests per click, with alternating distribution
- Counter and percentage updates
- Reset and error messages for invalid inputs
- Responsive interface, explicit input label, keyboard-accessible controls
- Manual QA checklist

## AI disclosure and prompt appendix
**AI tool:** OpenAI ChatGPT  November 2026.

**Exact user prompt that initiated the work:** The instructor assignment text requesting an analysis of an open-source architecture, an AI-scaffolded interactive companion prototype, fact checking, QA, deployment, README, and walkthrough (retain full instructor prompt in your submission materials if required).

**Representative scaffold prompt summarizing the requested implementation:** "Build a static NGINX load-balancer architecture dashboard using HTML, CSS, and JavaScript. Include a client -> NGINX -> two Python backends diagram, a round-robin simulator, counters, input validation, reset, mobile layout, and QA checklist. Clearly identify simulation versus real network behavior."

**Initial output:** ChatGPT generated `index.html`, `style.css`, `script.js`, and this `README.md` as a browser-only prototype.

**Verification:** Compared NGINX's reverse-proxy role and default upstream round-robin behavior against its official documentation. Correctly distinguished simulated counters from actual proxy traffic; no live servers or real NGINX telemetry are claimed. Two Python backends are example app servers, not a built-in component of NGINX.

**Customization:** Responsive cards, server flow diagram, accessible field and status messaging, input validation, visible QA checklist, and request-distribution charts. Edit this section to describe any changes YOU personally make.

**Additional prompts:** Paste any subsequent prompts you actually use here, exactly as submitted. Do not claim unperformed verification or manual testing.

## QA verification log
Fill in each item after testing (do not mark passed in advance):

| Test case | Expected | Actual | Result | Browser/device |
|---|---|---|---|---|
| Send 10 requests | 5 to A, 5 to B | Not yet tested | Pending | |
| Send 1 request | One count increases | Not yet tested | Pending | |
| Empty input | Validation warning | Not yet tested | Pending | |
| Negative / fractional input | Validation warning | Not yet tested | Pending | |
| Input > 100 | Validation warning | Not yet tested | Pending | |
| Reset | All counters zero | Not yet tested | Pending | |
| Mobile 375px | No overlap | Not yet tested | Pending | |
| Tablet 768px | No overlap | Not yet tested | Pending | |
| Desktop 1920px | No overlap | Not yet tested | Pending | |
| Chromium + Firefox | No JS errors, no 404s | Not yet tested | Pending | |
| Keyboard accessibility | Tab order works and focus visible | Not yet tested | Pending | |
| Performance | Loads promptly | Not yet tested | Pending | |

## Deployment
GitHub repository -> Settings -> Pages -> Build and deployment -> Deploy from a branch -> select `main`, `/ (root)` -> Save. Capture the actual published URL and confirm it loads before submission.

## Video demo outline (5–7 min)
0:00–1:00 target architecture and official-doc source; 1:00–2:00 architectural components and AI audit; 2:00–3:30 live dashboard and user flow; 3:30–5:30 QA test cases, responsive browser view and console; 5:30–6:30 accessibility/performance, lessons learned, GitHub/README.
