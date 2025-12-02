---
layout: page
title: Getting "Accessibility Ready" for a Design System
updated: 2025-12-01
---

<div markdown="1" class="slide slide-title">
(Or: **Baking in** Accessibility 🧑‍🍳 💻)
</div>

---

<div markdown="1" class="slide slide-mit">
## 💡 Most important thing

Use an "Accessibility Ready" document!

- It'll help the design system team
- It'll help the users of the design system
</div>

---

<div markdown="1" class="slide slide-question">
## **Design System?** 😵‍💫

- Library of reusable components
- Documentation and style guides
</div>

---

<div markdown="1" class="slide slide-full">
![Screenshot of the gov.uk design system, showing components list and navigation](/img/2025/11/govuk.png)
</div>

---

<div markdown="1" class="slide slide-aside">
## **Hello there!** 👋

### Steve Barnett

- Digital Accessibility Consultant, Intopia
- 💁 accessibility, inclusion, equitable design 
- `intopia.digital`
</div>

---

<div markdown="1" class="slide slide-aside">
### (Still) Steve Barnett

- FED since 2005
- a11y in job title since 2021
- `human-centred.nz`
</div>

---

<div markdown="1" class="slide slide-agenda">
## 📋 **Agenda**

- 👉 Context and background
- Accessibility Ready Status
- Minimum requirements
- Additional internal requirements
- Supported Assistive Technology
</div>

---

<div markdown="1" class="slide slide-section">
## Context and background
</div>

---

<div markdown="1" class="slide">
### 📖 **Context**

- Design System team of a11y-mature devs
- Doing good work already, but ad hoc
- Documentation for consumers not great
</div>

---

<div markdown="1" class="slide">
### 📈 **(Slightly) aspirational**

- Not just what they do now
- Achievable, but takes work
- This was the team's idea 😍
</div>

---

<div markdown="1" class="slide">
### **A good "Accessibility Ready" document** is...

- **SHWP**!
- **S**hort, **H**elpful, **W**ide, **P**lain language
</div>

---

<div markdown="1" class="slide  slide-question">
### **Why "short"?** 🤔<br>**(a.k.a. "More info on another page")**

- Short enough that people read it (and use it!)
- Good RUX (🥇) and FTUX
- Just enough detail
</div>

---

<div markdown="1" class="slide slide-agenda">
## 📋 **Agenda**

- ✔ Context and background
- 👉 Accessibility Ready Status
- Minimum requirements
- Additional internal requirements
- Supported Assistive Technology
</div>

---

<div markdown="1" class="slide slide-section">
## **“Accessibility Ready” Status**

- (The team call it "WCAG 2.2 AA+" 🤓)
- Not just a pass/fail, more like a range
</div>

---

<div markdown="1" class="slide slide-question">
### **WCAG 2.2 AA?** 😵‍💫

- Web Content Accessibility Guidelines
- Version 2.2 (current)
- All Success Criteria at Level A and Level AA
- "It's accessible" often means "Meets WCAG 2.2 AA"
</div>

---

<div markdown="1" class="slide slide-question">
### **Why "wide" (for an Accessibility Ready status)?** 🤔

- Ensure high level of accessibility
- But/and allow for releasing fairly timeously
- But/and allow for improvements (now or later)
</div>

---

<div markdown="1" class="slide">
1. **Minimum requirements** <br>for a component to be released<br>as “Accessibility Ready” ⏩
</div>

---

<div markdown="1" class="slide">
2. **Additional internal requirements** <br>for a component to meet our standards ⏩
</div>

---

<div markdown="1" class="slide">
📝 **Note:** Consumers only see "Accessibility Ready".<br><br><br>Updates maintain or improve the accessibility.
</div>

---

<div markdown="1" class="slide slide-agenda">
## 📋 **Agenda**

- ✔ Context and background
- ✔ Accessibility Ready Status
- 👉 Minimum requirements
- Additional internal requirements
- Supported Assistive Technology
</div>

---

<div markdown="1" class="slide slide-section">
## Minimum requirements
</div>
---

<div markdown="1" class="slide">
**Automated tests** all pass
</div>

---

<div markdown="1" class="slide">
**Manual tests** all pass,<br>across our Supported Assistive Technology ⏩
</div>

---

<div markdown="1" class="slide">
All **WCAG 2.2 Level A and AA**<br>Success Criteria are met
</div>

---

