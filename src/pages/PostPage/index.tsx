import { Link, useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../../api/posts";
import styles from "./PostPage.module.scss";
import { useGetCommentByIdQuery } from "../../api/comments";
import { Spin, Card, Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";

const PostPage = () => {
  const { id } = useParams();
  const { data: postInfo } = useGetPostByIdQuery(id!);
  const { data: comments = [], isLoading } = useGetCommentByIdQuery(
    postInfo?.id!
  );

  return (
    <div className={styles.container}>
      <Link to={`/users/${postInfo?.userId}`} className={styles.backLink}>
        <LeftOutlined />
        Back to posts
      </Link>
      <div className={styles.actionButtonsContainer}>
        <Button size="large">Edit</Button>
        <Button size="large">Delete</Button>
      </div>
      <div>
        <span className={styles.key}>Title:</span> {postInfo?.title}
      </div>
      <div>
        <span className={styles.key}>Body:</span> {postInfo?.body}
      </div>
      <div className={styles.commentsTitle}>Comments:</div>
      {isLoading ? (
        <Spin className={styles.spin} />
      ) : (
        comments.map((e) => (
          <Card
            key={e.id}
            className={styles.comment}
            title={`Comment by: ${e.email}`}
            hoverable
          >
            <div className={styles.innerContainer}>
              <div> {e.body}</div>
            </div>
          </Card>
        ))
      )}
    </div>
  );
};

export default PostPage;
