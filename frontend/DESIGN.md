# Design System Strategy: TransGest

## 1. Overview & Creative North Star: "The Orchestrated Flow"
The management of school transportation is a high-stakes environment requiring precision, calm, and absolute reliability. This design system moves away from the "cluttered dashboard" trope and toward **"The Orchestrated Flow."** 

Our Creative North Star is an editorial approach to utility. We reject the rigidity of a standard grid in favor of **Intentional Asymmetry** and **Tonal Depth**. Instead of boxing data into rigid containers, we treat information as a curated narrative. The interface should feel like a high-end physical planner—sophisticated, layered, and breathable—instilling confidence in Angolan schools and parents alike.

---

## 2. Colors: Tonal Authority
We move beyond "Blue and Green" to a palette of **Deep Professionalism** and **Vitality**.

### The Color Logic
*   **Primary (`#0040a1`) & Primary Container (`#0056d2`):** Represent the "Deep Blue" of institutional trust. Use these for high-level navigation and primary actions (e.g., *Agendar Rota*).
*   **Secondary (`#1b6d24`) & Secondary Container (`#a0f399`):** The "Vital Green" represents safety and movement. Use this for status indicators (e.g., *Em Trânsito*) and success states.
*   **Tertiary (`#822800`):** Reserved for "Warm Alerts" and logistical warnings that aren't yet critical errors.

### The "No-Line" Rule
**Explicit Instruction:** Prohibit the use of 1px solid borders for sectioning content. To define space, use background shifts. 
*   **Sectioning:** A `surface-container-low` (`#f2f3fe`) card sitting on a `surface` (`#faf8ff`) background provides all the definition needed.
*   **Signature Textures:** For the Sidebar or Hero headers, use a subtle linear gradient from `primary` to `primary_container` (135°) to give the UI a "soul" that flat hex codes lack.

### Glassmorphism & Depth
For floating panels (like a quick-view student profile), use `surface_container_lowest` at 80% opacity with a `backdrop-filter: blur(12px)`. This "frosted glass" effect ensures the UI feels modern and integrated into the environment.

---

## 3. Typography: Editorial Precision
We utilize a dual-typeface system to balance authority with readability.

*   **Display & Headlines (Manrope):** This geometric sans-serif is our "Voice of Authority." The large `display-lg` (3.5rem) and `headline-md` (1.75rem) scales should be used with generous leading to create an editorial feel for page titles (e.g., *Gestão de Frotas*).
*   **Body & Labels (Inter):** The "Workhorse." Chosen for its exceptional legibility at small sizes. 
    *   `body-md` (0.875rem) is your standard for student lists and route details.
    *   `label-sm` (0.6875rem) in Uppercase with 0.05em tracking should be used for category headers (e.g., *ESTADO DO MOTORISTA*).

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are often "dirty." We achieve depth through the **Layering Principle**.

*   **The Stack:** 
    1.  **Base:** `surface` (#faf8ff)
    2.  **Sectioning:** `surface-container-low` (#f2f3fe)
    3.  **Active Elements:** `surface-container-lowest` (#ffffff)
*   **Ambient Shadows:** If a card must "float" (e.g., a critical notification), use a shadow tinted with the `on-surface` color: `box-shadow: 0 12px 32px -4px rgba(25, 27, 35, 0.06)`.
*   **Ghost Borders:** If accessibility requires a stroke, use `outline-variant` (`#c3c6d6`) at 20% opacity. Never use 100% opaque borders.

---

## 5. Components

### Sidebar Navigation (The Anchor)
*   **Visuals:** Use the `primary` color for the background, but utilize a subtle 10% opacity `surface_tint` overlay to create a "glow" behind the active menu item.
*   **Rounding:** Apply `xl` (1.5rem) rounding to the right-side corners of the active state indicator.

### Buttons (The Core Actions)
*   **Primary:** Solid `primary` with `on_primary` (White) text. Use `DEFAULT` (0.5rem) rounding.
*   **Secondary:** `secondary_container` background with `on_secondary_container` text. This is for "Safe" actions like *Confirmar Presença*.
*   **States:** On hover, shift the background color to its `fixed_dim` variant rather than just darkening.

### Information Cards (No-Divider Rule)
*   **Rule:** Forbid the use of horizontal lines to separate list items. 
*   **The Alternative:** Use `1.5rem` of vertical whitespace (Gap) and subtle `surface-container-high` background shifts on hover to denote interactivity.

### Status Chips (Gestão de Estados)
*   **In Trânsito:** `secondary_fixed` background with `on_secondary_fixed` text.
*   **Atrasado:** `tertiary_fixed` background with `on_tertiary_fixed` text.
*   **Shape:** Always use `full` (9999px) rounding for chips to contrast against the `DEFAULT` rounding of buttons.

### Specialized Component: "The Route Pulse"
A vertical timeline component for bus tracking. Use a `primary` dotted line (2px) with `secondary` pulses for completed stops. The container for each stop should be `surface-container-lowest` with a "Ghost Border."

---

## 6. Do’s and Don’ts

### Do
*   **Do** use Portuguese (Angola) terminology: *Carrinha* instead of *Van*, *Motorista* instead of *Condutor*.
*   **Do** embrace white space. If a screen feels "empty," it is usually working.
*   **Do** use `xl` rounding for large containers and `sm` for small inputs to create a sophisticated "Nested Rounding" logic.

### Don't
*   **Don't** use pure black (#000000) for text. Always use `on_surface` (#191b23) to maintain the premium, soft feel.
*   **Don't** use standard 1px borders. Use tonal shifts (`surface-container` tiers) to define areas.
*   **Don't** crowd the sidebar. Use `label-sm` headers to group navigation items with at least 24px of spacing between groups.

---

## 7. Responsiveness (Desktop to Tablet)
*   **Desktop (1440px+):** Sidebar remains expanded. Content uses a 12-column asymmetric layout (e.g., 8 cols for main data, 4 cols for lateral stats).
*   **Tablet (768px - 1024px):** Sidebar collapses to icons only (`surface-container-high` on hover). The layout shifts to a single-column stack for data cards to ensure touch-targets remain large enough for a "on-the-go" school coordinator.