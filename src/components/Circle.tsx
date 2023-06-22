import { CircleInt } from "../utils/Interface";

const Circle = ({ x, y, color }: CircleInt) => {
  return (
    <div
      className='w-7 h-7 rounded-full absolute'
      style={{
        backgroundColor: color,
        left: x,
        top: y,
      }}></div>
  );
};

export default Circle;
