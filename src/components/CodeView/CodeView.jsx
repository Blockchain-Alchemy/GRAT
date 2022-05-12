import React from 'react';
import "./CodeView.css";

const CodeView = ({code}) => {
  return(
    <React.Fragment>
      <div className="bg-gray-300 p-2 pt-0 rounded-md my-1 codeview">
        <div className="overflow-y-auto bg-white w-full" id="code-editor">
          { code }
        </div>
      </div>
    </React.Fragment>
  );
};

export default CodeView;
