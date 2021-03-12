import * as React from 'react'
import Transition from '../Transition'
import {AiOutlineClose, AiOutlineHome} from 'react-icons/ai'


const Sidenav = (props) =>{
    return(
        <>
        <Transition show={(props.isStatic || !props.isClosed)} 
                    enter="transition-all duration-500" 
                    enterFrom="-ml-64"
                    enterTo="ml-0"
                    leave="transition-all duration-500"
                    leaveTo="-ml-64"
                    >
            <aside className={`justify-start z-10 rounded-r px-3 bg-blue-400 md:bg-white border-none bg-opacity-100 md:bg-opacity-30 w-40 min-h-screen flex flex-col ${props.isStatic ? '': 'fixed'}`}>
                <section className="mt-10 flex items-center py-3 h-2/6 border-b">
                    <span className="inline-block w-12 h-12 rounded-full overflow-hidden">
                        <img
                        className="w-full object-fit rounded-full"
                        src="https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS_400x400.jpg"
                        alt=""
                        />
                    </span>
                    <div className="ml-3">
                        <h2 className="text-lg text-white">Cesar Ramirez</h2>
                        <h3 className="text-gray-200">producer</h3>
                    </div>
                    {
                        !props.isStatic && (
                            <button onClick={() => props.close(true)} 
                            aria-label="Close Menu" 
                            tittle="Close Menu"
                            tabIndex="1"
                            className="z-10 absolute top-2 left-28  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent visible bg-white border-none bg-opacity-70  p-3 text-white rounded-lg" >
                            <AiOutlineClose/>
                            </button>
                        )
                    }
                   
                </section>
                <div className=" flex-grow flex justify-center text-white mt-20">
                    
                    <ul class="space-y-3">
                        <li class="flex items-center">
                                <a className="h-8 w-full p-3  cursor-pointer hover:bg-blue-500 md:hover:bg-blue-400 rounded flex items-center">
                                    <AiOutlineHome/>
                                    <span className="ml-3" href="">Home</span>
                                </a>          
                        </li>
                        <li class="flex items-center">
                                <a className="h-8 w-full p-3  cursor-pointer hover:bg-blue-500 md:hover:bg-blue-400 rounded flex items-center">
                                    <AiOutlineHome/>
                                    <span className="ml-3" href="">Profile</span>
                                </a>          
                        </li>
                        <li class="flex items-center">
                                <a className="h-8 w-full p-3 cursor-pointer hover:bg-blue-500 md:hover:bg-blue-400 rounded flex items-center">
                                    <AiOutlineHome/>
                                    <span className="ml-3" href="">Search</span>
                                </a>          
                        </li>
                        <li class="flex items-center">
                                <a className="h-8 w-full p-3  cursor-pointer hover:bg-blue-500 md:hover:bg-blue-400 rounded flex items-center">
                                    <AiOutlineHome/>
                                    <span className="ml-3" href="">Chats</span>
                                </a>          
                        </li>
                        <li class="flex items-center">
                                <a className="h-8 w-full p-3  cursor-pointer hover:bg-blue-500 md:hover:bg-blue-400 rounded flex items-center">
                                    <AiOutlineHome/>
                                    <span className="ml-3" href="">Contracts</span>
                                </a>          
                        </li>
                        
                    </ul>
                </div>
            </aside>
        </Transition>
        </>
    );
}

export default Sidenav;