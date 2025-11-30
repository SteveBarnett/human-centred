---
layout: page
title: Getting "Accessibility Ready" for a Design System
updated: 2025-12-01
---

(Or: **Baking in** Accessibility 🧑‍🍳 💻)

---

## 💡 Most important thing

Use an "Accessibility Ready" document!

- It'll help the design system team
- It'll help the users of the design system

---

## **Design System?** 😵‍💫

- Library of reusable components
- Documentation and style guides

---

![Screenshot of the gov.uk design system, showing components list and navigation](/img/2025/11/govuk.png)

---

## **Hello there!** 👋

### Steve Barnett

- Digital Accessibility Consultant, Intopia
- 💁 accessibility, inclusion, equitable design 
- `intopia.digital`

---

### (Still) Steve Barnett

- FED since 2005
- a11y in job title since 2021
- `human-centred.nz`

---

## 📋 **Agenda**

- 👉 Context and background
- Accessibility Ready Status
- Minimum requirements
- Additional internal requirements
- Supported Assistive Technology

---

## Context and background
---

### 📖 **Context**

- Design System team of a11y-mature devs
- Doing good work already, but ad hoc
- Documentation for consumers not great

---

### 📈 **(Slightly) aspirational**

- Not just what they do now
- Achievable, but takes work
- This was the team's idea 😍

---

### **A good "Accessibility Ready" document** is...

- **SHWP**!
- **S**hort, **H**elpful, **W**ide, **P**lain language

---

### **Why "short"?** 🤔<br>**(a.k.a. "More info on another page")**

- Short enough that people read it (and use it!)
- Good RUX (🥇) and FTUX
- Just enough detail

---

## 📋 **Agenda**

- ✔ Context and background
- 👉 Accessibility Ready Status
- Minimum requirements
- Additional internal requirements
- Supported Assistive Technology

---

## **“Accessibility Ready” Status**

- (The team call it "WCAG 2.2 AA+" 🤓)
- Not just a pass/fail, more like a range

---

### **WCAG 2.2 AA?** 😵‍💫

- Web Content Accessibility Guidelines
- Version 2.2 (current)
- All Success Criteria at Level A and Level AA
- "It's accessible" often means "Meets WCAG 2.2 AA"

---

### **Why "wide" (for an Accessibility Ready status)?** 🤔

- Ensure high level of accessibility
- But/and allow for releasing fairly timeously
- But/and allow for improvements (now or later)

---

1. **Minimum requirements** <br>for a component to be released<br>as “Accessibility Ready” ⏩

---

2. **Additional internal requirements** <br>for a component to meet our standards ⏩

---

📝 **Note:** Consumers only see "Accessibility Ready".<br><br><br>Updates maintain or improve the accessibility.

---

## 📋 **Agenda**

- ✔ Context and background
- ✔ Accessibility Ready Status
- 👉 Minimum requirements
- Additional internal requirements
- Supported Assistive Technology

---

## Minimum requirements
---

**Automated tests** all pass

---

**Manual tests** all pass,<br>across our Supported Assistive Technology ⏩

---

All **WCAG 2.2 Level A and AA**<br>Success Criteria are met

---

No **High Severity usability issues** exist
(Things that aren't WCAG failures)
(But are known issues)

---

**Example of a High Severity usability issue**

Focus indicators are not visible in WHCM
(Usually from CSS `box-shadow`, which WHCM removes)

---

Clear and concise **documentation** is present

---

### **"Helpful" how?** 🤔

- When to use (and when not to)
- How to use
- Content guidelines
- Accessibility (features, e.g. `aria-label`)

---

An **Accessibility Specialist** has confirmed 

- all WCAG 2.2 A and AA Success Criteria met
- no High Severity usability issues

---

### **"Accessibility Specialist"? Who's that?** 🤔

- It depends 😬
- Ideally, full-time accessibility person
- Can be internal or external person
- Can be a champion or someone similar

---

## Phew, that was a lot! 🥵

---

## **Quick review of Minimum requirements**

- Tests pass
- WCAG 2.2 AA+
- Good docs
- Tiny audit

---

## 📋 **Agenda**

- ✔ Context and background
- ✔ Accessibility Ready Status
- ✔ Minimum requirements
- 👉 Additional internal requirements
- Supported Assistive Technology

---

## Additional internal requirements

---

The following **WCAG Level AAA SC** are met:

- 1.4.6 Contrast (Enhanced) (`7:1`)
- 2.4.13 Focus Appearance (`2px, 3:1`)
- 2.5.5 Target Size (Enhanced) (`44px`)

---

Any Medium or Low Severity usability issues are **resolved** or **prioritised**

---

### **"resolved or prioritised"**? 🤔

Fix it now, or have a specific plan for fixing it
(Especially important for a DS team)

---

## 📋 **Agenda**

- ✔ Context and background
- ✔ Accessibility Ready Status
- ✔ Minimum requirements
- ✔ Additional internal requirements
- 👉 Supported Assistive Technology

---

## **Supported Assistive Technology (§)**

---

### **Desktop screen readers** 💻🗣️

1. JAWS on Windows
2. NVDA on Windows
3. VoiceOver on macOS

---

### **Mobile screen readers** 📱🗣️

1. VoiceOver on iOS
2. TalkBack on Android

---

### Contrast themes on Windows

"Windows High Contrast mode" in Windows 10

---

### 👉📄 **Supported Assistive Technology**

A nearby document with the detail of the AT

---

### **Desktop screen readers** 💻🗣️

1. JAWS (`current-2`) with Chrome on Windows
2. NVDA (`current`) with Firefox on Windows
3. VoiceOver with Safari on macOS (`current`)

---

### **Mobile screen readers** 📱🗣️

1. VoiceOver with Safari on iOS (`current`)
2. TalkBack on Android (any version)

📝 Note: TalkBack (`current`) on Samsung devices

---

## **What about changes and updates**? 🤔

- All the Minimums and Additionals again?
- Roughly speaking: test the bit we changed

---

## 📋 **Recap**

- ✔ Context and background and SHWP
- ✔ Accessibility Ready Status
- ✔ Minimum requirements
- ✔ Additional internal requirements
- ✔ Supported Assistive Technology

---

## Phew, that was also a lot! 🥵

But we're in the endgame now.

---

## 📅 **Epilogue: six months later**

---

### **They haven't revisited the document much** 😱

- The team has less time and more pressure
- but/and
- they have big Requirements documents<br>that include Accessibility Ready bits

---

### **Their components are Accessibility Ready** 🤩

- automated testing
- comprehensive manual testing
- following ARIA APG Patterns
- usability testing with disabled people

---

## 💡 **Most important thing**

Use an "Accessibility Ready" document!

- It'll help the design system team
- It'll help the users of the design system

---

## **Thank you!** 🙇

Come and say hi at:

- [Digital Accessibility Discussion Group](https://wellingtonuni-professional.nz/course/digital-accessibility-discussion-group/)
- [Wellington Web Accessibility meetup](https://docs.google.com/forms/d/1aN_P6IRywG7VfuTlMMaxOj1zL94DyniduYyUIZEoCJg/viewform)
- [NZ Tech Rally conference](https://nztechrally.nz/)
