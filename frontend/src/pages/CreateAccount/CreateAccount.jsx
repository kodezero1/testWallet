import React, { useState } from "react";
import { Button, Card } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from 'react-router-dom'
import { ethers } from 'ethers'

export default function CreateAccount({setWallet, setSeedPhrase}) {
  const navigate = useNavigate()
  const [newSeedPhrase, setNewSeedPhrase] = useState(null)
  
  const generateWallet = () => {
    const mnemonic = ethers.Wallet.createRandom().mnemonic.phrase
    setNewSeedPhrase(mnemonic)
  }

  const setWalletAndMnemonic = () => {
    setSeedPhrase(newSeedPhrase)
    setWallet(ethers.Wallet.fromPhrase(newSeedPhrase).address)
  }

  return (
    <div>
      <div className="mnemonic">
        <ExclamationCircleOutlined style={{ fontSize: "20px" }} />
        <div>
          Once you generate the seed phrase save it securely in order to recover
          your wallet.
        </div>
      </div>
      <Button
        className="frontPageButton"
        type="primary"
        onClick={() => generateWallet()}
      >
        Generate seed phrase
      </Button>
      <Card className="seedPhraseContainer">
        {newSeedPhrase && <pre style={{whiteSpace: "pre-wrap"}}>{newSeedPhrase}</pre>}
      </Card>
      <Button className="frontPageButton" type="default" 
      onClick={() => setWalletAndMnemonic()}
      >
        Open your new wallet
      </Button>
      <p className="frontPageButton" onClick={() => navigate("/")}>
       <a href=""></a> Go back home
      </p>
    </div>
  );
}
