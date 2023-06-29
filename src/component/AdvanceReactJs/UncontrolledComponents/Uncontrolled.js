import React, { useRef } from 'react';

export default function uncontrolled() {
    const inputRef = useRef(null);
    return (
<>
<input type="text" defaultValue="bar" ref={inputRef} />
</>
    )
   
}

// const nameRef = useRef();
//   const emailRef = useRef();

//   function onSubmit() {
//     console.log("Name value: " + nameRef.current.value);
//     console.log("Email value: " + emailRef.current.value);
//   }
//   return (
//     <form onSubmit={onSubmit}>
//       <input type="text" name="name" ref={nameRef} required />
//       <input type="email" name="email" ref={emailRef} required />
//       <input type="submit" value="Submit" />
//     </form>
//   );
// }




//An uncontrolled component is a component that renders form elements, 
//where the form element's data is handled by the DOM (default DOM behavior). To access the input's DOM node and extract its value you can use a ref.