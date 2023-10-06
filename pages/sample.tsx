import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import styles from '@/styles/Home.module.css'


<div>

<Navbar/>
    
      
    <div className='d-flex'>
      <div className={styles.sidebarcntainer}><Sidebar/></div>
      <div className={styles.innerbody}>
        </div>
        </div>
     {/* <div className='d-flex px-4 py-4'>
        <div className={`${styles.tablebody} row`}>
          <div className='col-12'>
            <Table/>
          </div>
        </div>
      </div> */}
    </div>