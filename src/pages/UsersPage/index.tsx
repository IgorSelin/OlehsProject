import { useGetUsersQuery } from "../../api/users";
import { Card, Spin } from "antd";
import styles from "./UsersPage.module.scss";
import { Link } from "react-router-dom";

const UsersPage = () => {
  const { data, isLoading } = useGetUsersQuery(null);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Spin className={styles.spin}/>
      ) : (
        data?.map((e) => (
          <Link key={e.id} to={`/user/${e.id}`}>
            <Card className={styles.user} title={e.name} hoverable>
              {e.email}
            </Card>
          </Link>
        ))
      )}
    </div>
  );
};

export default UsersPage;
