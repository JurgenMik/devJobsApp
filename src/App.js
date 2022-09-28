import React, {useState} from 'react';
import FilterBar from "./components/FilterBar";
import DevJobs from "./components/DevJobs";
import JobDetails from "./components/JobDetails";

function App() {

    const [job, setJob] = useState();
    const [detailView, setDetailView] = useState(false);
    const [filterTitle, setFilterTitle] = useState('');
    const [filterLocation, setFilterLocation] = useState('');

    const handleClick = (e, job) => {
        e.preventDefault();
        setJob(job);
        setDetailView(true)
    }

  return (
    <div className="w-full h-screen">
        <div className="w-full h-72 bg-texture bg-cover bg-no-repeat flex items-center justify-center relative">
            <div className="lg:w-2/3 w-4/5 relative">
                <img className="w-44 h-12 inline-block" src={'../assets/logo.svg'} alt="logo" />
                {detailView ? null : <FilterBar setFilterTitle={setFilterTitle} setFilterLocation={setFilterLocation}/>}
             </div>
         </div>
        <div className="flex justify-center items-center">
            {(() => {
                switch(detailView) {
                    case true:
                        return <JobDetails details={job} />
                    default:
                        return <DevJobs handleClick={handleClick} filterTitle={filterTitle} filterLocation={filterLocation}/>
                }
            })()}
        </div>
     </div>
  );
}

export default App;
