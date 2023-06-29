import React from 'react'
import {useNavigate} from 'react-router-dom';

export default function About(){
  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
  return (
    <>
    <h1>Helllo About page</h1>
    <button onClick={goBack}>Backtohome</button>
    </>
  )
}



