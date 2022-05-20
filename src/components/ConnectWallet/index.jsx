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
          onClick={connectWallet}
        >
          Connect Wallet
        </Button>
      ) : (
        <Button
          className="connect-wallet"
          onClick={disconnectWallet}
        >
          Disconnect wallet
        </Button>
      )}
    </>
  );
};

export default ConnectButton;
