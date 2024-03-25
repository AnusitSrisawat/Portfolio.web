import { useState } from 'react'
import EducationData from './EducationData'
import ExperienceData from './ExperienceData'

function Details() {
    const [menu, setMenu] = useState(1)
    const [arrayData, setArrayData] = useState(["Education", "Experience", "Skills"])

    return (
        <div className='w-full lg:w-3/5 h-[80vh] lg:h-full bg-blue-300 rounded-3xl p-2 md:p-5 lg:p-10 flex flex-col gap-5 justify-start items-center overflow-auto'>
            <div className='w-full h-full flex flex-col justify-start items-start gap-2'>
                <div className='w-full h-[10%] flex flex-row justify-start items-center gap-4 overflow-auto scrollbar-none'>

                    {arrayData.map((item, index) => (
                        <div key={index} onClick={() => {
                            setMenu(index);
                            console.log(index);
                        }}
                            className={'bg-pink-300 px-4 py-2 rounded-2xl relative z-[1] cursor-pointer hover:bg-pink-400 hover:font-semibold duration-200' + (menu == index ? ' border-2 border-pink-400 font-bold' : ' border-2 border-transparent')}>
                            {item}
                        </div>
                    ))}

                </div>
                <div className='relative bg-pink-200 w-full h-[90%] rounded-3xl flex flex-col justify-start items-start p-2 md:p-5 lg:p-10 duration-200 overflow-auto'>
                    {menu == 0 && <EducationData />}
                    {menu == 1 && <ExperienceData />}
                </div>
            </div>
        </div >
    )
}

export default Details
