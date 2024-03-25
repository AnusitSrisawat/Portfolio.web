import { useState } from 'react'
import EducationData from './EducationData'

function Details() {
    const [count, setCount] = useState(0)
    const [arrayData, setArrayData] = useState(["Education", "Experience", "skill"])

    return (
        <div className='w-full lg:w-3/5 h-[80vh] lg:h-full bg-blue-300 rounded-3xl p-2 md:p-5 lg:p-10 flex flex-col gap-5 justify-start items-center overflow-auto'>
            <div className='w-full h-full flex flex-col justify-start items-start gap-2'>
                <div className='relative w-full flex flex-row justify-start items-start gap-4 overflow-auto scrollbar-none py-2'>

                    {arrayData.map((item, index) => (
                        <div key={index} className='bg-red-300 px-4 py-2 rounded-2xl relative z-[1] cursor-pointer'>
                            {item}
                        </div>
                    ))}
                </div>
                <div className='relative bg-pink-200 w-full h-full rounded-3xl overflow-auto flex flex-row justify-start items-start p-2 md:p-5 lg:p-10'>
                    <EducationData />
                </div>
            </div>
        </div>
    )
}

export default Details
