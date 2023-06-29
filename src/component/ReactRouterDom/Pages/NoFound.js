import React from 'react';
import {useNavigate} from 'react-router-dom';
export default function NotFound() {
  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
  return (
    <div>
      <h1>OOPS!!! you found me here</h1>
      <button onClick={goBack}>Backtohome</button>
    </div>
  )
}
