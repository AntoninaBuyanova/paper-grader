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
        safelist: [
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
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      },
      'cssnano': { 
        preset: ['default', { 
          discardComments: { removeAll: true },
          normalizeWhitespace: false 
        }] 
      } 
    } : {})
  }
}; 