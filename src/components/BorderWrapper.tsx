const BorderWrapper = ({ containerClass, boxClass, children }: any) => {
    return (
        <div
            className={`font-shd w-screen px-[4%] sm:px-[8%] md:px-[15%] border-t-[1px] border-neutral-200 dark:border-neutral-800 border-b-[1px] bg-white dark:bg-gray-950 transition-colors duration-300` + ` ${containerClass || ''}`}
        >
            <div
                className={`text-[15px] font-[500] border-l-[1px] border-r-[1px] border-neutral-200 dark:border-neutral-800 dark:text-gray-100 transition-colors duration-300` + ` ${boxClass || ''}`}
            >
                {children}
            </div>
        </div>
    )
}

export default BorderWrapper;