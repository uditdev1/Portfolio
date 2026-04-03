import { useNavigate } from 'react-router-dom'
import BorderWrapper from '../../../components/BorderWrapper'
import { HoverChip } from '../../../components/HoverChip'

const About = () => {
    const navigate = useNavigate();

    return (
        <>
            <BorderWrapper boxClass="text-[36px] px-[12px] h-fit leading-10 font-[500] text-zinc-950 dark:text-white transition-colors duration-300">
                About
            </BorderWrapper>
            <BorderWrapper boxClass="px-[12px] py-[3%]">
                <div className="text-gray-800 dark:text-gray-300 text-[16px] leading-relaxed tracking-wide transition-colors duration-300">
                    <ul className="list-disc ml-6 space-y-2 marker:text-zinc-400 dark:marker:text-zinc-500">
                        <li>
                            <span className="font-[600] text-zinc-900 dark:text-white">Full Stack Developer</span> proficient in{" "}
                            <span className="font-semibold text-zinc-900 dark:text-white">full-stack development</span>, combining
                            pixel-perfect frontend design with reliable and efficient backend logic.
                        </li>
                        <li>
                            Experienced in crafting complex motion-based UI interactions using{" "}
                            <span className="font-semibold text-zinc-900 dark:text-white">Framer Motion</span> and{" "}
                            <span className="font-semibold text-zinc-900 dark:text-white">GSAP</span>, optimizing performance and
                            creating immersive animations across React applications.
                        </li>
                        <li>
                            Built real-time applications using{" "}
                            <span className="font-semibold text-zinc-900 dark:text-white">Socket.io</span> and{" "}
                            <span className="font-semibold text-zinc-900 dark:text-white">WebRTC</span>, featuring live multiplayer
                            gameplay, audio/video calls, and integrated{" "}
                            <span className="font-semibold text-zinc-900 dark:text-white">Solana-based</span> payment and betting systems.
                        </li>
                        <li>
                            Solved over{" "}
                            <span className="font-semibold text-zinc-900 dark:text-white">300+ Data Structures & Algorithms problems</span>{" "}
                            on platform{" "}
                            <HoverChip label='geeksforgeeks.org/uditdeu8zt'>
                                <span
                                    onClick={() => navigate('https://www.geeksforgeeks.org/profile/uditdeu8zt')}
                                    className="font-semibold cursor-pointer text-zinc-900 dark:text-white hover:text-zinc-500 dark:hover:text-zinc-400 transition-colors"
                                >
                                    GeeksforGeeks
                                </span>
                            </HoverChip>, achieving a{" "}
                            <span className="font-semibold text-zinc-900 dark:text-white">1550+ Coding Score</span> and
                            continuously improving problem-solving and algorithmic thinking.
                        </li>
                    </ul>
                </div>
            </BorderWrapper>
        </>
    )
}

export default About