import React,{lazy,Suspense} from 'react'

const MyLaodedComponent = lazy(()=>import('./ReactLazyLoaded'))

export default function ReactLazyLoading() {
  return (
    <div>
        <Suspense fallback ={<div>Loading...</div>}>
         <MyLaodedComponent/>
        </Suspense>
         
    </div>
  )
}
