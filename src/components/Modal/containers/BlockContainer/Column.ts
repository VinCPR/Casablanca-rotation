import SelectedComponents from "./SelectedComponents";

type Column = {
    selectedComponents: SelectedComponents[];
    handleClick: (event: any) => void;
    totalNum: number;
    handleChange: (event: any) => void;
};

export default Column;
  