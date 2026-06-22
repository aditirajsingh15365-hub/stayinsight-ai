import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AIInsights from "./pages/AIInsights";
import ReviewAnalyzer from "./pages/ReviewAnalyzer";
import About from "./pages/About";
import Login from "./pages/Login";
import ComponentShowcase from "./pages/ComponentShowcase";

function App() {
  return (
    <Routes>
      <Route path="/components"element={<ComponentShowcase />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/ai-insights" element={<AIInsights />} />
      <Route path="/review-analyzer" element={<ReviewAnalyzer />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;