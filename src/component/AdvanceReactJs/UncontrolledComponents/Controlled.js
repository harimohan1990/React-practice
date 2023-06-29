import React,{useState} from 'react'
export default function Controlled() {
  const [email, setEmail] = useState();

  const handleInput = (e) => setEmail(e.target.value);
  return (
    <div className="App">
       <input type="text" value={email} onChange={handleInput} />
    </div>
  );
}
