import React from "react";
import { Button, Image } from "@mantine/core";
import { Help, Aperture, Checkbox } from 'tabler-icons-react';
import ConnectButton from "components/ConnectWallet"

const Menu = () => {
  return (
    <header className="App-header">
      <Image src="grat.png" alt="Grat" height={60}/>
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
          Ideas
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
