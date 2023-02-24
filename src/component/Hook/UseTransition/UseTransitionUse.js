
import { useTransition } from "react";

export default function useTransitionone (){
    const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);
  
  function handleClick() {
    startTransition(() => {
      setCount(c => c + 1);
    });
  }

  return (
    <div>
      {isPending && <h1>Hello</h1>}
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}