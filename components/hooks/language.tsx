'use client';

import {ReactNode, createContext, useContext, useEffect, useState} from "react";

export type Language = "finnish" | "english";

interface LanguageContextType {
    lang: Language;
    toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Language>("finnish");

    function handleLanguageUpdate() {
        if (typeof window !== "undefined") {
            const params = new URLSearchParams(window.location.search);
            const chosenLang = params.get("lang");
            setLang(chosenLang === "english" ? "english" : "finnish");
        }
    }

    useEffect(() => {
        handleLanguageUpdate();
        window.addEventListener('popstate', handleLanguageUpdate);
        return () => window.removeEventListener('popstate', handleLanguageUpdate);
    }, []);

    const toggleLanguage = () => {
        const newLang = lang === "finnish" ? "english" : "finnish";
        setLang(newLang);
        if (typeof window !== "undefined") {
            const params = new URLSearchParams(window.location.search);
            params.set("lang", newLang);
            window.history.replaceState(null, '', `?${params.toString()}`);
        }
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export default function useLanguage(): { lang: Language, toggleLanguage: () => void } {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}