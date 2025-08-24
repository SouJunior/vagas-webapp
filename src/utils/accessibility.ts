/**
 * Classes CSS utilitárias para acessibilidade
 * Utilizando Tailwind CSS
 */

export const ACCESSIBILITY_CLASSES = {
    // Screen Reader Only - visível apenas para leitores de tela
    srOnly: 'sr-only',

    // Focus visible - mostra quando focado via teclado
    focusVisible:
        'focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50',

    // Skip links - para navegação por teclado
    skipLink:
        'focus:px-4 focus:py-2 focus:bg-blue-900 focus:text-white focus:text-sm focus:font-semibold focus:rounded focus:shadow-lg',

    // Focus states para elementos interativos
    focusRing:
        'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',

    // Estados de hover acessíveis
    hoverAccessible: 'hover:bg-opacity-80 transition-opacity duration-200',

    // Contraste alto para textos importantes
    highContrast: 'text-gray-900 dark:text-gray-100',
} as const;

/**
 * Atributos ARIA comuns
 */
export const ARIA_ATTRIBUTES = {
    // Para conteúdo dinâmico
    livePolite: { 'aria-live': 'polite' as const },
    liveAssertive: { 'aria-live': 'assertive' as const },

    // Para updates atômicos
    atomic: { 'aria-atomic': 'true' as const },

    // Para estados de loading
    busy: { 'aria-busy': 'true' as const },

    // Para conteúdo expandido/colapsado
    expanded: (isExpanded: boolean) => ({ 'aria-expanded': isExpanded }),

    // Para elementos ocultos
    hidden: { 'aria-hidden': 'true' as const },

    // Para labels descritivos
    labelledBy: (id: string) => ({ 'aria-labelledby': id }),
    describedBy: (id: string) => ({ 'aria-describedby': id }),
} as const;
