import Commentlist from './Commentlist';
import CreateComment from './CreateComment';

export default function PostCard({post}) {

  return (
    <div className='border-2 h-64 rounded-3xl p-4'>
      <h1 className='font-bold text-2xl'>{post.post}</h1>
      <hr className='my-3' />
      <CreateComment 
      />
      <Commentlist
        comments={post.comments}
      />
    </div>
  );
}
