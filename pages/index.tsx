import Head from 'next/head'
import Image from 'next/image'
// import styles from '@/styles/Home.module.css'

import styles from "@/styles/Signin.module.css";
import Link from "next/link";
import {
  HiOutlineLockClosed,
  HiOutlineLockOpen,
  HiAtSymbol,
} from "react-icons/hi";
import { useState } from "react";



export default function Home() {

  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <>
      <Head>
        <title>Link Creator AI</title>
        <meta name="description" content="Linkcreate AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.bgimg}>
      <div className={styles.container}>
        <div className={`${styles.formContainer} row`}>
          <div className={`${styles.formbody} col-12 col-md-6`}>
            <div className={styles.logosignin}>
              <Image src="/logo.png" width={50} height={50} alt="logo" />
            </div>
            <div>
              <form className={styles.formcontent}>
                <div className={styles.inputContainer}>
                  <label htmlFor="email" className={styles.labels}>
                    Email:
                  </label>
                  <div className={styles.passwordInputContainer}>
                    <input
                      type="text"
                      placeholder="youremail@example.com"
                      name="password"
                      className={`${styles.passwordinput} form-contol`}
                    />
                    <div className={styles.passwordIconContainer}>
                      <HiAtSymbol />
                    </div>
                  </div>
                </div>
                <div className={styles.inputContainer}>
                  <label htmlFor="password" className={styles.labels}>
                    Password:
                  </label>
                  <div className={styles.passwordInputContainer}>
                    <input
                      type={passwordVisible ? "text" : "password"}
                      placeholder="********"
                      name="password"
                      className={`${styles.passwordinput} form-contol`}
                    />
                    <div
                      className={styles.passwordIconContainer}
                      onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                      {passwordVisible ? (
                        <HiOutlineLockOpen />
                      ) : (
                        <HiOutlineLockClosed />
                      )}
                    </div>
                  </div>
                </div>

                <div className={styles.btnsection}>
                <Link href='./dashboard'>
                  <button className={styles.btnsubmit}>Login</button>
                  </Link>
                </div>
              </form>
            </div>
            <div className={styles.socialicons}>
              <div className={styles.socials}>
                <p className={styles.optional}>or Login</p>
                <div className="d-flex justify-content-center">
                  <div className={styles.socialbox}>
                    <Image
                      src="/google.png"
                      width={30}
                      height={30}
                      alt="google"
                      priority
                    />
                  </div>
                  <div className={styles.fcbkbox}>
                    <Image
                      src="/facebook.png"
                      width={30}
                      height={30}
                      alt="facebook"
                      priority
                    />
                  </div>
                  <div className={styles.socialbox}>
                    <Image
                      src="/apple.png"
                      width={30}
                      height={30}
                      alt="apple"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.noaccount}>
              <span className={styles.noaccountt}>
                Dont have an account? Sign Up{" "}
                <Link href="/signin" className={styles.linkto}>
                  Here
                </Link>
              </span>
            </div>
          </div>
          {/* HERO IMAGE */}
          <div className={`${styles.heroimg} col-12 col-md-6`}>
            <div className={styles.heroImageContainer}>
              <Image
                src="/heroimage.png"
                width={300}
                height={300}
                alt="heroimage"
                className={styles.heroimage}
                priority
              />
              <div className={styles.overlayText}>
                <h3>Welcome Back</h3>
                <p>
                  An AI advanced software that automatically assists website
                  owners and users to promote their articles and site content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
