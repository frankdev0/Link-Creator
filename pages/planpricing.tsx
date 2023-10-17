import Mainnav from "@/global/mainnavbar";
import Newside from "@/global/mainsidebar";
import styles from "@/styles/Planpricing.module.css";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

export default function Planpricing() {
  return (
    <div className={styles.container}>
      <Newside />
      <div>
        <Mainnav />
        <div className={`${styles.contentbody} px-4`}>
          <div className={styles.innerbody}>
            <div>
              <div className={styles.profileheader}>
                <p>Plan Pricing</p>
              </div>
              <div className={styles.billingcontainer}>
                <div className={styles.eachbill}>
                  <div className={`${styles.cardcontainer}`}>
                    <div className={styles.cardpad}>
                      <p className={styles.cardlist}>Basic</p>
                      <h3 className={styles.cardheader}>Free</h3>
                      <p className={styles.subheader}>
                        Free plan for all users
                      </p>
                      <div className={styles.cardlist}>
                        <div className="py-3">
                          {" "}
                          <IoCheckmarkCircleSharp
                            className={styles.cardicon}
                          />{" "}
                          1 Website Activation
                        </div>
                        <div>
                          {" "}
                          <IoCheckmarkCircleSharp
                            className={styles.cardicon}
                          />{" "}
                          10 Page(s) per Website
                        </div>
                        <div className="py-3">
                          {" "}
                          <IoCheckmarkCircleSharp
                            className={styles.cardicon}
                          />{" "}
                          10 Page(s) per Website
                        </div>
                        <div>
                          {" "}
                          <IoCheckmarkCircleSharp
                            className={styles.cardicon}
                          />{" "}
                          10 Page(s) per Website
                        </div>
                      </div>
                      <div>
                        <button className={styles.btnyes}>Activate Plan</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.eachbill}>
                  <div className={`${styles.cardcontainertwo} `}>
                    <div className={styles.cardpad}>
                      <p className={styles.cardlist}>Mid</p>
                      <h3 className={styles.cardheader}>$1</h3>
                      <p className={styles.subheader}>
                        Free plan for all users
                      </p>
                      <div className={styles.cardlist}>
                        <div className="py-3">
                          {" "}
                          <IoCheckmarkCircleSharp
                            className={styles.cardicons}
                          />{" "}
                          1 Website Activation
                        </div>
                        <div>
                          {" "}
                          <IoCheckmarkCircleSharp
                            className={styles.cardicons}
                          />{" "}
                          10 Page(s) per Website
                        </div>
                        <div className="py-3">
                          {" "}
                          <IoCheckmarkCircleSharp
                            className={styles.cardicons}
                          />{" "}
                          10 Page(s) per Website
                        </div>
                        <div>
                          {" "}
                          <IoCheckmarkCircleSharp
                            className={styles.cardicons}
                          />{" "}
                          10 Page(s) per Website
                        </div>
                      </div>
                      <div>
                        <button className={styles.btnyes}>
                          Upgrade to Mid
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.eachbill}>
                  <div className={`${styles.cardcontainertwo}`}>
                    <div className={styles.cardpad}>
                      <p className={styles.cardlist}>Pro</p>
                      <h3 className={styles.cardheader}>$10</h3>
                      <p className={styles.subheader}>
                        Free plan for all users
                      </p>
                      <div className={styles.cardlist}>
                        <div className="py-3">
                          {" "}
                          <IoCheckmarkCircleSharp
                            className={styles.cardicons}
                          />{" "}
                          1 Website Activation
                        </div>
                        <div>
                          {" "}
                          <IoCheckmarkCircleSharp
                            className={styles.cardicons}
                          />{" "}
                          10 Page(s) per Website
                        </div>
                        <div className="py-3">
                          {" "}
                          <IoCheckmarkCircleSharp
                            className={styles.cardicons}
                          />{" "}
                          10 Page(s) per Website
                        </div>
                        <div>
                          {" "}
                          <IoCheckmarkCircleSharp
                            className={styles.cardicons}
                          />{" "}
                          10 Page(s) per Website
                        </div>
                      </div>
                      <div>
                        <button className={styles.btnyes}>
                          Upgrade to Pro
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.belowborder}>
                <div className={`${styles.belowwidth} px-3`}>
                  <div className={styles.help}>
                    Need more website or page slot?
                  </div>
                  <div className={styles.nohelp}>Customize Plan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
