import { useGetUsersQuery } from "../../api/users";
import { Card } from "antd";
import styles from "./UsersPage.module.scss";
import { Link } from "react-router-dom";

const UsersPage = () => {
  const { data } = useGetUsersQuery(null);

  return (
    <div className={styles.container}>
      {data?.map((e) => (
        <Link key={e.id} to={`/user/${e.id}`}>
          <Card className={styles.user} title={e.name} hoverable>
            {e.email}
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default UsersPage;
