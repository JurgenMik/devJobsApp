import React from 'react';

function JobDetails({ details }) {

    return(
        <div className="lg:w-1/2 w-2/3 absolute top-60">
            <div className="w-full h-44 bg-white space-x-1 rounded-lg grid grid-cols-3">
                <div className="lg:w-2/3 w-4/5 flex justify-center items-center bg-slate-700 rounded-l-lg">
                    <img className="lg:h-20 h-12 lg:w-32 w-20" src={details.logo} alt="logo"/>
                </div>
                <div className="w-full col-span-2 flex items-center lg:space-x-64 space-x-6">
                    <div className="inline-block space-y-2">
                        <p className="lg:text-3xl text-2xl font-bold">
                            {details.company}
                        </p>
                        <p className="text-xl text-gray-400">
                            {details.website}
                        </p>
                    </div>
                    <a href={details.website} className="text-indigo-400 lg:text-lg text-md lg:px-8 px-2 p-4 rounded-md bg-gray-300 font-bold">
                        Company
                    </a>
                </div>
            </div>
            <div className="lg:w-4/5 w-full mt-24 ml-auto mr-auto">
                <div className="w-full h-44">
                    <div className="text-gray-400 text-lg">
                        <ul className="flex flex-row space-x-6">
                            <li>
                                {details.postedAt}
                            </li>
                            <li className="list-disc">
                                {details.contract}
                            </li>
                        </ul>
                    </div>
                    <p className="text-slate-800 font-bold text-4xl inline">
                        {details.position}
                    </p>
                    <a href={details.apply} className="px-6 p-4 bg-blue-700 text-white text-lg rounded-md ml-6">
                        Apply Now
                    </a>
                    <div className="mt-2 text-indigo-400 text-md font-bold">
                        <p>
                            {details.location}
                        </p>
                        <div className="mt-10 text-gray-400 text-xl font-normal">
                            <p>
                                {details.description}
                            </p>
                        </div>
                        <h1 className="mt-12 text-2xl text-black">
                            Requirements
                        </h1>
                        <div className="mt-6 text-gray-400 text-xl font-normal">
                            <p>{details.requirements.content}</p>
                            <ul className="ml-16 mt-6 space-y-2">
                            {details.requirements.items.map(( item, index ) => {
                                return (
                                    <li className="list-disc" key={index}>
                                        {item}
                                    </li>
                                )
                            })}
                            </ul>
                        </div>
                        <h1 className="mt-12 text-2xl text-black">
                            What You Will Do
                        </h1>
                        <div className="mt-6 text-gray-400 text-xl font-normal pb-16">
                            <p>{details.role.content}</p>
                            <ul className="ml-16 mt-6 space-y-2">
                                {details.role.items.map(( item, index ) => {
                                    return (
                                        <li className="list-decimal" key={index}>
                                            {item}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDetails;