import SelectedComponents from "./SelectedComponents";

type OptionSelector = {
  department: Column;
  hospital: Column;
  service: Column;
};

type Column = {
  selectedComponents: SelectedComponents[];
  handleClick: (event: any) => void;
  totalNum: number;
  handleChange: (event: any) => void;
};

export default OptionSelector;
