const isProduction = process.env.NODE_ENV === 'production';

export default {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    ...(isProduction ? { 
      cssnano: { 
        preset: ['default', { 
          discardComments: { removeAll: true },
          normalizeWhitespace: false 
        }] 
      } 
    } : {})
  }
}; 