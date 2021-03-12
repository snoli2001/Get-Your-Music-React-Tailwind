import {useState} from 'react'
import './App.css';
import './components/shared/Sidenav'
import Sidenav from './components/shared/Sidenav';
import './components/Home/Home'
import Home from './components/Home/Home';
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import useBreakPoint from './components/useBreakpoint'


function App() {

  const [isClosed, setClosed] = useState(false)
  const isStatic = useBreakPoint('md');
  const close = ()=> {
    setClosed(true);
  }
  return (
    <div className="flex antialiased">
      <Sidenav isClosed={isClosed} isStatic={isStatic} close={close}/>
      <main className="relative flex-grow flex flex-col min-h-screen">
       {!isStatic && 
          (isClosed?(
            <button onClick={() => setClosed(false)}
            aria-label="Open Menu" 
            tittle="Open Menu"
            tabIndex="1"
            className="fixed  top-5 left-5  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent visible bg-white border-none bg-opacity-70  p-3 text-white rounded-lg" >
              <GiHamburgerMenu/>
            </button>
          ):(
            <button onClick={() => setClosed(true)} 
            aria-label="Close Menu" 
            tittle="Close Menu"
            tabIndex="1"
            className="fixed top-5 left-5  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent visible bg-white border-none bg-opacity-70  p-3 text-white rounded-lg" >
              <GiHamburgerMenu/>
            </button>
       ))}
        
        <Home/>
      </main>
    </div>
  );
}

export default App;
