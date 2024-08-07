import React from 'react';
import Navbar from '@/shared/Navbar';
import { Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Mail, Pen, Contact } from 'lucide-react';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import AppliedJobTable from './AppliedJobTable';

const Profile = () => {
  const skills = ["Html", "Css", "Javascript", "Reactjs"]
  const isResume = true
  return (
    <>
      <Navbar />
      <div className='max-w-4xl mx-auto bg-white border border-green-700 rounded-2xl my-5 p-8 shadow-xl shadow-green-700 mt-20'>
        <div className='flex justify-between items-start'>
          <div className='flex items-center gap-4'>
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <div>
              <h1 className='font-medium text-xl text-green-700'>Full Name</h1>
              <p className='text-green-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure dignissimos</p>
            </div>
          </div>
          <Button className="text-right" variant="outline"><Pen /></Button>
        </div>
        <div className='my-5'>
          <div className='flex items-center gap-3 my-2'>
            <Mail className="text-green-700" />
            <span className='text-green-700'>name@gmail.com</span>
          </div>
          <div className='flex items-center gap-3 my-2'>
            <Contact className="text-green-700" />
            <span className='text-green-700'>9205078728</span>
          </div>
        </div>
        <div>
          <h1 className='text-green-700'>Skills</h1>
          <div className='flex gap-2'>{
            skills.length !== 0 ? skills.map((item, index) => <Badge key={index} className="cursor-pointer border-2 border-green-800 text-green-800 bg-transparent hover:bg-green-800 hover:text-white hover:border-white flex justify-center items-center h-8 w-20">{item}</Badge>) : <span>NA</span>
          }
          </div>
        </div>

        <div className='mt-4'>
          <Label className='text-green-700'>Resume</Label>
          {
            isResume ? <a target="blank" href="#" className='text-blue-600 w-full hover:underline cursor-pointer'>resume link idhar ayega</a> : <span>NA</span>
          }
        </div>

      </div>
      <div className='max-w-4xl mx-auto bg-white rounded-2x1 mt-14'>
        <h1>Applied Jobs</h1>
        <AppliedJobTable />
      </div>
    </>
  );
};

export default Profile;
