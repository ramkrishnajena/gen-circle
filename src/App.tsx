import { useCallback, useState } from "react";
import "./App.css";
import Circle from "./components/Circle";
import { CircleInt } from "./utils/Interface";
import { generateRandomColor } from "./utils/constants";
import Button from "./components/Button";

function App() {
  const [circles, setCircles] = useState<CircleInt[]>([]);
  const removeLast = useCallback(removeLastCircle, [circles]);
  const removeAll = useCallback(removeAllCircles, [circles]);

  const newColor = generateRandomColor();
  function handleGenerate(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();

    const { clientX, clientY } = event;
    const circleSize: CircleInt = {
      x: clientX,
      y: clientY,
      color: newColor,
    };
    setCircles([...circles, circleSize]);
  }
  function changeColor(i: number) {
    const newArr = circles.map((data, index) => {
      return i == index ? { ...data, color: newColor } : data;
    });
    setCircles(newArr);
  }

  function removeLastCircle(event: React.MouseEvent) {
    event.stopPropagation();

    const newArr = [...circles];
    newArr.pop();
    setCircles([...newArr]);
  }

  function removeAllCircles(event: React.MouseEvent) {
    event.stopPropagation();

    setCircles([]);
  }
  return (
    <main>
      <div className='w-full h-screen bg-default' onClick={handleGenerate}>
        {circles.map((element, i) => (
          <div onClick={() => changeColor(i)} key={i}>
            <Circle x={element.x} y={element.y} color={element.color} />
          </div>
        ))}
        <div className='absolute sm:top-[90%] xs:top-[80%] xs:p-2 w-full flex justify-between flex-wrap gap-2 items-center flex-grow '>
          <Button name='Remove Last Circle' fn={removeLast} />
          <Button name='Remove All Circles' fn={removeAll} />
        </div>
      </div>
    </main>
  );
}

export default App;
