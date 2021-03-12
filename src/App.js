import {useState} from 'react'
import './App.css';
import './components/shared/Sidenav'
import Sidenav from './components/shared/Sidenav';
import './components/Home/Home'
import Home from './components/Home/Home';
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import useBreakPoint from './components/useBreakpoint'
import Transition from './components/Transition'

function App() {

  const [isClosed, setClosed] = useState(false)
  const isStatic = useBreakPoint('md');
  const close = ()=> {
    setClosed(true);
  }
  return (
    <div className="flex antialiased">
      <Sidenav isClosed={isClosed} isStatic={isStatic} close={close}/>
      <Transition
        appear={true}
        show={!isStatic && !isClosed}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-40"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-50"
        leaveTo="opacity-0">
      <div className="fixed inset-0 bg-black opacity-0"></div>
     </Transition>
      <main className="relative flex-grow flex flex-col min-h-screen">
       {!isStatic && (
            <button onClick={() => setClosed(false)}
            aria-label="Open Menu"
            aria-hidden={!isClosed} 
            tittle="Open Menu"
            tabIndex="1"
            className="fixed  top-5 left-5  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent visible bg-white border-none bg-opacity-70  p-3 text-white rounded-lg" >
              <GiHamburgerMenu/>
            </button>
          )}
        
        <Home/>
      </main>
    </div>
  );
}

export default App;
