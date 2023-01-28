import styles from "./index.module.css";

interface Props {
  headerItems: string[];
  data: string[][];
  gridTemplateCol: number[];
  showDetails: boolean;
}

export default function Table({
  headerItems,
  data,
  gridTemplateCol,
  showDetails,
}: Props) {
  function getGridTemplateCol(
    gridTemplateCol: number[],
    headerItems: string[]
  ) {
    var output = "";
    if (gridTemplateCol.length == 0) {
      for (var i = 1; i <= headerItems.length; i++) {
        output += "[line" + i + "] " + 1 / headerItems.length + "%";
      }
    } else if (gridTemplateCol.length > 0) {
      for (var i = 1; i <= headerItems.length; i++) {
        output += "[line" + i + "] " + gridTemplateCol[i] + "%";
      }
      return output;
    }
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
                <div className={styles.rowContainer} key={index}>
                  {row.map((value, index) => {
                    return (
                      <div className={styles.item} key={index}>
                        {value}
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
