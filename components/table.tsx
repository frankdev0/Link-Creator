import styles from "@/styles/Table.module.css";
import Data from "@/Data.json";
// import 'bootstrap/dist/css/bootstrap.css'

export default function Table() {
  return (
    <div className={styles.tableContainertwo}>
      <div className={styles.recentadd}>Recently Added Pages</div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>No.</th>
            <th>Page Name</th>
            <th>URL</th>
            <th>Date Added</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.firstrow}>
            <td className={styles.td}>1</td>
            <td className={styles.td}>Ada Oha</td>
            <td className={styles.td}>Filling Station</td>
            <td className={styles.td}>Agungi</td>
            <td className={styles.td}>
              <button className={styles.btnsubmit}>view</button>
            </td>
          </tr>
          <tr className={styles.secondrow}>
            <td className={styles.td}>1</td>
            <td className={styles.td}>Ada Oha</td>
            <td className={styles.td}>Filling Station</td>
            <td className={styles.td}>Agungi</td>
            <td className={styles.td}>
              <button className={styles.btnsubmit}>view</button>
            </td>
          </tr>
          <tr className={styles.firstrow}>
            <td className={styles.td}>1</td>
            <td className={styles.td}>Ada Oha</td>
            <td className={styles.td}>Filling Station</td>
            <td className={styles.td}>Agungi</td>
            <td className={styles.td}>
              <button className={styles.btnsubmit}>view</button>
            </td>
          </tr>
          <tr className={styles.secondrow}>
            <td className={styles.td}>1</td>
            <td className={styles.td}>Ada Oha</td>
            <td className={styles.td}>Filling Station</td>
            <td className={styles.td}>Agungi</td>
            <td className={styles.td}>
              <button className={styles.btnsubmit}>view</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}



{/* <div className={styles.tableContainer}>
        <div className={styles.recentadd}>Recently Added Pages</div>
        <table className={`${styles.customTable}  container`}>
          <thead>
            <tr>
              <th className={styles.tableheader}>No.</th>
              <th className={styles.tableheader}>Page Name</th>
              <th className={styles.tableheader}>URL</th>
              <th className={styles.tableheader}>Date Added</th>
              <th className={styles.tableheader}>Action</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((d, i) => (
              <tr
                key={i}
                className={i % 2 === 0 ? styles.evenrow : styles.oddrow}
              >
                <td>{d.Id}</td>
                <td>{d.Page_Name}</td>
                <td>{d.URL}</td>
                <td>{d.Date_Added}</td>
                <td>
                  <button className={styles.btnsubmit}>{d.Action}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}