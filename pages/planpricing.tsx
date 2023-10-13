import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import styles from '@/styles/Planpricing.module.css'
import { IoCheckmarkCircleSharp } from 'react-icons/io5';



export default function Planpricing () {
    return (
<div>
      <Navbar />

      <div className="d-flex">
        <div className={styles.sidebarwidth}>
          <Sidebar />
        </div>
        <div className={styles.contentwidth}>
        <div className={styles.innerbody}>
        
      <div className='d-flex justify-content-center align-item-center px-5'>
      <div className={styles.containerborder}>
      <div className={styles.profileheader}>
                  <p className="py-2 px-3">Plan Pricing</p>
                  </div>
        <div>
            <div className={`${styles.cards} row px-5`}>
                <div className="col-12 col-lg-4 px-2">
                <div className={`${styles.cardcontainer}`}>
                    <div className={styles.cardpad}>
                        <p className={styles.cardlist}>Basic</p>
                        <h3 className={styles.cardheader}>Free</h3>
                        <p className={styles.subheader}>Free plan for all users</p>
                        <div className={styles.cardlist}>
                        <div className="py-3"> <IoCheckmarkCircleSharp className={styles.cardicon}/> 1 Website Activation</div>
                        <div> <IoCheckmarkCircleSharp className={styles.cardicon}/> 10 Page(s) per Website</div>
                        <div className="py-3"> <IoCheckmarkCircleSharp className={styles.cardicon}/> 10 Page(s) per Website</div>
                        <div> <IoCheckmarkCircleSharp className={styles.cardicon}/> 10 Page(s) per Website</div>
                        </div>
                        <div>
                            <button className={styles.btnyes}>Activate Plan</button>
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-12 col-lg-4 px-2">
                <div className={`${styles.cardcontainertwo} `}>
                <div className={styles.cardpad}>
                        <p className={styles.cardlist}>Mid</p>
                        <h3 className={styles.cardheader}>$1</h3>
                        <p className={styles.subheader}>Free plan for all users</p>
                        <div className={styles.cardlist}>
                        <div className="py-3"> <IoCheckmarkCircleSharp className={styles.cardicons}/> 1 Website Activation</div>
                        <div> <IoCheckmarkCircleSharp className={styles.cardicons}/> 10 Page(s) per Website</div>
                        <div className="py-3"> <IoCheckmarkCircleSharp className={styles.cardicons}/> 10 Page(s) per Website</div>
                        <div> <IoCheckmarkCircleSharp className={styles.cardicons}/> 10 Page(s) per Website</div>
                        </div>
                        <div>
                            <button className={styles.btnyes}>Upgrade to Mid</button>
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-12 col-lg-4 px-2">
                <div className={`${styles.cardcontainertwo}`}>
                <div className={styles.cardpad}>
                        <p className={styles.cardlist}>Pro</p>
                        <h3 className={styles.cardheader}>$10</h3>
                        <p className={styles.subheader}>Free plan for all users</p>
                        <div className={styles.cardlist}>
                        <div className="py-3"> <IoCheckmarkCircleSharp className={styles.cardicons}/> 1 Website Activation</div>
                        <div> <IoCheckmarkCircleSharp className={styles.cardicons}/> 10 Page(s) per Website</div>
                        <div className="py-3"> <IoCheckmarkCircleSharp className={styles.cardicons}/> 10 Page(s) per Website</div>
                        <div> <IoCheckmarkCircleSharp className={styles.cardicons}/> 10 Page(s) per Website</div>
                        </div>
                        <div>
                            <button className={styles.btnyes}>Upgrade to Pro</button>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
            <div className={styles.belowborder}>
                <div className={`${styles.belowwidth} px-3`}>
                <div className={styles.help}>Need more website or page slot?</div>
                <div className={styles.nohelp}>Customize Plan</div>
                </div>
            </div>
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    )
}