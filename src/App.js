import logo from './logo.svg';
import art1 from './images/art1.jpg'
import art2 from './images/art2.jpg'
import art3 from './images/art3.jpg'
import art4 from './images/art4.jpg'
import art5 from './images/art5.jpg'
import art6 from './images/art6.jpg'
import './App.css';

function App() {
  return (
    <div className="flex flex-col justify-center items-center text-gray-200">
      <h1 className='p-8 text-5xl '><b>Welcome to Movs</b></h1>
      <h2 className='py-2 text-lg'>The No 1 Art Gallery In the World </h2>
      <hr/>
      <h1 className='mt-4 text-lg font-bold'><u>GALLERY</u></h1>
      <div className="m-10 flex flex-wrap justify-center items-center gap-6 mt-6 ">
      <img src={art1} className="w-72 h-72 " alt="logo" />
      <img src={art2} className="w-72 h-72" alt="logo" />
      <img src={art3} className="w-72 h-72" alt="logo" />
      <img src={art4} className="w-72 h-72" alt="logo" />
      <img src={art5} className="w-72 h-72" alt="logo" />
      <img src={art6} className="w-72 h-72" alt="logo" />
        
      </div>
      
    </div>
  );
}

export default App;
