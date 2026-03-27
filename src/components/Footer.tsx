import BorderWrapper from "./BorderWrapper"

const Footer = () => {
    const handleLinkedIn = () => {
        window.open('https://www.linkedin.com/in/uditdev/', '_blank', 'noopener,noreferrer');
    };

    return (
        <BorderWrapper boxClass='flex flex-col justify-center items-center text-center py-[12px] text-zinc-500'>
            <span className="text-zinc-400">Inspired by ncdai</span>
            <span onClick={handleLinkedIn} className="cursor-pointer hover:underline text-zinc-500">
                Built by uditdev
            </span>
        </BorderWrapper>
    )
}

export default Footer