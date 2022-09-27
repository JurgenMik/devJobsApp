import React from 'react';
import FilterBar from "./components/FilterBar";
import DevJobs from "./components/DevJobs";

function App() {

  return (
    <div className="w-full h-screen">
        <div className="w-full h-72 bg-texture bg-cover bg-no-repeat flex items-center justify-center">
            <div className="lg:w-2/3 w-4/5 relative">
                <img className="w-44 h-12 inline-block" src={'../assets/logo.svg'} alt="logo" />
                <FilterBar/>
             </div>
         </div>
        <DevJobs/>
     </div>
  );
}

export default App;
