import React, { forwardRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Title, Button, Container, Dialog, Text, Group } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { ArrowUpRight, ArrowsUpDown, CloudUpload, Code } from 'tabler-icons-react';
import BlocklyPy from "blockly/python";
import { setCode, setSessionIdAction, setCompiledContractAction } from "../../store/actions"
import { notify, alertMessage, startNotification, finishNotification } from "components/Alert/Alert";
import useTaquito from "hooks/useTaquito";
import "../../generator/python";
import * as api from "../../service"
import useBeacon from "hooks/useBeacon";

const ControlPanel = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const sessionId = useSelector(state => state.BlocklyState.sessionId)
  const contractName = useSelector(state => state.BlocklyState.contractName)
  const compiledContract = useSelector(state => state.BlocklyState.compiled)
  const [loading, setLoading] = useState(false);
  const [dialogOpended, setDialogOpened] = useState(false);
  const [contractAddress, setContractAddress] = useState('');
  const clipboard = useClipboard({ timeout: 500 });
  const {connected} = useBeacon();
  const {deployContract} = useTaquito();

  const convert2code = () => {
    const code = BlocklyPy.workspaceToCode(props.workspace);
    const index = code.indexOf('import');
    return code.substring(index);
  }

  const handleConvertButton = () => {
    const code = convert2code();
    dispatch(setCode(code));
    notify('Converted', 'Blocks converted to SmartPy.')
  };

  const handleCompileButton = () => {
    console.log("Start compile.", contractName);
    if (!contractName || contractName.length <= 0) {
      alertMessage('Please input contract name');
      return;
    }
    setLoading(true);
    startNotification('Compiling', 'Compiling your smart contract to Michelson')

    const code = convert2code();
    const base64 = Buffer.from(code).toString("base64");
    api.compile(contractName, base64, sessionId)
      .then(result => {
        console.log('compile-result', result)
        if (result) {
          dispatch(setSessionIdAction(result.taqId));
          dispatch(setCompiledContractAction(result.contract, result.storage))
          finishNotification('Compiled');
        } else {
          finishNotification('Failed to compile!', false)
        }
      })
      .finally(() => setLoading(false));
  };

  const handleDeployButton = () => {
    /*setTimeout(() => {
      setDialogOpened(true);
      setContractAddress('KT1QAcfPEqnu35Z9PYTfBuNoPYDMaiJq4gwW');
    }, 2000)
    return;*/

    console.log("Start Deploy.");
    if (!connected) {
      alertMessage('Please connect your wallet before deploy!');
      return;
    }

    if (!compiledContract.contract || !compiledContract.storage) {
      alertMessage('Please compile first!');
      return;
    }

    setLoading(true);
    startNotification('Deploying', 'Deploying your smart contract to the blockchain')

    const contract = JSON.parse(compiledContract.contract);
    const storage = JSON.parse(compiledContract.storage);
    console.log('deply', contract, storage);

    deployContract(contract, storage)
      .then(address => {
        if (address) {
          setContractAddress(address);
          setDialogOpened(true);
          //finishNotification(`Origination completed for ${address}`);
        } else {
          finishNotification(`Failed to deploy!`, false);
        }
      })
      .finally(() => setLoading(false));
  }

  const copyAddress = () => {
    clipboard.copy(contractAddress);
  }

  return (
    <div>
      <Title align="center" order={4}>Contract Control Panel</Title>
      <Container align="center">
        <Button
          leftIcon={<ArrowsUpDown size={14} />}
          size="md"
          m={10}
          onClick={handleConvertButton}
        >
          Convert
        </Button>
        <Button
          leftIcon={<CloudUpload size={14} />}
          size="md"
          m={10}
        >
          Save
        </Button>
        <Button
          leftIcon={<Code size={14} />}
          size="md"
          m={10}
          onClick={handleCompileButton}
          disabled={loading}
        >
          Compile
        </Button>
        <Button
          leftIcon={<ArrowUpRight size={14} />}
          size="md"
          m={10}
          onClick={handleDeployButton}
          disabled={loading}
        >
          Deploy
        </Button>
        <Dialog
          opened={dialogOpended}
          withCloseButton
          onClose={() => setDialogOpened(false)}
          size="lg"
          radius="md"
        >
          <Text size="sm" style={{ marginBottom: 10 }} weight={500}>
            Contract Deployed Successfully!
          </Text>

          <Group align="flex-end">
            <Text size="sm" style={{ marginBottom: 10 }} weight={500}>
              Address: {contractAddress}
            </Text>
            <Button onClick={() => copyAddress()}>
              {clipboard.copied ? 'Copied' : 'Copy to Clipboard'}
            </Button>
          </Group>
        </Dialog>        
      </Container>
    </div>
  );
});

export default ControlPanel;
