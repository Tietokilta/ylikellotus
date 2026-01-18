'use client';

import {useEffect, useState} from "react";

export type Language = "finnish" | "english";

export default function useLanguage(): { lang: Language, toggleLanguage: () => void } {
    const [lang, setLang] = useState<Language>("finnish");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const params = new URLSearchParams(window.location.search);
            if (!params.has("lang")) params.set("lang", lang === "finnish" ? "finnish" : "english");
            setLang(params.get("lang") === "finnish" ? "finnish" : "english");
        }
    });

    const toggleLanguage = () => {
        const params = new URLSearchParams(window.location.search);
        params.set("lang", params.get("lang") !== "english" ? "english" : "finnish");
        window.history.pushState(null, '', `?${params.toString()}`);
    };

    return { lang, toggleLanguage };
}