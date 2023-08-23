---
title: "Accessible Engineering: Impact Map"
layout: post
description: My approach to helping teams make more accessible products, in an Impact Map format.
image: /img/2023/04/im.png
category: reference
---

My approach to helping teams make more accessible products changes over time. Here’s where my focus is at the moment.

## Impact Maps, in general

Quick aside: [impact maps](https://www.impactmapping.org/). They’re great! Roughly speaking, they’re mind maps that go Goal, Actor, Impact, Deliverable, Measurable. Or, if you prefer: Why, Who, How, What, Check.

## My Impact Map

- An accessible product
	- Engineers
		- Think more broadly.
			- Use clear, task-oriented, language.
				- **Every accessibility ticket includes Functional Categories and/or user tasks instead of generic "for accessibility".**
			- Consider what's between the human and the UI.
				- Ticket discussions include variations of Auditory, Cognitive, Physical, Visual Functional Categories.
		- Under-engineer more often.
			- Understand ARIA. Know the [Rules of ARIA](https://www.w3.org/TR/using-aria/#NOTES).
				- **Uses of ARIA are replaced by HTML wherever possible.**
			- Understand the accessibility tree.
				- Check the name, role, value, of interactive elements.
		- Do more a11y testing, lightly.
			- Do regular [QACs](/2021/12/13/qac/).
				- **At least one QAC per sprint, per team.**
			- Add `axe` in tests. (In particular in End-to-end and Integration tests.)
				- Every repo has at least one axe test.
	- Me
		- Focus more on solutions, less on problems.
			- In audits.
				- **Every audit issue has a very detailed "how to fix it".**
			- In support.
				- Every thread focuses on the benefits and outcomes of the fix.
		- Encourage more (accessiblity) champion-like behaviours.
			- Refer people to other people who've solved this.
				- **Every question links back to a similar question.**
			- Ask them to speak at community events (not just Accessibility ones).
				- Asked one person a week about talking (Not everyone will say yes!).
		- Acknowledge and appreciate people's efforts more often.
			- In support threads.
				- **Every thread has acknowledgement and appreciation of the effort.**
			- In audit follow-ups.
				- **Every audit follow-up meeting has acknowledgement and appreciation the effort.**