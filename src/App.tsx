import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import SmartNettsidePage from './pages/SmartNettsidePage';
import NettsidePage from './pages/NettsidePage';
import NettbutikkPage from './pages/NettbutikkPage';
import SkreddersomPage from './pages/SkreddersomPage';
import AutoFeedPage from './pages/AutoFeedPage';
import AIAgentPage from './pages/AIAgentPage';
import AIChatbotPage from './pages/AIChatbotPage';
import AutomatiseringPage from './pages/AutomatiseringPage';
import KundeservicePage from './pages/KundeservicePage';
import QognitoPage from './pages/QognitoPage';
import PersonvernPage from './pages/PersonvernPage';
import VilkarPage from './pages/VilkarPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/smart-nettside" element={<SmartNettsidePage />} />
      <Route path="/nettside" element={<NettsidePage />} />
      <Route path="/nettbutikk" element={<NettbutikkPage />} />
      <Route path="/skreddersom" element={<SkreddersomPage />} />
      <Route path="/autofeed" element={<AutoFeedPage />} />
      <Route path="/ai-agent" element={<AIAgentPage />} />
      <Route path="/ai-chatbot" element={<AIChatbotPage />} />
      <Route path="/automatisering" element={<AutomatiseringPage />} />
      <Route path="/kundeservice-platform" element={<KundeservicePage />} />
      <Route path="/qognito" element={<QognitoPage />} />
      <Route path="/personvern" element={<PersonvernPage />} />
      <Route path="/vilkar-og-betingelser" element={<VilkarPage />} />
    </Routes>
  );
}

export default App;
