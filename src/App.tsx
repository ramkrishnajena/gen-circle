import { useState } from "react";
import "./App.css";
import Circle from "./components/Circle";
import { CircleInt } from "./utils/Interface";
import { generateRandomColor } from "./utils/constants";

function App() {
  const [circles, setCircles] = useState<CircleInt[]>([]);
  const newColor = generateRandomColor();
  function handleGenerate(event: React.MouseEvent<HTMLDivElement>) {
    const { clientX, clientY } = event;
    const circleSize: CircleInt = {
      x: clientX,
      y: clientY,
      color: newColor,
    };
    setCircles([...circles, circleSize]);
  }
  function changeColor(element: CircleInt) {
    setCircles([...circles, { ...element, color: newColor }]);
  }

  function handleRemove() {
    setCircles;
  }

  return (
    <main>
      <div
        className='w-full h-screen bg-default'
        onClick={handleGenerate}></div>
      {circles.map((element, i) => (
        <div onClick={() => changeColor(element)} key={i}>
          <Circle x={element.x} y={element.y} color={element.color} />
        </div>
      ))}
    </main>
  );
}

export default App;
