import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData] = useContext(AuthContext)

    return (
        <div className='mt-8 rounded-2xl bg-[#1f2937] p-6 shadow-xl'>

            <div className='mb-6'>
                <h2 className='text-2xl font-bold text-white'>
                    Employee Task Overview
                </h2>
                <p className='text-gray-400 mt-1 text-sm'>
                    Monitor the progress of every employee.
                </p>
            </div>

            <div className='overflow-x-auto'>

                <div className='min-w-[900px]'>

                    {/* Header */}

                    <div className='grid grid-cols-5 bg-emerald-600 rounded-xl px-5 py-4 font-semibold text-white mb-3'>

                        <h2>Employee</h2>
                        <h2 className='text-center'>New</h2>
                        <h2 className='text-center'>Active</h2>
                        <h2 className='text-center'>Completed</h2>
                        <h2 className='text-center'>Failed</h2>

                    </div>

                    {/* Rows */}

                    {userData.map((elem, idx) => (

                        <div
                            key={idx}
                            className='grid grid-cols-5 items-center rounded-xl border border-gray-700 bg-[#111827] px-5 py-4 mb-3 transition-all duration-300 hover:border-emerald-500 hover:shadow-lg'
                        >

                            <h2 className='font-semibold text-white'>
                                {elem.firstName}
                            </h2>

                            <p className='text-center font-bold text-blue-400'>
                                {elem.taskCounts.newTask}
                            </p>

                            <p className='text-center font-bold text-yellow-400'>
                                {elem.taskCounts.active}
                            </p>

                            <p className='text-center font-bold text-emerald-400'>
                                {elem.taskCounts.completed}
                            </p>

                            <p className='text-center font-bold text-red-400'>
                                {elem.taskCounts.failed}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    )
}

export default AllTask