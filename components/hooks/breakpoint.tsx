import {useEffect, useState} from "react";
import useWindowSize from "@/components/hooks/windowSize";

const breakpointValues: Record<"sm" | "md" | "lg" | "xl", number> = {
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1440
}

export default function useBreakpoint(breakpoint: "sm" | "md" | "lg" | "xl") {
    const [isMatched, setIsMatched] = useState(false);
    const windowSize = useWindowSize();
    useEffect(() => {
        setIsMatched(windowSize.width >= breakpointValues[breakpoint]);
    }, [windowSize]);

    return isMatched;
}