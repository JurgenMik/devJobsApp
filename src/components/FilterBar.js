import React from 'react';
import {GoSearch} from "react-icons/go";
import {MdLocationOn} from "react-icons/md";

function FilterBar({ setFilterTitle, setFilterLocation, setFilterContract }) {
    return(
        <div className="w-full absolute top-24">
            <div className="w-full h-28 bg-white space-x-6 rounded-lg flex justify-center items-center">
                <GoSearch className="lg:ml-0 ml-2 text-4xl text-indigo-400" />
                <input
                    className="lg:w-1/3 w-1/4 p-6 text-xl text-slate-800"
                    name="filterMultiple"
                    onChange={e => setFilterTitle(e.target.value)}
                    placeholder="Filter by title, companies, expertise..."
                />
                <MdLocationOn className="text-4xl text-indigo-400" />
                <input
                    className="lg:w-1/3  w-1/4 p-6 text-xl text-slate-500"
                    name="filterSingle"
                    onChange={e => setFilterLocation(e.target.value)}
                    placeholder="Filer by location..."
                />
                <input
                    className="w-8 h-8 text-gray-600"
                    name="fullTime"
                    onClick={() => setFilterContract(true)}
                    type="checkbox"
                />
                <label className="text-xl font-bold" htmlFor="fullTime">
                    Full time only
                </label>
            </div>
        </div>
    )
}

export default FilterBar;