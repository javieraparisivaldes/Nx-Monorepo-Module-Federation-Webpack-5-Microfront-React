import './input.style.css';

/* eslint-disable-next-line */
export interface InputProps {}

export function Input(props: InputProps) {
  return (
    <div className='uiInput'>
      input33 :: <input className='inputBG'/>
    </div>
  );
}

export default Input;
