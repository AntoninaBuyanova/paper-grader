import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';

// Определяем, находимся ли мы в режиме production
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [
    react(),
    // Добавляем визуализатор размера бандла в режиме production
    ...(isProduction ? [{ name: 'rollup-plugin-visualizer' }] : [])
  ],
  build: {
    cssCodeSplit: true,
    minify: 'terser', // Более эффективная минификация с помощью terser
    terserOptions: {
      compress: {
        drop_console: isProduction, // Удаляем console.log в production
        drop_debugger: isProduction
      }
    },
    // Включаем CSS-оптимизацию
    cssMinify: 'lightningcss',
    rollupOptions: {
      output: {
        // Более детальное разделение кода
        manualChunks: (id) => {
          // Критический путь - компоненты, необходимые при первой загрузке
          if (id.includes('/components/HeroSection') || 
              id.includes('/components/Header') || 
              id.includes('/components/Footer')) {
            return 'critical';
          }
          
          // React и React DOM в отдельном чанке
          if (id.includes('node_modules/react') || 
              id.includes('node_modules/react-dom')) {
            return 'react-vendor';
          }
          
          // UI компоненты в отдельном чанке
          if (id.includes('/components/ui')) {
            return 'ui-components';
          }
          
          // Разделение по страницам и разделам
          if (id.includes('/pages/')) {
            // Динамический импорт страниц
            const page = id.split('/pages/')[1].split('/')[0];
            return `page-${page}`;
          }
          
          // Разделение по функциональным компонентам
          if (id.includes('/components/ai-detection')) return 'ai-detection';
          if (id.includes('/components/ai-paraphrasing')) return 'ai-paraphrasing';
          if (id.includes('/components/ai-proofreading')) return 'ai-proofreading';
          if (id.includes('/components/plagiarism-checker')) return 'plagiarism-checker';
          
          // Дополнительные библиотеки в отдельном чанке
          if (id.includes('node_modules/')) {
            return 'vendor';
          }
        },
        // Настройка именования файлов
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name || '';
          if (info.endsWith('.ttf') || info.endsWith('.otf')) {
            return 'assets/fonts/[name][extname]';
          }
          if (info.endsWith('.css')) {
            return 'assets/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      }
    },
    assetsInlineLimit: 0, // Не встраивать шрифты
    reportCompressedSize: true, // Отчет о размере сжатых файлов
    chunkSizeWarningLimit: 1000, // Предупреждение при больших чанках (в КБ)
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  optimizeDeps: {
    exclude: ['src/fonts/*']
  },
  server: {
    // Настройки сервера разработки
    open: false,
    hmr: true,
  },
  css: {
    postcss: './postcss.config.cjs',
    // Разделение критического и некритического CSS
    modules: {
      generateScopedName: isProduction ? '[hash:base64:8]' : '[local]_[hash:base64:5]',
    },
    // Оптимизация встроенных стилей
    devSourcemap: true,
  },
}); 