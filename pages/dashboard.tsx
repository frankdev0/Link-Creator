import styles from "@/styles/Dashboard.module.css";
import { HiCursorClick } from "react-icons/hi";
import { LiaLinkSolid } from "react-icons/lia";
import Table from "@/components/table";
import Newside from "@/global/mainsidebar";
import Mainnav from "@/global/mainnavbar";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Newside />
      <div>
        <Mainnav />
        <div className={`${styles.contentbody}`}>
          <div className={styles.boxcontainer}>
            <div>
               <div className={styles.linklabel}>Internal Links</div>
            <div className={styles.eachbox}>
             
              <div className={`${styles.bxes}`}>
                <div className={styles.linkicon}>
                  <LiaLinkSolid className={styles.icons} />
                </div>
                <div>
                  <p className={styles.stats}>Total Internal Links</p>
                  <div className={styles.statsnumber}>523</div>
                </div>
              </div>
            </div>
            </div>
            <div>
              <div className={styles.linklabel}>Link Click</div>
            <div className={styles.eachbox}>
              
              <div className={`${styles.bxes}`}>
                <div className={styles.boxicon}>
                  <HiCursorClick />
                </div>
                <div>
                  <p className={styles.stats}>Weekly Link Click</p>
                  <div className={styles.statsnumber}>79</div>
                </div>
              </div>
            </div>
            </div>
            <div>
                <div className={styles.linklabel}>Sites</div>
            <div className={styles.eachbox}>
            
              <div className={`${styles.bxes}`}>
                <div className={styles.boxicon}>
                  <HiCursorClick />
                </div>
                <div>
                  <p className={styles.stats}>Total Created Site</p>
                  <div className={styles.statsnumber}>4</div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className={styles.innerbody}>
            <div className="py-4 ">
              <div className={`${styles.chartcontainer}`}>
                <div className={styles.chartone}>
                  <div className={styles.tablestat}>
                    <p>Some written docs</p>
                  </div>
                </div>
                <div className={styles.charttwo}>
                  <div className={styles.tablestat}>
                    <p>Some written docs</p>
                  </div>
                </div>
                <div className={styles.chartthree}>
                  <div className={styles.tablestat}>
                    <p>Some written docs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex py-4">
              <div className={`${styles.tablebody} row`}>
                <div className="col-12">
                  <Table />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
