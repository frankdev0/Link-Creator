import Navbar from "@/components/navbar";
import { useState } from "react";
import Sidebar from "@/components/sidebar";
import styles from "@/styles/Newsite.module.css";
import Image from "next/image";
import { GrStatusGood } from "react-icons/gr";
import { BsArrowRightCircle } from "react-icons/bs";
import CustomModal from "@/components/modal";



export default function Addnew() {
  const [addNew, setAddNew] = useState(false);
  const [addWeb, setAddWeb] = useState(false);
  const [confirmWeb, setConfirmWeb] = useState(false);
  const [steps, setSteps] = useState({
    stepOne: false,
    stepTwo: false,
    stepThree: false,
    stepFour: false,
  })
  

  return (
    <div>
      <Navbar />

      <div className="d-flex">
        <div className={styles.sidebarwidth}>
          <Sidebar />
        </div>
        <div className={styles.contentwidth}>
          <div className={styles.innerbody}>
            <div className={styles.containerborder}>
              { addNew === false && <div className={`${styles.addsite} row`}>
                <div className={`${styles.alignment} col-12`}>
                  <h3 className={styles.selectweb}>
                    Kindly Select Website Type
                  </h3>
                  <div className="d-flex justify-content-center">
                    <div className={styles.selectwebsite}>
                      <div className={styles.iconContainer}>
                        <Image
                          src="/wordpress.png"
                          alt="wordpress"
                          width={130}
                          height={50}
                        />
                        <GrStatusGood className={styles.icon} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <button
                      className={styles.btncontinue}
                      onClick={() => {
                        setAddNew(!addNew);
                      }}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div> }
              { addNew === true && addWeb === false &&
              <div className={`${styles.addsite} row`}>
                <div className={`${styles.alignment} col-12`}>
                  <h3 className={styles.selectweb}>
                    Type in your website URL
                  </h3>
                  <div className="d-flex justify-content-center">
                    <div className={styles.submitbox}>
                      <div className={styles.submitcontainer}>
                        <input className={styles.inputs} placeholder="www.example.com"/>
                        <BsArrowRightCircle className={styles.submiticon} onClick={() => {
                        setAddWeb(!addWeb);
                      }}/>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="d-flex justify-content-center">
                    <div className={styles.webwarning}>
                  <span className="text-danger">Note:</span> Do not include www., http:// or https:// and do not include sub-directory like example.com/blog1.
                    </div>
                    </div>
                    {/* <button
                      className={styles.btncontinue}
                      onClick={() => {
                        setAddNew(!addNew);
                      }}
                    >
                      Continue
                    </button> */}
                  </div>
                </div>
              </div>
              }
              {addWeb === true && confirmWeb === false &&
                <div className={`${styles.thirdsection} row`}>
                <div className={`${styles.alignment} col-12`}>
                  <h3 className={styles.selectweb}>
                    Type in your website URL two
                  </h3>
                  <div className="d-flex justify-content-center">
                    <div className={styles.submitboxx}>
                      <div className={styles.submitcontainer}>
                        <input className={styles.inputs} placeholder="www.example.com"/>
                        <BsArrowRightCircle className={styles.submiticon} onClick={() => {
                        setAddWeb(!addWeb);
                      }}/>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className={`${styles.webbox} row`}>
                    <div className={`${styles.webcontainer} col-6`}>
                        <div className={styles.webtexts}>
                            <div>URL:</div>
                            <div>https://egyptianstreets.com/</div>
                        </div>
                        <div className={styles.webtexts}>
                            <div>Title:</div>
                            <div>Egyptian Streets/</div>
                        </div>
                        <div className={styles.webtexts}>
                            <div>Description</div>
                            <div>Egypts leading independent media organization.</div>
                        </div>
                        <div className={styles.webtexts}>

                            <div>Homepage Snapshot:</div>
                        </div>
                       <div className="d-flex">
                        <Image src="/screenshot.png" alt='website' width={500} height={200} />
                       </div>
                    </div>
                    </div>
                    <button
                      className={styles.btnyes}
                      onClick={() => {
                        setConfirmWeb(!confirmWeb);
                      }}
                    >
                      Yes, this is my website
                    </button>
                  </div>
                </div>
              </div>
              }
               {confirmWeb === true && steps.stepOne === false &&
                <div className={`${styles.thirdsection} row`}>
                  <div className="pt-4"></div>
                  <div className={`${styles.progressbar}`}></div>
                  <div className={styles.progress}></div>
                  <div className={styles.progressbar}></div>
                  <div className={styles.progress}></div>
                  
                <div className={`${styles.alignment} col-12 pt-5`}>
                  <h3 className={styles.selectplugin}>
                  👍 Well-done, You are almost there.
                  </h3>
                  <div className="d-flex justify-content-center">
                    <div className={styles.submitboxx}>
                      <div className={styles.submitcontainer}>
                        <input className={styles.inputs} placeholder="www.example.com"/>
                        <span>copy</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className={`${styles.webbox} row`}>
                      <div className="col-12 d-flex justify-content-center  ">
                        <div>
                        <div className={styles.textwrapper}>
                        <div className={styles.steps}>Step 1:</div>
                        <div className={styles.step}>Login to your wordpressss dashboard</div>
                        </div>
                       
                        <Image src='/stepone.png' alt="linkcreator steps" width={500} height={250} /> 
                       
                        </div>
                      </div>
                    </div>
                    <button
                      className={styles.btnyes}
                      onClick={() => {
                        setSteps((prevState) => ({
                          ...prevState,
                          stepOne: !prevState.stepOne,
                        }));
                      }}
                    >
                      Next Step
                    </button>
                  </div>
                </div>
              </div>
              }
              { steps.stepOne === true && steps.stepTwo === false &&
                <div className={`${styles.thirdsection} row`}>
                  <div className="pt-4"></div>
                  <div className={`${styles.progressbar}`}></div>
                  <div className={styles.progress}></div>
                  <div className={styles.progressbar}></div>
                  <div className={styles.progress}></div>
                  
                <div className={`${styles.alignment} col-12 pt-5`}>
                  <h3 className={styles.selectplugin}>
                  👍 Well-done, You are almost there.
                  </h3>
                  <div className="d-flex justify-content-center">
                    <div className={styles.submitboxx}>
                      <div className={styles.submitcontainer}>
                        <input className={styles.inputs} placeholder="www.example.com"/>
                        <span>copy</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className={`${styles.webbox} row`}>
                      <div className="col-12 d-flex justify-content-center  ">
                        <div>
                        <div className={styles.textwrapper}>
                        <div className={styles.steps}>Step 2:</div>
                        <div className={styles.step}>Now search for our plugin (LinkCreatorAI), install and activate it.</div>
                        </div>
                       
                        <Image src='/steptwo.png' alt="linkcreator steps" width={500} height={250} /> 
                       
                        </div>
                      </div>
                    </div>
                    <button
                      className={styles.btnyes}
                      onClick={() => {
                        setSteps((prevState) => ({
                          ...prevState,
                          stepTwo: !prevState.stepTwo,
                        }));
                      }}
                    >
                      Next Steps
                    </button>
                  </div>
                </div>
              </div>
              }
               { steps.stepTwo === true && steps.stepThree === false &&
                <div className={`${styles.thirdsection} row`}>
                  <div className="pt-4"></div>
                  <div className={`${styles.progressbar}`}></div>
                  <div className={styles.progress}></div>
                  <div className={styles.progressbar}></div>
                  <div className={styles.progress}></div>
                  
                <div className={`${styles.alignment} col-12 pt-5`}>
                  <h3 className={styles.selectplugin}>
                  👍 Well-done, You are almost there.
                  </h3>
                  <div className="d-flex justify-content-center">
                    <div className={styles.submitboxx}>
                      <div className={styles.submitcontainer}>
                        <input className={styles.inputs} placeholder="www.example.com"/>
                        <span>copy</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className={`${styles.webbox} row`}>
                      <div className="col-12 d-flex justify-content-center  ">
                        <div>
                        <div className={styles.textwrapper}>
                        <div className={styles.steps}>Step 3:</div>
                        <div className={styles.step}>Kindly open the plugin and login with your LinkCreatorAI credentials.</div>
                        </div>
                       
                        <Image src='/stepthree.png' alt="linkcreator steps" width={500} height={250} /> 
                       
                        </div>
                      </div>
                    </div>
                    <button
                      className={styles.btnyes}
                      onClick={() => {
                        setSteps((prevState) => ({
                          ...prevState,
                          stepThree: !prevState.stepThree,
                        }));
                      }}
                    >
                      Next Steps
                    </button>
                  </div>
                </div>
              </div>
              }
               { steps.stepThree === true && steps.stepFour === false &&
                <div className={`${styles.thirdsection} row`}>
                  <div className="pt-4"></div>
                  <div className={`${styles.progressbar}`}></div>
                  <div className={styles.progress}></div>
                  <div className={styles.progressbar}></div>
                  <div className={styles.progress}></div>
                  
                <div className={`${styles.alignment} col-12 pt-5`}>
                  <h3 className={styles.selectplugin}>
                  👍 Well-done, You are almost there.
                  </h3>
                  <div className="d-flex justify-content-center">
                    <div className={styles.submitboxx}>
                      <div className={styles.submitcontainer}>
                        <input className={styles.inputs} placeholder="www.example.com"/>
                        <span>copy</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className={`${styles.webbox} row`}>
                      <div className="col-12 d-flex justify-content-center  ">
                        <div>
                        <div className={styles.textwrapper}>
                        <div className={styles.steps}>Step 3:</div>
                        <div className={styles.step}>Lastly kindly copy your API KEY above and paste in the API KEY field in the plugin. then click “Confirm”</div>
                        </div>
                       
                        <Image src='/stepthree.png' alt="linkcreator steps" width={500} height={250} /> 
                       
                        </div>
                      </div>
                    </div>
                    {/* <button
                      className={styles.btnyes}
                      type="button" data-toggle="modal" data-target="#exampleModalCenter"
                      
                    >
                      Finish
                    </button> */}
                    <div>
      {/* <Button variant="primary" onClick={handleShow}>
        Finish
      </Button> */}
        {/* <Button variant="primary" onClick={handleShow}>
        Finish
      </Button> */}
      <CustomModal />
    </div>
                  </div>
                </div>
              </div>
              }
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
