import { useState } from "react";

export default function useModal() {
  const [isOpened, setIsOpened] = useState(false);

  const toggle = () => {
    setIsOpened(!isOpened);
  };

  return { isOpened, toggle };
}
