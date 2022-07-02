import React from 'react';
import Facebook from '../Pages/sosial-logo/Facebook-logo.png'
import github from '../Pages/sosial-logo/github-log.png'
import twitter from '../Pages/sosial-logo/twitter-logo.png'
import linkedin from '../Pages/sosial-logo/linkedin.png'
const Footer = () => {
    return (
        <div>
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
 
  <div>
    <div className="grid grid-flow-col gap-4">
      <a className="bg-white w-8 rounded-full" src="" href="https://twitter.com/devabdullah_me"> <img src={Facebook} alt="hq" /> </a> 
      <a className="bg-white w-8 rounded-full" src="" href="https://twitter.com/devabdullah_me"> <img src={twitter} alt="" /> </a> 
      <a className="bg-white w-8 rounded-full" src="" href="https://www.linkedin.com/in/developerabdullah-me"> <img src={linkedin} alt="" /> </a> 
      <a className="bg-white w-8 rounded-full" src="" href="https://github.com/developerabdullah-me"> <img src={github} alt="" /> </a> 
     
    </div>
    <div className="">
                  <span className="d-block font-bold text-red-500">call Now: </span>
                 <span className="d-block text-blue-700"><a href="tel:+88 01779-358821">+88 01779-358821</a></span>
               </div>
  </div> 
  <div>
  <p>Copyright © All right reserved by developerabdullah-me{(new Date().getFullYear())}</p>
  </div>
</footer>
        </div>
    );
};

export default Footer;