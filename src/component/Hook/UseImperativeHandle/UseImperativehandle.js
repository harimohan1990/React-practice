import React, { useRef } from 'react';

import {render} from 'react-dom';
import Button from './Button';

function UseImperativehandle() {

    const buttonRef = useRef(null);

    const handleClick = () => {
      console.log(Object.keys(buttonRef.current)); // ['someExposedProperty']
      console.log("click in index.tsx");
      buttonRef.current.someExposedProperty();
    };
  
    return (
      <div>
        <Button onClick={handleClick} ref={buttonRef} />
      </div>
    );
  
}

export default UseImperativehandle