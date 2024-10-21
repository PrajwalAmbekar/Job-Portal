const ShowCompanies = () => {
    return (
        <>
            <div className="grid grid-cols-3 w-auto p-4 divide-x-2 font-serif bg-red-200">
                <div className="p-2">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-extrabold"> Explore categories</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Unicorn</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">MNC</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Startup</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Product based</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Internet</li>
                </div>
                <div className="p-2">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-extrabold">Explore collections</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Top companies</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">IT companies</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Fintech companies</li>
                </div>
                <div className="p-2">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer font-extrabold">Research companies</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Ambitionbox</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Interview questions</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Company salaries</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Company reviews</li>

                </div>
            </div>
        </>
    )
}
export default ShowCompanies;
