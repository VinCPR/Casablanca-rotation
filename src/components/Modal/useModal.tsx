import { useState } from "react";

export default function useModal() {
  const [isOpened, setIsOpened] = useState(false);

  const toggle = () => {
    setIsOpened((prev) => !prev);
  };

  return { isOpened, toggle };
}
