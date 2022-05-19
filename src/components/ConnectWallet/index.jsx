import React from "react";
import useBeacon from "hooks/useBeacon";

const ConnectButton = () => {
  const { connected, connectWallet, disconnectWallet } = useBeacon();
  
  return (
    <>
      {!connected? (
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      ) : (
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={disconnectWallet}
        >
          Disconnect wallet
        </button>
      )}
    </>
  );
};

export default ConnectButton;
