import styles from "@/styles/Globalcomponents.module.css";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { MdSpaceDashboard } from "react-icons/md";
import { PiBookOpenTextThin } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { BiErrorCircle } from "react-icons/bi";
import { PiGraduationCapLight } from "react-icons/pi";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdLocalMall } from "react-icons/md";
import { useState } from "react";
import { useMyContext } from "@/provider/MyContext";
import Link from "next/link";

type DropdownName = 'settings' | 'help' | 'site';
// type ActiveName = 'settings' | 'help' | 'site' | 'learn' | 'dashboard';

export default function Newside() {

  const [isDropdownOpen, setDropdownOpen] = useState<Record<DropdownName, boolean>>({
    settings: false,
    help: false,
    site: false,
  });


  const toggleDropdown = (dropdownName: DropdownName) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [dropdownName]: !prev[dropdownName],
    }));
  };


  const { toggle, setToggle } = useMyContext();

  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleMenuItemClick = (itemName: string) => {
    setActiveItem(itemName);
  };


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
          <Link onClick={() => handleMenuItemClick('dashboard')} href="/dashboard" className={`${styles.sidebarlinks} ${activeItem === 'dashboard' ? styles.active : ''}`}>
            <MdSpaceDashboard className={styles.icons}/>
            <h3 className={styles.linkname}>Dashboard</h3>
          </Link>
          <a href="#" className={styles.sidebarlinks} onClick={() => toggleDropdown('site')}>
          <PiBookOpenTextThin className={styles.icons}/>
            <h3 className={styles.linkname}>Site</h3>
            <RiArrowDownSLine className="mx-2"/>
          </a>
              {isDropdownOpen.site && (
            // Your dropdown content here
            <div className={styles.dropdownContent}>
              <Link onClick={() => handleMenuItemClick('allsites')} href="/allsites" className={`${styles.submenulinks} ${activeItem === 'allsites' ? styles.active : ''}`}>
          <MdLocalMall className={styles.icons}/>
              <p className={styles.submenu}>All Site</p>
              </Link>
              <Link onClick={() => handleMenuItemClick('addnewsite')} href="/addnewsite" className={`${styles.submenulinks} ${activeItem === 'addnewsite' ? styles.active : ''}`}>
          <IoAddCircleOutline className={styles.icons}/>
              <p className={styles.submenu}>Add New Site</p>
              </Link>
              
            </div>
          )}
          <a href="#" className={styles.sidebarlinks} onClick={() => toggleDropdown('settings')}>
          <IoSettingsOutline className={styles.icons}/>
            <h3 className={styles.linkname}>Settings</h3>
            <RiArrowDownSLine className="mx-2" />
          </a>
          {isDropdownOpen.settings && (
            // Your dropdown content here
            <div className={styles.dropdownContent}>
              <Link onClick={() => handleMenuItemClick('profile')} href="/profile" className={`${styles.submenulinks} ${activeItem === 'profile' ? styles.active : ''}`}>
          <MdLocalMall className={styles.icons}/>
              <p className={styles.submenu}>Profile</p>
              </Link>
              <a href="#" className={styles.submenulinks}>
          <IoAddCircleOutline className={styles.icons}/>
              <p className={styles.submenu}>Add New Site</p>
              </a>
              
            </div>
          )}
          <a href="#" className={styles.sidebarlinks} onClick={() => toggleDropdown('help')}>
          <BiErrorCircle className={styles.icons}/>
            <h3 className={styles.linkname}>Help</h3>
            <RiArrowDownSLine className="mx-2"/>
          </a>
          {isDropdownOpen.help && (
            // Your dropdown content here
            <div className={styles.dropdownContent}>
              <a href="#" className={styles.submenulinks}>
          <MdLocalMall className={styles.icons}/>
              <p className={styles.submenu}>All Site</p>
              </a>
              <a href="#" className={styles.submenulinks}>
          <IoAddCircleOutline className={styles.icons}/>
              <p className={styles.submenu}>Add New Site</p>
              </a>
              
            </div>
          )}
          <a href="#" className={styles.sidebarlinks}>
          <PiGraduationCapLight className={styles.icons}/>
            <h3 className={styles.linkname}>Learn</h3>
          </a>
          {/* <a href="#" className={`${styles.sidebarlinks} ${styles.active}`}>
            <MdSpaceDashboard className={styles.icons}/>
            <h3 className={styles.linkname}>Logout</h3>
          </a> */}
        </div>
      </aside>
    </div>
  );
}
