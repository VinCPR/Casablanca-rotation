import styles from "./index.module.css";

export default function ScheduleContainer() {
  const data = [
    ["1", "1", "Vinmec", "Pediatrics", "Alice"],
    ["2", "2", "Vinmec", "Neurology", "Bob"],
    ["3", "3", "108 Hospital", "Surgery", "Carl"],
    ["4", "4", "NCH", "Psychiatry", "David"],
  ];

  return (
    <>
      <div className={styles.container}>
        <>
          <div className={styles.header}></div>

          <div className={styles.scheduleContainer}>
            {data.map((row) => {
              return <div className={styles.rowContainer}>
                {row.map((value) => {
                  return <div className={styles.item}>{value}</div>;
                })}
              </div>;
            })}
          </div>
        </>
      </div>
    </>
  );
}
