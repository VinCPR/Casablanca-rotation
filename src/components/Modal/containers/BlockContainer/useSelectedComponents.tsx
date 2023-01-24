import { useEffect, useState } from "react";
import { SelectedComponents } from "./types";

export default function useSelectedComponents() {
  const [selectedComponents, setSelectedComponents] = useState<
    SelectedComponents[]
  >([]);
  var total = 0;
  const [totalNum, setTotalNum] = useState(total);

  useEffect(() => {
    setTotalNum(() => {
      return sum(selectedComponents, total);
    }),
      [selectedComponents];
  }, [selectedComponents, total]);

  function sum(array: SelectedComponents[], total: number) {
    for (var i = 0; i < array.length; i++) {
      total = total + array[i].numOfWeeks;
    }
    return total;
  }

  function handleChange(event: any) {
    const target = event.target as HTMLInputElement;
    setSelectedComponents((current) =>
      current.map((obj) => {
        if (obj.name === target.id) {
          return { ...obj, numOfWeeks: target.valueAsNumber };
        }
        return obj;
      })
    );
  }

  function handleClick(event: any): void {
    const target = event.target as HTMLInputElement;
    if (!selectedComponents.some((e) => e.name === target.value)) {
      const newComponent = new SelectedComponents(target.value);
      setSelectedComponents((arr) => [...arr, newComponent]);
    } else {
      const index = selectedComponents.findIndex(
        (e) => e.name === target.value
      );
      removeItem(index);
    }
  }

  const removeItem = (index: number) => {
    setSelectedComponents((arr) => [
      ...arr.slice(0, index),
      ...arr.slice(index + 1),
    ]);
  };

  return { selectedComponents, handleClick, totalNum, handleChange };
}
