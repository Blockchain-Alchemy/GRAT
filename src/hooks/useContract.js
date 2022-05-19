import {useEffect, useState} from "react";
import useBeacon from "./useBeacon";

export const useAddress = () => {
  const { wallet } = useBeacon();
  const [address, setAddress] = useState("");

  useEffect(() => {
    setAddress("");
    wallet
      ?.getPKH()
      .then((address) => {
        console.log("userAddress", address)
        setAddress(address)
      })
      .catch(console.error);
  }, [wallet]);

  return address;
};

export const useBalace = () => {
  const {tezos, address} = useBeacon();
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    if (tezos && address) {
      tezos.tz
        .getBalance(address)
        .then((balance) => setBalance(balance.toNumber()))
        .catch(console.error);
    }
  }, [tezos, address]);

  return balance;
};
