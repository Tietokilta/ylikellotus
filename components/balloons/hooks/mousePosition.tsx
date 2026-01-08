import {RefObject, useEffect, useRef} from "react";

type MousePosition = {
    x: number;
    y: number;
};

export default function useMousePosition(): RefObject<MousePosition> {
    const ref = useRef<MousePosition>({ x: 0, y: 0 });

    useEffect(() => {
        function onMouseMove(e: MouseEvent) {
            ref.current.x = e.clientX / window.innerWidth;
            ref.current.y = e.clientY / window.innerHeight;
        }

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mouseup", onMouseMove);
        return () => window.removeEventListener("mousemove", onMouseMove);
    }, []);

    return ref;
}
