import React, { forwardRef, useState } from "react";
import { useDispatch } from "react-redux";
import BlocklyPy from "blockly/python";
import { setCode, consoleLog } from "../../store/actions"
import "../../generator/python";
import * as api from "../../service"
import { Title, Button, Container } from '@mantine/core';
import { showNotification } from '@mantine/notifications';

const ControlPanel = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const [compiled, setCompiled] = useState(false);

  const notify = (message) => {
    showNotification({
      title: 'GRAT Notification',
      message: message,
      styles: (theme) => ({
        root: {
          backgroundColor: theme.colors.blue[6],
          borderColor: theme.colors.blue[6],

          '&::before': { backgroundColor: theme.white },
        },

        title: { color: theme.white },
        description: { color: theme.white },
        closeButton: {
          color: theme.white,
          '&:hover': { backgroundColor: theme.colors.blue[7] },
        },
      }),
    })
  }

  const alert = (message) => {
    showNotification({
      title: 'Error',
      message: message,
      color: 'red'
    })
  }

  const handleConvertButton = () => {
    const code = BlocklyPy.workspaceToCode(props.workspace);
    dispatch(consoleLog('Generate code'));
    dispatch(setCode(code));
    notify('Code Generated.')
  };

  const handleCompileButton = () => {
    console.log("Compile");
    const code = BlocklyPy.workspaceToCode(props.workspace);
    const base64 = Buffer.from(code).toString("base64");
    api.compile("untitled", base64)
      .then(result => {
        if (result) {
          dispatch(consoleLog(result));
          setCompiled(true);
          notify('Contract compiled successfully')
        } else {
          alert('Failed to compiled contract')
        }
      })
  };

  const handleDeployButton = () => {
    console.log("Deploy");
    api.deploy("untitled")
      .then(result => {
        if (result) {
          dispatch(consoleLog(result));
          notify('Contract deployed successfully')
        } else {
          alert('Failed to deploy contract')
        }
      })
  }

  return (
    <div>
      <Title align="center" order={4}>Contract Control Panel</Title>
      <Container align="center">
        <Button
          variant="outline"
          m={5}
          color="gray"
          onClick={handleConvertButton}
        >
          Convert
        </Button>
        <Button
          variant="outline"
          m={5}
          color="gray"
          onClick={handleCompileButton}
        >
          Compile
        </Button>
        <Button
          variant="outline"
          m={5}
          color="gray"
          onClick={handleDeployButton}
          disable={!compiled}
        >
          Deploy
        </Button>
      </Container>
    </div>
  );
});

export default ControlPanel;
