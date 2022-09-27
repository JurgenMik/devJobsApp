import React from 'react';
import {GoSearch} from "react-icons/go";
import {MdLocationOn} from "react-icons/md";
import DevJobs from "./components/DevJobs";

function App() {
  return (
    <div className="w-full h-screen">
        <div className="w-full h-72 bg-texture bg-cover bg-no-repeat flex items-center justify-center">
            <div className="lg:w-2/3 w-4/5 relative">
                <img className="w-44 h-12 inline-block" src={'../assets/logo.svg'} alt="logo" />
                <div className="w-full absolute top-24">
                    <div className="w-full h-28 bg-white space-x-1 rounded-lg flex justify-center items-center">
                        <GoSearch className="lg:ml-0 ml-2 text-4xl text-indigo-400" />
                        <input
                            className="lg:w-1/3 w-1/4 p-6 text-xl text-slate-800"
                            name="filterMultiple"
                            placeholder="Filter by title, companies, expertise..."
                        />
                        <MdLocationOn className="text-4xl text-indigo-400" />
                        <input
                            className="lg:w-1/3 w-1/4 p-6 text-xl text-slate-500"
                            name="filterSingle"
                            placeholder="Filer by location..."
                        />
                        <input
                            className="w-6 h-6 text-gray-600"
                            name="fullTime"
                            type="checkbox"
                        />
                        <label className="text-xl font-bold pr-4" htmlFor="fullTime">
                            Full time only
                        </label>
                        <button className="lg:px-10 px-4 p-4 text-white bg-blue-600 rounded-lg font-bold text-xl ml-4">
                            Search
                        </button>
                    </div>
                </div>
             </div>
         </div>
        <DevJobs/>
     </div>
  );
}

export default App;
