import styles from "../styles/page/component.module.scss";
import Image from "next/image";
import Texaglo_White from "../asset/Texaglo_White.png";
import twitterIcon from "../asset/twitter_icon.png";
import instagramIcon from "../asset/instagram_icon.png";

const footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLeft}>
        <span>SERVICES</span>
        <span>LIGHT PAPER</span>
      </div>
      <div className={styles.footerCenter}>
        <Image src={Texaglo_White} width={370} height={50} />
        <span>TEXAGLO TECHNOLOGIES LTD.CO. @ 2021</span>
      </div>
      <div className={styles.footerRight}>
        <Image src={twitterIcon} width={30} height={30} />
        <Image src={instagramIcon} width={30} height={30} />
      </div>
    </div>
  );
};

export default footer;
