import { RxCross1 } from "react-icons/rx";
import React from 'react'
const JobInfo = ({job,onClose}) => {

    return (
        <>
           
            <div className="flex  gap-28 border absolute -translate-x-X -translate-y-Y top-3/4 left-1/2 bg-red-200 w-auto rounded-md px-4 py-6 ">
                <div className="flex flex-col gap-6">
                    <h1 className='text-lg font-semibold'>{job.title} -{job.company}</h1>
                    <p>{job.type} &#x2022; {job.experience} &#x2022; {job.location} </p>
                    <div className='flex items-center gap-2'>
                        {job.skills.map((skill) => (
                            <p key={skill} className='py1 px-2 rounded-md border border-black'>{skill}</p>
                        ))}
                    </div>
                    <a href={job.job_link}><button className='px-10 py-2 rounded-md bg-orange-500 text-white hover:scale-105' >Apply Now</button></a>
                    
                </div>
                <div className=''>
                    <button className=" bg-orange-400 p-2 rounded-full"onClick={onClose}>  <RxCross1 /></button>
                </div>
                
            </div>
        </>
    )
}
export default JobInfo;