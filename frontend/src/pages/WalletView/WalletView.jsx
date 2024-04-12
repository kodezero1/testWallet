import { useState, useEffect } from 'react'
import { Divider} from 'antd'

export default function WalletView({wallet, setWallet, seedPhrase, setSeedPhrase}) {
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
        }
    ]
    // console.log(wallet)
    return (
    <div className='content'>
    {wallet}
    </div>
  )
}
