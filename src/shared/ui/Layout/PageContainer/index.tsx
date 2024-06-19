import styles from "./PageContainer.module.scss";
import { ReactNode } from "react";

type TProps = {
  children: ReactNode;
};

export const PageContainer = ({ children }: TProps) => {
  return <div className={styles.page}>{children}</div>;
};
