// import { useState } from 'react'
import Line from './Line'

function EducationData() {

    return (
        <div className='w-full flex flex-col gap-3 justify-start items-start rounded-3xl max-md:p-2'>

            <div className='font-semibold text-2xl md:text-3xl cursor-pointer hover:underline hover:scale-105 duration-200'>Education</div>
            
            <div className='text-base xl:text-xl flex flex-col'>
                <div className='break-words font-semibold'>
                    Bachelor's Degree | <span className=''>Thai-Nichi Institute of Technology, Bangkok</span>
                </div>
                <div className='flex flex-col gap-0.5'>
                    <div className=''>
                        Computer Engineering
                    </div>
                    <div className='text-xs xl:text-sm'>
                        Class president of Computer Engineering
                    </div>
                    <div className='text-xs xl:text-sm'>
                        First class honors ( <span className='font-semibold text-sm xl:text-base'>GPA 3.70</span> )
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationData
