import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';

// template_7lonoqd
// service_nva9h5e
// _koKHD575eyOppOT-

const Contact = () => {
    const Result = () =>{
        return(
            <p className="form__sent">
                Thanks for the message! I look forward to speaking with you.
            </p>
        )
    }

    const [result, showResult] = useState(false)

    const form = useRef()

    const sendEmail = (event) =>{
        event.preventDefault()
        emailjs.sendForm('service_nva9h5e', 'template_7lonoqd', form.current, '_koKHD575eyOppOT-')
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error.text)
        })
        event.target.reset()
        showResult(true)
    }
  return (
    <>
        <section id='contact'>
            <div className="container">
                <div className="row">
                    <h1 className="section__title" data-aos="fade-up">
                        Get in <b className="blue">Touch!</b>
                    </h1>
                    <div className="contact__wrapper"  data-aos="fade-up" data-aos-delay="400">
                        <form ref={form} onSubmit={sendEmail} id="contact__form">
                            <input required type="text" placeholder='Name' className="form__name" name='user_name' />
                            <input required type="email" placeholder='Email' className="form__email" name='user_email' />
                            <textarea required type="text" placeholder='Message' className='form__message' name="message" ></textarea>
                            <button type='submit' value="Send" id="contact__submit" className="form__submit">
                                Send it my way!
                            </button>
                            <div className="form__sent--wrapper">
                                {result ? <Result/> : null}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact
