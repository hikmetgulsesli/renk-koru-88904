import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainMenu } from './pages/MainMenu';
import { DifficultySelect } from './pages/DifficultySelect';
import { Ayarlar } from './screens/Ayarlar';
import { BilgiEkrani } from './screens/BilgiEkrani';
import { OyunEkrani } from './screens/OyunEkrani';
import { SonucEkrani } from './screens/SonucEkrani';
import { useNavigate } from 'react-router-dom';

function SettingsPage() {
  const navigate = useNavigate();
  return <Ayarlar onBack={() => navigate('/')} />;
}

function AboutPage() {
  const navigate = useNavigate();
  return <BilgiEkrani onBack={() => navigate('/')} />;
}

function GamePage() {
  const navigate = useNavigate();
  return <OyunEkrani difficulty="easy" onGameOver={() => navigate('/result')} />;
}

function ResultPage() {
  const navigate = useNavigate();
  return (
    <SonucEkrani
      score={0}
      highScore={0}
      onRestart={() => navigate('/difficulty')}
      onBackToMenu={() => navigate('/')}
    />
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/difficulty" element={<DifficultySelect />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
