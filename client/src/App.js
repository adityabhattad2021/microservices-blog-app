import './App.css';
import CreatePost from './components/CreatePost';
import Postlist from './components/Postlist';

function App() {

  return (
    <div className='h-screen flex justify-around flex-col gap-8'>
      <div className='flex flex-col justify-center items-center mt-8 md:mt-24'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-6 text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-[#5D4157] to-[#A8CABA] pb-2'>
          Mini-Blog app
        </h1>
        <p className='text-md sm:text-lg md:text-xl lg:text-2xl'>with Microservices Architecture</p>
      </div>
      <CreatePost />
      <Postlist />
    </div>
  );
}

export default App;
