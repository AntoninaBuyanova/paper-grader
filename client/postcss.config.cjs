const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    ...(isProduction ? {
      '@fullhuman/postcss-purgecss': {
        content: [
          './index.html',
          './src/**/*.{js,jsx,ts,tsx}',
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: {
          standard: [
            /^font-/,
            /^bg-/,
            /^text-/,
            /^hover:/,
            /^focus:/,
            /^lg:/,
            /^md:/,
            /^sm:/,
            /^xl:/,
            /^h-/,
            /^w-/,
            /^m-/,
            /^p-/,
            /^border/,
            /^rounded/,
            /^flex/,
            /^grid/,
            /^transform/,
            /^transition/,
            /^animate/,
            /^shadow/,
            /^opacity/,
            'loading-spinner',
            'container',
            'font-orbikular',
            'font-aeonik',
            'font-inter',
            'ai-detection-hero',
            'ai-detection-benefits',
          ],
          deep: [/^hero-/, /^benefits-/],
          greedy: [/^prose$/]
        },
        // More aggressive unused CSS removal
        fontFace: true,      // Remove unused @font-face rules
        keyframes: true,     // Remove unused @keyframes rules
        variables: true,     // Remove unused CSS variables
        rejected: true       // Report removed selectors for debugging
      },
      'cssnano': {
        preset: ['default', {
          discardComments: { removeAll: true },
          normalizeWhitespace: false,
          // Additional optimizations
          discardUnused: true,
          mergeRules: true,
          reduceIdents: true,
          zindex: false      // Don't normalize z-index
        }]
      }
    } : {})
  }
}; 