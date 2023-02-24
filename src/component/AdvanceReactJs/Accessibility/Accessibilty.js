
import React from 'react';

function Accessibility(){
    return(
        <div>
            <label aria-label="Close" htmlFor='firstname'>please type your first name </label>
            <br/>
            <input type="text" placeholder='please typesomething'/>
        </div>
    )
   
}

export default Accessibility 