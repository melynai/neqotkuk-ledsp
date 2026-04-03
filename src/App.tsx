import { BrowserRouter, Routes, Route } from "react-router-dom";
import PasswordGate from "./components/PasswordGate";
import Index from "./pages/Index";
import TeamPage from "./pages/TeamPage";
import ReferencePage from "./pages/ReferencePage";
import ChecklistPage from "./pages/ChecklistPage";
import GanttPage from "./pages/GanttPage";
import ResumesPage from "./pages/ResumesPage";
import DigitalPlanPage from "./pages/DigitalPlanPage";
import ScopeBrain from "./pages/ScopeBrain";
import StrategyExamplePage from "./pages/StrategyExamplePage";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <PasswordGate>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/references" element={<ReferencePage />} />
        <Route path="/checklist" element={<ChecklistPage />} />
        <Route path="/gantt" element={<GanttPage />} />
        <Route path="/resumes" element={<ResumesPage />} />
        <Route path="/digital-plan" element={<DigitalPlanPage />} />
        <Route path="/melyn-brain" element={<ScopeBrain />} />
        <Route path="/strategy-example" element={<StrategyExamplePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PasswordGate>
  </BrowserRouter>
);

export default App;
