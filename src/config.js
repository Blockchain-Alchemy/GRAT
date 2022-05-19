import { NetworkType } from "@airgap/beacon-sdk";

const Network = {
  networkType: NetworkType.HANGZHOUNET,

  rpcUrl: "https://hangzhounet.smartpy.io",//"https://hangzhounet.api.tez.ie",

  mainnetRpcList: [
    "https://mainnet.api.tez.ie",
    "https://mainnet.smartpy.io",
    "https://rpc.tzbeta.net",
    "https://teznode.letzbake.com",
  ],

  hangzhounetRpcList: [
    "https://hangzhounet.smartpy.io",
    "https://hangzhounet.api.tez.ie",
    "https://testnet-tezos.giganode.io"
  ],

  contractAddress: "KT1X1vmBrGb4YHNSDPzYX5QGmNDkTrfeQmH1",
    //"KT1BsUwGoXZ16m3ssHgR8tKmcJdpYVk2ypvS",
    //"KT1AqeeD6fWCqq6gBnCJXqDRnMZtQSto1JUM",
    //"KT1VStRf2D1hDyWru4mkVdnBjo3VNsW64AQn",
    //"KT18feYwzdedqF3pxv6RGNrnCjqbgkTjM1Y4",
    //"KT18feYwzdedqF3pxv6RGNrnCjqbgkTjM1Y4", //"KT1PMZpsAPt3kYPshKmvrU4gve5vXpg1uNit", //"KT1J2UrLek8rXkWPAqR7KSBpRF4Bk13wgLAF",

  tokenId: 1,
}

export default Network;