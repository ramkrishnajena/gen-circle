import { useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const ref = useRef<HTMLDivElement>(null);
  const [first, setfirst] = useState(0);
  function handleClick(data) {
    console.log(data);
    setfirst(data.clientX);
  }
  useEffect(() => {
    // console.log(ref.current?.clientHeight);
  }, []);

  return (
    <div className='text-4xl bg-black' ref={ref} onClick={handleClick}>
      <p style={{ height: first }}>Hi</p>
    </div>
  );
}

export default App;
