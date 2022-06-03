import styles from "../styles/page/connection1.module.scss";
import Header from "../component/header";
import Footer from "../component/footer";
import React, { useState, useEffect } from "react";
import { PublicKey, Transaction } from "@solana/web3.js";
import { useWallet } from "@saberhq/use-solana";
import { useRouter } from "next/router";
import { ConnectWalletButton } from '@gokiprotocol/walletkit'

const Page1 = () => {
  const { connected, connection, wallet } = useWallet();

  useEffect(() => {
    if(connected)
      window.sessionStorage.setItem("session", "true");
    else{
      window.sessionStorage.setItem("session", "false");
    }
  }, [connected])

    return (
      <div className={styles.main}>
        <Header />
        <div className={styles.border}>
          <div className={styles.body}>
            <div className={styles.bodyTop1}>Application</div>
                <ConnectWalletButton className={styles.bodyTop2} />
            <div className={styles.bodyTop3}>
              <button>Connect</button>
            </div>
          </div>
        </div>
        <Footer />  
      </div>
    );
  
};

export default Page1;
