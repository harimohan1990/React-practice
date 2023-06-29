import React from 'react'
import {useNavigate} from 'react-router-dom';


const  Home=()=> {

  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
  return (
    <div>
      <h1>I am home page</h1>
      <button onClick={goBack}>Backtohome</button>	
    </div>
  )
}

export default Home