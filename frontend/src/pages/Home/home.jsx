import React from "react";

import wallet from "../../assets/wallet.svg";
import { Button } from "antd";

export default function Home() {
  return (
    <div className="content">
      <img src={wallet} alt="wallet" className="frontPageLogo" />
      {/* <h2>Hey there</h2> */}
      <h4 className="h4">Welcome to your web3 wallet</h4>
      <Button className="frontPageButton" type="primary">
        create a wallet
      </Button>
      <Button className="frontPageButton" type="default">
        Sign in with Seed phrase
      </Button>
    </div>
  );
}
