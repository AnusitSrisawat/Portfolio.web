import { useState } from 'react'
import Line from './Line'

function SkillsData() {

    const [frontEndData, setFrontEndData] = useState(["HTML", "CSS", "Javascript", "vue.js", "react.js", "tailwind"])
    const [backEndData, setBackEndData] = useState(["MySQL", "Next.js", "Laravel"])

    return (
        <div className='w-full h-full flex flex-col gap-3 justify-start items-start rounded-3xl max-md:p-2'>

            <div className='font-semibold text-2xl md:text-3xl'>Skills</div>

            <div className='text-base flex flex-col'>
                <div className='text-lg break-words font-semibold'>
                    FrontEnd
                </div>
                <div className='flex flex-col gap-0.5'>
                    <div className='flex flex-row gap-2'>
                        {frontEndData.map((item, index) => (
                            <div key={index} onClick={() => { }} className={''}>
                                {item}
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            <div className='text-base flex flex-col'>
                <div className='text-lg break-words font-semibold'>
                    BackEnd
                </div>
                <div className='flex flex-col gap-0.5'>
                    <div className='flex flex-row gap-2'>
                        {backEndData.map((item, index) => (
                            <div key={index} onClick={() => { }} className={''}>
                                {item}
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsData
