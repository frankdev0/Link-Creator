import Image from 'next/image'
import styles from '@/styles/Globalcomponents.module.css'
import { FaBell } from 'react-icons/fa';
import { HiBars3 } from 'react-icons/hi2';
import { AiOutlineSearch} from 'react-icons/ai';
import { useState } from "react";
import { useMyContext } from '@/provider/MyContext';



export default function Mainnav () {

    const { toggle, setToggle } = useMyContext();
    // const [toggle, setToggle] = useState(false)

    console.log('toggle', toggle)

    // const handleToggle = () => {
    //   setToggle(!toggle)
    // }
    return (
<div className={styles.right}>
    <div className={styles.barscontainer} >
        <div className='d-flex align-items-center'>
    <Image src="/logo.png" alt="logo" width={50} height={50} className={styles.logos} />
    <div className={styles.logotext}>LinkCreatorAI</div>
    </div>
    <HiBars3 className={styles.barsicon} onClick={() => setToggle(!toggle)}/>
    </div>
    <div className={`${styles.navbarcontainer} row`}>
        <div className='col-4 d-flex align-items-center'>
            <div>
            <h3 className={styles.welcomemsg}>Hello Ben 👋🏼, </h3>
               <p className={styles.livetime}>Sunday, September 02, 2023</p>
            </div>
        </div>
        <div className='col-4 d-flex align-items-center'>
        <div className={`${styles.searchbox}`}>
               <AiOutlineSearch className={styles.searchicon}/>
               <input className={styles.inputs} placeholder='search'/>
             </div>
        </div>
        <div className='col-4'>
        <div className={`${styles.notificationarea}`}>
               <div className={styles.notificationIcon}>
               <FaBell className={styles.bell}/>
               </div>
              
               <div className='px-5'>
                 <div className={styles.adminname}>Ben</div>
                 <div className={styles.admintype}>Admin</div>
               </div>
               <div>
               <Image src="/profile.png" width={50} height={50} alt="logo" className={styles.profilepic}/>
               </div>
             </div>
        </div>
    </div>
      
</div>
    )
}