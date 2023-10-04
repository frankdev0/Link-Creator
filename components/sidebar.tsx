import Image from "next/image";
import styles from "@/styles/Dashboard.module.css";
import { PiBookOpenTextThin } from "react-icons/pi";
import { MdSpaceDashboard } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { BiErrorCircle } from "react-icons/bi";
import { PiGraduationCapLight } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div>
      <div className={styles.siderbarcontainer}>
        <div className={styles.sidebarlogo}>
          <Image src="/logo.png" width={50} height={50} alt="logo" />
        </div>
        <div>
          <ul className={styles.lists}>
            <li className={styles.listitems}>
                <MdSpaceDashboard />
                <Link href="/dashboard" className={styles.dashboard}>Dashboard</Link>
                </li>
            <li className={styles.listcontainer}>
                
                <div className={styles.iconmenu}>
                <PiBookOpenTextThin/>
                <Link href="/site" className={styles.menulinks}>Site</Link>
                </div>
                
              <div className={styles.dropdown}><IoIosArrowDown/></div>
              
              {/* <ul>
                <li>
                <Link href="/sub">Submenu Item 1</Link>
                </li>
                <li>
                <Link href="/sub">Submenu Item 2</Link>
                </li>
              </ul> */}
            </li>
            <li className={styles.listcontainer}>
                
                <div className={styles.iconmenu}>
                <IoSettingsOutline/>
                <Link href="/site" className={styles.menulinks}>Settings</Link>
                </div>
                
              <div className={styles.dropdown}><IoIosArrowDown/></div>
              
              {/* <ul>
                <li>
                <Link href="/sub">Submenu Item 1</Link>
                </li>
                <li>
                <Link href="/sub">Submenu Item 2</Link>
                </li>
              </ul> */}
            </li>
            <li className={styles.listcontainer}>
                
                <div className={styles.iconmenu}>
                <BiErrorCircle/>
                <Link href="/site" className={styles.menulinks}>Help</Link>
                </div>
                
              <div className={styles.dropdown}><IoIosArrowDown/></div>
              
              {/* <ul>
                <li>
                <Link href="/sub">Submenu Item 1</Link>
                </li>
                <li>
                <Link href="/sub">Submenu Item 2</Link>
                </li>
              </ul> */}
            </li>
            
            
            <li className={styles.listcontainer}>
            <div className={styles.iconmenu}>
            <PiGraduationCapLight/>
                <Link href="/site" className={styles.menulinks}>Learn</Link>
                </div>
                
                </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
