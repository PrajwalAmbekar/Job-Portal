import Navbar from './assets/Components/Navbar'
import Herosec from './assets/Components/Herosec'
import Jobsearch from './assets/Components/Jobsearch'
import Jobcard from './assets/Components/Jobcard'
import Jobdata from './assets/Components/dummyJobCard'

import './App.css'


function App() {


  return (
    <>
      <Navbar />
      <Herosec />
      <Jobsearch />
      {
        Jobdata.map((job) => (<Jobcard key={job.id} {...job} />))
      }


    </>
  )
}

export default App
