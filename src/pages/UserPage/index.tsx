import { LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import styles from "./UserPage.module.scss";

const UserPage = () => {
  return (
    <div className={styles.container}>
      <Link to={"/"} className={styles.backLink}>
        <LeftOutlined />
        All users
      </Link>
      <div> Specific user page</div>
    </div>
  );
};

export default UserPage;
