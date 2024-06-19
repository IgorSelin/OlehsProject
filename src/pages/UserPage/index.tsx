import { LeftOutlined, PlusOutlined } from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";
import styles from "./UserPage.module.scss";
import { useGetPostsByIdQuery, useAddPostMutation } from "../../api/posts";
import { Button, Card, Flex, Spin, Typography } from "antd";
import { useGetUserByIdQuery } from "../../api/users";
import { useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import PostModal from "../../components/PostModal";
import { Post } from "../../types/posts";
import { toast } from "react-toastify";

const UserPage = () => {
  const { id } = useParams();
  const { data: posts, isLoading } = useGetPostsByIdQuery(id!);
  const { data: userInfo } = useGetUserByIdQuery(id!);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const { width, height } = useWindowSize();
  const [addPost] = useAddPostMutation();
  const [confettiArray, setConfettiArray] = useState<number[]>([]);
  const addPostHandler = async (values: Post) => {
    try {
      await addPost({ ...values });
      setConfettiArray((prev) => [...prev, prev.length + 1]);
      setIsAddModalOpen(false);
      toast("Post added successfully!");
      setTimeout(() => {
        setConfettiArray((prev) => {
          prev.unshift();
          return prev;
        });
      }, 5500);
    } catch (e) {
      console.log(e);
    }
  };

  const openAddModal = () => setIsAddModalOpen(true);

  return (
    <div className={styles.container}>
      <Link to={"/"} className={styles.backLink}>
        <LeftOutlined />
        All users
      </Link>
      <Flex className={styles.titleContainer}>
        <Typography.Title>Posts by {userInfo?.name}</Typography.Title>
        <Button
          type="primary"
          size="large"
          icon={<PlusOutlined />}
          onClick={openAddModal}
        >
          Add Post
        </Button>
      </Flex>
      <div>
        {isLoading ? (
          <Spin className={styles.spin} />
        ) : (
          posts?.map((e) => (
            <Card key={e.id} className={styles.post} title={e.title} hoverable>
              <div className={styles.innerContainer}>
                <div> {e.body}</div>
                <Link to={`/posts/${e.id}`}>
                  <Button>Details</Button>
                </Link>
              </div>
            </Card>
          ))
        )}
        <PostModal
          closeModal={() => setIsAddModalOpen(false)}
          isModalOpen={isAddModalOpen}
          onFinish={addPostHandler}
          title="Add post"
        />
        {confettiArray.map((e) => (
          <Confetti key={e} width={width} height={height} recycle={false} />
        ))}
      </div>
    </div>
  );
};

export default UserPage;
