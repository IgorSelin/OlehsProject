import { ReactNode } from "react";
import styles from "./Layout.module.scss";
import { Layout, Menu } from "antd";

const { Header, Content, Footer } = Layout;

interface IMainLayout {
  children: ReactNode;
}

const MainLayout = ({ children }: IMainLayout) => {
  return (
    <Layout className={styles.container}>
      <Header className={styles.header}>
        <span className={styles.title}> Users project</span>
        <Menu theme="dark" mode="horizontal" />
      </Header>
      <Content className={styles.content}>{children}</Content>
      <Footer className={styles.footer}>
        Oleh Selin ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default MainLayout;
