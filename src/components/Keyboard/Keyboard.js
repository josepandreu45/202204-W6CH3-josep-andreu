import { useDispatch, useSelector } from "react-redux";

import { addDigitActionCreator } from "../../redux/features/phoneSlice";
import Key from "../Key/Key";

const Keyboard = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const { phoneNumber, calling } = useSelector((state) => state.phone);
  const dispatch = useDispatch();

  return (
    <ol className="keyboard">
      {numbers.map((number) => (
        <Key
          key={number}
          text={number}
          disabled={calling}
          actionOnClick={() => dispatch(addDigitActionCreator(phoneNumber))}
        />
      ))}
      <Key
        text="delete"
        big={true}
        // actionOnClick={removeLastDigit}
        disabled={calling}
      />
    </ol>
  );
};

export default Keyboard;
