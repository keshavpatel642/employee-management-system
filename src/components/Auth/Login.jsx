import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }

    return (
        <div className='min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center px-5'>

            <div className='w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900/70 backdrop-blur-md shadow-2xl p-8'>

                <div className='text-center mb-8'>
                    <h1 className='text-4xl font-bold text-white'>
                        EMS
                    </h1>

                    <p className='text-slate-400 mt-2'>
                        Employee Management System
                    </p>
                </div>

                <form
                    onSubmit={submitHandler}
                    className='space-y-5'
                >

                    <div>
                        <label className='block text-sm text-slate-300 mb-2'>
                            Email
                        </label>

                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            type="email"
                            placeholder='Enter your email'
                            className='w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition duration-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 placeholder:text-slate-500'
                        />
                    </div>

                    <div>
                        <label className='block text-sm text-slate-300 mb-2'>
                            Password
                        </label>

                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            type="password"
                            placeholder='Enter your password'
                            className='w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition duration-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/30 placeholder:text-slate-500'
                        />
                    </div>

                    <button
                        className='w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white transition duration-300 hover:bg-emerald-700 hover:-translate-y-0.5 active:scale-95'
                    >
                        Login
                    </button>

                </form>

            </div>

        </div>
    )
}

export default Login