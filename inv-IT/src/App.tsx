import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";


// src/App.tsx

// You can keep your imports if you have them
// import './App.css'

// src/App.tsx
// function App() {
//   return (
//     <div className="h-screen w-full bg-background p-8 text-4xl font-bold text-foreground">
//       If you can see this with your theme's background and text color, you have won.
//     </div>
//   )
// }
// export default App

// src/App.tsx
// src/App.tsx
// function App() {
//   return (
//     <div className="h-screen w-full bg-background p-8 text-4xl">
//       Test 2: This should have your theme's background color.
//     </div>
//   )
// }
// export default App

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
