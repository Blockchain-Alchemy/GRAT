import React from "react";
import { useSelector } from "react-redux";
import "./CodeView.css";
import { Textarea } from '@mantine/core';

const CodeView = () => {
  const code = useSelector((state) => state.BlocklyState.code);

  return (
    <React.Fragment>
      <div className="codeview bg-gray-300">
        <Textarea
          id="code-editor"
          defaultValue={code}
        ></Textarea>
      </div>
    </React.Fragment>
  );
};

export default CodeView;
