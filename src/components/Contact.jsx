import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { FaCircleCheck } from 'react-icons/fa6';
import { ThreeDots } from 'react-loader-spinner';
function Contact({ isOn}) {
  const[messagesent,setMessageSent] = useState(false)
  const [details, setDetails] = useState({ firstname: '', lastname: '', email: '', phone: '', subject: '', message: ''});
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://portfoliobackend-2he5.onrender.com/api/v1/sendmessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "firstname": details.firstname,
          "lastname": details.lastname,
          "email": details.email,
          "phone": details.phone,
          "subject": details.subject,
          "message": details.message
        }),
      });
  
      if (!res.ok) {
        throw new Error('Failed to send message. Please try again later.');
      }
  
      // Check if response body is empty
      const text = await res.text();
      if (!text) {
        throw new Error('Empty response from the server.');
      }
  
      // Parse JSON
      const json = JSON.parse(text);
  
      if (json.status) {
        toast.success('Message Sent Successfully');
        setMessageSent(true)
      }
      console.log(json);
    } catch (error) {
      console.error(error);
      // Handle error (e.g., show error message to the user)
    }
  };
  


  function handleChange(e){
    setDetails({...details, [e.target.name]: e.target.value})
  }

  return (
    <div className={`w-full h-screen  flex justify-center items-center ${isOn ? 'bg-gray-900' : 'bg-white'}`}>
      <section className="w-full lg:w-11/12 xl:w-10/12 h-4/5 flex justify-center items-start">
        <div className=" p-5 w-full lg:w-11/12 xl:w-10/12 flex flex-col md:gap-5 lg:gap-5 xl:gap-5 gap-2">
          <h2 className={`  text-3xl tracking-wider md:text-3xl lg:text-4xl font-bold flex font-[heading] justify-start items-center ${isOn ? 'text-white' : 'text-gray-950'}`}>Let's build a thing</h2>
          {
            !messagesent ? (
              <form
            onSubmit={(e) => {handleSubmit(e)}}
            data-portal-id="6847886"
            name="Contact Chase Ohlson"
            loading="false"
            className="flex flex-col md:gap-5 lg:gap-5 xl:gap-5 gap-2 font-[textfont]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 lg:gap-5 xl:gap-5">
              <input
                name="firstname"
                type="text"
                placeholder="First Name *"
                required
                value={details.firstname}
                onChange={handleChange}
                className={`h-14 border placeholder-black ${!isOn ? ' border-stone-950 p-4 text-black' : ' border-stone-50 p-4 text-black'}`}
              />
              <input
                name="lastname"
                type="text"
                placeholder="Last Name *"
                required
                value={details.lastname}
                onChange={handleChange}
                className={`h-14 border placeholder-black ${!isOn ? ' border-stone-950 p-4 text-black' : ' border-stone-50 p-4 text-black'}`}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 lg:gap-5 xl:gap-5 gap-2">
              <input
                name="email"
                type="email"
                placeholder="Email *"
                required
                value={details.email}
                onChange={handleChange}
                className={`h-14 border placeholder-black ${!isOn ? ' border-stone-950 p-4 text-black' : ' border-stone-50 p-4 text-black'}`}
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone"
                required
                value={details.phone}
                onChange={handleChange}
                className={`h-14 border placeholder-black ${!isOn ? ' border-stone-950 p-4 text-black' : ' border-stone-50 p-4 text-black'}`}
              />
            </div>
            <input
              name="subject"
              type="subject"
              placeholder="Subject *"
              required
              value={details.subject}
              onChange={handleChange}
              className={`h-14 border border-stone-950 p-4 text-black placeholder-black ${!isOn ? ' border-stone-950 p-4 text-black' : ' border-stone-50 p-4 text-black'}`}
            />
            <textarea
              name="message"
              type="text"
              placeholder="Message *"
              required
              value={details.message}
              onChange={handleChange}
              className={`h-36 border border-stone-950 p-4 text-black placeholder-black ${!isOn ? ' border-stone-950 p-4 text-black' : ' border-stone-50 p-4 text-black'}`}
            ></textarea>
            <motion.button 
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            name="submit" type="submit" className={`h-14 border  ${!isOn ? ' border-stone-950 p-4 text-black' : ' border-stone-50 p-4 text-white'}`}>
              Send It 
            </motion.button>
          </form>
            ) : (<div className=' w-auto flex justify-center items-end text-3xl font-bold mt-48 ml-16'><h1>Message Sent Successfully</h1><span className='text-green-700 mr-12 h-8 w-8'><FaCircleCheck /></span></div>)
          }
          
        </div>
      </section>
    </div>
  );
}

export default Contact;
