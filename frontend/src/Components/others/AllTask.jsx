import React, { useContext } from 'react'
import { AuthContext } from "../../context/AuthProvider"

const AllTask = () => {

    const[userData,setUserData] = useContext(AuthContext)
    // console.log(authData)
    // console.log(authData.employees)

    return (
        <div className=' bg-[#1c1c1c] p-5rounded mt-4 h-48 '>

            <div className='bg-red-400 mb-2  px-4 py-2 flex justify-between rounded' >
                <h2 className='text-lg font-medium w-1/5'>Employee Name </h2>
                <h3 className='text-lg font-medium w-1/5'>New Task</h3>
                <h5 className='text-lg font-medium w-1/5'>Active Task </h5>
                <h5 className='text-lg font-medium w-1/5'>Complete</h5>
                <h5 className='text-lg font-medium w-1/5'>Failed</h5>
            </div>

            <div /*className='h-[80%] overflow-auto'*/>

                {userData.map((ele, idx) => {

                    return <div key={idx } className='border-2 border-emerald-500 mb-2  px-4 py-2 flex justify-between ' >
                        <h2 className='text-lg font-medium w-1/5 text-white'>{ele.firstName}</h2>
                        <h5 className='text-lg font-medium w-1/5 text-yellow-600'>{ele.taskCounts.newTask}</h5>
                        <h3 className='text-lg font-medium w-1/5 text-blue-600'>{ele.taskCounts.active}</h3>
                        <h5 className='text-lg font-medium w-1/5 text-white'>{ele.taskCounts.completed}</h5>
                        <h5 className='text-lg font-medium w-1/5 text-red-600'>{ele.taskCounts.failed}</h5>
                    </div>
                })}
            </div>

        </div>
    )
}

export default AllTask
