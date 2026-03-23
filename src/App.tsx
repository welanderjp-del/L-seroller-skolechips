import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'motion/react';
import { Users, RotateCcw } from 'lucide-react';
import { Language, PlayerRole, Role } from './types';
import { ROLES, UI_TEXT, COLORS } from './constants';

const LOGO_URL = 'https://i.ibb.co/fd0xBbnK/ikon.png';
// Short wind gust sound
const CARD_FLICK_SOUND_URL = 'https://assets.mixkit.co/active_storage/sfx/2002/2002-preview.mp3';

const FLAGS = {
  da: '🇩🇰',
  en: '🇬🇧',
  de: '🇩🇪'
};

export default function App() {
  const [language, setLanguage] = useState<Language>('da');
  const [playerCount, setPlayerCount] = useState<number>(3);
  const [playerRoles, setPlayerRoles] = useState<PlayerRole[]>([]);
  const [isFlipping, setIsFlipping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [readerHistory, setReaderHistory] = useState<number[]>([]);
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(180); // Start showing back (180deg)
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    audioRef.current = new Audio(CARD_FLICK_SOUND_URL);
    audioRef.current.volume = 0.6;
    audioRef.current.load();
  }, []);

  // Robust responsive scaling logic
  const updateScale = useCallback(() => {
    if (!containerRef.current) return;
    
    const winW = window.innerWidth;
    const winH = window.innerHeight;
    
    // Available space with margins
    const availableW = winW - 40;
    const availableH = winH - 120; // Account for header (80px) + some padding

    // Temporarily reset scale to measure actual size
    containerRef.current.style.transform = 'scale(1)';
    
    const contentW = containerRef.current.offsetWidth;
    const contentH = containerRef.current.offsetHeight;
    
    const scaleW = availableW / contentW;
    const scaleH = availableH / contentH;
    
    const newScale = Math.min(1, scaleW, scaleH);
    setScale(newScale);
    
    // Re-apply scale via state (React will re-render)
    containerRef.current.style.transform = `scale(${newScale})`;
  }, []);

  useEffect(() => {
    window.addEventListener('resize', updateScale);
    // Use a small delay to ensure DOM is ready
    const timer = setTimeout(updateScale, 100);
    return () => {
      window.removeEventListener('resize', updateScale);
      clearTimeout(timer);
    };
  }, [playerCount, updateScale, playerRoles]);

  const playFlickSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  const generateRoles = useCallback(() => {
    if (isFlipping) return;
    
    setIsFlipping(true);
    playFlickSound();

    // Logic for "The Reader" rotation
    let nextReaderIndex: number;
    const availablePlayers = Array.from({ length: playerCount }, (_, i) => i);
    const remainingInCycle = availablePlayers.filter(p => !readerHistory.includes(p));

    let newHistory = [...readerHistory];
    if (remainingInCycle.length === 0) {
      nextReaderIndex = Math.floor(Math.random() * playerCount);
      newHistory = [nextReaderIndex];
    } else {
      const randomIndex = Math.floor(Math.random() * remainingInCycle.length);
      nextReaderIndex = remainingInCycle[randomIndex];
      newHistory.push(nextReaderIndex);
    }
    setReaderHistory(newHistory);

    // Assign roles
    const readerRole = ROLES.find(r => r.id === 'reader')!;
    const otherRoles = ROLES.filter(r => r.id !== 'reader').sort(() => Math.random() - 0.5);
    
    const shuffledColors = [...COLORS].sort(() => Math.random() - 0.5);
    
    const newRoles: PlayerRole[] = [];
    let otherRoleIdx = 0;

    for (let i = 0; i < playerCount; i++) {
      const role = i === nextReaderIndex ? readerRole : otherRoles[otherRoleIdx++];
      newRoles.push({
        playerId: i + 1,
        role,
        color: shuffledColors[i % shuffledColors.length]
      });
    }

    // Flip logic:
    // First time: 180 -> 360 (half turn to show front)
    // Subsequent times: 360 -> 720 -> 1080 (full turn to show front again)
    const turnAmount = !hasStarted ? 180 : 360;
    const targetRotation = rotation + turnAmount;
    setRotation(targetRotation);

    // Update content halfway through the turn
    const midpoint = !hasStarted ? 300 : 600;
    setTimeout(() => {
      setPlayerRoles(newRoles);
      setHasStarted(true);
    }, midpoint);

    setTimeout(() => {
      setIsFlipping(false);
    }, 1200);
  }, [playerCount, readerHistory, isFlipping, rotation, hasStarted]);

  useEffect(() => {
    setReaderHistory([]);
    setHasStarted(false);
    setPlayerRoles([]);
    setRotation(180); // Reset to back view
  }, [playerCount]);

  return (
    <div className="fixed inset-0 bg-[#fdfdfd] text-[#2d3436] font-sans selection:bg-blue-100 overflow-hidden flex flex-col">
      {/* Header */}
      <header className="h-20 bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 flex items-center justify-between z-50 shrink-0">
        <div className="flex items-center gap-4">
          <a href="https://skolechips.dk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:opacity-80 transition-opacity shrink-0">
            <img src={LOGO_URL} alt="Skolechips Logo" className="h-10 w-auto" referrerPolicy="no-referrer" />
            <h1 className="text-xl md:text-2xl font-bold tracking-tight text-gray-800 truncate">
              {UI_TEXT.title[language]}
            </h1>
          </a>
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-xl border border-gray-100">
            <Users className="w-4 h-4 text-gray-400 ml-2 hidden sm:block" />
            <select 
              value={playerCount}
              onChange={(e) => setPlayerCount(Number(e.target.value))}
              className="bg-transparent px-2 py-1 text-sm focus:outline-none cursor-pointer font-bold"
            >
              {[1, 2, 3, 4, 5, 6].map(n => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            {(Object.keys(FLAGS) as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`text-2xl hover:scale-125 transition-transform p-1 rounded-lg ${language === lang ? 'bg-blue-50 ring-2 ring-blue-200' : 'opacity-50 hover:opacity-100'}`}
                title={lang.toUpperCase()}
              >
                {FLAGS[lang]}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center p-4 relative overflow-hidden">
        <div 
          ref={containerRef}
          style={{ 
            transformOrigin: 'center center',
            width: 'fit-content'
          }}
          className="flex flex-col items-center"
        >
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 w-full">
            {Array.from({ length: playerCount }).map((_, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3">
                <span className="text-xl font-black text-gray-200 select-none">
                  {idx + 1}
                </span>
                <Card 
                  role={playerRoles[idx]?.role} 
                  color={playerRoles[idx]?.color}
                  rotation={rotation}
                  language={language}
                />
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={generateRoles}
            disabled={isFlipping}
            className="mt-10 bg-[#2d3436] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-gray-200 hover:bg-black transition-all flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <RotateCcw className={`w-6 h-6 ${isFlipping ? 'animate-spin' : ''}`} />
            {UI_TEXT.newRoles[language]}
          </motion.button>
        </div>
      </main>
    </div>
  );
}

interface CardProps {
  role?: Role;
  color?: string;
  rotation: number;
  language: Language;
}

function Card({ role, color, rotation, language }: CardProps) {
  return (
    <div className="perspective-1000 w-56 h-72 relative">
      <motion.div
        animate={{
          rotateY: rotation,
          y: [0, -6, 0],
          rotateZ: [0, 1, -1, 0]
        }}
        transition={{
          rotateY: { duration: 1.2, ease: "easeInOut" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          rotateZ: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full shadow-2xl rounded-[2rem] cursor-default"
      >
        {/* Front Side */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden rounded-[2rem] p-6 flex flex-col items-center justify-center text-center border-[5px] border-white overflow-hidden"
          style={{ backgroundColor: color || '#fff' }}
        >
          {role && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="flex flex-col items-center w-full"
              lang={language}
            >
              <div className="w-10 h-1 bg-black/10 rounded-full mb-4" />
              <h3 className="text-xl font-black mb-3 text-gray-900 leading-tight break-words w-full">
                {role.title[language]}
              </h3>
              <p className="text-gray-700 text-xs font-medium leading-relaxed opacity-80 break-words w-full">
                {role.description[language]}
              </p>
            </motion.div>
          )}
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden rounded-[2rem] bg-white flex items-center justify-center border-[5px] border-gray-50"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/5 blur-2xl rounded-full" />
            <img src={LOGO_URL} alt="Logo" className="w-20 opacity-10 grayscale relative z-10" referrerPolicy="no-referrer" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
