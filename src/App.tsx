import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Articles from "./pages/Articles";
import ArticlePage from "./pages/ArticlePage";
import NotFound from "./pages/NotFound";
import ProjectsPage from "./pages/ProjectsPage";

import { useScrollFlash } from "@/hooks/useScrollFlash";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingHomeButton from "@/components/FloatingHomeButton";


const queryClient = new QueryClient();

const App = () => {
  useScrollFlash();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <FloatingHomeButton />

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/articles/:slug" element={<ArticlePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
