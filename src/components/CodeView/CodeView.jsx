import React from 'react';
import { useSelector } from "react-redux";
import "./CodeView.css";

const CodeView = () => {
  const code = useSelector(state => state.BlocklyState.code);

  return(
    <React.Fragment>
      <div className="bg-gray-300 p-2 pt-0 rounded-md my-1 codeview">
        <textarea className="overflow-y-auto bg-white w-full" id="code-editor">
          { code }
        </textarea>
      </div>
    </React.Fragment>
  );
};

export default CodeView;
