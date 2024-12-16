import './App.css';
import HeadComponent from './Components/HeadComponent/HeadComponent';
import MainComponent from './Components/MainSection/MainComponent';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <div className='herocontainer'>
        <HeadComponent/>    
        <MainComponent/>
        </div>  

    </div>
  );
}

export default App;
