import React, { createContext, useState } from 'react'
import { TezosToolkit } from '@taquito/taquito';
import { BeaconWallet } from "@taquito/beacon-wallet";
import { PermissionScope } from "@airgap/beacon-sdk";
import {
  BeaconEvent,
  defaultEventCallbacks
} from "@airgap/beacon-sdk";
import Network from "config";
import { useEffect } from 'react';

export const BeaconContext = createContext();

const scopes = [
  PermissionScope.OPERATION_REQUEST,
  PermissionScope.SIGN,
];

export const BeaconProvider = ({ children }) => {
  const [tezos, setTezos] = useState(undefined)
  const [networkType, setNetworkType] = useState(Network.networkType)
  const [rpcUrl, setRpcUrl] = useState(Network.rpcUrl);

  const [loading, setLoading] = useState(false);
  const [wallet, setWallet] = useState(undefined);
  const [address, setAddress] = useState(undefined);
  const [connected, setConnected] = useState(false);
  const [contract, setContract] = useState(undefined);

  useEffect(() => {
    console.log("create toolkit", rpcUrl)
    setWallet(undefined);
    setAddress(undefined);
    setConnected(false);
    setContract(undefined);
    setTezos(new TezosToolkit(rpcUrl));
  }, [rpcUrl, setTezos])

  useEffect(() => {
    if (tezos)  {
      console.log("create wallet", networkType)
      const _wallet = new BeaconWallet({
        name: "GRAT",
        preferredNetwork: networkType,
        disableDefaultEvents: true, // Disable all events / UI. This also disables the pairing alert.
        eventHandlers: {
          // To keep the pairing alert, we have to add the following default event handlers back
          [BeaconEvent.PAIR_INIT]: {
            handler: defaultEventCallbacks.PAIR_INIT
          },
          [BeaconEvent.PAIR_SUCCESS]: {
            handler: data => console.log(data.publicKey)
          }
        }
      });
      tezos?.setWalletProvider(_wallet);
      setWallet(_wallet);
      console.log("Tezos.setWalletProvider", _wallet, tezos);
    }
  }, [tezos, networkType, setWallet])

  const connectWallet = async () => {
    try {
      if (!wallet || !tezos) {
        return;
      }
      setLoading(true);

      console.log("Request Permission", networkType, rpcUrl, tezos);
      await wallet.client.requestPermissions({
        network: {
          type: networkType,
          rpcUrl: rpcUrl,
        },
        scopes
      });

      const address = await wallet.getPKH()
      console.log("userAddress", address)
      setAddress(address)

      const contract = await tezos.wallet.at(Network.contractAddress)
      console.log("contract", contract);
      setContract(contract);
      
      setConnected(true);
    }
    catch (error) {
      console.log(error);
      setConnected(false);
    }
    finally {
      setLoading(false);
    }
  };

  const disconnectWallet = async () => {
    setConnected(false);
    /*if (wallet) {
      await wallet.client.removeAllAccounts();
      await wallet.client.removeAllPeers();
      await wallet.client.destroy();
    }*/
  };

  return (
    <BeaconContext.Provider value={{
      tezos,
      wallet,
      loading,
      connected,
      address,
      contract,
      rpcUrl,
      connectWallet,
      disconnectWallet,
      setLoading,
      setNetworkType,
      setRpcUrl,
    }}>
      {children}
    </BeaconContext.Provider>
  )
}
