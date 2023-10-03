import Image from 'next/image'
import styles from '@/styles/Signin.module.css'
import Link from 'next/link'



export default function Signin() {
  return (
    <div>
    <div>
        <div className='row'>
            <div className={`${styles.formbody} col-12 col-md-6`}>
            <div className={styles.logosignin}>
            <Image src='/logo.png' width={50} height={50} alt='logo' />
            </div>
            <div>
                <form className={styles.formcontent}>
                    {/* <label htmlFor='email' className='d-flex justify-content-start'>Email</label> */}
                    <input placeholder='John Doe' name='email' className='form-control'/>
                    {/* <label htmlFor='password' className=''>Password</label> */}
                    <input placeholder='youremail@example.com' name='password' className='form-control my-3'/>
                    <input placeholder='********' name='password' className='form-control mb-3'/>
                    <input placeholder='********' name='password' className='form-control'/>
                    <div className={styles.btnsection}>
                    <button className={styles.btnsubmit}>Login</button>
                    </div>
                   
                </form>
            </div>
            <div className={styles.socialicons}>
            <div className={styles.socials}>
            <p className='d-flex justify-content-center'>or Login</p>
            <div className='d-flex justify-content-center'>
                <div className={styles.socialbox}>
                <Image src='/google.png' width={30} height={30} alt='google' priority />
                </div>
                <div className={styles.fcbkbox}>
            <Image src='/facebook.png' width={30} height={30} alt='facebook' priority />
            </div>
            <div className={styles.socialbox}>
            <Image src='/apple.png' width={30} height={30} alt='apple' priority />
            </div>
            
            </div>
            </div>
            </div>
            <div className={styles.noaccount}>
            <span>Dont have an account? Sign Up <Link href='/signin'>Here</Link></span>
            </div>
            </div>
            {/* HERO IMAGE */}
            <div className={`${styles.heroimg} col-12 col-md-6`}>
            <Image src='/heroimage.png' width={300} height={300} alt='heroimage' className={styles.heroimage} priority />
            </div>
        </div>
    </div>
</div>
  )
}
