import { CircleInt } from "../utils/Interface";

const Circle = ({ x, y, color, size }: CircleInt) => {
  console.log(size);
  return (
    <div
      className='rounded-full absolute'
      style={{
        backgroundColor: color,
        left: x,
        top: y,
        width: `${size}px`,
        height: `${size}px`,
      }}></div>
  );
};

export default Circle;
