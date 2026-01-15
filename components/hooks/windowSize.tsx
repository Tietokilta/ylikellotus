import {useEffect, useState} from "react";

class WindowSize {
    width!: number;
    height!: number;
}

export default function useWindowSize() {
    const [size, setSize] = useState({ width: 0, height: 0 } as WindowSize);
    useEffect(() => {
        const listener = () => setSize({width: window.innerWidth, height: window.innerHeight} as WindowSize);
        window.addEventListener('resize', listener);
        return () => window.removeEventListener('resize', listener);
    });
    return size;
}