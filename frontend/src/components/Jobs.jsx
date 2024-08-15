
import Navbar from '@/shared/Navbar';
import FilterCategory from './FilterCategory';
import Job from './Job';
import { useSelector } from 'react-redux';
import store from '@/redux/store';


const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
const {allJobs}=useSelector(store=>store.job)

  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto mt-5'>
        <div className='flex gap-5'>
          <div className='w-60 mt-12 text-green-800 '>
            <FilterCategory />
          </div>
          {
            allJobs.length === 0 ? (
              <span>Job not found</span>
            ) : (
              <div className='flex h-screen w-full overflow-y-auto  mt-12 '>
                <div className='grid grid-cols-3 gap-4'>
                  {
                    allJobs.map((job) => (
                      <div key={job._id}>
                        <Job job={job}/>
                      </div>
                    ))
                  }
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Jobs;
