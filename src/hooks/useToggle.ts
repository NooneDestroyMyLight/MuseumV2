import { useState } from "react";

export const useToggle = (intialState: boolean): [boolean, () => void] => {
  const [value, setToggle] = useState(intialState);

  const toggle = (): void => setToggle(!value);

  return [value, toggle];
};
