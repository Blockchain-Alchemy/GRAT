import React from "react";
import { Button, Image } from "@mantine/core";
import { Help, Aperture, Checkbox } from 'tabler-icons-react';
import ConnectButton from "components/ConnectWallet"

const Menu = () => {
  return (
    <header className="App-header">
      <div className="logo-wrapper">
        <Image src="grat.png" alt="Grat" height={60}/>
        <div className="logo-link">By <a className="link" href="https://blockalc.com">Blockchain Alchemy</a></div>
      </div>
      <div className="about-grat">
        GRAT is a full-featured IDE where you make <a className="link" href="https://tezos.com">Tezos</a> Smart Contracts using visual blocks. 
      </div>
      <div className="menu-buttons">
        <Button
          leftIcon={<Checkbox size={14} />}
          size="md"
          m={10}
        >
          Tutorial
        </Button>
        <Button
          leftIcon={<Aperture size={14} />}
          size="md"
          m={10}
        >
          Recipes
        </Button>
        <Button
          leftIcon={<Help size={14} />}
          size="md"
          m={10}
        >
          About
        </Button>
        <ConnectButton />
      </div>
    </header>
  );
};

export default Menu;
