import styles from '@/styles/Table.module.css'
import Data from '@/Data.json'
// import 'bootstrap/dist/css/bootstrap.css'




export default function Table() {
  return (
    <div>
        
        <div className={styles.tableContainertwo}>
        <div className={styles.recentadd}>Recently Added Pages</div>
  <table className={`${styles.customTable}`}>
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
        <tr key={i} className={i % 2 === 0 ? styles.evenrow : styles.oddrow}>
          <td>{d.Id}</td>
          <td>{d.Page_Name}</td>
          <td>{d.URL}</td>
          <td>{d.Date_Added}</td>
          <td><button className={styles.btnsubmit}>{d.Action}</button></td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
     
    </div>
  )
}
