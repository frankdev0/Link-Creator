import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import styles from "@/styles/Newsite.module.css";
import Image from "next/image";
import { useState } from "react";

export default function Profile() {

  const [activeTab, setActiveTab] = useState('accountSettings'); // Default active tab

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <Navbar />

      <div className="d-flex">
        <div className={styles.sidebarwidth}>
          <Sidebar />
        </div>
        <div className={styles.contentwidth}>
          <div className={styles.innerbody}>
            <div className="d-flex px-4 py-4">
              <div className={styles.containerborder}>
                <div className="row px-4 ">
                  <div className={styles.profileheader}>
                  <p className="py-2 px-2">Profile</p>
                  </div>
                  
                  <div className={`${styles.checkborder} col-12 col-md-4`}>
                    <div className={styles.planborder}>
                      <div>
                        <div className={styles.profilepicborder}>
                        <div className="d-flex justify-content-center px-3">
                          <Image
                            src="/profile.png"
                            alt="profilepic"
                            width={200}
                            height={200}
                            className={styles.profilepic}
                          />
                        </div>
                        <div>
                          <h3 className={styles.profilename}>Ben Jackson</h3>
                        </div>
                        </div>
                        <div className={styles.itemize}>
                          <h3 className={styles.profilelabel}>Plan</h3>
                          <p className={styles.profiledesc}>Basic Plan</p>
                        </div>
                        <div className={styles.itemize}>
                          <h3 className={styles.profilelabel}>Date Created</h3>
                          <p className={styles.profiledesc}>29 June 2023</p>
                        </div>
                        <div className={styles.itemize}>
                          <h3 className={styles.profilelabel}>Referrals</h3>
                          <p className={styles.profiledesc}>3 Members</p>
                        </div>
                        <div className={styles.profilebtn}>
                          <button className={styles.btnpassword}>
                            Change Password
                          </button>
                          <button className={styles.deactivatebtn}>
                            Deactivate Account
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-8 d-flex justify-content-center">
                    <div className={styles.planborder}>
                      <div>
                        {/* <div className={styles.profilesettings}>
                          <div className={styles.account}>Account Settings</div>
                          <div className={styles.account}>Billing</div>
                        </div> */}
                         <div className={styles.profilesettings}>
        <div
          className={`${styles.account} ${
            activeTab === 'accountSettings' ? styles.activeTab : ''
          }`}
          onClick={() => handleTabClick('accountSettings')}
        >
          Account Settings
        </div>
        <div
          className={`${styles.account} ${
            activeTab === 'billing' ? styles.activeTab : ''
          }`}
          onClick={() => handleTabClick('billing')}
        >
          Billing
        </div>
      </div>

      {/* Render the content based on the activeTab */}
      {/* {activeTab === 'accountSettings' && (
        <div>Account Settings Content</div>
      )}
      {activeTab === 'billing' && <div>Billing Content</div>} */}

                        <div>
                          <form className={styles.formcontainer}>
                            <div className=" row d-flex mt-3">
                              <div className={`${styles.inputContainer} col-12 col-md-6`}>
                                <label
                                  htmlFor="email"
                                  className={styles.labels}
                                >
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
                              <div className={`${styles.inputContainer} col-12 col-md-6`}>
                                <label
                                  htmlFor="email"
                                  className={styles.labels}
                                >
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
                            <div className=" row d-flex my-3">
                            <div className={`${styles.inputContainer} col-12 col-md-6`}>
                                <label
                                  htmlFor="email"
                                  className={styles.labels}
                                >
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
                              <div className={`${styles.inputContainer} col-12 col-md-6`}>
                                <label
                                  htmlFor="email"
                                  className={styles.labels}
                                >
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
                            <div className="row d-flex my-3">
                            <div className={`${styles.inputContainer} col-12 col-md-6`}>
                                <label
                                  htmlFor="email"
                                  className={styles.labels}
                                >
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
                              <div className={`${styles.inputContainer} col-12 col-md-6`}>
                                <label
                                  htmlFor="email"
                                  className={styles.labels}
                                >
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
                            <div className="row">
                            <div className={`${styles.inputContainer} col-12 col-md-6 mt-2`}>
                                <label
                                  htmlFor="email"
                                  className={styles.labels}
                                >
                                  Country:
                                </label>
                                <div className={`${styles.passwordInputContainer} mb-3`}>
                                  <input
                                    type="text"
                                    placeholder="Nigeria"
                                    name="password"
                                    className={`${styles.profileinputs} form-contol`}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className={`${styles.btnborder} px-4`}>
                              <button className={`${styles.btnpassword} mt-4 ${styles.fullwidth}`}>
                                Update
                              </button>
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
    </div>
  );
}
