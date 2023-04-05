import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {

    /*=========== Email.js =============*/
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_u7n22x5', 
      'template_h1m94uc', 
      form.current, 
      'UOqBtEjqTcf0Uq-Rx')
      e.target.reset()  
    };

    return(
        <section className='contact section' id='contact'>
            <h2 className='section__title'>Get In Touch</h2>
            <span  className='section__subtitle'>Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Say Hi</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>
                            
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">reyabdul@gmail.com<br/></span>

                            <a href="mailto:reyabdul@gmail.com" className="contact__button">
                                Email me
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                
                        <div className="contact__card">
                            <i className="bx bxl-linkedin contact__card-icon"></i>
                            
                            <h3 className="contact__card-title">LinkedIn</h3>
                            <span className="contact__card-data">
                                Rey Abdul <br/>
                            </span>

                            <a href="https://www.linkedin.com/in/reyabdul/" className="contact__button">
                                Link with me
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bx-calendar contact__card-icon"></i>
                            
                            <h3 className="contact__card-title">Calendly</h3>
                            <span className="contact__card-data">
                                15-min chat<br/>
                            </span>

                            <a href="https://calendly.com/rey_abdul/30min" className="contact__button">
                                Book a chat with me<br/>
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                    </div>
                    </div>


                    <div className="contact__content">
                        <h3 className="contact__title">
                            Keep In Touch!
                        </h3>

                        <form ref={form} onSubmit={sendEmail} className="contact__form">
                            <div className="contact__form-div">
                                <label className="contact__form-tag">Name</label>
                                <input type='text' name='name' 
                                className='contact__form-input' 
                                placeholder='Name' />
                            </div>

                            <div className="contact__form-div">
                                <label className="contact__form-tag">LinkedIn</label>
                                <input type='email' name='email'  className='contact__form-input' placeholder='Email' />
                            </div>

                            <div className="contact__form-div contact__form-area">
                                <label className="contact__form-tag">Message</label>
                                <textarea name="message" cols="30" rows="10" className="contact__form-input" placeholder='Message'></textarea>
                            </div>

                            <button className="button button--flex">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
        </section>
    )

};

export default Contact;