import styles from "@/styles/Mydashboard.module.css";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { MdSpaceDashboard } from "react-icons/md";
import { PiBookOpenTextThin } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { BiErrorCircle } from "react-icons/bi";
import { PiGraduationCapLight } from "react-icons/pi";
// import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { useMyContext } from "@/provider/MyContext";

export default function Newside() {

  // const [toggle, setToggle] = useState(false)

  // const handleToggle = () => {
  //   setToggle(!toggle)
  // }

  const { toggle, setToggle } = useMyContext();

  return (
    <div className={styles.container}>
      <aside className={toggle ? styles.notaside : styles.aside} >
        <div className={styles.tops}>
          <div className={styles.logo}>
            <Image src="/logo.png" alt="logo" width={50} height={50} className={styles.logos} />
            {/* <h2>
              EGA <span>TOR</span>
            </h2> */}
          </div>
          <div className={styles.close} id="close-btn" onClick={() => setToggle(!toggle)}>
            <AiOutlineClose className={styles.icons}/>
          </div>
        </div>
        <div className={styles.sidebar}>
          <a href="#" className={styles.sidebarlinks}>
            <MdSpaceDashboard className={styles.icons}/>
            <h3 className={styles.linkname}>Dashboard</h3>
          </a>
          <a href="#" className={styles.sidebarlinks}>
          <PiBookOpenTextThin className={styles.icons}/>
            <h3 className={styles.linkname}>Site</h3>
          </a>
          <a href="#" className={styles.sidebarlinks}>
          <IoSettingsOutline className={styles.icons}/>
            <h3 className={styles.linkname}>Settings</h3>
          </a>
          <a href="#" className={styles.sidebarlinks}>
          <BiErrorCircle className={styles.icons}/>
            <h3 className={styles.linkname}>Help</h3>
          </a>
          <a href="#" className={styles.sidebarlinks}>
          <PiGraduationCapLight className={styles.icons}/>
            <h3 className={styles.linkname}>Learn</h3>
          </a>
          <a href="#" className={`${styles.sidebarlinks} ${styles.active}`}>
            <MdSpaceDashboard className={styles.icons}/>
            <h3 className={styles.linkname}>Logout</h3>
          </a>
        </div>
      </aside>
    </div>
  );
}
