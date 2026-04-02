import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return false; // ← DEFAULT IS LIGHT
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle Dark Mode"
      style={{
        width: '60px', height: '28px', borderRadius: '6px',
        border: isDark ? '1px solid #374151' : '1px solid #d1d5db',
        backgroundColor: isDark ? '#111827' : '#f3f4f6',
        position: 'relative', cursor: 'pointer',
        display: 'flex', alignItems: 'center',
        padding: '3px', flexShrink: 0,
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{
        width: '22px', height: '22px', borderRadius: '4px',
        backgroundColor: isDark ? '#1f2937' : '#ffffff',
        boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transform: isDark ? 'translateX(32px)' : 'translateX(0px)',
        transition: 'transform 0.3s ease, background-color 0.3s ease',
        flexShrink: 0,
      }}>
        {isDark ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="#facc15" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="#f59e0b" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.07-6.07l-.71.71M6.34 17.66l-.71.71M17.66 17.66l-.71-.71M6.34 6.34l-.71-.71M12 5a7 7 0 100 14A7 7 0 0012 5z" />
          </svg>
        )}
      </div>
      <div style={{
        position: 'absolute', width: '22px', height: '22px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        left: isDark ? '3px' : 'auto', right: isDark ? 'auto' : '3px',
        opacity: 0.35,
      }}>
        {isDark ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#f59e0b" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.07-6.07l-.71.71M6.34 17.66l-.71.71M17.66 17.66l-.71-.71M6.34 6.34l-.71-.71M12 5a7 7 0 100 14A7 7 0 0012 5z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#6b7280" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        )}
      </div>
    </button>
  );
}