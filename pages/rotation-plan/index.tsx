import { useState } from "react";
import Calendar from "react-calendar";
import StyledCalendar from "../../src/containers/ViewCalendarPage/containers/StyledCalendar";

export default () => {
  const [value, setValue] = useState(new Date());
  return (
    <StyledCalendar
      onClickDay={() => {}} // TODO: Display schedule on that day
      onChange={setValue}
      value={value}
    />
  );
};
