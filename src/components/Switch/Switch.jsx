import React from 'react';

const Switch = () => {
  return (
    <div className="absolute float-right bottom-0 right-0 text-white">
      <button className="btn bg-blue-600 clicked text-xl font-semibold hover:bg-blue-700 p-2 rounded-l-full pl-5">
        <span className="material-symbols-outlined mr-1">extension</span>
        Blocks
      </button>
      <button className="btn bg-blue-400 text-xl font-semibold hover:bg-blue-700 p-2 rounded-r-full pr-5">
        <span className="material-symbols-outlined mr-1">code</span>
        Smartpy
      </button>
    </div>
  )
}

export default Switch;
