import React from 'react'

function Introdction() {

    const element =<h1>Hello World</h1>

    function formatName(user){
        return user.firstName + ' ' + user.lastName;

    }

    const user = {
        firstName: 'Harper',
        lastName: 'Perez'
      };

  return (
    <div>{formatName(user)}</div>
  )
}

export default Introdction