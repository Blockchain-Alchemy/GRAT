import { useContext } from 'react'
import { BeaconContext } from 'contexts/BeaconContext'

const useBeacon = () => {
  const beaconContext = useContext(BeaconContext)

  if (beaconContext === undefined) {
    throw new Error('Beacon context undefined')
  }

  return beaconContext
}

export default useBeacon
