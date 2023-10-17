import Mainnav from "@/global/mainnavbar";
import Newside from "@/global/mainsidebar";
import styles from "@/styles/Mydashboard.module.css";




export default function Addnew () {
    return (
<div className={styles.container}>
   <Newside/>
   <div>
    <Mainnav/>
   <div className={`${styles.contentbody}`}>
      Some contents goes here for real
   </div>
   </div>
      </div>
    )
}