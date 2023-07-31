import React, { useState } from "react";
import "./Certificate.css";
import IMG1 from '../../assets/coursera.jpg'
import IMG2 from '../../assets/CISCO.jpg'
import IMG3 from '../../assets/essaywriting.jpg'
import CCNA from '../../assets/ccna_page-0001.jpg'
import ESSAY from '../../assets/essay_cert.jpg'
import DIGIT from '../../assets/Coursera_certificate.jpg'
import {AiOutlineClose} from 'react-icons/ai'


const data=[
  {
    id: 1,
    image: IMG1,
    title: 'Attract and Engage Customers with Digital Marketing',
    view: DIGIT
  },
  {
    id: 2,
    image: IMG2,
    title: 'Introduction to Networks',
    view: CCNA
  },
  {
    id: 3,
    image: IMG3,
    title: 'All India Essay Writing Competition',
    view: ESSAY
  }
]




export default function Modal() {
    const [modal, setModal] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState(null);
  
    const toggleModal = () => {
      setModal(!modal);
      setSelectedCertificate(null); // Reset selected certificate when closing the modal
    };
  
    const handleCertificateClick = (certificateId) => {
      const selectedCert = data.find((cert) => cert.id === certificateId);
      setSelectedCertificate(selectedCert);
      setModal(true); // Open the modal when a certificate is clicked
    };
  
    if (modal) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  
    return (
      <>
        <section id="certificates">
          <h5>My Recent Certifications</h5>
          <h2>Certificates</h2>
  
          <div className="container certificate_container">
            {data.map(({ id, image, title }) => {
              return (
                <article key={id} className="certificate_item">
                  <div className="certificate_item_image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="certificate_item-cta">
                    <button
                      onClick={() => handleCertificateClick(id)} 
                      className="btn"
                      target="_blank"
                    >
                      View
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
  
        {modal && selectedCertificate && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              
                {/* <h2>{selectedCertificate.title}</h2> */}
                {/* <iframe src={selectedCertificate.view}></iframe> */}
                <img src={selectedCertificate.view} alt="Image of the certificate" />
                <button className="close-modal"  onClick={toggleModal}>
                <AiOutlineClose/>
                </button>
              
            </div>
          </div>
        )}
      </>
    );
  }
  