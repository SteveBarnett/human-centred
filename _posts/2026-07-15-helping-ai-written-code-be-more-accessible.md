---
title: Helping AI-written code be more accessible
layout: post
description: Some quick notes of what engineers seem to be saying about accessibility and writing code with AI.
image: /img/2025/07/rcp.png
---

Some quick notes of what engineers seem to be saying about accessibility and writing code with AI.

## Things people are doing already

Most teams are already doing a mix of these things: static analysis, unit tests, integration tests, end-to-end (e2e) tests, CI. Accessibility can be included in each of these.

- Using an AI to **write the code**
- **Static analysis** with the `eslint-plugin-jsx-a11y` plugin
- **Unit tests** with `jest-axe`
    - I've seen most teams lean heavily here rather than further down the list. I have mostly been working with Design Systems teams, though.
- **Integration tests**
- **e2e tests** with `@axe-core/playwright`
    - using `getByRole` with accessible name
    - using `toHaveAttribute` for ARIA states
    - I've seen teams using `getByTestId`, and Quality Engineers recommend this as the preferred way. The argument is something like: we want to avoid using DOM-related selection in tests so that they're more resilient, and we don't care about the implementation. That's true for classes (that are used for presentation), but for accessibility tests we do care about the DOM, the implementation, the HTML and the ARIA attributes.
- Using **CI** to block a merge until all tests pass, including all the a11y tests above. That means failing tests return an error instead of a warning.

Some previous notes that cover some of these in a bit more detail: [Dessert: The Accessibility Testing Trifle](/2025/02/24/design-systems-accessibility-testing/#dessert-the-accessibility-testing-trifle); [Automated Accessibility Testing](/2025/06/05/automated-accessibility-testing/).


##  Things that look new to me

### Accessibility-flavoured prompt constraints

- Using a persistent context to guide the AI
    - `.cursorrules` or `.github/copilot-instructions.md` or `CLAUDE.md`
        - These point out to `SKILL.md` files for specific tasks and framework usage
    - For accessibility these will be about semantic HTML, accessible names and attributes, keyboard interactions, testing patterns (as noted in the previous section)
- Use libraries that are known to be accessible (see the next section for more on this)

### Allowing a11y tests failing the build "because AI-produced code"

- For many years, it's been fairly common for some teams to argue that accessibility-related tests shouldn't fail the build. Other tests do, but these should somehow be exempt.
- As a short-term measure, for a team that's working on a large backlog of issues, this could be workable. Although it would be better to add tests slowly and fix things as we go.
- Now it seem like more teams are willing to admit that AI-generated code is likely to be inaccessible, and we want to be sure we catch any issues.

## How to get the most (accessibility) out of a library (or a design system)

I think the best way to get the most accessibility out of a library is similar to [how to get the most (accessibility) out of a design system](/2022/05/25/how-to-get-the-most-(accessibility)-out-of-a-design-system/):

- Use the right components in the right place, following good documentation
- Run tests to check for any error or omissions we've made, or the library (or design system) has made
- Give feedback on the components, using the components, and the documentation

Here, the decision of which component to use might be by the human, or it might be from the AI reading the docs. It might start even earlier, with the designer labelled something a specific way in the design.

## See also

Eric Bailey wrote an excellent, thoughtful, piece: [Building a general-purpose accessibility agent—and what we learned in the process](https://github.blog/ai-and-ml/github-copilot/building-a-general-purpose-accessibility-agent-and-what-we-learned-in-the-process/) on the GitHub blog. My bullets from that, relevant to this:

- Vague SKILL files aren’t enough. Use your own detailed data of issues and fixes.
- Don't use it for complex code or high-risk patterns
    - Refer to a human instead
    - Watch for AI's tendency to prefer providing a solution
