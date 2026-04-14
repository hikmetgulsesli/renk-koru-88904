import { useNavigate, useLocation } from 'react-router-dom';

interface Tab {
  label: string;
  icon: string;
  route: string;
}

const TABS: Tab[] = [
  { label: 'Test', icon: 'palette', route: '/' },
  { label: 'İstatistik', icon: 'analytics', route: '/stats' },
  { label: 'Akademi', icon: 'school', route: '/academy' },
  { label: 'Ayarlar', icon: 'tune', route: '/settings' },
];

export function BottomTabBar(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 pb-safe bg-[#0e0e0e]/90 backdrop-blur-2xl z-50 rounded-t-3xl border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      {TABS.map((tab) => {
        const isActive = location.pathname === tab.route;
        return (
          <button
            key={tab.route}
            className={`flex flex-col items-center justify-center p-2 rounded-2xl transition-all cursor-pointer ${
              isActive
                ? 'text-[#6bff8f] bg-[#6bff8f]/10 scale-110'
                : 'text-neutral-500 hover:text-white'
            }`}
            onClick={() => navigate(tab.route)}
            aria-label={tab.label}
            aria-current={isActive ? 'page' : undefined}
          >
            <span className="material-symbols-outlined">{tab.icon}</span>
            <span className="text-[10px] uppercase tracking-widest font-bold mt-1">
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
