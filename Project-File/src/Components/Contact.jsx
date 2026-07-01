import { useState } from "react";
import mail_icon from "../Assets/mail-icon.png";
import phone_icon from "../Assets/phone-icon.png";
import location_icon from "../Assets/location-icon.png";
import white_arrow from "../Assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    setResult("Submitting your inquiry...");

    const formData = new FormData(e.target);

    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    );

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setResult(
          "Your inquiry has been submitted successfully. Our team will contact you shortly."
        );
        e.target.reset();
      } else {
        setResult(
          "We were unable to submit your inquiry. Please try again later."
        );
      }
    } catch (error) {
      setResult(
        "An unexpected error occurred while submitting your inquiry. Please try again later."
      );
    }
  };

  return (
    <section
      className="w-full px-5 sm:px-8 md:px-12 lg:px-[10%] py-10 md:py-16"
      id="contact"
    >
      <div className="mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">

        {/* Contact Information */}
        <div className="w-full lg:w-[45%]">
          <h3 className="mb-5 text-2xl sm:text-3xl md:text-4xl font-bold text-[#212EA0] text-center lg:text-left">
            Get in Touch
          </h3>

          <p className="mb-8 text-sm sm:text-base leading-7 text-gray-600 text-center lg:text-left">
            We are committed to providing timely assistance and answering any
            questions you may have regarding our academic programs, admissions,
            campus facilities, or other services. Please complete the contact
            form, and a member of our team will respond to your inquiry as soon
            as possible.
          </p>

          <ul className="space-y-5 text-sm sm:text-base">
            <li className="flex items-center gap-3">
              <img src={mail_icon} alt="Email" className="w-5 sm:w-6" />
              <span>admissions@edusity.edu</span>
            </li>

            <li className="flex items-center gap-3">
              <img src={phone_icon} alt="Phone" className="w-5 sm:w-6" />
              <span>+1 (555) 123-4567</span>
            </li>

            <li className="flex items-start gap-3">
              <img
                src={location_icon}
                alt="Location"
                className="w-5 sm:w-6 mt-1"
              />
              <span>
                123 University Avenue
                <br />
                New York, NY 10001
                <br />
                United States
              </span>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-[50%]">
          <form onSubmit={onSubmit} className="space-y-5">

            <div>
              <label className="font-medium text-gray-700 text-sm sm:text-base">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your full name"
                className="mt-2 w-full rounded bg-[#EBECFE] p-3 sm:p-4 text-sm sm:text-base outline-none"
              />
            </div>

            <div>
              <label className="font-medium text-gray-700 text-sm sm:text-base">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="Enter your phone number"
                className="mt-2 w-full rounded bg-[#EBECFE] p-3 sm:p-4 text-sm sm:text-base outline-none"
              />
            </div>

            <div>
              <label className="font-medium text-gray-700 text-sm sm:text-base">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email address"
                className="mt-2 w-full rounded bg-[#EBECFE] p-3 sm:p-4 text-sm sm:text-base outline-none"
              />
            </div>

            <div>
              <label className="font-medium text-gray-700 text-sm sm:text-base">
                Message
              </label>
              <textarea
                name="message"
                rows="6"
                required
                placeholder="Please provide details about your inquiry."
                className="mt-2 w-full resize-none rounded bg-[#EBECFE] p-3 sm:p-4 text-sm sm:text-base outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-[#212EA0] px-6 sm:px-8 py-3 text-sm sm:text-base text-white transition-all duration-300 hover:bg-[#1b2587]"
            >
              Submit Inquiry
              <img
                src={white_arrow}
                alt="Arrow"
                className="w-4 sm:w-5"
              />
            </button>

            {result && (
              <p className="mt-3 text-sm sm:text-base font-medium text-[#212EA0]">
                {result}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;