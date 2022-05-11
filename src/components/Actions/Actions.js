import { useSelector } from "react-redux";

import Action from "../Action/Action";
import Display from "../Display/Display";

const Actions = () => {
  const { calling, phoneNumber, call, hang } = useSelector(
    (state) => state.phone
  );
  return (
    <>
      <Display />
      {!calling && (
        <Action
          action="call"
          isActive={phoneNumber.length === 9}
          actionOnClick={call}
        />
      )}
      {calling && <Action action="hang" isActive={true} actionOnClick={hang} />}
    </>
  );
};

export default Actions;
