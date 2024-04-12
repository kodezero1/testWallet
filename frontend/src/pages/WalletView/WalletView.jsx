import { useState, useEffect } from "react";
import {
  Divider,
  Tooltip,
  List,
  Avatar,
  Spin,
  Tabs,
  Input,
  Button,
} from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function WalletView({
  wallet,
  setWallet,
  seedPhrase,
  setSeedPhrase,
}) {
  const tokens = [
    {
      symbol: "Eth",
      name: "Ethereum",
      balance: 10000,
      decimals: 18,
    },
    {
      symbol: "Link",
      name: "Chainlink",
      balance: 10000,
      decimals: 18,
    },
    {
      symbol: "UNI",
      name: "Uniswap",
      balance: 10000,
      decimals: 18,
    },
    {
      symbol: "MATIC",
      name: "Polygon",
      balance: 10000,
      decimals: 18,
    },
  ];

  const navigate = useNavigate()
  const nfts = [];

  const logout = () => {
    setSeedPhrase(null)
    setWallet(null)
    navigate("/")
  }

  return (
    <div className="content">
        <div className="logoutButton" onClick={logout}>
            <LogoutOutlined/>
        </div>
        {wallet}
    </div>
  )
}
