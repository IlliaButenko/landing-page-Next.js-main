import styles from "../styles/page/component.module.scss";
import Image from "next/image";
import dmh from "../asset/dmh.png";
import Texaglo from "../asset/Texaglo.png";

const header = () => {
  return (
    <div className={styles.header}>
      <div>
        <Image src={dmh} width={50} height={50} />
      </div>
      <div className={styles.headeroption}>
        <span>Register</span>
        <span>Play</span>
        <Image src={Texaglo} width={70} height={20} />
      </div>
    </div>
  );
};

export default header;
