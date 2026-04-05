import BorderWrapper from "../../../components/BorderWrapper";

const Profile = () => {
    return (
        <BorderWrapper>
            <div className="w-full flex row">
                <div className="h-[160px] relative min-w-[160px] border-1 bg-gradient-to-t from-zinc-300 to-zinc-100 dark:from-zinc-700 dark:to-zinc-800 border-neutral-200 dark:border-neutral-700 rounded-full overflow-hidden transition-colors duration-300">
                    <img
                        className="h-[80%] w-[80%] absolute left-1/2 -translate-x-1/2 bottom-0 object-cover"
                        src="/Logo/logo1.webp"
                        alt="Udit Dev"
                    />
                </div>
                <div className="border-l-1 border-neutral-200 dark:border-neutral-800 min-h-full w-full flex flex-col justify-end transition-colors duration-300">
                    <div className="px-[12px] relative text-[12px] text-zinc-300 dark:text-zinc-600">
                        <span>text-3xl &nbsp; text-zinc-950 &nbsp; font-f2</span>
                    </div>
                    <div className="border-t-1 max-md:leading-10 text-zinc-950 dark:text-white font-f2 font-[600] px-[12px] text-[32px] border-neutral-200 dark:border-neutral-800 min-w-full transition-colors duration-300">
                        Udit Dev
                    </div>
                    <div className="border-t-1 whitespace-nowrap border-neutral-200 dark:border-neutral-800 w-full px-[12px] text-[18px] py-[4px] text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
                        Full Stack Developer
                    </div>
                </div>
            </div>
        </BorderWrapper>
    )
}

export default Profile;