import {createContext, useContext, useState, useEffect} from 'react';

const ThemeContext = createContext({theme: 'light', toggleTheme: () => {}});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  
    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }, [theme]);
  
    const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));
  
    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
  }
  
  export function useTheme() {
    return useContext(ThemeContext);
  }
  