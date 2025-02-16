import "./footer.css"
// import { NavLink} from "react-router-dom";
import Adtask from "../assests/adTask.ai.png"
export default function Footer(){
    return(
        <>
    <section id="Footer">

       <div className="footer-top">
         
         <div className="footer-left">
           <img src={Adtask} alt="" />
           
           <div className="footer-info">
      
             <div className="mail"><i class="fa-regular fa-envelope"></i>
             <a> contact@adtask.ai</a>
             </div>
             <div className="location"><i className="fa-solid fa-location-dot fa-2x"></i>
                <a>San Francisco Bay Area</a> 
              </div>

           </div>
         </div>

         <div className="footer-mid">
            <h1>Utilities</h1>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Tools</li>
                <li>Contact Us</li>
            </ul>
         </div>

         <div className="footer-right">
            <h1>Socials</h1>
            <ul>
                <li>X</li>
                <li>LinkedIn</li>
                <li>Instagram</li>
                <li>Facebook</li>
            </ul>
         </div>

          
       </div>

       <div className="footer-bottom">
        <p>All rights reserved © 2025 adTask</p>
       </div>
       
    </section>
        
        </>
    ) 
}