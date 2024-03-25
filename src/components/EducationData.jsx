import { useState } from 'react'
import Line from './Line'

function EducationData() {
    const [count, setCount] = useState(0)
    const [arrayData, setArrayData] = useState(["Education", "Experience", "skill"])

    return (
        <div className='w-full h-full flex flex-col gap-2 justify-start items-start rounded-3xl'>

            <div className='font-semibold text-2xl md:text-3xl'>Education</div>
            <div className='text-base flex gap-2 flex-col'>
                <div className='break-words'>
                    Bachelor's Degree | <span className=''>Thai-Nichi Institute of Technology, Bangkok</span>
                </div>
                <div className=''>
                    Computer Engineering
                </div>
                <div className='text-sm'>
                    Class president of Computer Engineering
                </div>
                <div className='text-sm'>
                    First class honors ( <span className='font-semibold text-base'>GPA 3.70</span> )
                </div>
                <Line />
            </div>
        </div>
    )
}

export default EducationData
