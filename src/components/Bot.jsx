import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { LuSend } from 'react-icons/lu';
import { SiChatbot } from 'react-icons/si';

function Bot({isOn}) {
    const [isOpen, setIsOpen] = useState(false);
    const [userInput, setUserInput] = useState('');
    const [botReply, setBotReply] = useState([]);
    const [chat, setChat] = useState([]);
    const inputRef = useRef(null);

    // Convert Buffer data to Uint8Array
    const uint8Array = new Uint8Array(botReply.data);

    // Create a TextDecoder instance
    const decoder = new TextDecoder('ascii');

    // Decode the Uint8Array to text
    const text = decoder.decode(uint8Array);

    console.log(chat);
    useEffect(()=>{

        setChat([...chat, { text: text }]);
    },[botReply])

    const handleBotChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleClick = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleSendBtn = async (e) => {
        e.preventDefault();

        console.log('send button clicked');
        await fetchBotReply(userInput); 

        // Clear input field
        inputRef.current.value = '';
    };

    const fetchBotReply = async (userInput) => {
        try {
            const res = await fetch('https://chatbot-backend-1-uwvp.onrender.com/api/v1/getresult', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ input: userInput })
            });

            if (!res.ok) {
                throw new Error('Failed to fetch bot reply');
            }
            console.log("response ", res)
            const data = await res.json();
            console.log("data ", data)
            setBotReply(data.message); // Update botReply state with the received message
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='fixed z-10 right-5 bottom-3 sm:right-10 sm:bottom-10'>
            {!isOpen && (
                <motion.button whileHover={{scale:1.2}} whileTap={{scale:0.9}} className='flex justify-center items-center ' onClick={handleClick}>
                    <SiChatbot  className={`text-5xl ${isOn ? 'text-white' : ' text-black'}`}/>
                </motion.button>
            )}
            {isOpen && (
                <motion.div
                    layout
                    initial={{ width: 0, height: 0 }}
                    animate={{ width: 340, height: 500 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20, ease: 'easeInOut' }}
                    className=' bg-slate-100  relative flex flex-col justify-end '
                >
                    <div className='bg-white h-11 flex justify-between items-center'>
                        <h1 className=' ml-7 text-2xl'>Chat with Byte</h1>
                        <button className='bg-slate-200 w-8 h-8 rounded-full flex justify-center items-center' onClick={handleClose}>
                            <IoClose className='text-xl' />
                        </button>
                    </div>
                    <div className='w-full h-4/5  flex justify-center items-end'>
                        <div className='h-auto w-full max-h-full overflow-y-auto flex flex-col gap-5 py-3'>
                            {/* Bot messages */}
                            <div className='flex flex-col gap-2'>
                                {/* Bot greeting message */}
                                <p className='ml-3 bg-[#fc632c] h-9 text-white w-48 text-md flex justify-center items-center rounded-bl-full rounded-r-full'>
                                    Hi! How can I help you?
                                </p>

                                {/* User input message */}
                                
                                <p className='ml-32 bg-[#fc632c] h-auto w-48 text-white text-sm flex justify-center items-center rounded-l-full rounded-tr-full'>
                                    <span className=' max-w-full h-auto'>{userInput}</span>
                                </p>

                                {/* Bot response */}
                                {
                                    chat.slice(1).map((chat, index) => (<p key={index} className='ml-3 p-2 bg-[#fc632c] h-auto text-white w-52 text-sm flex justify-center items-center text-start overflow-hidden'>
                                    <span className='max-w-full h-auto'>{chat.text}</span>
                                </p>))
                                }
                                
                            </div>
                        </div>
                    </div>

                    <form className='w-full h-14 flex justify-around items-center  bottom-0'>
                        <input ref={inputRef} className=' ml-2 w-9/12 h-10 rounded-full p-5' type='text' placeholder='Type your message here' onChange={handleBotChange} />
                        <button onClick={(e) => handleSendBtn(e)} className='w-10 bg-[#fc632c] h-10 rounded-full  text-2xl flex justify-center items-center mr-2'>
                            <LuSend />
                        </button>
                    </form>
                </motion.div>
            )}
        </div>
    );
}

export default Bot;
