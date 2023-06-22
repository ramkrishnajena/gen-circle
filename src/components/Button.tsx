import { ButtonProps } from "../utils/Interface";

const Button = ({ name, fn }: ButtonProps) => {
  return (
    <button
      className='border uppercasep text-xl p-3 text-white xs:text-lg xs:w-full sm:w-4/12'
      onClick={fn}>
      {name}
    </button>
  );
};

export default Button;
