// import { useState } from 'react'
import Line from './Line'

function ExperienceData() {

    return (
        <div className='w-full flex flex-col gap-3 justify-start items-start rounded-3xl max-md:p-2'>

            <div className='font-semibold text-2xl md:text-3xl cursor-pointer hover:underline hover:scale-105 duration-200'>Experience</div>

            <div className='text-base xl:text-xl flex flex-col'>
                <div className='break-words font-semibold'>
                    ASHA TECH CORPORATION CO., LTD.
                </div>
                <div className='flex flex-col gap-0.5'>
                    <div className=''>
                        Programmer
                    </div>
                    <ul className='text-xs xl:text-sm list-disc ml-5'>
                        <li>Attend meetings to get requiments of customer.</li>
                        <li>Design databases and Develop APIs by Laravel.</li>
                        <li>Develop websites by Angular and Vue.</li>
                    </ul>
                </div>
            </div>

            <div className='text-base xl:text-xl flex flex-col'>
                <div className='break-words font-semibold'>
                    ASHA TECH CORPORATION CO., LTD.
                </div>
                <div className='flex flex-col gap-0.5'>
                    <div className=''>
                        Programmer ( <span className='font-semibold text-sm'>Internship</span> )
                    </div>
                    <ul className='text-xs xl:text-sm list-disc ml-5'>
                        <li>Attend meetings to get requiments of customer.</li>
                        <li>Design databases and Develop APIs by Node.js and Laravel.</li>
                        <li>Develop websites to manage data for admins by Angular.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ExperienceData
