import styles from "@/styles/Dashboard.module.css";
import { HiCursorClick } from "react-icons/hi";
import { LiaLinkSolid } from "react-icons/lia";
import Table from "@/components/table";
import Newside from "@/global/sidebar";
import Mainnav from "@/global/navbar";
import {Linecharts} from "@/components/linechart";
import { PieChart } from "@/components/piechart";
// import ApexCharts from 'apexcharts'

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Newside />
      <div>
        <Mainnav />
        <div className={`${styles.contentbody}`}>
          <div className={styles.innerbody}>
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
          {/* CHARTS SECTION */}
          
            <div className="py-4 ">
              <div className={`${styles.chartcontainer}`}>
                <div className={styles.chartone}>
                  <div className={styles.tablestat}>
                    <p className={styles.boxtext}>Top Performing  Pages</p>
                    <Linecharts/>
                  </div>
                </div>
                <div className={styles.charttwo}>
                  <div className={styles.tablestat}>
                    <p className={styles.boxtext}>Top Performing Sites</p>
                    <table className={`${styles.customTable}`}>
                  <thead>
                    <tr>
                      <th className={styles.tableheader}>No.</th>
                      <th className={styles.tableheader}>URL</th>
                      <th className={styles.tableheader}>Type</th>
                    </tr>
                  </thead>
                  <tbody>
      
                  <tr  className={ styles.evenrow}>
                    <td>01</td>
                    <td>Site.com</td>
                    <td>WordPress</td>
                  </tr>
                  <tr  className={styles.oddrow}>
                    <td>02</td>
                    <td>2ndsite.com</td>
                    <td>CPanel</td>
                  </tr>
      
                </tbody>
              </table>
                  </div>
                </div>
                <div className={styles.chartthree}>
                  <div className={styles.tablestat}>
                    <p className={styles.boxtext}>Distribution category</p>
                    <PieChart/>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className=" py-4">
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
