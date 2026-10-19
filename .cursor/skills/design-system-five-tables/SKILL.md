---
name: design-system-five-tables-five-sectors-one-community
description: >
  Apply the Five Tables — Five Sectors. One Community. design system when building or updating UI.
  Use when creating components, choosing colors or typography,
  or reviewing designs for marketing interfaces.
---

# Five Tables — Five Sectors. One Community. — Design System Skill

## When to Use

- Building new UI components for Five Tables — Five Sectors. One Community..
- Reviewing or updating existing component styles.
- Choosing colors, typography, or spacing for marketing pages.
- Checking designs against the extracted token set.

## Context

- **Product:** Five Tables — Five Sectors. One Community. — https://preview--pixel-perfect-match-0394.lovable.app/?__lovable_receipt=mat_0v0nzaa29f9tav4emezvpvt9kq
- **Surface:** marketing
- **Audience:** Business decision-makers and potential customers
- **Character:** Conversion-focused marketing presence with a minimal, restrained color palette and a complementary two-font typographic system.

## Tokens

### Colors

| Token | Value | Role |
|-------|-------|------|
| color-1 | `#000000` | Text Primary |

### Typography

**Font stack:** Cormorant Garamond, Jost

| Level | Size | Usage |
|-------|------|-------|
| text-xs | 11px | Captions, metadata |
| text-sm | 12px | Labels, secondary text |
| text-base | 14px | Body text (default) |
| text-lg | 16px | Subheadings, emphasis |
| text-xl | 20px | Section headings |
| text-2xl | 24px | Section headings |
| text-3xl | 60px | Section headings |
| text-4xl | 72px | Section headings |

**Weight scale:** 300 · 400 · 500
**Line heights:** 72px · 60px · 16.32px · 28px · 32px · 26px · 39px · 15.5429px · 24px · 20px · 16px

### Spacing

**Base unit:** 8px

`space-1: 4px` · `space-2: 8px` · `space-3: 16px` · `space-4: 20px` · `space-5: 24px` · `space-6: 32px` · `space-7: 40px` · `space-8: 48px` · `space-9: 64px` · `space-10: 75px` · `space-11: 96px` · `space-12: 128px` · `space-13: 267px` · `space-14: 272px` · `space-15: 560px`

### Shapes

**Border radius:** _None detected._

### Elevation

- **shadow-sm:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`
- **shadow-md:** `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px`

### Motion

- **duration-fast:** `all`
- **duration-fast:** `none`
- **duration-fast:** `color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), outline-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), text-decoration-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), fill 0.15s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-from 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-via 0.15s cubic-bezier(0.4, 0, 0.2, 1), --tw-gradient-to 0.15s cubic-bezier(0.4, 0, 0.2, 1)`
- **duration-slow:** `1.4s cubic-bezier(0.2, 0.7, 0.2, 1) both fadeUp`

## Component Inventory

- **Buttons:** 3 detected
- **Links:** 19 detected
- **Navigation:** 1 elements
- **Lists:** 1 detected
- **Images:** 7 detected

## Constraints

### Always

- Use tokens from the tables above — do not introduce new values.
- Include hover, focus-visible, and disabled states for interactive elements.
- Follow the 8px spacing grid.
- Meet WCAG 2.2 AA contrast minimums.

### Never

- Do not introduce colors outside the extracted palette.
- Do not use arbitrary spacing values — stick to the scale.
- Do not use full-uppercase text for body or paragraph content.
- Do not nest interactive elements (e.g. buttons inside links).
- Do not ship components without defining hover, focus-visible, and disabled states.

## Tone

Concise, confident, implementation-focused. Avoid filler preambles.

## Authoring Workflow

When creating or documenting a component for this system:

1. State intent — one sentence on purpose.
2. Map tokens — list every token the component uses.
3. Define anatomy — named parts with token assignments.
4. Specify states — default, hover, focus-visible, active, disabled, loading, error, empty.
5. Describe interactions — keyboard, pointer, touch, edge cases.
6. Add a11y criteria — testable pass/fail checks.
7. List anti-patterns — concrete misuse examples.
8. Close with the Definition of Done checklist.

## Output Structure

Component guidelines must contain, in order:

1. Overview (purpose, when to use, when not to use)
2. Tokens and foundations
3. Anatomy, variants, responsive behavior
4. States and interactions
5. Accessibility (ARIA, contrast, focus, screen reader)
6. Content guidelines (copy rules, tone)
7. Anti-patterns with reasoning

## Component Requirements

- Reference only tokens from the tables above.
- Define all states: default, hover, focus-visible, active, disabled, loading, error.
- Handle edge cases: empty, overflow, truncation, max content.
- Include keyboard navigation behavior.
- Document ARIA roles and labels.

## Definition of Done

- Default state renders (smoke test).
- All states visually verified.
- Zero hardcoded visual values — tokens only.
- Keyboard navigation works without pointer.
- No critical a11y violations.
- Tested at min and max breakpoint.
- At least one anti-pattern documented.
- Purpose, usage, and limitations documented.

## Additional Resources

- Full design system extract: [design-system.md](design-system.md)
- Locked brand / homepage context: [brand-context.md](brand-context.md)
