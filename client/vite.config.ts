import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Determine if we're in production mode
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [
    react(),
    // Add any additional plugins as needed
    ...(isProduction ? [{ name: 'rollup-plugin-visualizer' }] : [])
  ],
  build: {
    cssCodeSplit: true, // Split CSS into chunks per page
    cssMinify: 'lightningcss', // Use lightningcss for better CSS minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: isProduction, // Remove console logs in production
        drop_debugger: isProduction
      }
    },
    // Optimize the output
    outDir: 'dist',
    assetsDir: 'assets',
    assetsInlineLimit: 4096, // Only inline assets < 4kb
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Split code into logical chunks
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
          
          if (id.includes('node_modules/')) {
            return 'vendor';
          }
          
          if (id.includes('/components/')) {
            return 'components';
          }
          
          // Page-specific chunks
          if (id.includes('/pages/')) {
            const pageName = id.split('/pages/')[1].split('/')[0];
            return `page-${pageName}`;
          }
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name || '';
          
          // CSS files: separate critical from non-critical
          if (info.endsWith('.css')) {
            // Keep the main CSS file name consistent for cache busting
            return 'assets/[name]-[hash][extname]';
          }
          
          // For fonts
          if (info.endsWith('.ttf') || info.endsWith('.otf') || 
              info.endsWith('.woff') || info.endsWith('.woff2')) {
            return 'assets/fonts/[name][extname]';
          }
          
          // For all other assets
          return 'assets/[name]-[hash][extname]';
        },
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    postcss: './postcss.config.cjs',
    modules: {
      generateScopedName: isProduction ? '[hash:base64:8]' : '[local]_[hash:base64:5]',
    },
    // Optimize CSS processing
    devSourcemap: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  },
  server: {
    // Настройки сервера разработки
    open: false,
    hmr: true,
  },
}); 