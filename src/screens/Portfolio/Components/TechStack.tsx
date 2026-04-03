import { map } from "lodash";
import BorderWrapper from "../../../components/BorderWrapper"
import { techStack } from "./utils";

const TechBox = ({ tech }: { tech: any }) => {
    return (
        <div
            className="px-[10px] py-[4px] border
                       border-zinc-300 dark:border-zinc-700
                       flex justify-center items-center
                       bg-zinc-50 dark:bg-zinc-900
                       rounded-[12px]
                       text-zinc-800 dark:text-zinc-200
                       text-[15px] font-[500] h-fit w-fit
                       transition-colors duration-300"
        >
            {tech}
        </div>
    )
}

const TechStack = () => {
    return (
        <>
            <BorderWrapper boxClass="text-[36px] px-[12px] h-fit leading-11 font-[500] text-zinc-950 dark:text-white transition-colors duration-300">
                Tech Stack
            </BorderWrapper>
            <BorderWrapper boxClass='flex flex-wrap gap-[10px] px-[12px] py-[12px]'>
                {map(techStack, (opt: any, ind: number) => (
                    <TechBox tech={opt} key={ind} />
                ))}
            </BorderWrapper>
        </>
    );
}

export default TechStack