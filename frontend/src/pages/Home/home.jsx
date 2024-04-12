import React from "react";

import wallet from "../../assets/wallet.svg";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate()
  return (
    <div className="content">
      <img src={wallet} alt="wallet" className="frontPageLogo" />
      {/* <h2>Hey there</h2> */}
      <h4 className="h4">Welcome to your web3 wallet</h4>
      <Button onClick={() => navigate("/yourwallet")} className="frontPageButton" type="primary">
        Create a wallet
      </Button>
      <Button onClick={() => navigate("/recover")} className="frontPageButton" type="default">
        Sign in with Seed phrase
      </Button>
    </div>
  );
}
