import React from 'react'

function Task() {
  return (
    <div className="w-1/3 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 
                    p-6 text-white shadow-lg hover:shadow-2xl 
                    transition-all duration-300 hover:-translate-y-1 
                    shrink-0"
                    
                    >

      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs font-semibold uppercase tracking-wide 
                         bg-white/20 px-3 py-1 rounded-full">
          🔥 High Priority
        </span>

        <span className="text-sm font-medium bg-white/20 
                         px-3 py-1 rounded-full">
          20 Feb 2024
        </span>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h1 className="text-2xl font-extrabold font-mono leading-tight">
          Make a Youtube Video
        </h1>

        <p className="text-sm text-white/90 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Id maxime eos delectus, mollitia nam fugit aliquam aperiam
          ad quisquam repellendus doloribus error quo facilis.
        </p>
      </div>

      {/* Footer */}
      <div className="mt-6 flex justify-end">
        <button className="text-sm font-semibold bg-black/20 
                           hover:bg-black/30 px-4 py-2 
                           rounded-lg transition">
          View Task →
        </button>
      </div>

    </div>
  )
}

export default Task
