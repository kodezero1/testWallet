import "./App.css";
import logo from "./assets/testWalletLogo.svg";
import Home from "./pages/Home/home";
import CreateAccount from "./pages/CreateAccount/CreateAccount";
import RecoverAccount from "./pages/RecoverAccount/RecoverAccount";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Select } from "antd";
function App() {
  const [selectChain, setSelectChain] = useState("0x1");

  return (
    <>
      <div className="walletLayout">
        <header>
          <img src={logo} className="headerLogo" alt="logo" />
          <Select
            onChange={(val) => setSelectChain(val)}
            value={selectChain}
            options={[
              {
                label: "Ethereum",
                value: "0x1",
              },
              {
                label: "Not Razor Testnet",
                value: "0x13881",
              },
              {
                label: "polygon",
                value: "0x89",
              },
              {
                label: "Avalanche",
                value: "0xa86a",
              },
            ]}
            className="dropDown"
          ></Select>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createaccount" element={<CreateAccount/>}/>
          <Route path="/recover" element={<RecoverAccount/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
