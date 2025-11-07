<!-- Reference guide for component architecture -->
# Atomic Design Reference

This project organizes all UI code using the Atomic Design methodology. Components must live in the appropriate layer to keep responsibilities clear and promote reuse.

## Layers

- **Atoms** – Base building blocks (e.g., typography primitives, buttons, inputs, icons). They never import other project components and consume design tokens directly.
- **Molecules** – Compositions of atoms that provide a single, focused piece of UI such as `FormField` or `CreditIndicator`.
- **Organisms** – Complex components combining multiple molecules/atoms to create distinct sections, such as `CameraCapturePanel` or `CreditBalanceHeader`.
- **Templates** – Layout scaffolds arranging organisms into screen structures. They use placeholder data and manage layout concerns only.
- **Pages** – Concrete screens that wire templates with real data, navigation, and business logic.

## Guidelines

- Export components through barrel files within each layer for clean imports.
- Shared styling tokens live under `src/theme/tokens` and must be accessed via hooks/context rather than hard-coded values.
- Domain logic should reside in hooks (`src/hooks`) or services (`src/services`) that pages consume.
- Keep fixtures for mocked data in `src/fixtures` to support design-mode screens while backend integration is pending.
- When creating new UI parts, start at the lowest viable layer and move upward only when composition demands it.

