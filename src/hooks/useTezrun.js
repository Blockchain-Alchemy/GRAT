import Network from "config";
import {useCallback, useState} from "react";
import useBeacon from "./useBeacon";

const useTezrun = () => {
  const {tezos, contract, address, setLoading} = useBeacon();
  const [approval, setApproval] = useState(undefined);


  const getStorage = useCallback(() => {
    return contract?.storage();
  }, [contract])


  const getApproval = useCallback(() => {
    setLoading(true);

    if (approval) {
      return new Promise(resolve => resolve(approval));
    }

    return tezos?.wallet.at(Network.uUSD)
      .then(contract => {
        return contract.storage()
      })
      .then((storage: any) => {
        return storage.balances.get(address)
      })
      .then(balance => {
        return balance.approvals.get(Network.contractAddress);
      })
      .then(approv => {
        const result = approv?.toNumber();
        setApproval(result);
        return result;
      })
      .catch((error) => {
        console.error("error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [tezos, address, approval, setLoading, setApproval])


  const approve = useCallback(() => {
    console.log("approve")
    setLoading(true);

    return tezos?.wallet.at(Network.uUSD)
      .then(contract => {
        console.info("uUSD.contract", contract);
        return contract?.methods.approve(Network.contractAddress, 1000000).send()
      })
      .then(result => {
        console.info("approve", result);
        return result;
      })
      .catch((error) => {
        console.error("error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [tezos, setLoading]);


  const placeBet = useCallback((raceId, horseId, payout, amount) => {
    console.log("placeBet", raceId, horseId, payout, amount)
    console.log("placeBet-contract", contract)
    setLoading(true);

    return contract?.methods
      .placeBet(Number(horseId), Number(payout), Number(raceId))
      .send({
        amount: amount,
      })
      .then((result) => {
        console.info("placeBet", result);
        return result;
      })
      .catch((error) => {
        console.error("placeBet-error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [contract, setLoading]);


  const placeBetByToken = useCallback((raceId, horseId, payout, amount) => {
    console.log("placeBetByToken", raceId, horseId, payout, amount)
    setLoading(true);

    return contract?.methods
      .placeBetByToken(amount, horseId, payout, raceId, Network.tokenId)
      .send()
      .then((result) => {
        console.info("placeBetByToken", result);
        return result;
      })
      .catch((error) => {
        console.error("placeBetByToken-error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [contract, setLoading]);


  const takeReward = useCallback(() => {
    setLoading(true);

    return contract?.methods
      .takeReward()
      .send()
      .then((result) => {
        console.info("takeReward", result);
        return result;
      })
      .catch((error) => {
        console.error("takeReward-error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [contract, setLoading]);


  const getWinner = useCallback(() => {
    return contract?.storage().then((storage: any) => {
      //console.log("storage", storage);
      return storage.winner?.toNumber();
    });
  }, [contract])


  return {
    placeBet,
    placeBetByToken,
    takeReward,
    getApproval,
    approve,
    getStorage,
    getWinner,
  };
};

export default useTezrun;