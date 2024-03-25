// import { useState } from 'react'
import Line from './Line'

function SkillsData() {

    return (
        <div className='w-full h-full flex flex-col gap-3 justify-start items-start rounded-3xl max-md:p-2'>

            <div className='font-semibold text-2xl md:text-3xl'>Education</div>
            <div className='text-base flex flex-col'>
                <div className='break-words font-semibold'>
                    Bachelor's Degree | <span className=''>Thai-Nichi Institute of Technology, Bangkok</span>
                </div>
                <div className='flex flex-col gap-0.5'>
                    <div className=''>
                        Computer Engineering
                    </div>
                    <div className='text-xs'>
                        Class president of Computer Engineering
                    </div>
                    <div className='text-xs'>
                        First class honors ( <span className='font-semibold text-sm'>GPA 3.70</span> )
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsData
