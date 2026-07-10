import React from 'react'

const TaskListNumbers = ({ data }) => {

    const cards = [
        {
            title: "New Tasks",
            count: data.taskCounts.newTask,
            color: "from-blue-500 to-blue-600",
            icon: "📋"
        },
        {
            title: "Completed",
            count: data.taskCounts.completed,
            color: "from-emerald-500 to-emerald-600",
            icon: "✅"
        },
        {
            title: "Accepted",
            count: data.taskCounts.active,
            color: "from-amber-400 to-orange-500",
            icon: "⏳",
            dark: true
        },
        {
            title: "Failed",
            count: data.taskCounts.failed,
            color: "from-red-500 to-red-600",
            icon: "❌"
        }
    ]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

            {cards.map((card, index) => (

                <div
                    key={index}
                    className={`bg-gradient-to-r ${card.color} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
                >

                    <div className="flex items-center justify-between">

                        <div>
                            <p
                                className={`text-sm font-medium ${card.dark ? "text-gray-900" : "text-white/80"
                                    }`}
                            >
                                {card.title}
                            </p>

                            <h2
                                className={`text-5xl font-bold mt-2 ${card.dark ? "text-gray-900" : "text-white"
                                    }`}
                            >
                                {card.count}
                            </h2>
                        </div>

                        <span className="text-5xl">
                            {card.icon}
                        </span>

                    </div>

                </div>

            ))}

        </div>
    )
}

export default TaskListNumbers