import React, { useEffect, useState } from "react";
import Web3Modal from "web3modal";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Fortmatic from "fortmatic";
import Torus from "@toruslabs/torus-embed";
import Portis from "@portis/web3";
// @ts-ignore
import MewConnect from "@myetherwallet/mewconnect-web-client";

interface ParrentProps {
  children: React.ReactNode;
}

const initWeb3 = (provider: any) => {
  const web3: any = new Web3(provider);

  web3.eth.extend({
    methods: [
      {
        name: "chainId",
        call: "eth_chainId",
        outputFormatter: web3.utils.hexToNumber,
      },
    ],
  });
  return web3;
};

function TopWrap(props: ParrentProps) {
  const [fetching, setFetching] = useState(false);
  const [address, setAddress] = useState("");
  const [web3, setWeb3] = useState(null);
  const [provider, setProvider] = useState(null);
  const [connected, setConnected] = useState(false);
  const [chainId, setChainId] = useState(1);
  const [networkId, setNetworkId] = useState(1);

  useEffect(() => {}, []);

  return <div>{props.children}</div>;
}

export default TopWrap;
