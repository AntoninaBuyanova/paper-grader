import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import { lazy, Suspense } from 'react';
import StyleLoader from '@/components/StyleLoader';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

// Заменяем прямые импорты на ленивую загрузку
const Home = lazy(() => import("@/pages/Home"));
const PTHome = lazy(() => import("@/pages/PTHome"));
const PTBRHome = lazy(() => import("@/pages/PTBRHome"));
const ESHome = lazy(() => import("@/pages/ESHome"));
const ESMXHome = lazy(() => import("@/pages/ESMXHome"));
const AIDetector = lazy(() => import("@/pages/AIDetector"));
const PlagiarismChecker = lazy(() => import("./pages/PlagiarismChecker"));
const AIProofreading = lazy(() => import("./pages/AIProofreading"));
const AIParaphrasing = lazy(() => import("./pages/AIParaphrasing"));

// Компонент загрузки для Suspense
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-slate-50">
    <div className="w-16 h-16 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Компонент для оптимизации загрузки стилей */}
      <StyleLoader />
      
      <Router>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pt" element={<PTHome />} />
            <Route path="/pt-br" element={<PTBRHome />} />
            <Route path="/es" element={<ESHome />} />
            <Route path="/es-mx" element={<ESMXHome />} />
            <Route path="/ai-detector" element={<AIDetector />} />
            <Route path="/plagiarism-checker" element={<PlagiarismChecker />} />
            <Route path="/ai-proofreading" element={<AIProofreading />} />
            <Route path="/ai-paraphrasing-tool" element={<AIParaphrasing />} />
            {/* Fallback to 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
      <Toaster />
      <Analytics />
      <SpeedInsights />
    </QueryClientProvider>
  );
}

export default App;