<div markdown="1" class="slide">
No **High Severity usability issues** exist
(Things that aren't WCAG failures)
(But are known issues)
</div>

---

<div markdown="1" class="slide">
**Example of a High Severity usability issue**

Focus indicators are not visible in WHCM
(Usually from CSS `box-shadow`, which WHCM removes)
</div>

---

<div markdown="1" class="slide">
Clear and concise **documentation** is present
</div>

---

<div markdown="1" class="slide slide-question">
### **"Helpful" how?** 🤔

- When to use (and when not to)
- How to use
- Content guidelines
- Accessibility (features, e.g. `aria-label`)
</div>

---

<div markdown="1" class="slide">
An **Accessibility Specialist** has confirmed 

- all WCAG 2.2 A and AA Success Criteria met
- no High Severity usability issues
</div>

---

<div markdown="1" class="slide slide-question">
### **"Accessibility Specialist"? Who's that?** 🤔

- It depends 😬
- Ideally, full-time accessibility person
- Can be internal or external person
- Can be a champion or someone similar
</div>

---

<div markdown="1" class="slide slide-aside">
## Phew, that was a lot! 🥵
</div>

---

<div markdown="1" class="slide">
## **Quick review of Minimum requirements**

- Tests pass
- WCAG 2.2 AA+
- Good docs
- Tiny audit
</div>

---

<div markdown="1" class="slide slide-agenda">
## 📋 **Agenda**

- ✔ Context and background
- ✔ Accessibility Ready Status
- ✔ Minimum requirements
- 👉 Additional internal requirements
- Supported Assistive Technology
</div>

---

<div markdown="1" class="slide slide-section">
## Additional internal requirements
</div>

---

<div markdown="1" class="slide">
The following **WCAG Level AAA SC** are met:

- 1.4.6 Contrast (Enhanced) (`7:1`)
- 2.4.13 Focus Appearance (`2px, 3:1`)
- 2.5.5 Target Size (Enhanced) (`44px`)
</div>

---

<div markdown="1" class="slide">
Any Medium or Low Severity usability issues are **resolved** or **prioritised**
</div>

---

<div markdown="1" class="slide slide-question">
### **"resolved or prioritised"**? 🤔

Fix it now, or have a specific plan for fixing it
(Especially important for a DS team)
</div>

---

<div markdown="1" class="slide slide-agenda">
## 📋 **Agenda**

- ✔ Context and background
- ✔ Accessibility Ready Status
- ✔ Minimum requirements
- ✔ Additional internal requirements
- 👉 Supported Assistive Technology
</div>

---

<div markdown="1" class="slide slide-section">
## **Supported Assistive Technology (§)**
</div>

---

<div markdown="1" class="slide">
### **Desktop screen readers** 💻🗣️

1. JAWS on Windows
2. NVDA on Windows
3. VoiceOver on macOS
</div>

---

<div markdown="1" class="slide">
### **Mobile screen readers** 📱🗣️

1. VoiceOver on iOS
2. TalkBack on Android
</div>

---

<div markdown="1" class="slide">
### Contrast themes on Windows

"Windows High Contrast mode" in Windows 10
</div>

---

<div markdown="1" class="slide">
### 👉📄 **Supported Assistive Technology**

A nearby document with the detail of the AT
</div>

---

<div markdown="1" class="slide">
### **Desktop screen readers** 💻🗣️

1. JAWS (`current-2`) with Chrome on Windows
2. NVDA (`current`) with Firefox on Windows
3. VoiceOver with Safari on macOS (`current`)
</div>

---

<div markdown="1" class="slide">
### **Mobile screen readers** 📱🗣️

1. VoiceOver with Safari on iOS (`current`)
2. TalkBack on Android (any version)

📝 Note: TalkBack (`current`) on Samsung devices
</div>

---

<div markdown="1" class="slide slide-question">
## **What about changes and updates**? 🤔

- All the Minimums and Additionals again?
- Roughly speaking: test the bit we changed
</div>

---

<div markdown="1" class="slide slide-agenda">
## 📋 **Recap**

- ✔ Context and background and SHWP
- ✔ Accessibility Ready Status
- ✔ Minimum requirements
- ✔ Additional internal requirements
- ✔ Supported Assistive Technology
</div>

---

<div markdown="1" class="slide slide-aside">
## Phew, that was also a lot! 🥵

But we're in the endgame now.
</div>

---

<div markdown="1" class="slide slide-title">
## 📅 **Epilogue: six months later**
</div>

---

<div markdown="1" class="slide">
### **They haven't revisited the document much** 😱

- The team has less time and more pressure
- but/and
- they have big Requirements documents<br>that include Accessibility Ready bits
</div>

---

<div markdown="1" class="slide">
### **Their components are Accessibility Ready** 🤩

- automated testing
- comprehensive manual testing
- following ARIA APG Patterns
- usability testing with disabled people
</div>

---

<div markdown="1" class="slide slide-mit">
## 💡 **Most important thing**

Use an "Accessibility Ready" document!

- It'll help the design system team
- It'll help the users of the design system
</div>

---

<div markdown="1" class="slide">
## **Thank you!** 🙇

Come and say hi at:

- [Digital Accessibility Discussion Group](https://wellingtonuni-professional.nz/course/digital-accessibility-discussion-group/)
- [Wellington Web Accessibility meetup](https://docs.google.com/forms/d/1aN_P6IRywG7VfuTlMMaxOj1zL94DyniduYyUIZEoCJg/viewform)
- [NZ Tech Rally conference](https://nztechrally.nz/)
</div>