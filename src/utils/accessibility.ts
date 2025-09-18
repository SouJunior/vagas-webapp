/**
 * CSS utility classes for accessibility
 * Using Tailwind CSS
 */

export const ACCESSIBILITY_CLASSES = {
  /** Screen Reader Only - visible only to screen readers */
  srOnly: 'sr-only',

  /** Focus visible - shows when focused via keyboard */
  focusVisible:
    'focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-[99999]',

  /** Skip links - for keyboard navigation */
  skipLink:
    'focus:px-4 focus:py-2 focus:bg-blue-900 focus:text-white focus:text-sm focus:font-semibold focus:rounded focus:shadow-lg',

  /** Focus states for interactive elements */
  focusRing:
    'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',

  /** Accessible hover states */
  hoverAccessible: 'hover:bg-opacity-80 transition-opacity duration-200',

  /** High contrast for important texts */
  highContrast: 'text-gray-900 dark:text-gray-100',
} as const;

/**
 * Common ARIA attributes
 */
export const ARIA_ATTRIBUTES = {
  /** For dynamic content */
  livePolite: { 'aria-live': 'polite' as const },
  liveAssertive: { 'aria-live': 'assertive' as const },

  /** For atomic updates */
  atomic: { 'aria-atomic': 'true' as const },

  /** For loading states */
  busy: { 'aria-busy': 'true' as const },

  /** For expanded/collapsed content */
  expanded: (isExpanded: boolean) => ({ 'aria-expanded': isExpanded }),

  /** For hidden elements */
  hidden: { 'aria-hidden': 'true' as const },

  /** For descriptive labels */
  labelledBy: (id: string) => ({ 'aria-labelledby': id }),
  describedBy: (id: string) => ({ 'aria-describedby': id }),
} as const;
