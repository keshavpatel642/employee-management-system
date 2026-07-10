import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        const task = {
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false
        }

        const data = [...userData]

        data.forEach(function (elem) {
            if (elem.firstName.toLowerCase() === asignTo.trim().toLowerCase()) {
                elem.tasks.push(task)
                elem.taskCounts.newTask = elem.taskCounts.newTask + 1
            }
        })

        setUserData(data)
        localStorage.setItem("employees", JSON.stringify(data))

        setTaskTitle('')
        setCategory('')
        setAsignTo('')
        setTaskDate('')
        setTaskDescription('')
    }

    return (
        <div className="mt-8 rounded-2xl bg-[#1f2937] p-8 shadow-xl">

            <h2 className="text-2xl font-bold text-white mb-8">
                Create New Task
            </h2>

            <form
                onSubmit={submitHandler}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10"
            >

                <div className="space-y-5">

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Task Title
                        </label>

                        <input
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            type="text"
                            placeholder="Enter task title"
                            className="w-full rounded-xl border border-gray-600 bg-[#111827] px-4 py-3 text-white outline-none transition focus:border-emerald-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Deadline
                        </label>

                        <input
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            type="date"
                            className="w-full rounded-xl border border-gray-600 bg-[#111827] px-4 py-3 text-white outline-none transition focus:border-emerald-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Assign To
                        </label>

                        <input
                            value={asignTo}
                            onChange={(e) => setAsignTo(e.target.value)}
                            type="text"
                            placeholder="Employee Name"
                            className="w-full rounded-xl border border-gray-600 bg-[#111827] px-4 py-3 text-white outline-none transition focus:border-emerald-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Category
                        </label>

                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            type="text"
                            placeholder="Design, Development..."
                            className="w-full rounded-xl border border-gray-600 bg-[#111827] px-4 py-3 text-white outline-none transition focus:border-emerald-500"
                        />
                    </div>

                </div>

                <div className="flex flex-col">

                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        Description
                    </label>

                    <textarea
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        className="h-56 resize-none rounded-xl border border-gray-600 bg-[#111827] px-4 py-3 text-white outline-none transition focus:border-emerald-500"
                        placeholder="Write task description..."
                    />

                    <button
                        className="mt-6 rounded-xl bg-emerald-600 py-3 font-semibold text-white transition duration-300 hover:bg-emerald-700 hover:-translate-y-0.5 active:scale-95"
                    >
                        Create Task
                    </button>

                </div>

            </form>

        </div>
    )
}

export default CreateTask