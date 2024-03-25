import { useState } from 'react'
import Line from './Line'

function Profile() {
    const [count, setCount] = useState(0)

    return (
        <div className='relative w-full lg:w-2/5 h-[80vh] lg:h-full bg-pink-300 rounded-3xl p-5 lg:p-10 flex flex-col gap-5 md:gap-8 justify-start items-center overflow-auto'>
            <div className='font-semibold text-2xl hover:scale-125 cursor-pointer duration-200'>Anusit Srisawat</div>
            <div className='w-full h-auto object-contain'>
                <img className='hover:scale-110 duration-200 hover:rotate-6 m-auto h-full w-full md:w-2/5 max-w-36 object-contain rounded-xl cursor-pointer'
                    src=".\images\pf2.jpg" alt="" />
            </div>
            <div className='flex justify-center items-center gap-5 flex-col'>
                <div className='w-full flex justify-center items-center gap-2 flex-col'>
                    <div className='uppercase font-semibold cursor-pointer hover:underline duration-200'>about me</div>
                    <div className='text-justify indent-8'>
                        <p>I am interested in data usage. and have the ability and experience to write websites I have adesire to take what I'm passionate about and do to create something new and creative. I am alwayswilling to learn new skills. I work well in a team environment. and listen effectively when solving problems. So I can work well under pressure.</p>
                        <p>Hope my abilities will be useful. and create new changes for society or your company.</p>
                    </div>
                </div>
                <Line />

                <div className='w-full flex justify-center items-center gap-2 flex-col'>

                    <div className='uppercase font-semibold cursor-pointer hover:underline duration-200'>contacts</div>
                    <div className='grid grid-cols-3 gap-2 justify-start items-start break-words w-full md:pl-20 lg:pl-0'>

                        <div className=''>email</div>
                        <div className='col-span-2'>sranusit44@gmail.com</div>

                        <div className=''>tel</div>
                        <div className='col-span-2'>099-972-1944</div>

                        <div className=''>address</div>
                        <div className='col-span-2'>118/302 Buanakarin Bang Kaeo Bang Phli, 10540 Samut Prakan</div>

                    </div>
                </div>
                <Line />

                <div className='w-full flex justify-center items-center gap-2 flex-col'>

                    <div className='uppercase font-semibold cursor-pointer hover:underline duration-200'>languages</div>
                    <div className='grid grid-cols-3 gap-2 justify-start items-start break-words w-full md:pl-20  lg:pl-0'>

                        <div className=''>Thai</div>
                        <div className='col-span-2'>Native</div>

                        <div className=''>English</div>
                        <div className='col-span-2'>Good</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
