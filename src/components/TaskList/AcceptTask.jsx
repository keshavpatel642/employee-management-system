import React from 'react'

const AcceptTask = ({ data }) => {
    return (
        <div className='flex-shrink-0 w-[340px] rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl'>

            <div className='flex items-center justify-between'>

                <span className='rounded-full bg-black/20 px-4 py-1 text-xs font-semibold text-white'>
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

            <div className='mt-8 flex gap-3'>

                <button
                    className='flex-1 rounded-xl bg-emerald-500 py-3 font-semibold text-white transition duration-300 hover:bg-emerald-600 active:scale-95'
                >
                    Mark as Completed
                </button>

                <button
                    className='flex-1 rounded-xl bg-red-700 py-3 font-semibold text-white transition duration-300 hover:bg-red-800 active:scale-95'
                >
                    Mark as Failed
                </button>

            </div>

        </div>
    )
}

export default AcceptTask