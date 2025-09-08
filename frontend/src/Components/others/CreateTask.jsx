import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const [newTask, setNewTask] = useState([])

    const submitHandler = (e) => {

        e.preventDefault()
        // console.log(taskDate,taskDescription,taskTitle,asignTo,category)\

        setNewTask({
            taskDate, taskDescription, taskTitle, asignTo, category,
            active: false,
            newTask: true,
            failed: false,
            complete: false
        })

        const data = userData
        //   console.log(data)

        data.forEach((ele) => {

            if (asignTo == ele.firstName) {
                // console.log(ele)
                // console.log(ele.tasks)
                ele.tasks.push(newTask)
                // console.log(ele)
                ele.taskCounts.newTask = ele.taskCounts.newTask + 1
            }
        });
        setUserData(data);
        console.log(data)

        setAsignTo('')
        setCategory('')
        setNewTask('')
        setTaskDescription('')
        setTaskTitle('')

    }
    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded-r'>
            <form
                onSubmit={(e) => {
                    submitHandler(e)

                }}
                className='flex flex-wrap w-full items-start  justify-between'>
                <div className='w-1/2 font-medium px-10 py-3 '>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'> Task Title </h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text" name="" id="" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type='date' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Asign to </h3>
                        <input
                            value={asignTo}
                            onChange={(e) => {
                                setAsignTo(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text" placeholder='employee Name ' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'
                            type="text" placeholder='design, dev, etc ' />
                    </div>
                </div>
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }}
                        className='w-full h-44 text-sm py-2 px-4 rounded outline-non bg-transparent border-[1px] border-gray-400' col="30" rows="10"></textarea>
                    <button
                        className='bg-emerald-500 py-3 hover:bg-emerald-700 px-5 rounded text-sm mt-4 w-full'
                    >Create Task </button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask
