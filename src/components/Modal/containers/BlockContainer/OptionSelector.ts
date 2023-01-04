import Column from "./Column";
import SelectedComponents from "./SelectedComponents";

type OptionSelector = {
  department: Column;
  hospital: Column[];
  service: Column[][];
};

export default OptionSelector;
