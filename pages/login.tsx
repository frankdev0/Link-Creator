import Image from 'next/image'
import styles from '@/styles/Signin.module.css'
import Link from 'next/link'



export default function Login() {
  return (
    <>
    

      <div className='row'>
  <div className={` col-12 col-md-6`}>
  <div className={styles.logo}>
        <Image src='/logo.png' width={50} height={50} alt='logo' />
      </div>
    <div className={styles.signinbody}>
      <form className={styles.fullWidthForm}>
        <div className='form-group'>
          <input
            name='name'
            className={`${styles.formcont} form-contro`}
            placeholder='youremail@example.com'
          />
        </div>
        <div className='form-group'>
          <input
            name='name'
            className={`${styles.forminput} form-control`}
            placeholder='********'
          />
        </div>
        
       
        
        <div>
      <button className={styles.btnsubmit}>Login</button>
      </div>
      </form>
      
     
    </div>
    <div className='py-2'>
      <p className='d-flex justify-content-center'>or sign up with</p>
      <div className='d-flex justify-content-center'>
        <div className={styles.socialbox}>
        <Image src='/google.png' width={30} height={30} alt='google' priority />
        </div>
        <div className={styles.fcbkbox}>
      <Image src='/facebook.png' width={30} height={30} alt='facebook' priority className='mx-4'/>
      </div>
      <div className={styles.socialbox}>
      <Image src='/apple.png' width={30} height={30} alt='apple' priority />
      </div>
      </div>
    </div>
  </div>
  <div className='col-12 col-md-6'>
    <Image src='/heroimage.png' width={300} height={300} alt='heroimage' className={styles.heroimage} priority />
  </div>
  <div>
    <span>Dont have an account? Sign Up <Link href='/signin'>Here</Link></span>
  </div>
</div>

    </>
  )
}
