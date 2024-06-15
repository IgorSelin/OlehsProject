import { useGetUsersQuery } from "../../api/users";
import { Card } from "antd";
import styles from "./UsersPage.module.scss";

const UsersPage = () => {
  const { data } = useGetUsersQuery(null);

  return (
    <div className={styles.container}>
      {data?.map((e) => (
        <Card className={styles.user} key={e.id} title={e.name} hoverable>
          {e.email}
        </Card>
      ))}
    </div>
  );
};

export default UsersPage;
