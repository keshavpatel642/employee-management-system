import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
    return (
        <div className="min-h-screen w-full bg-[#111827] p-4 md:p-8">

            <div className="mx-auto max-w-7xl">

                <Header changeUser={props.changeUser} />

                <div className="mt-8">
                    <CreateTask />
                </div>

                <div className="mt-8">
                    <AllTask />
                </div>

            </div>

        </div>
    )
}

export default AdminDashboard