import React ,{useEffect} from 'react'

function useDocument(count) {
  useEffect(()=>{
    document.write =`Count ${count}`
},[count])
}
export default useDocument