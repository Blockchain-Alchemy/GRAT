import React from 'react';

const CodeView = (props) => {
  return(
    <div className="bg-gray-300 p-5 pt-0 rounded-md my-1">
      <div className="text-lg font-semibold text-center p-1">Smartpy</div>
      <div className="overflow-y-auto bg-gray-300 w-full border border-gray-400 mt-5" id="textField">
        {props.children}
      </div>
    </div>
  );
};

export default CodeView;
