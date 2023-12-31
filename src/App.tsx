import { SyntheticEvent, useCallback, useState } from "react";
import "./App.css";
import Circle from "./components/Circle";
import { CircleInt } from "./utils/Interface";
import { generateRandomColor, generateRandomSize } from "./utils/constants";
import Button from "./components/Button";

function App() {
  const [circles, setCircles] = useState<CircleInt[]>([]);
  const removeLast = useCallback(removeLastCircle, [circles]);
  const removeAll = useCallback(removeAllCircles, [circles]);
  const size: number = generateRandomSize();
  const newColor = generateRandomColor();
  function handleGenerate(event: React.MouseEvent<HTMLDivElement>) {
    const { clientX, clientY } = event;
    const circleSize: CircleInt = {
      x: clientX,
      y: clientY,
      color: newColor,
      size,
    };
    setCircles([...circles, circleSize]);
  }
  console.log(circles);
  function changeColor(i: number) {
    const newArr = circles.map((data, index) => {
      return i == index ? { ...data, color: newColor } : data;
    });
    setCircles(newArr);
  }

  function removeLastCircle(event: SyntheticEvent) {
    event.stopPropagation();
    const newArr = [...circles];
    newArr.pop();
    setCircles([...newArr]);
  }

  function removeAllCircles(event: SyntheticEvent) {
    event.stopPropagation();
    setCircles([]);
  }
  return (
    <main>
      <div
        className='w-full h-screen bg-default'
        onClick={handleGenerate}></div>
      {circles.map((element, i) => (
        <div onClick={() => changeColor(i)} key={i}>
          <Circle
            x={element.x}
            y={element.y}
            color={element.color}
            size={element.size}
          />
        </div>
      ))}
      <div className='absolute sm:top-[90%] xs:top-[80%] xs:p-2 w-full flex justify-between flex-wrap gap-2 items-center flex-grow '>
        <Button name='Remove Last Circle' fn={removeLast} />
        <Button name='Remove All Circles' fn={removeAll} />
      </div>
    </main>
  );
}

export default App;
