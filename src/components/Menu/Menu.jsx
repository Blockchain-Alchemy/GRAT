import React from "react";
import { Image } from "@mantine/core";
import ConnectButton from "components/ConnectWallet"

const Menu = () => {
  return (
    <header className="App-header">
      <Image src="grat.png" alt="Grat" height={60} />
      <ConnectButton />
    </header>
  );
};

export default Menu;
