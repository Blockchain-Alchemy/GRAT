import React from 'react';

const ProjectView = (props) => {
  return(
    <div className="bg-gray-300 p-5 pt-0 rounded-md mx-1 h-3/5">
      <div className="text-xl font-semibold text-center p-1">Projects</div>
      <div>
        <div className="text-lg font-semibold p-1">Staking</div>
        <div className="text-base p-1">This contract will allow users to stake tezos for a certain time and then withdraw after a certain time.</div>
      </div>
      <div>
        <div className="text-lg font-semibold p-1">Follow these steps:</div>
        <div className="form-check">
          <input className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 
              focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" 
              type="checkbox" value="" id="addContractBlock"/>
          <label className="form-check-label inline-block text-gray-800" htmlFor="addContractBlock">
            Add Contract Block
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 
              focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" 
              type="checkbox" value="" id="renameContract"/>
          <label className="form-check-label inline-block text-gray-800" htmlFor="renameContract">
            Rename Contract
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 
              focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" 
              type="checkbox" value="" id="addEntryPoint"/>
          <label className="form-check-label inline-block text-gray-800" htmlFor="addEntryPoint">
            Add Entry Point
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 
              focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" 
              type="checkbox" value="" id="renameEntryPoint"/>
          <label className="form-check-label inline-block text-gray-800" htmlFor="renameEntryPoint">
            Rename Entry Point to Deposit
          </label>
        </div>
      </div>
    </div>
  )
}

export default ProjectView;
