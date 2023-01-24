export class SelectedComponents {
  name: string;
  numOfWeeks: number;

  constructor(name: string) {
    this.name = name;
    this.numOfWeeks = 0;
  }
}

export type Column = {
  selectedComponents: SelectedComponents[];
  handleClick: (event: any) => void;
  totalNum: number;
  handleChange: (event: any) => void;
};

export type OptionSelector = {
  department: Column;
  hospital: Column[];
  service: Column[][];
};

export type Output = {
  department: { [id: string]: number };
  hospital: { [id: string]: number };
  service: { [id: string]: number };
};
