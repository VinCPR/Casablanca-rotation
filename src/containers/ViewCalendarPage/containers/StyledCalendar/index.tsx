import {
  Calendar,
  DateCallback,
  OnChangeDateCallback,
  OnChangeDateRangeCallback,
} from "react-calendar";
import "./index.module.css";

type Props = {
  onClickDay: DateCallback | undefined;
  onChange: OnChangeDateCallback | OnChangeDateRangeCallback | undefined;
  value: Date | [Date | null, Date | null] | null | undefined;
};

export default function StyledCalendar({ onClickDay, onChange, value }: Props) {
  return <Calendar onClickDay={onClickDay} onChange={onChange} value={value} />;
}
