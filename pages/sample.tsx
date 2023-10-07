import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import styles from '@/styles/Newsite.module.css'


export default function Addnew () {
    return (
<div>
      <Navbar />

      <div className="d-flex">
        <div className={styles.sidebarwidth}>
          <Sidebar />
        </div>
        <div className={styles.contentwidth}>
        <div className={styles.innerbody}>
        
      <div className='d-flex px-4 py-4'></div>
      </div>
      </div>
      </div>
      </div>
    )
}