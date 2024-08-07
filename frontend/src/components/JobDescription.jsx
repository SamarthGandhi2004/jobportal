import React from 'react';
import Navbar from '@/shared/Navbar';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const JobDescription = () => {
  const isApplied = false;

  return (
    <>
      <Navbar />
      <div className='max-w-5xl mx-auto bg-white border border-green-700 rounded-2xl my-5 p-8 mt-20'>
        <div className='flex justify-between items-center mb-4'>
          <h1 className='font-medium text-2xl text-green-700'>Backend Developer</h1>
          <Button className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed text-white' : 'bg-green-700 text-white'}`}>
            {isApplied ? 'Already Applied' : 'Apply Now'}
          </Button>
        </div>
        <div className='flex gap-2 mb-4'>
          <Badge className='bg-blue-100 text-blue-800'>12 Positions</Badge>
          <Badge className='bg-red-100 text-red-800'>Part Time</Badge>
          <Badge className='bg-purple-100 text-purple-800'>24 LPA</Badge>
        </div>
        <h2 className='font-semibold text-lg text-green-700 mb-2'>Job Description</h2>
        <div className='space-y-2 text-green-700'>
          <p><span className='font-semibold'>Role:</span> Frontend Developer</p>
          <p><span className='font-semibold'>Location:</span> Hyderabad</p>
          <p><span className='font-semibold'>Description:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium similique sed dolor!</p>
          <p><span className='font-semibold'>Experience:</span> 2 yrs</p>
          <p><span className='font-semibold'>Salary:</span> 12 LPA</p>
          <p><span className='font-semibold'>Total Applicants:</span> 4</p>
          <p><span className='font-semibold'>Posted Date:</span> 17-07-2024</p>
        </div>
      </div>
    </>
  );
};

export default JobDescription;
