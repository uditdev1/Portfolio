import BorderWrapper from "./BorderWrapper";
import SmMenu from "./SmMenu.tsx";
import { useRef, useState } from "react";
import MenuIcon from "./MenuIcon.tsx";
import { includes, map } from "lodash";
import { useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const ScreensOptions = ['portfolio', 'components', 'designs'];
// 'blockchain' hidden for now

const Header = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const triggerClose = useRef<any>(null);

    const isDark = document.documentElement.classList.contains('dark');

    const isActive = (opt: string) =>
        (location.pathname === '/' && opt === 'portfolio') ||
        includes(location.pathname, opt.toLowerCase());

    const renderSmallDisplayMenu = () => {
        return (
            <div className="w-full md:hidden">
                <div className="w-full flex relative justify-end z-[9999]">
                    <div className="w-[30px] h-[30px] rounded-full p-[4px] flex justify-center items-center scale-[0.9]">
                        <MenuIcon triggerClose={triggerClose} onClick={() => setMenuOpen(prev => !prev)} />
                    </div>
                </div>
                <SmMenu onClose={() => triggerClose.current?.()} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </div>
        )
    };

    return (
        <BorderWrapper boxClass={'flex text-[18px] items-center justify-end gap-[12px] px-[12px] py-[8px]'}>
            {renderSmallDisplayMenu()}
            {map(ScreensOptions, (opt: string) => (
                <div
                    key={opt}
                    style={{
                        ...(isActive(opt) && {
                            color: isDark ? '#ffffff' : '#000000'
                        }),
                    }}
                    onClick={() => navigate(`/${opt}`)}
                    className="text-neutral-400 max-md:hidden cursor-pointer first-letter:uppercase hover:text-black dark:hover:text-white transition-colors duration-200"
                >
                    {opt}
                </div>
            ))}
            <DarkModeToggle />
        </BorderWrapper>
    )
}

export default Header