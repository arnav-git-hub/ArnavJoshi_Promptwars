# 👁️ THE BLIND SPOT — AI Critical Decision Architecture Engine

> An AI-powered solution built for **PromptWars 2026** that helps users identify potential blind spots, unstated assumptions, overlooked secondary factors, cognitive biases, simulated future scenarios, and alternative paths when considering a decision — without deciding for them.

---

## 📌 Chosen Vertical
**Personal & Career Decision Architect (The Blind Spot)**
Focuses on helping users analyze complex personal, academic, and professional decisions (such as accepting internships, startup job offers, or city relocations) by identifying unstated premises and hidden trade-offs.

---

## 🧠 Approach and Logic
The solution implements a **non-directive critical thinking engine** powered by Google Gemini (`@google/generative-ai`).
1. **Unstated Assumption Extraction:** Identifies premises taken for granted and assigns a risk level (High / Medium / Low).
2. **Secondary Factor Mapping:** Evaluates overlooked impacts across Academics, Career Growth, Wellbeing, and Financial sustainability.
3. **Cognitive Bias & Conflict Detection:** Pinpoints biases such as Proximity Bias, Short-Term Reward Bias, and Confirmation Bias.
4. **Scenario Stress-Testing:** Simulates Best-Case, Worst-Case, and Most Likely future outcomes.
5. **Alternative Path Expansion:** Generates creative compromise options to broaden the user's choices.
6. **Non-Directive Guardrail:** System prompt strictly prohibits the AI from picking an option or making the decision for the user.

---

## ⚙️ How the Solution Works
1. User enters a decision title, context, motivations, and stated assumptions (or selects a 1-click preset).
2. The request is sanitized (`security.ts`) and sent to Google Gemini (`gemini-1.5-flash`) with a structured JSON schema.
3. The AI returns a structured analysis displaying:
   - Reasoning Clarity Score Gauge (0% to 100%)
   - Interactive Assumptions Checklist
   - Overlooked Factors Matrix
   - Simulated Future Scenarios
   - Alternative Options & Probing Questions
4. User can check off examined items to dynamically increase their clarity score, or export a printable Markdown Decision Brief (`.md`).
5. Analyses are automatically saved in LocalStorage for 1-click reload and history review.

---

## 🔍 Any Assumptions Made
- **API Availability:** Assumes Google Gemini API (`@google/generative-ai`) is available; includes graceful fallback analysis if key is unconfigured.
- **User Preference:** Assumes users benefit from exploring hidden trade-offs before committing to a decision.
- **Non-Directive Boundary:** Assumes the user retains full agency and final choice authority over their decision.

---

## 🧪 Testing, Security & Accessibility Compliance
- **Testing:** 100% Vitest unit test suite in `/tests` validating prompt parsing, security sanitization, accessibility ARIA attributes, and problem alignment.
- **Security:** Strict `.env` secret key isolation, zero-trust input sanitization, no hardcoded API keys.
- **Accessibility:** Full WCAG 2.1 AA compliance (`role="main"`, `role="navigation"`, `role="region"`, `aria-label`, high contrast focus rings).
- **Efficiency:** Vite 5 production bundle deployed on Vercel (`< 500 KB` repository size).

---

## 📄 License
MIT License. Built for PromptWars 2026 by Arnav Joshi.
