import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface HoverChipProps {
    label: string;
    children: React.ReactNode;
}

export const HoverChip = ({ label, children }: HoverChipProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative inline-flex items-center justify-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {children}

            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute -top-10 z-50 whitespace-nowrap rounded-full 
                                   bg-zinc-900 dark:bg-zinc-700 
                                   px-3 py-1 text-xs text-white 
                                   shadow-lg transition-colors duration-300"
                    >
                        {label}
                        <div className="absolute left-1/2 top-full -translate-x-1/2 border-x-4 border-t-4 border-x-transparent border-t-zinc-900 dark:border-t-zinc-700" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};