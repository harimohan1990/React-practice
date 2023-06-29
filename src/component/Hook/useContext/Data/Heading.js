import React from 'react'

export default function Heading({level,children}) {
 switch(level){
    case 1:
        return <h1>{children}</h1>
        case 2: 
    return <h2>{children}</h2>
    case 2: 
    return <h2>{children}</h2>
    
    case 3: 
    return <h2>{children}</h2>
    
    case 4: 
    return <h2>{children}</h2>
    
    case 4: 
    return <h2>{children}</h2>
    case 5: 
    return <h2>{children}</h2>
    default: 
    throw Error('Unknon level'+level)
 }
}
