import { ButtonProps } from "../utils/Interface";

const Button = ({ name, fn }: ButtonProps) => {
  return (
    <button className='border uppercasep text-xl p-3 text-white' onClick={fn}>
      {name}
    </button>
  );
};

export default Button;
