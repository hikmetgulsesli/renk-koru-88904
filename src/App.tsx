import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainMenu } from "./pages/MainMenu";
import { DifficultySelect } from "./pages/DifficultySelect";
import { ResultScreen } from "./pages/ResultScreen";

function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-background text-on-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-headline font-bold text-primary mb-4">{title}</h1>
        <p className="text-on-surface-variant">Bu sayfa yakında aktif olacak.</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/difficulty" element={<DifficultySelect />} />
        <Route path="/game" element={<PlaceholderPage title="Oyun Ekranı" />} />
        <Route path="/result" element={<ResultScreen />} />
        <Route path="/settings" element={<PlaceholderPage title="Ayarlar" />} />
        <Route path="/about" element={<PlaceholderPage title="Bilgi Ekranı" />} />
        <Route path="/stats" element={<PlaceholderPage title="İstatistikler" />} />
        <Route path="/academy" element={<PlaceholderPage title="Akademi" />} />
        <Route path="*" element={<MainMenu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
