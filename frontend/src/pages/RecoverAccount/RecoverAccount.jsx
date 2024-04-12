import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BulbOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { ethers } from "ethers";

const { TextArea } = Input;
export default function RecoverAccount({ setWallet, setSeedPhrase }) {
  const navigate = useNavigate();
  const [typedSeed, setTypedSeed] = useState("");
  const [nonValid, setNonValid] = useState(false)

  const seedAdjust = (e) => {
    setWallet(false)
    setTypedSeed(e.target.value);
  };

  const recoverWallet = () => {
    let recoverableWallet
    try {
      recoverableWallet = ethers.Wallet.fromPhrase(typedSeed)
    } catch (error) {
      setNonValid(true)
      return
    }
    setSeedPhrase(typedSeed)
    setWallet(recoverableWallet.address)
    navigate("/yourwallet")
    return
  }
  return (
    <div className="content">
      <div className="mnemonic">
        <BulbOutlined style={{ fontSize: "20px" }} />
        <div>
          Type your seed phrase in the field below to recover your wallet
        </div>
      </div>
      <TextArea
        value={typedSeed}
        onChange={seedAdjust}
        rows={4}
        placeholder="Enter your seed phrase here"
        className="seedPhraseContainer"
      />
      <Button
        disabled={typedSeed.split(" ").length !== 12 || typedSeed.slice(-1) === " " }
        className="frontPageButton"
        type="primary"
        onClick={() => recoverWallet()}
      >
        Recover wallet
      </Button>
      {nonValid && <p style={{color: "red"}}>Invalid seed phrase</p>}
      <p className="frontPageButton" onClick={() => navigate("/")}>
        Go back
      </p>
    </div>
  );
}
