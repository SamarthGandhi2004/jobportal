import { Bookmark } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';
import { Avatar, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';


const Job = () => {
    const jobId="qwert"
    const navigate=useNavigate();
    return (
        <div className='p-4 rounded-md shadow-xl shadow-green-700  bg-white border border-gray-100 '>
            <div className='flex items-center justify-between'>
                <p>2 days ago</p>
                <Button variant="outline" className="rounded-full" size="icon">
                    <Bookmark />
                </Button>
            </div>
            <div className='flex items-center gap-2 my-2'>
                <Button className="p-6" variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600w-1289323759.jpg" alt="Company Logo" />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg'>Company Name</h1>
                    <p className='text-sm text-gray-500'>India</p>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>Title</h1>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda</p>
                <div className='flex items-center gap-2 mt-4'>
                    <Badge className='text-blue-700 font-bold' variant="ghost">8 Positions</Badge>
                    <Badge className='text-[#f83b02] font-bold' variant="ghost">Part Time</Badge>
                    <Badge className='text-[#7209b7] font-bold' variant="ghost">27LPA</Badge>
                </div>
                <div className='flex items-center gap-4 mt-4'>
                    <Button onClick={()=>navigate(`/description/${jobId}`)} className="cursor-pointer border-2 border-green-800 text-green-800 bg-transparent hover:bg-green-800 hover:text-white hover:border-white">Details </Button>
                    <Button className="cursor-pointer border-2 bg-green-700 border-green-800 text-white  hover:bg-green-800 hover:text-white hover:border-white">Save For Later</Button>
                </div>
            </div>
        </div>
    );
}

export default Job;
