import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {

    return (
        <div className='min-h-screen bg-[#111827] p-4 md:p-8'>

            <div className='mx-auto max-w-7xl'>

                <Header
                    changeUser={props.changeUser}
                    data={props.data}
                />

                <div className='mt-8'>
                    <TaskListNumbers data={props.data} />
                </div>

                <div className='mt-10'>
                    <TaskList data={props.data} />
                </div>

            </div>

        </div>
    )
}

export default EmployeeDashboard