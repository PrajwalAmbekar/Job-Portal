import dayjs from 'dayjs'
import React, { useState } from 'react';
import JobInfo from './ShowJob';
const Jobcard = (props) => {

    const date1 = dayjs(Date.now());
    const diffIndays = date1.diff(props.postedOn, 'day');
    let [showJob, setJob] = useState(false)
    const handleDetailsClick = (jobId) => {
        setJob(jobId);
    };

    return (
        <>
            <div className='mx-40 mb-4 mt-10'>
                <div className='flex justify-between items-center px-6 py-4 shadow-lg text-black font-normal  hover:-translate-y-2 hover:duration-300  z-20 border border-yellow-200 rounded-xl hover:border-blue-300 lg:text-lg sm:text-sm md:text-base xss:w-auto'>
                    <div className='flex flex-col items-start gap-3 cursor-pointer'>
                        <h1 className='lg:text-lg font-semibold sm:text-xs xss:text-xxs'>{props.title} -{props.company}</h1>
                        <p className='sm:text-xs lg:text-lg xss:text-xxs'>{props.type} &#x2022; {props.experience} &#x2022; {props.location} </p>
                        <div className='flex items-center gap-2'>
                            {props.skills.map((skill) => (
                                <p key={skill} className='py1 px-2 rounded-md border border-black sm:text-xs lg:text-lg '>{skill}</p>
                            ))}
                        </div>
                    </div>
                    <div className='flex items-center gap-4 cursor-pointer'>
                        <p className='sm:text-xs lg:text-lg xss:text-xxs'>Posted {diffIndays} ago</p>
                        <button className='lg:px-10 lg:py-2 rounded-md bg-orange-500 text-white hover:scale-105 sm:text-xs sm:px-5 sm:py-2 lg:text-lg xss:text-xxs' onClick={() => handleDetailsClick(props.id)}
                            disabled={showJob && showJob !== props.id}>Details</button>



                    </div>
                </div>
                {showJob === props.id && <JobInfo job={props} onClose={() => setJob(false)} />}
            </div>
        </>
    )
}
export default Jobcard;