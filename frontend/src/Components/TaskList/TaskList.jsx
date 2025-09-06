import React from 'react'

const TaskList = ({data}) => {
    
    console.log(data)
    return (
        <div id='tasklist' className='mt-12 h-[55%] overflow-x-auto w-full flex items-center justify-start gap-5 flex-nowrap'>
            <div className='flex-shirnk-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
                <div className='flex justify-between items-center text-sm'>
                    <h3 className='bg-red-600'> High</h3>
                    <h4 className='text-sm'>20 Aug 2025</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'> Make a youtube Video </h2>
                <p className='mt-3 text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid sed adipisci obcaecati harum optio omnis.
                    Asperiores in placeat veritatis consequuntur.
                </p>
            </div>
            <div className='flex-shirnk-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
                <div className='flex justify-between items-center text-sm'>
                    <h3 className='bg-red-600'> High</h3>
                    <h4 className='text-sm'>20 Aug 2025</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'> Make a youtube Video </h2>
                <p className='mt-3 text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid sed adipisci obcaecati harum optio omnis.
                    Asperiores in placeat veritatis consequuntur.
                </p>
            </div>
            <div className='flex-shirnk-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
                <div className='flex justify-between items-center text-sm'>
                    <h3 className='bg-red-600'> High</h3>
                    <h4 className='text-sm'>20 Aug 2025</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'> Make a youtube Video </h2>
                <p className='mt-3 text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid sed adipisci obcaecati harum optio omnis.
                    Asperiores in placeat veritatis consequuntur.
                </p>
            </div>
            <div className='flex-shirnk-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
                <div className='flex justify-between items-center text-sm'>
                    <h3 className='bg-red-600'> High</h3>
                    <h4 className='text-sm'>20 Aug 2025</h4>
                </div>
                <h2 className='mt-5 text-2xl font-semibold'> Make a youtube Video </h2>
                <p className='mt-3 text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid sed adipisci obcaecati harum optio omnis.
                    Asperiores in placeat veritatis consequuntur.
                </p>
            </div>
        </div>
    )
}

export default TaskList
