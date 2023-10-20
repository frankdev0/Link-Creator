import Mainnav from "@/global/navbar";
import Newside from "@/global/sidebar";
import styles from "@/styles/Globalcomponents.module.css";




export default function Samplenew () {
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