import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        props.setFormSubmitted(true),
        (result) => console.log(result.text),
        (error) => console.log(error.text)
      );

    e.target.reset();
  };

  return (
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <label>name</label>
      <input type="text" name="user_name" required />
      <label>email</label>
      <input type="email" name="user_email" required />
      <label>message</label>
      <textarea name="message" required />
      <input type="submit" value="Send" />
    </form>
  );
}
