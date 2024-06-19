import Image from "next/image";
import Logo from "@/shared/assets/logo.svg";
import Link from "next/link";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Link href="/">
        <Image src={Logo} alt="logo" height={32} width={32} />
      </Link>
    </div>
  );
};
