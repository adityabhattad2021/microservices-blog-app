import PostCard from './PostCard';

export default function Postlist() {
  return (
    <div className='m-12 p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 overflow-y-scroll'>
      {Object.values({'123':{
        post: 'Dummy Post',
        postId: '123',
        comments: [{ comment: 'Dummy Comment', commentId: '123' }],
      }}).map((post) => {
        return <PostCard key={post.postId} post={post} />;
      })}
    </div>
  );
}
