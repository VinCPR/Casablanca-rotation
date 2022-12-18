import { useState } from "react";

export default function useSelectedComponents() {
  const [selectedComponents, setSelectedComponents] = useState<string[]>([]);

  function handleClick(event: any): void {
    const target = event.target as HTMLInputElement;
    console.log(selectedComponents.includes(target.value));
    if (!selectedComponents.includes(target.value)) {
      setSelectedComponents((arr) => [target.value, ...arr]);
      console.log(target.value);
    } else {
      const index = selectedComponents.indexOf(target.value);
      removeItem(index);
    }
  }

  const removeItem = (index: number) => {
    setSelectedComponents((arr) => [
      ...arr.slice(0, index),
      ...arr.slice(index + 1),
    ]);
  };

  return {selectedComponents, handleClick};
}
