import BorderWrapper from "./BorderWrapper"

const Footer = () => {
    const handleLinkedIn = () => {
        window.open('https://www.linkedin.com/in/uditdev/', '_blank', 'noopener,noreferrer');
    };

    return (
        <BorderWrapper boxClass='flex flex-col justify-center items-center text-center py-[12px] transition-colors duration-300'>
            <span className="text-zinc-400 dark:text-zinc-500">
                Inspired by ncdai
            </span>
            <span
                onClick={handleLinkedIn}
                className="cursor-pointer hover:underline text-zinc-500 dark:text-zinc-400 transition-colors duration-300"
            >
                Built by uditdev
            </span>
        </BorderWrapper>
    )
}

export default Footer