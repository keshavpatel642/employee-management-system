import React from 'react'

const NewTask = ({ data }) => {
    return (
        <div className='flex-shrink-0 w-[340px] rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl'>

            <div className='flex items-center justify-between'>

                <span className='rounded-full bg-red-500 px-4 py-1 text-xs font-semibold text-white'>
                    {data.category}
                </span>

                <span className='text-sm text-white/90'>
                    {data.taskDate}
                </span>

            </div>

            <div className='mt-6'>

                <h2 className='text-2xl font-bold text-white leading-tight'>
                    {data.taskTitle}
                </h2>

                <p className='mt-3 text-sm leading-6 text-white/90'>
                    {data.taskDescription}
                </p>

            </div>

            <button
                className='mt-8 w-full rounded-xl bg-yellow-400 py-3 font-semibold text-gray-900 transition duration-300 hover:bg-yellow-300 active:scale-95'
            >
                Accept Task
            </button>

        </div>
    )
}

export default NewTask