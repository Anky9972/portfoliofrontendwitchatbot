import React from 'react';
import img1 from '../images/Screenshot 2024-05-20 160151.png'
import img2 from '../images/Screenshot 2024-05-20 160333.png'
import img3 from '../images/palette1.png'
import img4 from '../images/palette2.png'
function Projects() {
  return (
    <div className='w-full h-full bg-neutral-700 flex flex-col  text-white p-2'>
      <h1 className='text-4xl lg:text-4xl xl:text-5xl uppercase font-extrabold ml-5 font-[heading]'>Projects</h1>
      <div className='w-full h-screen flex justify-center'>
        <section className='w-full h-full flex'>
          <div className='w-full md:w-2/5 lg:w-1/2 xl:w-1/2  p-4 h-full flex justify-center items-center'>
            <div className='h-full w-full flex flex-col justify-end px-3  '>
              <div className='w-full h-20 flex justify-start items-center'>
                <h1 className='text-xl w-full md:2xl  xl:text-4xl  uppercase font-extrabold'>Color Palette Generator</h1>
              </div>
              <div className='w-full h-5/6 flex flex-col items-center gap-4 md:mt-7'>
                <div className='md:w-4/5'>Developed a user-friendly color palette generator that can generate thousands of color palettes. Implemented intuitive features such as color selection, palette preview, and export options, enhancing the user experience and functionality of the tool. Utilized modern design principles to ensure responsiveness across various devices and	sign-in and sign-up authentication for users.
</div>
                <div className='w-4/5 flex flex-col gap-5'>
                  <h1 className='text-lg font-bold'>Development Tools</h1>
                  <ul className='px-7 flex flex-col gap-2 list-disc'>
                    <li>Tailwind CSS</li>
                    <li>JavaScript</li>
                    <li>ReactJs</li>
                    <li>Framer motion</li>
                    <li>NodeJs</li>
                    <li>ExpressJs</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
                <div className='w-full md:w-4/5 xl:w-4/5 lg:w-4/5 mt-5 bg-green-300'>
                  <button className='w-full md:w-full h-12 md:h-16 bg-red-500 text-lg font-bold uppercase'><a href="https://portfolio-vivek-gaur.vercel.app/">View project</a></button>
                </div>
              </div>
            </div>
          </div>
          <div className='md:w-3/5 hidden md:block h-full p-10'>
            <img src={img3} alt="error" className='md:mt-20'/>
            {/* <img src={img4} alt="error" /> */}
          </div>
        </section>
      </div>
      <div className='w-full h-full flex justify-center mt-10 '>
        <section className='w-full h-full flex'>
          <div className='w-full md:w-2/5 lg:w-1/2 xl:w-1/2  p-5 h-full flex justify-center items-center'>
            <div className='h-full w-full flex flex-col justify-end px-3  '>
              <div className='w-full h-20 flex justify-start items-center '>
                <h1 className='text-2xl xl:text-4xl  uppercase font-extrabold'>Smart Farming</h1>
              </div>
              <div className='w-full h-5/6 flex flex-col items-center gap-4 md:mt-7'>
                <div className='md:w-4/5'>Our smart farming project, built on Flask and trained with Random Forest Classifier achieving 99% accuracy, revolutionizes agriculture. Predicting crop health, pest detection, and yield estimation, it optimizes farming practices. Integrating Gemini API for chatbot assistance and Google Translator for multilingual support enhances accessibility. With real-time guidance, farmers mitigate risks, increase yield, and reduce costs. The project fosters sustainability through data-driven insights, empowering farmers for a prosperous future.
</div>
                <div className='w-4/5 flex flex-col gap-5'>
                  <h1 className='text-lg font-bold'>Development Tools</h1>
                  <ul className='px-7 flex flex-col gap-2 list-disc'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Flask</li>
                    <li>Jinja2</li>
                    <li>Scikit Learn</li>
                    <li>Random Forest Classifier(ML Algorithm)</li>
                  </ul>
                </div>
                <div className='w-full md:w-4/5 xl:w-4/5 lg:w-4/5 mt-5 bg-green-300'>
                  <button className='w-full md:w-full h-12 md:h-16 bg-red-500 text-lg font-bold uppercase'><a href="https://github.com/Anky9972/AI-ENABLED_AGRICULTURE">View project</a></button>
                </div>
              </div>
            </div>
          </div>
          <div className='md:w-3/5 hidden md:block h-full p-10'>
            <img src={img1} alt="error" />
            <img src={img2} alt="error" />
          </div>
        </section>
      </div>
      {/* <div className='w-full h-screen flex justify-center'>
        <section className='w-full md:w-full h-full flex'>
          <div className='w-full md:w-3/5 h-full flex justify-center items-center'>
            <div className='h-full w-full flex flex-col justify-end px-3  '>
              <div className='w-full h-20 flex justify-start items-center'>
                <h1 className='text-2xl xl:text-5xl  uppercase font-extrabold'>Project Name</h1>
              </div>
              <div className='w-full h-5/6 flex flex-col items-center gap-4 mt-7'>
                <div className='w-4/5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius numquam illum fugiat omnis cum earum quos eos est! Soluta nulla !</div>
                <div className='w-4/5 flex flex-col gap-5'>
                  <h1 className='text-lg font-bold'>Development Tools</h1>
                  <ul className='px-7 flex flex-col gap-2'>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                  </ul>
                </div>
                <div className='w-full md:w-4/5 xl:w-4/5 lg:w-4/5 mt-5 bg-green-300'>
                  <button className='w-full md:w-full h-16 bg-red-500 text-lg font-bold uppercase'>View project</button>
                </div>
              </div>
            </div>
          </div>
          <div className='md:w-3/5 hidden md:block bg-purple-400 h-full'></div>
        </section>
      </div>
      <div className='w-full h-screen flex justify-center'>
        <section className='w-full md:w-full h-full flex'>
          <div className='w-full md:w-3/5 h-full flex justify-center items-center'>
            <div className='h-full w-full flex flex-col justify-end px-3  '>
              <div className='w-full h-20 flex justify-start items-center'>
                <h1 className='text-2xl xl:text-5xl  uppercase font-extrabold'>Project Name</h1>
              </div>
              <div className='w-full h-5/6 flex flex-col items-center gap-4 mt-7'>
                <div className='w-4/5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius numquam illum fugiat omnis cum earum quos eos est! Soluta nulla !</div>
                <div className='w-4/5 flex flex-col gap-5'>
                  <h1 className='text-lg font-bold'>Development Tools</h1>
                  <ul className='px-7 flex flex-col gap-2'>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                  </ul>
                </div>
                <div className='w-full md:w-4/5 xl:w-4/5 lg:w-4/5 mt-5 bg-green-300'>
                  <button className='w-full md:w-full h-16 bg-red-500 text-lg font-bold uppercase'>View project</button>
                </div>
              </div>
            </div>
          </div>
          <div className='md:w-3/5 hidden md:block bg-purple-400 h-full'></div>
        </section>
      </div> */}
     
    </div>
  );
}

export default Projects;
