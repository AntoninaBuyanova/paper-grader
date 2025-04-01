const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    // Применяем PurgeCSS только в production
    isProduction && require('@fullhuman/postcss-purgecss')({
      content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
      ],
      // Классы, которые нужно оставить
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
      // Как извлекать классы из шаблонов
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
    // Минификация CSS
    isProduction && require('cssnano')({
      preset: ['default', {
        discardComments: { removeAll: true },
        normalizeWhitespace: false,
      }]
    }),
  ].filter(Boolean),
}; 