import * as React from 'react';
import './Home.css'
import MusicianBanner from '../../assets/Img/musician3.png'
const Home = () => {
    return(
        <div className="lg:h-full grid grid-cols-1 lg:grid-cols-2">
            <section className="h-80 lg:h-full tittle flex flex-col items-center justify-end sm:justify-center md:justify-end text-white">
                <h2 className="text-center text-4xl sm:text-5xl md:text-7xl ">Welcome to <br/> Get Your Music</h2>
                <h4 className="mt-5">Powered by Astra</h4>
                <button className="mt-10 bg-blue-300 hover:bg-blue-500 py-2 px-5 rounded-full">
                <span className="text-white">Play</span>
                </button>
            </section>

            <section className="h-full mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3  lg:grid-cols-4 flex lg:h-1/2 items-center col-span-2  gap-2">
                <div className="flex justify-center items-start lg:col-start-2">
                    <div className="card h-36 sm:h-40 w-32 md:w-4/6 lg:w-40 lg:h-56 bg-white rounded">
                     <img src="https://images.pexels.com/photos/2231751/pexels-photo-2231751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
                    </div>
                </div>
                <div className="flex justify-center items-start">
                    <div className="card h-36 sm:h-40 w-32 md:w-4/6 lg:w-40 lg:h-56 bg-white rounded">
                        <img src="https://images.pexels.com/photos/838702/pexels-photo-838702.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt=""/>
                    </div>
                </div>
                <div className="flex justify-center ">
                    <div className="card h-36 sm:h-40 w-32 md:w-4/6 lg:w-40 lg:h-56 bg-white rounded">
                     <img src="https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>                    
                    </div>
                </div>             
            </section>

            

            <img className="img-main hidden  lg:block" src={MusicianBanner} alt=""/>

        </div>
    );
}

export default Home;