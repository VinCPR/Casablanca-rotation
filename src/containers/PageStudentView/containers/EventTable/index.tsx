import { useRouter } from "next/router";
import styles from "./index.module.css";

interface Object {
  [key: string]: string;
}

interface Props {
  headerItems: string[];
  data: Object[];
  gridTemplateCol: number[];
  showDetails: boolean;
  keys: string[];
  height?: number;
  handleDetailsClick: (eventID: string) => void;
}

export default function EventTable({
  headerItems,
  data,
  gridTemplateCol,
  showDetails,
  keys,
  height,
  handleDetailsClick
}: Props) {

  const router = useRouter();

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
      <div style={{height: height + "%"}} className={styles.container}>
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
            {data?.map((row, index) => {
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
                    <button
                      onClick={() =>
                        {handleDetailsClick(row.event_id)}
                      }
                      className={styles.detailsBtn}
                    >
                      Details
                    </button>
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
