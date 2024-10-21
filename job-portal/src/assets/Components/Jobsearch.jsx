const Jobsearch = () => {
    return (
        <>
            <div className="flex flex-row items-center mt-10 justify-center lg:gap-6 sm:gap-2">
                <select className="lg:w-64 py-3 pl-4  bg-purple-500 text-white  font-semibold rounded-md divide-y-2 shadow-sm shadow-slate-200 sm:w-32  sm:text-xs" >
                    <option value="" disabled hidden selected>Job Role</option>
                    <option value="iOS Developer">iOS Developer</option>
                    <option value="Frontend Developer">Frontend Developer</option>
                    <option value="Backend Developer">Backend Developer</option>
                    <option value="Android Developer">Android Developer</option>
                    <option value="Developer Advocate">Developer Advocate</option>
                </select>
                <select name="" id="" className="lg:w-64 py-3 pl-4 bg-purple-500 text-white  font-semibold rounded-md divide-y-2 sm:w-32 sm:text-xs">
                    <option value="" disabled hidden selected>Job Type</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Contract">Contract</option>
                </select>
                <select name="" id="" className="lg:w-64 py-3 pl-4 bg-purple-500 text-white  font-semibold rounded-md divide-y sm:w-32 sm:text-xs">
                    <option value="" disabled hidden selected>Location</option>
                    <option value="Remote">Remote</option>
                    <option value="In-Office">In-Office</option>
                    <option value="Hybrid">Hybrid</option>
                </select>
                <select name="" id="" className="lg:w-64 py-3 pl-4 bg-purple-500 text-white font-semibold rounded-md divide-y-2 sm:w-32 sm:text-xs">
                <option value="" disabled hidden selected>Experience</option>
                <option value="Fresher">Fresher</option>
                <option value="Junior-Level">Junior-Level</option>
                <option value="Mid-Level">Mid-Level</option>
                <option value="Senior-Level">Senior-Level</option>
                </select>
                <button className="lg:w-64 py-3 pl-4 border-2 font-semibold rounded-md divide-y-2  bg-orange-500 border-orange-500 text-white sm:w-32 sm:text-xs">Find Job</button>
            </div>
        </>
    )
}
export default Jobsearch;