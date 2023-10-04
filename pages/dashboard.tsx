import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Dashboard.module.css'
import { FaBell } from 'react-icons/fa';
import { AiOutlineSearch} from 'react-icons/ai';
import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';



export default function Dashboard() {
  return (
  //   <div>
  //     <div className={styles.navposition}>
  //     <Navbar/>
  //     </div>
    
  //    <div className={styles.sidebartop}>
  //    <Sidebar/>
     
     
  //    <div className={styles.content}>
  //   <p>Here are some of the values here</p>
  //   <p>Here are some of the values here</p>
  //   <p>Here are some of the values here</p>
  //   <p>Here are some of the values here</p>
  //   <p>Here are some of the values here</p>
  // </div>
  // </div>
  //   </div>
  <div className={styles.containerr}>
    <div className={styles.sidebarcontainer}>
    <Sidebar/>
    </div>
    <div className={styles.navcontainerr}>
      <div className={styles.takeup}>
      <Navbar/>
      </div>
   
    </div>
  </div>
  )
}
