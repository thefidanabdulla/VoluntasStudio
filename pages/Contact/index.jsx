import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

const Index = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m7y8mm5', 'template_u02txln', form.current, 'S1O5X4Lbx_wAh8QEX')
      .then((result) => {
          console.log(result.text);
          console.log('success');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className=''>
      <div className='w-full flex justify-center bg-[#23282c]'>
        <div className='xl:w-[1200px] w-full px-4 xl:px-0 py-[150px] md:py-[250px] flex md:flex-row flex-col md:justify-between justify-center items-center'>
          <div>
            <h1 className='contactHeader text-[64px] text-center md:text-start md:text-[72px] lg:text-[96px] text-[#FBD808]'>Contact Us</h1>
            <p className='flex items-center gap-4'>
              <span className='text-white font-bold italic text-xl'>Gmail:</span>
              <a href='mailto:studiovoluntas@gmail.com' className='text-[#FBD808] italic text-xl'>studiovoluntas@gmail.com</a>
            </p>
            <p className='flex items-center gap-4'>
              <span className='text-white font-bold italic text-xl'>Phone:</span>
              <a href='tel:+994702077626' className='text-[#FBD808] italic text-xl'>+994702077626</a>
            </p>
            <p className='flex items-center gap-4'>
              <span className='text-white font-bold italic text-xl'>Addres:</span>
              <p className='text-[#FBD808] italic text-xl'>89 Ataturk avenue, Baku 1069</p>
            </p>
          </div>
          <div className='pt-10'>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-2 w-[300px] md:w-[330px] lg:w-[400px]'>
              <input  name="user_email" type='email' required placeholder='Email' className='p-2 rounded-md border-none outline-none bg-[#ffffff50] text-white' />
              <textarea  name="message"   required placeholder='Message' rows={4} className='p-2 resize-none rounded-md border-none outline-none bg-[#ffffff50] text-white' ></textarea>
              <button type='submit' className='w-full text-white  bg-[#FBD808] font-bold p-4 rounded-md'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index