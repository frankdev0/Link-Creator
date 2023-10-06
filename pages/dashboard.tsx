import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Dashboard.module.css'
import { HiCursorClick } from 'react-icons/hi';
import { LiaLinkSolid} from 'react-icons/lia';
import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import Table from '@/components/table';



export default function Dashboard() {
  return (
    

  <div>
    
    <Navbar/>
    
      
    <div className='d-flex'>
      <div className={styles.sidebarcntainer}><Sidebar/></div>
      <div className={styles.innerbody}>
      <div className='d-flex justify-content-center px-4 py-4'>
        <div className={`${styles.mainbox} row`}>
          <div className='col-12 col-lg-4'>
           <div className={styles.statlabel}>Internal Links</div> 
          <div className={`${styles.boxes}`}>
            <div className={styles.linkicon}>
            <LiaLinkSolid/>
            </div>
            <div>
            <p className={styles.stats}>Total Internal Links</p>
            <div className={styles.statsnumber}>523</div>
            </div>
          </div>
          </div>
         
          

          <div className='col-12 col-lg-4'>
           <div className={styles.statlabel}>Link Click</div> 
          <div className={`${styles.boxes}`}>
            <div className={styles.boxicon}>
            <HiCursorClick/>
            </div>
           <div>
            <p className={styles.stats}>Weekly Link Click</p>
            <div className={styles.statsnumber}>79</div>
            </div>
          </div>
          </div>
          
          <div className='col-12 col-lg-4'>
          <div className={styles.statlabel}>Links</div> 
          <div className={`${styles.boxes}`}>
            <div className={styles.boxicon}>
            <HiCursorClick/>
            </div>
           <div>
            <p className={styles.stats}>Total Created Site</p>
            <div className={styles.statsnumber}>4</div>
            </div>
          </div>
          </div>
          
         
        </div>
      </div>
      <div className='px-4 py-4 '>
      <div className={`${styles.mainbox} row`}>
        <div className='col-12 col-lg-5'>
          <div className={styles.tablestat}>
            <p>Some written docs</p>
          </div>
        </div>
        <div className='col-12 col-lg-4'>
        <div className={styles.tablestat}>
            <p>Some written docs</p>
          </div>
        </div>
        <div className='col-12 col-lg-3'>
        <div className={styles.tablestat}>
            <p>Some written docs</p>
          </div>
        </div>
      </div>
      </div>
      <div className='d-flex px-4 py-4'>
        <div className={`${styles.tablebody} row`}>
          <div className='col-12'>
            <Table/>
          </div>
        </div>
      </div>
      </div>
    </div>
      
  </div>
  )
}
