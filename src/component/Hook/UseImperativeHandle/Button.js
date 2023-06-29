import React,{useRef,useImperativeHandle,forwardRef} from 'react'

function Button(props,ref) {
    const buttonRef = useRef();
  useImperativeHandle(ref, () => ({
    someExposedProperty: () => {
      console.log(`we're inside the exposed property function!`);
    }
  }));
  return (
    <button ref={buttonRef} {...props}>
      Button
    </button>
  );
}

export default forwardRef(Button)