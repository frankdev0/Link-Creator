import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import styles from "@/styles/Table.module.css";
import Data from "@/Data.json";
import Table from "@/components/table";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="d-flex">
        <div className={styles.sidebarwidth}>
          <Sidebar />
        </div>
        <div className={styles.contentwidth}>
        <div className={styles.innerbody}>
        
      <div className='d-flex px-4 py-4'>
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
  );
}
