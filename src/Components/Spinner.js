import React from 'react'
import loader from './loader.gif'

 const Spinner =()=>  {

    return (
      <div>
        <div className="container text-center my-3">
        <img src={loader} alt="loader" />
      </div>
      </div>
    )

}

export default Spinner
