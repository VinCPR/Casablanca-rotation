import React from "react";
import styles from "./index.module.css";
import DatePicker from "react-datepicker";
import { useState } from "react";
export default function StepTwo() {
  const [startDate, setStartDate] = useState(new Date());
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
                >
                  {" "}
                </DatePicker>{" "}
              </td>
              <td> </td>
              <td> </td>
              <td> </td>
            </tr>

            <tr>
              <div className={styles.background}>
                <div className={styles.blockButton1}> Block 1 </div>
                <button className={styles.addButton}> +</button>
              </div>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <div className={styles.background}>
                <div className={styles.blockButton2}> Block 2</div>
                <button className={styles.addButton}> +</button>
              </div>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <div className={styles.background}>
                <div className={styles.blockButton3}> Block 3 </div>
                <button className={styles.addButton}> +</button>
              </div>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <div className={styles.background}>
                <div className={styles.blockButton4}> Block 4 </div>
                <button className={styles.addButton}> +</button>
              </div>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className={styles.generateButton}>Generate</button>
    </div>
  );
}
