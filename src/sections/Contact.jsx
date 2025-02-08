import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const formRef = useRef();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = ({target: {name, value}}) => {
        setForm({ ...form, [name]: value });
    };


    //service_3zwwbhl
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
          await  emailjs.send(
            'service_3zwwbhl',
            'template_8qv9g0e',
            {
                from_name: form.name,
                to_name: 'BlackSheep',
                from_email: form.email,
                to_email: 'adelin.farcas01@gmail.com',
                message: form.message,
            },
             'yffUEfRiaKXMTHdXk'
          );

          setLoading(false);

          alert('Message sent');

          setForm({
              name: '',
              email: '',
              message: '',
          })
        } catch (error) {
            setLoading(false);

            console.log(error);

            alert('Something went wrong');
        }


    };



    return (
        <section className="c-space my-20">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="Terminal background" className="absolute inset-0 min-h-screen" />
                <div className="contact-container">
                    <h3 className="head-text">Let's talk</h3>
                    <p className="text-lg text-white-600 mt-3">Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help.</p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                       <label className="space-y-3">
                           <span className="field-label">
                               Full Name
                           </span>

                           <input
                           type="text"
                           name="name"
                           value={form.name}
                           onChange={handleChange}
                           placeholder="Black Sheep"
                           required
                           className="field-input"
                           />

                       </label>

                        <label className="space-y-3">
                           <span className="field-label">
                               Email
                           </span>

                           <input
                           type="email"
                           name="email"
                           value={form.email}
                           onChange={handleChange}
                           placeholder="blacksheep@gmail.com"
                           required
                           className="field-input"
                           />

                       </label>

                        <label className="space-y-3">
                           <span className="field-label">
                               Your message
                           </span>

                           <textarea
                           name="message"
                           value={form.message}
                           onChange={handleChange}
                           placeholder="Hi, I wanna give you a job..."
                           required
                           rows={5}
                           className="field-input"
                           />

                       </label>

                       <button type="submit" className="field-btn" disabled={loading}>
                           {loading ? 'Sending...' : 'Send Message'}
                           <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                       </button>

                    </form>

                </div>
            </div>
            <h3 className="head-text">Contact Me</h3>
        </section>
    )
}
export default Contact
