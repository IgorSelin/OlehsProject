import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../../api/posts";
import styles from "./PostPage.module.scss";
import { useGetCommentByIdQuery } from "../../api/comments";
import { Spin, Card } from "antd";

const PostPage = () => {
  const { id } = useParams();
  const { data: postInfo } = useGetPostByIdQuery(id!);
  const { data: comments = [], isLoading } = useGetCommentByIdQuery(
    postInfo?.id!
  );

  return (
    <div className={styles.container}>
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
