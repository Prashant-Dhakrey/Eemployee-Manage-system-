import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './Complete'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {

    console.log(data)
    return (
        <div id='tasklist' className='mt-12 h-[55%] overflow-x-auto w-full flex items-center justify-start gap-5 flex-nowrap'>
            {
                data.tasks.map((ele, idx) => {

                    if (ele.active) {
                        return <AcceptTask key={idx} data={ele} />
                    }
                    if (ele.newTask) {
                        return <NewTask key={idx} data={ele} />
                    }
                    if (ele.completed) {
                        return <CompleteTask key={idx} data={ele} />
                    }
                    if (ele.failed) {
                        return <FailedTask key={idx} data={ele} />
                    }

                })
            }
        </div>
    )
}

export default TaskList
