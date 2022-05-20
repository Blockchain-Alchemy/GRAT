import React from "react";
import { Button } from '@mantine/core';
import useBeacon from "hooks/useBeacon";

const ConnectButton = () => {
  const { connected, connectWallet, disconnectWallet } = useBeacon();
  
  return (
    <>
      {!connected? (
        <Button
          className="connect-wallet"
          size="md"
          m={10}
          onClick={connectWallet}
        >
          Connect Wallet
        </Button>
      ) : (
        <Button
          className="connect-wallet"
          size="md"
          m={10}
          onClick={disconnectWallet}
        >
          Disconnect wallet
        </Button>
      )}
    </>
  );
};

export default ConnectButton;
