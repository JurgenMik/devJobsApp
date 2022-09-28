import React, {useEffect, useState, useMemo} from 'react';
import data from '../data.json';


function DevJobs({ handleClick, filterTitle, filterLocation }) {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        getJobs();
    }, []);

    const getJobs = () => {
        setJobs(jobs.concat(data));
    }

    const filteredJobs = () => {
        if (filterTitle) {
            return jobs.filter(info => info.position.includes(filterTitle));
        }
        if (filterLocation) {
            return jobs.filter(info => info.location.includes(filterLocation))
        }
        return jobs;
    }

    let filtered = useMemo(filteredJobs, [jobs, filterTitle, filterLocation])

    return (
        <div className="lg:w-2/3 w-4/5 grid lg:grid-cols-3 grid-cols-2 gap-32 mt-36 ml-auto mr-auto">
            {filtered.map((job, index) => {
                return(
                    <div className="w-full h-44 lg:ml-24 ml-10" key={index}>
                        <img onClick={e => handleClick(e, job)} className="bg-slate-800 p-2 rounded-lg mb-6" src={job.logo} alt="logo"/>
                        <div className="text-gray-400 text-lg">
                            <ul className="flex flex-row space-x-6">
                                <li>
                                    {job.postedAt}
                                </li>
                                <li className="list-disc">
                                    {job.contract}
                                </li>
                            </ul>
                        </div>
                        <p className="mt-2 text-slate-800 font-bold text-2xl">
                            {job.position}
                        </p>
                        <p className="text-gray-400 text-lg mt-2">
                            {job.company}
                        </p>
                        <div className="mt-6 text-indigo-400 text-md font-bold">
                            <p>
                                {job.location}
                            </p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default DevJobs;