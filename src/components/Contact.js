import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [ismessageSend, setIsMessageSend] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_sj603ma", "template_ali53qu", form.current, {
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          setIsMessageSend(true);
          setMessage("Email sent successfully!");
          setTimeout(() => {
            setMessage("");
          }, 3000);
          form.current.reset();
        },
        (error) => {
          setIsMessageSend(false);
          setMessage("Failed to send email. Please try again.");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className=" py-20">
      <div className="w-full xl:w-[1140px] px-4 xl:px-0 xl:mx-auto gap-7 h-full">
        <div className="flex justify-between space-x-4 my-5">
          <a
            href="https://www.linkedin.com/in/suganya-anbazhagan-6669301a4/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue text-4xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/suganya-muthusamy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 text-4xl"
          >
            <FaGithub />
          </a>
        </div>
        <div className="my-5 flex flex-col items-center">
          <h2 className="text-2xl font-bold my-5 text-blue">Contact Me</h2>
          <p className="mb-10 text-lg text-gray-600">
            Send me an email by submitting the form below and I will get back to
            you as soon as possible!
          </p>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col w-full sm:w-[450px] bg-lighter-green p-5 md:p-10 rounded shadow"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="my-2 p-2"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="my-2 p-2"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="my-2 p-2"
            />
            <button
              type="submit"
              className="mt-5 py-2 px-4 w-fit bg-darkGreen text-lg text-white rounded"
            >
              Send Message
            </button>

            <div className="mt-5">
              {ismessageSend ? (
                <p className="text-green-700">{message}</p>
              ) : (
                <p className="text-red-700">{message}</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
