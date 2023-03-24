import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactMe.css";

export const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_snnghqh",
        "template_e5vko04",
        form.current,
        "vY9DjyxNZ8mrmRIJ5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          alert("something went wrong");
        }
      );

    document.getElementById("contact-form").style.display = "none";
    document.getElementById("success-message").style.display = "inline";
    document.getElementById("contact-me-header").style.display = "none";
  };

  return (
    <div id="contact-me-container">
      <h1 id="contact-me-header">Contact Me</h1>
      <form id="contact-form" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea rows="20" cols="50" name="message" />
        <input type="submit" value="Send" />
      </form>
      <div id="success-message">
        <h4>
          Thank you for reaching out! I will get back with you as soon as I am
          able!
        </h4>
      </div>
    </div>
  );
};

export default ContactMe;
