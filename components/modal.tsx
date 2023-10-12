import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import styles from "@/styles/Newsite.module.css";


export default function CustomModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button className={`${styles.btncontinue} mt-2`} onClick={handleShow}>
        Finish
      </Button>

      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton>
          
        </Modal.Header> */}
        <Modal.Title className='d-flex justify-content-center pt-3'>
            <Image src='/good.png' alt='green tick' height={70} width={70} />
          </Modal.Title>
        <Modal.Body>
          <h3 className={styles.selectweb}>Awesome!</h3>
          <div className={styles.modaltexts}>You just added your first website, Click “View Pages” to see it.</div>
          <div className='d-flex justify-content-center'>
          <div className={styles.modalsubtext}> <span className='text-danger px-1'>Note:</span>your website will take around of 10 to 30 minutes to propagate your website.</div>

          </div>
        </Modal.Body>
        <div className='d-flex justify-content-center py-3'>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button className={`${styles.btncontinue} d-flex justify-content-center align-items-center`}>
            View pages
          </Button>
        </div>
      </Modal>
    </div>
  );
}
