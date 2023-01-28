import styles from "./index.module.css";

interface Student {
  [key: string]: string;
}

interface Props {
  headerItems: string[];
  data: Student[];
  gridTemplateCol: number[];
  showDetails: boolean;
  keys: string[];
}

export default function Table({
  headerItems,
  data,
  gridTemplateCol,
  showDetails,
  keys,
}: Props) {
  function getGridTemplateCol(
    gridTemplateCol: number[],
    headerItems: string[]
  ) {
    let output = "";
    if (gridTemplateCol.length == 0) {
      for (let i = 1; i <= headerItems.length; i++) {
        output += "[line" + i + "] " + 1 / headerItems.length + "%";
      }
    }
    if (gridTemplateCol.length > 0) {
      for (let i = 1; i <= headerItems.length; i++) {
        output += "[line" + i + "] " + gridTemplateCol[i - 1] + "%";
      }
    }
    return output;
  }

  return (
    <>
      <div className={styles.container}>
        <>
          <div
            style={{
              gridTemplateColumns: getGridTemplateCol(
                gridTemplateCol,
                headerItems
              ),
            }}
            className={styles.header}
          >
            {headerItems.map((value, index) => {
              return (
                <div key={index} className={styles.headerItems}>
                  {value}
                </div>
              );
            })}
          </div>

          <div className={styles.scheduleContainer}>
            {data.map((row, index) => {
              return (
                <div
                  style={{
                    gridTemplateColumns: getGridTemplateCol(
                      gridTemplateCol,
                      headerItems
                    ),
                  }}
                  className={styles.rowContainer}
                  key={index}
                >
                  {keys.map((value, index) => {
                    return (
                      <div className={styles.item} key={index}>
                        {row[value]}
                      </div>
                    );
                  })}
                  {showDetails && (
                    <button className={styles.detailsBtn}>Details</button>
                  )}
                </div>
              );
            })}
          </div>
        </>
      </div>
    </>
  );
}
