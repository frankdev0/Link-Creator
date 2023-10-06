import Image from 'next/image'
import styles from '@/styles/Dashboard.module.css'
import { FaBell } from 'react-icons/fa';
import { AiOutlineSearch} from 'react-icons/ai';



export default function Navbar() {
  return (
   
    <div>
  <div className={styles.navsection}>
    <div className={`${styles.navarea} row`}>
      <div className={`${styles.logobg} col-3 d-flex flex-column align-items-center`}>
        <Image src="/logo.png" width={50} height={50} alt="logo" />
      </div>
      
      <div className='col-3 px-5'>
               <div className={styles.welcomemsg}>Hello Ben 👋🏼, </div>
               <div className={styles.livetime}>Sunday, September 02, 2023</div>
             </div>
      
      
      <div className={`${styles.searchbox} col-3`}>
               <AiOutlineSearch/>
               <input className={styles.inputs} placeholder='search'/>
             </div>
      
      
             <div className={`${styles.notificationarea} col-3`}>
               <div className={styles.notificationIcon}>
               <FaBell className={styles.bell}/>
               </div>
              
               <div className='px-5'>
                 <div className={styles.adminname}>Ben</div>
                 <div className={styles.admintype}>Admin</div>
               </div>
               <div>
               <Image src="/myimage.jpg" width={50} height={50} alt="logo" className={styles.profilepic}/>
               </div>
             </div>
    </div>
  </div>
</div>

  )
}

