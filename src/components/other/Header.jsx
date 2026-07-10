import React from 'react'

const Header = (props) => {

    const logOutUser = () => {
        localStorage.setItem('loggedInUser', '')
        props.changeUser('')
    }

    return (
        <div className='flex flex-col gap-5 md:flex-row md:items-center md:justify-between bg-[#1f2937] rounded-2xl px-6 py-5 shadow-lg'>

            <div>
                <p className='text-gray-400 text-sm tracking-wide'>
                    Welcome Back
                </p>

                <h1 className='text-3xl font-bold text-white mt-1'>
                    {props.data?.firstName || "Admin"}
                    <span className='ml-2'>👋</span>
                </h1>

                <p className='text-gray-500 text-sm mt-1'>
                    Employee Management System
                </p>
            </div>

            <button
                onClick={logOutUser}
                className='bg-red-500 hover:bg-red-600 transition-all duration-300 px-6 py-3 rounded-xl text-white font-semibold shadow-md hover:shadow-xl active:scale-95'
            >
                Logout
            </button>

        </div>
    )
}

export default Header