import styles from "../../styles/page/connection2.module.scss";
import Header from "../../component/header";
import Footer from "../../component/footer";
import { useRouter, Router } from "next/router";
import { useWallet } from "@saberhq/use-solana";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"


const Connection2 = () => {
  const { connected, connection, wallet } = useWallet();
  const router = useRouter();    

  /* useEffect(() => {
    console.log("connection1_connected", connected)
    if (!connected) router.push("/")
  }, [connected]) */
  useEffect(() => {
    if (window.sessionStorage.getItem("session") == "false") router.push("/")
  }, [])
  // useEffect(() => { 
  //   console.log("window.localStorage.getItem('Session')", window.localStorage.getItem('Session'))
  //   if (window.localStorage.getItem('Session') == "false") {
  //     router.replace("/")
  //   }
  // }, [connected])

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.border}>
        <div className={styles.body}>
          <div className={styles.bodyTop1}>Application</div>
          <div className={styles.bodyTop2}>
            <button
              onClick={() => {
                router.push("/connection1");
              }}
            >
              Art Generator
            </button>
          </div>
          <div className={styles.bodyTop2}>
            <span>Connect</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Connection2;
