import {usePathname, useRouter, useSearchParams} from "next/navigation";

export type Language = "finnish" | "english";

export default function useLanguage(): { lang: Language, toggleLanguage: () => void } {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    const langParam = searchParams.get("lang");
    const lang: Language = (langParam === "english" || langParam === "en") ? "english" : "finnish";

    const toggleLanguage = () => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("lang", lang === "finnish" ? "english" : "finnish");
        router.push(pathname + "?" + params.toString(), { scroll: false });
    };

    return { lang, toggleLanguage };
}