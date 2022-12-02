import styles from "./index.module.css";

export default function ScheduleContainer() {
  const data = [
    ["1", "1", "Vinmec", "Pediatrics", "Alice"],
    ["2", "2", "Vinmec", "Neurology", "Bob"],
    ["3", "3", "108 Hospital", "Surgery", "Carl"],
    ["4", "4", "Vinmec", "Psychiatry", "David"],
    ["5", "5", "Vinmec", "Internal Medicine", "Edgar"],
    ["6", "6", "108 Hospital", "Internal Medicine", "Frank"],
  ];
  
  const headerItems = [
    "Block ID", "Group ID", "Hospital", "Department", "Faculty"
  ]

  return (
    <>
      <div className={styles.container}>
        <>
          <div className={styles.header}>
            {headerItems.map((value) => {
              return <div className={styles.headerItems}>{value}</div>
            })}
          </div>

          <div className={styles.scheduleContainer}>
            {data.map((row) => {
              return <div className={styles.rowContainer}>
                {row.map((value) => {
                  return <div className={styles.item}>{value}</div>;
                })}
                <button className={styles.detailsBtn}>Details</button>
              </div>;
            })}
          </div>
        </>
      </div>
    </>
  );
}
