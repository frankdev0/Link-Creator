import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import styles from '@/styles/Newsite.module.css'
import Image from "next/image";



export default function Profile () {
    return (
<div>
      <Navbar />

      <div className="d-flex">
        <div className={styles.sidebarwidth}>
          <Sidebar />
        </div>
        <div className={styles.contentwidth}>
        <div className={styles.innerbody}>
        
      <div className='d-flex px-4 py-4'>
      <div className={styles.containerborder}>
            <p className="py-2 px-2">Profile</p>
            <div className="row">
                <div className="col-4">
                    <div className="d-flex ustify-content-center px-3">
                    <Image src="/myimage.jpg" alt="profilepic" width={250} height={250} className={styles.profilepic}/>
                    </div>
                    <div>
                        <h3 className={styles.profilename}>Ben Jackson</h3>
                    </div>
                    <div className="d-flex justify-content-between px-2 my-3">
                        <h3 className={styles.profilelabel}>Plan</h3>
                        <p className={styles.profiledesc}>Basic Plan</p>
                    </div>
                    <div className="d-flex justify-content-between px-2 my-3">
                        <h3 className={styles.profilelabel}>Date Created</h3>
                        <p className={styles.profiledesc}>29 June 2023</p>
                    </div>
                    <div className="d-flex justify-content-between px-2 my-3">
                        <h3 className={styles.profilelabel}>Referrals</h3>
                        <p className={styles.profiledesc}>3 Members</p>
                    </div>
                   <div className="text-center">
                    <button className={styles.btnpassword}> Change Password</button>
                    <button className={styles.deactivatebtn}> Deactivate Account</button>
                   </div>
                </div>
                <div className="col-8">
                    <div>
                        <div className="d-flex text-left">
                            <div className={styles.account}>Account Settings</div>
                            <div className={styles.account}>Billing</div>
                        </div>
                        <div>
                            <form>
                                <div className="d-flex mt-3">
                            <div className={styles.inputContainer}>
                  <label htmlFor="email" className={styles.labels}>
                    First name:
                  </label>
                  <div className={styles.passwordInputContainer}>
                    <input
                      type="text"
                      placeholder="Ben Jackson"
                      name="password"
                      className={`${styles.profileinputs} form-contol`}
                    />
                   
                  </div>
                </div>
                            <div className={styles.inputContainer}>
                  <label htmlFor="email" className={styles.labels}>
                    Email:
                  </label>
                  <div className={styles.passwordInputContainer}>
                    <input
                      type="text"
                      placeholder="benjackson@gmail.com"
                      name="password"
                      className={`${styles.profileinputs}`}
                    />
                   
                  </div>
                </div>
                </div>
                <div className="d-flex my-3">
                            <div className={styles.inputContainer}>
                  <label htmlFor="email" className={styles.labels}>
                    Phone Number:
                  </label>
                  <div className={styles.passwordInputContainer}>
                    <input
                      type="text"
                      placeholder="+234-7039-714-***"
                      name="password"
                      className={`${styles.profileinputs} form-contol`}
                    />
                   
                  </div>
                </div>
                            <div className={styles.inputContainer}>
                  <label htmlFor="email" className={styles.labels}>
                    City:
                  </label>
                  <div className={styles.passwordInputContainer}>
                    <input
                      type="text"
                      placeholder="Ikeja"
                      name="password"
                      className={`${styles.profileinputs} form-contol`}
                    />
                   
                  </div>
                </div>
                </div>
                <div className="d-flex my-3">
                            <div className={styles.inputContainer}>
                  <label htmlFor="email" className={styles.labels}>
                    State:
                  </label>
                  <div className={styles.passwordInputContainer}>
                    <input
                      type="text"
                      placeholder="Lagos"
                      name="password"
                      className={`${styles.profileinputs} form-contol`}
                    />
                   
                  </div>
                </div>
                            <div className={styles.inputContainer}>
                  <label htmlFor="email" className={styles.labels}>
                    Postcode:
                  </label>
                  <div className={styles.passwordInputContainer}>
                    <input
                      type="text"
                      placeholder="31005"
                      name="password"
                      className={`${styles.profileinputs} form-contol`}
                    />
                   
                  </div>
                </div>
                </div>
                <div>
                <div className={`${styles.inputContainer} mt-3`}>
                  <label htmlFor="email" className={styles.labels}>
                    Country:
                  </label>
                  <div className={styles.passwordInputContainer}>
                    <input
                      type="text"
                      placeholder="Nigeria"
                      name="password"
                      className={`${styles.profileinputs} form-contol`}
                    />
                   
                  </div>
                </div> 
                </div>
                <div>
                    <button className={`${styles.btnpassword} mt-4`}>Update</button>
                </div>
                            </form>
                        </div>
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