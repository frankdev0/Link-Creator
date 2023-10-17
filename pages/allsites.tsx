
import styles from "@/styles/Table.module.css";
import Data from "@/Data.json";
import Table from "@/components/table";
import Mainnav from "@/global/navbar";
import Newside from "@/global/sidebar";




export default function Samplenew () {
    return (
<div className={styles.container}>
   <Newside/>
   <div>
    <Mainnav/>
   <div className={`${styles.contentbody}`}>
   <div className={styles.innerbody}>
        
        <div className='d-flpy-4'>
          <div className={`${styles.tablebody} row`}>
            <div className='col-12'>
            <div>
          
          <div className={styles.tableContainer}>
          <div className={styles.recentadd}>All Websites</div>
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
            </div>
          </div>
        </div>
          </div>
   </div>
   </div>
      </div>
    )
}


