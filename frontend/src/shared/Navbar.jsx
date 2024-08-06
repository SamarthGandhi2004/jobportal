import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight, LogOut, User2 } from "lucide-react";

const Navbar = () => {
  const user = false;
  return (
    <div className="bg-white p-4">
      <div className="max-w-7xl h-11 flex items-center justify-between mx-auto bg-white font-medium">
        <div className="text-white text-5xl bg-green-700 p-8 border rounded-tl-[100px] rounded-tr-[100px] font-serif">
  Job <span className="text-yellow-300 text-7xl">4</span>U
</div>


        <div className="flex items-center gap-2">
          <ul className='flex gap-5 items-center'>
            <li className='text-green-800 text-1xl font-normal'>Home</li>
            <li className='text-green-800 text-1xl font-normal'>Jobs</li>
            <li className='text-green-800 text-1xl font-normal'>Browse</li>
          </ul>

          {
            !user ? (
              <>
                <div className='flex items-center'>
                  <NavLink to="/Signup">
                    <Button className="cursor-pointer border-2 border-green-800 text-green-800 bg-transparent hover:bg-green-800 hover:text-white hover:border-white">
                      Signup
                    </Button>
                  </NavLink>
                </div>
                <div className='flex items-center'>
                  <NavLink to="/Login">
                    <Button className="cursor-pointer border-2 border-green-800 text-green-800 bg-transparent hover:bg-green-800 hover:text-white hover:border-white">
                      Login
                    </Button>
                  </NavLink>
                </div>
              </>
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="bg-white hover:bg-white border-white hover:border-white">
                    <Avatar className="cursor-pointer">
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div>
                    <div className='flex gap-4 space-y-2'>
                      <Avatar className="cursor-pointer">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className='font-medium'>Samarth Gandhi</h4>
                        <p className='text-sm text-gray-600'>dfnsdbgfvhsrdbgfn</p>
                      </div>
                    </div>
                    <div className="flex flex-col my-2 text-gray-600">
                      <div className="flex gap-2 w-fit items-center cursor-pointer">
                        <User2 />
                        <Button variant="link">View Profile</Button>
                      </div>
                      <div className="flex gap-2 w-fit items-center cursor-pointer">
                        <LogOut />
                        <Button variant="link">Logout</Button>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar;
