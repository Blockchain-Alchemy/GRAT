import React from "react";
import { useSelector } from "react-redux";
import { Title, Textarea } from '@mantine/core';

const ConsoleView = () => {
  const messages = useSelector((state) => state.BlocklyState.messages);

  return (
    <div className="bg-gray-300" style={{padding: 2, paddingTop: 0}}>
      <Title align="center" order={5}>Console</Title>
      <Textarea
        defaultValue={messages.join("\n")}
      ></Textarea>
    </div>
  );
};

export default ConsoleView;
