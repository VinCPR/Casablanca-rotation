import React from "react";
import styles from "./index.module.css";
import DatePicker from "react-datepicker";
import { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import IconEdit from "./components/IconEdit";

export default function StepTwo() {
  const [startDate, setStartDate] = useState(new Date());
  const colors = ["#ff9620", "#05b651", "#18a0fb", "#9747ff"];
  return (
    <div>
      <div className={styles.title}>Rotation Plan</div>
      <div className={styles.appContainer}>
        <table>
          <thead>
            <tr style={{ height: "47px" }}>
              <th>Period</th>
              <th>Period 1</th>
              <th>Period 2</th>
              <th>Period 3</th>
              <th>Period 4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.text}>StartDate - EndDate</td>
              <td>
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                />
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                />
              </td>
              <td>
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                />
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                />
              </td>
              <td>
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                />
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                />
              </td>
              <td>
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                />
                <DatePicker
                  selected={startDate}
                  onChange={(date: Date) => setStartDate(date)}
                />
              </td>
            </tr>

            {colors.map((color, index) => {
              return (
                <tr key={index}>
                  <div className={styles.background}>
                    <div
                      className={styles.blockButton}
                      style={{ backgroundColor: color }}
                    >
                      {" "}
                      Block {index}{" "}
                    </div>
                    <button className={styles.editButton}>
                      <IconEdit />
                    </button>
                  </div>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                  <td> </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <button className={styles.generateButton}>Generate</button>
    </div>
  );
}
