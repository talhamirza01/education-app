import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b7ebc8f9-d06a-4fc9-9b5c-f6dc11a7fb3c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a Message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to contact us at any time whenever you want we also in contact with you</p>
      <ul>
        <li><img src={mail_icon} alt="" />Edustify@gmail.com</li>
        <li><img src={phone_icon} alt="" />+1-4569843943258</li>
        <li><img src={location_icon} alt="" />77 mathew,s Bridge United States <br /> USA </li>
      </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter Your Name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter Your Contact Number' required/>
            <label>Write Your Message Here</label>
            <textarea name="message" rows="10" placeholder='Enter Your Message'></textarea>
            <button type='sumbit' className='btn2'>Sumbit Now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
