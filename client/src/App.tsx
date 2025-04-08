import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import { lazy, Suspense, Component, ReactNode } from 'react';
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
const AIDetectorPT = lazy(() => import("@/pages/AIDetectorPT"));
const AIDetectorPTBR = lazy(() => import("@/pages/AIDetectorPTBR"));
const AIDetectorES = lazy(() => import("@/pages/AIDetectorES"));
const AIDetectorESMX = lazy(() => import("@/pages/AIDetectorESMX"));
const PlagiarismChecker = lazy(() => import("./pages/PlagiarismChecker"));
const PlagiarismCheckerPT = lazy(() => import("./pages/PlagiarismCheckerPT"));
const PlagiarismCheckerPTBR = lazy(() => import("./pages/PlagiarismCheckerPTBR"));
const PlagiarismCheckerES = lazy(() => import("./pages/PlagiarismCheckerES"));
const PlagiarismCheckerESMX = lazy(() => import("./pages/PlagiarismCheckerESMX"));
const AIProofreading = lazy(() => import("./pages/AIProofreading"));
const AIProofreadingPT = lazy(() => import("./pages/AIProofreadingPT"));
const AIProofreadingPTBR = lazy(() => import("./pages/AIProofreadingPTBR"));
const AIProofreadingES = lazy(() => import("./pages/AIProofreadingES"));
const AIProofreadingESMX = lazy(() => import("./pages/AIProofreadingESMX"));
const AIParaphrasing = lazy(() => import("./pages/AIParaphrasing"));
const AIParaphrasingPT = lazy(() => import("./pages/AIParaphrasingPT"));
const AIParaphrasingPTBR = lazy(() => import("./pages/AIParaphrasingPTBR"));
const AIParaphrasingES = lazy(() => import("./pages/AIParaphrasingES"));
const AIParaphrasingESMX = lazy(() => import("./pages/AIParaphrasingESMX"));

// Компонент загрузки для Suspense
const LoadingFallback = () => {
  console.log("Loading component...");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="w-16 h-16 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin mb-4"></div>
      <p className="text-lg font-medium text-slate-800">Loading myStylus...</p>
    </div>
  );
};

// Simple error boundary component
interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("React Error Boundary caught an error:", error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
          <p className="text-gray-700 mb-4">We're sorry, but there was an error loading the application.</p>
          <pre className="bg-gray-100 p-4 rounded w-full overflow-auto">{String(this.state.error)}</pre>
          <button 
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => window.location.reload()}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  console.log("App component rendering");
  return (
    <ErrorBoundary>
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
              <Route path="/ai-detector/pt" element={<AIDetectorPT />} />
              <Route path="/ai-detector/pt-br" element={<AIDetectorPTBR />} />
              <Route path="/ai-detector/es" element={<AIDetectorES />} />
              <Route path="/ai-detector/es-mx" element={<AIDetectorESMX />} />
              <Route path="/plagiarism-checker" element={<PlagiarismChecker />} />
              <Route path="/plagiarism-checker/pt" element={<PlagiarismCheckerPT />} />
              <Route path="/plagiarism-checker/pt-br" element={<PlagiarismCheckerPTBR />} />
              <Route path="/plagiarism-checker/es" element={<PlagiarismCheckerES />} />
              <Route path="/plagiarism-checker/es-mx" element={<PlagiarismCheckerESMX />} />
              <Route path="/ai-proofreading" element={<AIProofreading />} />
              <Route path="/ai-proofreading/pt" element={<AIProofreadingPT />} />
              <Route path="/ai-proofreading/pt-br" element={<AIProofreadingPTBR />} />
              <Route path="/ai-proofreading/es" element={<AIProofreadingES />} />
              <Route path="/ai-proofreading/es-mx" element={<AIProofreadingESMX />} />
              <Route path="/ai-paraphrasing-tool" element={<AIParaphrasing />} />
              <Route path="/ai-paraphrasing-tool/pt" element={<AIParaphrasingPT />} />
              <Route path="/ai-paraphrasing-tool/pt-br" element={<AIParaphrasingPTBR />} />
              <Route path="/ai-paraphrasing-tool/es" element={<AIParaphrasingES />} />
              <Route path="/ai-paraphrasing-tool/es-mx" element={<AIParaphrasingESMX />} />
              {/* Fallback to 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Router>
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
