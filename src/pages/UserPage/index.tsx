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
  const [showConfetti, setShowConfetti] = useState(false); // Use a more descriptive name
  const [addPost] = useAddPostMutation();

  const addPostHandler = async (values: Post) => {
    try {
      await addPost({ ...values });
      setShowConfetti(true);
      setIsAddModalOpen(false);
      setTimeout(() => setShowConfetti(false), 5000);
      // need to fix
      toast("Post added successfully!");
    } catch (e) {
      console.log(e);
    }
  };

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

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
        <Confetti
          run={showConfetti}
          recycle={false}
          width={width}
          height={height}
          
        />
      </div>
    </div>
  );
};

export default UserPage;
