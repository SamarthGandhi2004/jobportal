import { Link } from 'react-router-dom'
import React from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronRight, LogOut, User2 } from "lucide-react"






const Navbar = () => {
  const user=false;
  return (
   
    <>
      <div className=" bg-green-800 p-4 ">
        <div className="max-w-7xl h-16 flex items-center justify-between mx-auto bg-green-800 font-medium">
          <div className="text-white text-2xl  ">Job <span>4</span>U</div>

          <div className="flex items-center gap-2">
            <ul className='flex gap-5 items-center'>
              <li className='text-white text-1xl font-normal'>Home</li>
              <li className='text-white text-1xl font-normal'>Jobs</li>
              <li className='text-white text-1xl font-normal'>Browse</li>

            </ul>

            {
              !user?(<><div className='flex items-center '>
                <Button className="cursor-pointer border-2 border-white text-white bg-transparent hover:bg-white hover:text-green-800 hover:border-green-800">Login</Button>
                </div>
                <div className='flex items-center'>
                  <Button className="cursor-pointer border-2 border-white text-white bg-transparent hover:bg-white hover:text-green-800 hover:border-green-800">Signup</Button>
                  </div>
                </> ):(   <Popover>

                <PopoverTrigger asChild>
                  <Button variant="outline" className="bg-green-800 hover:bg-green-800 border-green-800 hover:border-green-800">
                    <Avatar className="cursor-pointer">
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar></Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className=''>
                  <div className='flex gap-4 space-y-2'>
                    <Avatar className="cursor-pointer">
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className='font-medium'>Samarth Gandhi</h4>
                      <p className='text-sm text-gray-600' >dfnsdbgfvhsrdbgfn</p>
  
                    </div>
  
                  </div>
                  <div className="flex flex-col my-2 text-gray-600">
                    <div className="flex gap-2 w-fit items-center cursor-pointer">
                      <User2/>
                      <Button variant="link">View Profile</Button>
                      </div>
                    <div className="flex gap-2 w-fit items-center cursor-pointer">
                      <LogOut/>
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

    </>
  )
}

export default Navbar