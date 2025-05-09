import React from 'react'
import { PacmanLoader } from 'react-spinners'

function Loader() {
  return (
    <div className='load'>
        <PacmanLoader color="#0617b0" height="50%" width="50%" />
    </div>
  )
}
export default Loader;
