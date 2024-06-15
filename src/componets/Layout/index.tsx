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
        <h1 className={styles.title}> Users project</h1>
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
