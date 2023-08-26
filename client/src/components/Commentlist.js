export default function Commentlist({ comments }) {
  return (
    <div className='h-32 flex flex-col gap-2 p-4 overflow-y-scroll'>
      {comments &&
        comments.map((comment) => {
          return <li key={comment.commentId}>{comment.comment}</li>;
        })}
    </div>
  );
}
