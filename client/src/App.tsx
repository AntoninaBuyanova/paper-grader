import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import AIDetector from "@/pages/AIDetector";
import PlagiarismChecker from './pages/PlagiarismChecker';
import AIProofreading from './pages/AIProofreading';
import AIParaphrasing from './pages/AIParaphrasing';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-detector" element={<AIDetector />} />
          <Route path="/plagiarism-checker" element={<PlagiarismChecker />} />
          <Route path="/ai-proofreading" element={<AIProofreading />} />
          <Route path="/ai-paraphrasing-tool" element={<AIParaphrasing />} />
          {/* Fallback to 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
