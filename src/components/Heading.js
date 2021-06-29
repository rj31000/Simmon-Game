import React from 'react'
import simmon from '../images/simmon.jpg'
import { useHistory } from 'react-router-dom'

const Heading = () => {
    let history=useHistory();
    console.log(history)
    
    const redirect = () => {
        history.push("/Game");
    }
    
    return (
        <div>
            <div className="text-white bg-gray-500 text-5xl py-12">
                Welcome to the Simmon Game !!
            </div>

            <div className="px-1 py-4 sm:px-3 lg:px-8 xl:px-20 text-2xl " >
                <ul >
                    <li className="py-3.5">
                        This is a memory game.
                    </li>
                    <li className="py-3.5">
                        At each level, one out of 4 boxes will blink and that box need to be remembered.
                    </li>
                    <li className="py-3.5">
                        After that, the whole sequence of boxes need to be pressed to proceed to the next level.
                    </li>
                </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 px-20 items-center justify-center place-items-center">
                <div >
                    <img src={simmon} alt="simmon"></img>
                </div>
                
                <div>
                    <button onClick={redirect}className="inline-flex justify-center py-6 px-6 border border-transparent shadow-sm 
                                text-2xl font-medium rounded-md text-white bg-green-600 hover:bg-yellow-300 
                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          Go to Game  
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Heading;
