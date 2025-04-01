import { useEffect } from 'react';

/**
 * Компонент для отложенной загрузки некритических стилей
 * Загружает стили только после полной загрузки страницы
 */
const StyleLoader: React.FC = () => {
  useEffect(() => {
    // Массив некритических стилей для отложенной загрузки
    const nonCriticalStyles = [
      '/src/fonts/index.css', // Полная загрузка всех шрифтов
      // Можно добавить другие стили по мере необходимости
    ];

    // Функция для загрузки CSS-файла
    const loadStylesheet = (url: string) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;
      document.head.appendChild(link);
    };

    // Функция для загрузки стилей после отрисовки основного контента
    const loadNonCriticalStyles = () => {
      requestIdleCallback(() => {
        nonCriticalStyles.forEach(url => loadStylesheet(url));
      }, { timeout: 2000 });
    };

    // Используем requestIdleCallback или его полифилл для загрузки стилей в свободное время
    if ('requestIdleCallback' in window) {
      if (document.readyState === 'complete') {
        loadNonCriticalStyles();
      } else {
        window.addEventListener('load', loadNonCriticalStyles);
        return () => window.removeEventListener('load', loadNonCriticalStyles);
      }
    } else {
      // Для браузеров без поддержки requestIdleCallback используем setTimeout
      setTimeout(loadNonCriticalStyles, 1000);
    }
  }, []);

  return null;
};

export default StyleLoader; 