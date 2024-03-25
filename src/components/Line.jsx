import { useState } from 'react'

function Line() {
    const [count, setCount] = useState(0)
    const [arrayData, setArrayData] = useState(["frontEnd", "backEnd", "frontEnd", "backEnd", "data", "frontEnd", "frontEnd", "frontEnd", "frontEnd", "frontEnd"])

    return (
        <div className='w-4/5 h-0.5 bg-purple-950 opacity-50 rounded-md'>

        </div>
    )
}

export default Line
