import React, { forwardRef } from "react";
import { useDispatch } from "react-redux";
import BlocklyPy from "blockly/python";
import { setCode, consoleLog } from "../../store/actions"
import "../../generator/python";
import * as api from "../../service"
import { Title, Button, Container } from '@mantine/core';
import { showNotification } from '@mantine/notifications';

const ControlPanel = forwardRef((props, ref) => {
  const dispatch = useDispatch();

  const generateCode = () => {
    const code = BlocklyPy.workspaceToCode(props.workspace);
    dispatch(consoleLog('generate code.'));
    dispatch(setCode(code));
    showNotification({
      title: 'Contract Notification',
      message: 'Hey there, your code is generated.',
    })
  };

  const compileCode = () => {
    console.log("compile.");
    const code = BlocklyPy.workspaceToCode(props.workspace);
    const base64 = Buffer.from(code).toString("base64");
    api.compile("untitled", base64)
      .then(result => {
        dispatch(consoleLog(result));
      });
    showNotification({
      title: 'Contract Notification',
      message: 'Hey there, your contract is compiled',
    })
  };

  return (
    <div>
      <Title align="center" order={4}>Contract Control Panel</Title>
      <Container align="center">
        <Button
          variant="outline"
          m={5}
          color="gray"
          onClick={generateCode}
        >
          Convert
        </Button>
        <Button
          variant="outline"
          m={5}
          color="gray"
          onClick={generateCode}
        >
          Save
        </Button>
        <Button
          variant="outline"
          m={5}
          color="gray"
          onClick={compileCode}
        >
          Compile
        </Button>
      </Container>
    </div>
  );
});

export default ControlPanel;
