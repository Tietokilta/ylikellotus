"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Digit = ({ value }: { value: number }) => {
    return (
        <div className="relative w-full h-full overflow-hidden rounded-md bg-zinc-900 text-white font-mono text-xs font-bold flex items-center justify-center">
            <AnimatePresence mode="popLayout">
                <motion.span
                    key={value}
                    initial={{ y: -40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 40, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    {value}
                </motion.span>
            </AnimatePresence>
        </div>
    );
};

interface CountdownProps {
    targetDate?: Date | string;
}

export default function Countdown({ targetDate = "2026-01-01T00:00:00" }: CountdownProps) {
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        const target = new Date(targetDate).getTime();

        const updateTime = () => {
            const now = new Date().getTime();
            const difference = target - now;
            setTimeLeft(difference > 0 ? difference : 0);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, [targetDate]);

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const getDigits = (num: number) => {
        return num.toString().padStart(2, "0").split("").map(Number);
    };

    return (
        <div className={`flex flex-col items-center gap-4 w-full h-full`}>
            <div className="flex justify-center items-center gap-3 w-full h-full">
                <div className="flex flex-col items-center h-full w-full">
                    <div className="flex gap-1 h-full w-full">
                        {getDigits(days).map((d, i) => (
                            <Digit key={`d-${i}`} value={d} />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-center w-full h-full">
                    <div className="flex gap-1 w-full h-full">
                        {getDigits(hours).map((d, i) => (
                            <Digit key={`h-${i}`} value={d} />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-center w-full h-full">
                    <div className="flex gap-1 w-full h-full">
                        {getDigits(minutes).map((d, i) => (
                            <Digit key={`m-${i}`} value={d} />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-center w-full h-full">
                    <div className="flex gap-1 w-full h-full">
                        {getDigits(seconds).map((d, i) => (
                            <Digit key={`s-${i}`} value={d} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
