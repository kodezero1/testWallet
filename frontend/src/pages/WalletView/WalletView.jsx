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
import logo from "../../assets/noImg.png"

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

  const nfts = [];
  const navigate = useNavigate();
  const items = [
    {
      key: "3",
      label: "Tokens",
      children: (
        <>
          {tokens ? (
            <>
              <List
                bordered
                itemLayout="horizontal"
                dataSource={tokens}
                renderItem={(item, index) => (
                  <List.Item style={{ textAlign: "left" }}>
                    <List.Item.Meta
                      avatar={<Avatar src={item.logo || logo} />}
                      title={item.symbol}
                      description={item.name}
                    />
                    <div>
                      {(
                        Number(item.balance) /
                        10 ** Number(item.decimals)
                      ).toFixed(2)}{" "}
                      Tokens
                    </div>
                  </List.Item>
                )}
              />
            </>
          ) : (
            <>
              <span>You don't have any tokens yet</span>
              <p className="frontPageButton"></p>
            </>
          )}
        </>
      ),
    },
    {
      key: "2",
      label: "NFTs",
      children: (
        <>
          {nfts ? (
            <>
              {nfts.map((e, i) => {
                return (
                  <>
                    {e && (
                      <img
                        key={i}
                        className="nftImage"
                        alt="nftImage"
                        src={e}
                      />
                    )}
                  </>
                );
              })}
            </>
          ) : (
            <>
              <span>You seem to not have any NFTs yet</span>
              <p className="frontPageBottom">
                
              </p>
            </>
          )}
        </>
      ),
    },
    {
      key: "1",
      label: "Transfer",
      children: <>Transfer</>,
    },
  ];

  const logout = () => {
    setSeedPhrase(null);
    setWallet(null);
    navigate("/");
  };

  return (
    <div className="content">
      <div className="logoutButton" onClick={logout}>
        <LogoutOutlined />
      </div>
      <div className="walletName">Wallet</div>
      <Tooltip title={wallet}>
        <div>
          {wallet.slice(0, 4)}...{wallet.slice(38)}
        </div>
      </Tooltip>
      <Divider />
      <Tabs defaultActiveKey="1" items={items} className="walletView" />
    </div>
  );
}
