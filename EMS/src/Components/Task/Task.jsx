import React from 'react'

function Task(props) {
  return (
    <div className="w-1/3 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 
                    p-6 text-white shadow-lg hover:shadow-2xl 
                    transition-all duration-300 hover:-translate-y-1 
                    shrink-0"
                    
                    >

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs font-bold uppercase tracking-wide
                 bg-white text-red-600
                 px-4 py-1 rounded-full">
                  🔴 {props.priority} Priority
          </span>

        <span className="text-sm font-medium bg-white/20 
                         px-3 py-1 rounded-full">
          {props.date}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h1 className="text-2xl font-extrabold font-mono leading-tight">
          {props.title}
        </h1>

        <p className="text-sm text-white/90 leading-relaxed">
          {props.desc}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-6 flex justify-end">
        <button className="text-sm font-semibold bg-black/20 
                           hover:bg-black/30 px-4 py-2 
                           rounded-lg transition">
          {props.cat}
        </button>
      </div>

    </div>
  )
}

export default Task
