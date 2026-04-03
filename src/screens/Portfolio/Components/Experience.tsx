import BorderWrapper from '../../../components/BorderWrapper'
import { education_roles, freelance_roles } from './utils'
import ExperienceBox from './ExperienceBox'

const Experience = () => {
    return (
        <>
            <BorderWrapper boxClass="text-[36px] px-[12px] h-fit leading-11 font-[500] text-zinc-950 dark:text-white transition-colors duration-300">
                Experience
            </BorderWrapper>
            <ExperienceBox
                company={'Freelance'}
                companyIcon={
                    <div className='h-[24px] w-[24px] flex justify-center items-center'>
                        <div className='bg-zinc-200 dark:bg-zinc-600 h-[12px] w-[12px] rounded-full transition-colors duration-300' />
                    </div>
                }
                roles={freelance_roles}
            />
            <ExperienceBox
                company={'Education'}
                companyIcon={
                    <div className='h-[24px] w-[24px] flex justify-center items-center'>
                        <div className='bg-zinc-200 dark:bg-zinc-600 h-[12px] w-[12px] rounded-full transition-colors duration-300' />
                    </div>
                }
                roles={education_roles}
            />
        </>
    )
}

export default Experience