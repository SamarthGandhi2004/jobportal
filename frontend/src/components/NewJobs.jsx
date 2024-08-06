import React from 'react';
import NewJobCard from './NewJobCard';

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const NewJobs = () => {
    return (
        <div className='max-w-7xl mx-auto my-20'>
            <h1 className='text-4xl font-bold'>
                <span className='text-green-700'>New Openings &</span> Top-Rated Vacancies
            </h1>
            <div className='grid grid-cols-3 gap-4 my-5'>
                {
                    randomJobs.slice(0, 6).map((item, index) => (
                        <NewJobCard key={index} />
                    ))
                }
            </div>
        </div>
    );
}

export default NewJobs;
