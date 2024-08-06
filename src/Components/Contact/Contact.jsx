import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import images from '../../assets/images.png'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "77a53133-99f9-4ac9-8d97-7db73b3adb60");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };




  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
        </div>
        <div className="contact-section">  
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I'm currently available to  take on new projects,so feel free send me a message about anything that you want me to work on.You can contact anytime.</p>
            <div className="contact-details">
                <div className="contact-detail">
                     <img src={mail_icon} alt=""/> <p>ayodyathathsarani2001@gmail.com</p>
                </div>
                <div className="contact-detail">
                     <img src={call_icon} alt=""/><p>+94 714755098</p>
                </div>
                <div className="contact-detail">
                       <img className='contact-linkedin' src={images} alt="LinkedIn" />
                         <p><a className='hero-link' href="https://www.linkedin.com/in/ayodya-thathsarani/">LinkedIn</a></p>    
                 </div>

            </div>
            </div>
            <form onSubmit={onSubmit}  className='contact-right'>
              <label htmlFor=''>Your Name</label>
              <input type='text' placeholder='Enter Your Name' name='name'></input>
              <label htmlFor=''>Your Email</label>
              <input type='text' placeholder='Enter Your Email' name='email'></input>
              <label htmlFor=''>Write Your Message</label>
              <textarea name='message' row='10' placeholder='Enter Your Message'></textarea>
              <button type='submit' className="contact-submit">Submit Now</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
