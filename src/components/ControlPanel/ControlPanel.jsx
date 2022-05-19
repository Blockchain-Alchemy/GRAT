import React, { forwardRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlocklyPy from "blockly/python";
import { setCode, setSessionIdAction } from "../../store/actions"
import "../../generator/python";
import * as api from "../../service"
import { Title, Button, Container } from '@mantine/core';
import { showNotification } from '@mantine/notifications';

const ControlPanel = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const sessionId = useSelector(state => state.BlocklyState.sessionId)
  const contractName = useSelector(state => state.BlocklyState.contractName)
  const [compiled, setCompiled] = useState(false);
  const [loading, setLoading] = useState(false);

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
    dispatch(setCode(code));
    notify('Code Generated.')
  };

  const handleCompileButton = () => {
    console.log("Start compile.");
    setLoading(true);

    const code = BlocklyPy.workspaceToCode(props.workspace);
    const base64 = Buffer.from(code).toString("base64");
    api.compile("contract", base64, sessionId)
      .then(result => {
        console.log('compile-result', result)
        if (result) {
          dispatch(setSessionIdAction(result.taqId));
          setCompiled(true);
          notify('Contract compiled successfully')
        } else {
          alert('Failed to compiled contract')
        }
      })
      .finally(() => setLoading(false));
  };

  const handleDeployButton = () => {
    console.log("Start Deploy.");
    setLoading(true);

    api.deploy(contractName, sessionId)
      .then(result => {
        if (result) {
          notify('Contract deployed successfully')
        } else {
          alert('Failed to deploy contract')
        }
      })
      .finally(() => setLoading(false));
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
          disabled={loading}
        >
          Compile
        </Button>
        <Button
          variant="outline"
          m={5}
          color="gray"
          onClick={handleDeployButton}
          disabled={!compiled || loading}
        >
          Deploy
        </Button>
      </Container>
    </div>
  );
});

export default ControlPanel;
