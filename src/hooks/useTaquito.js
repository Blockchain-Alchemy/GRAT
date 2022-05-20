import {useCallback} from "react";
import useBeacon from "./useBeacon";

const useTaquito = () => {
  const {tezos, contract, setLoading} = useBeacon();

  const getStorage = useCallback(() => {
    return contract?.storage();
  }, [contract])


  const deployContract = useCallback((code, storage) => {
    setLoading(true);

    return tezos?.wallet
      .originate({
        code: code,
        init: storage,
      })
      .send()
      .then(originationOp => {
        console.log('Waiting for confirmation of origination...');
        return originationOp.contract()
      })
      .then((contract) => {
        console.log(`Origination completed for ${contract.address}`)
        return contract.address;
      })
      .catch((error) => {
        console.error("error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [tezos, setLoading])


  return {
    deployContract,
    getStorage,
  };
};

export default useTaquito;