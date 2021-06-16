import React from 'react'
import './index.css'
function index() {
    return (
        
        <div>
            <div className="body">
        <div className="hero flex items-center justify-between">
                 <div className="left flex-1 flex justify-center">
                      <img src="./images/man2.jpg"></img>
                 </div>
                <div className="right flex-1">
                   <h6>Pramod Sapkota</h6>
                   <h1>I'm a Creative <br /><span>Designer</span></h1>
                   <p> Hello I am a coder. I like Coding. </p>
                     <div>
                     <button className="btn btn-secondary"> <a href="./pdf/cvupdate.pdf" target="_blank">Download CV </a></button>
                     </div>
                </div>
        </div>
     </div>   
   
    <section id="about" className="about">
        <div className="container flex items-center">
            <div className="flex-1">
                <img className="about-img" src="./images/aboutme.jpg" alt="" />
            </div>
            <div className="flex-1">
                <h1>About <span>Me</span></h1>
                <h3>Hello, I am Pramod </h3>
                <p>Hello, My name is Pramod Sapkota.I am a person who is positive about every aspect of life.
                   There are many things I like to do, to see, and to experience. 
                   I like to read, I like to write; I like to think, I like to dream; 
                   I like to talk, I like to listen. I like to see the sunrise in the morning, 
                   I like to see the moonlight at night; I like to feel the music flowing on my face.</p>

                       {/* <div className="social">
                           <a href="#"> <img src="./images/website.svg" alt="" /></a>
                           <a href="#"> <img src="./images/facebook.svg" alt="" /></a>
                           <a href="#"> <img src="./images/twitter.svg" alt="" /></a>
                           <a href="#"> <img src="./images/pinterest.svg" alt="" /></a>
                           <a href="#"> <img src="./images/instagram.svg" alt="" /></a>
                       </div> */}
            </div>
        </div>
    </section>
    <section id="services" className="services">
        <div className="container">
            <h1 className="section-heading"><span>Our</span> Services</h1>
            <p>I provide the high standard website for your business solution</p>
            <div className="card-wrapper">
                <div className="card">
                    <img src="./images/brush.png" alt="" />
                    <h2>Graphic Design</h2>
                    <p>Graphic design is a craft where professionals create visual content to communicate messages.
                         By applying visual hierarchy and page layout techniques, designers use typography and 
                         pictures to meet users' specific needs and focus on the logic of displaying elements in 
                         interactive designs, to optimize the user experience.</p>
                </div>

                <div className="card">
                    <img src="./images/code.png" alt="" />
                    <h2>Web Development</h2>
                    <p>Web development is the building and maintenance of websites; it’s the work that happens 
                        behind the scenes to make a website look great, work fast and perform well with a seamless 
                        user experience.The field of web development is generally broken down into front-end (the user-facing side) 
                        and back-end (the server side).</p>
                </div>

                <div className="card">
                    <img src="./images/bag.png" alt="" />
                    <h2>Web Marketing</h2>
                    <p> Web marketing is the process of using the Internet to market your business. 
                        It includes the use of social media, search engines, blogging, videos, and email.
                        Promoting a business takes effort. There are a variety of ways to do it.
                        With tons of people using the internet every day, there are huge opportunities to get your 
                        product or service in front of people who need or want it.
                        </p>
                </div>

                <div className="card">
                    <img src="./images/desktop.png" alt="" />
                    <h2>Web Design </h2>
                    <p> Web design refers to the design of websites that are displayed on the internet. 
                        It usually refers to the user experience aspects of website development rather than 
                        software development. ... A web designer works on the appearance, layout, and, 
                        in some cases, content of a website.</p>
                </div>
            </div>
        </div>
    </section>
    <section className="freelancer">
        <h1>I am also Available for Freelancer</h1>
        <p>I will provide high standard clean website for all business solutions</p>
        <button className="btn btn-primary"><a href="./pdf/cvupdate.pdf" target="_blank">Download CV </a></button>
 </section>
 <section id="work" className="work">
     <div className="container">
         <h1 className="section-heading"><span>Our</span>Work</h1>
         <p> I have done various project during my college time and Internship </p>
         <div className="card-wrapper">
             <div className="card">
             <div className="overlay">
                     <span>Category</span>
                     <a href="#">Web Development</a>
                 </div>
                 <img src="./images/ph-1.png" alt="" />
             </div>
             <div className="card">
                 <div className="overlay">
                     <span>Category</span>
                     <a href="#">Web Development</a>
                 </div>
                 <img src="./images/ph-1.png" alt="" />
             </div>
             <div className="card">
             <div className="overlay">
                     <span>Category</span>
                     <a href="#">Web Development</a>
                 </div>
                 <img src="./images/ph-1.png" alt="" />
             </div>
             <div className="card">
             <div className="overlay">
                     <span>Category</span>
                     <a href="#">Web Development</a>
                 </div>
                 <img src="./images/ph-1.png" alt="" />
             </div>
             <div className="card">
             <div className="overlay">
                     <span>Category</span>
                     <a href="#">Web Development</a>
                 </div>
                 <img src="./images/ph-1.png" alt="" />
             </div>
             <div className="card">
             <div className="overlay">
                     <span>Category</span>
                     <a href="#">Web Development</a>
                 </div>
                 <img src="./images/ph-1.png" alt="" />
             </div>
         </div>
     </div>
 </section>
 <section  id="contact" className="contact">
     <div className="container">
         <h1 className="section-heading">Contact <span>Us</span></h1>
           <p>I will be available anytime so you can contact me at</p>
           <div className="card-wrapper">
               <div className="card">
                   <img src="./images/phone-2.jpg" alt=""/>
                   <h1>Call Me On </h1>
                   <h6>+977-9868832972</h6>
               </div>
               <div className="card">
                   <img src="./images/msg.png" alt=""/>
                   <h1>Email me at </h1>
                   <h6> support@gmail.com </h6>
               </div>
               <div className="card">
                   <img src="./images/map.jpg" alt=""/>
                   <h1>Visit Me  </h1>
                   <h6>Manthali-01, Ramechhap</h6>
               </div>
           </div>
           <form action="">
           <div className="input-wrap">
               <input type="text" placeholder="Your Name *" />
               <input type="email" placeholder="Your Email *" />
           </div>
           <div className="input-wrap-2">
               <input type="text" placeholder="Subject of Concern" />
               <textarea name="" id="" cols="30" rows="10" placeholder="Your Message.."></textarea>
           </div>
           <div className="btn-wrapper">
               <button className="btn btn-primary">Send Message</button>
           </div>
           </form>
         </div> 
 </section>
<footer>
    <img className="footer-logo" src="./images/logo.png" alt="" />
    <div className="footer-social">
        <img src="./images/website.png" alt="" />
        <img src="./images/facebook.png" alt="" />
        <img src="./images/instagram.jpg" alt="" />
        <img src="./images/twitter.png" alt="" />
        <img src="./images/pinterest.png" alt=""/>
    </div>
    <div className="copyright">
        Copyright 2021 @PramodSapkota. All Right Reserved. 
    </div>
</footer>
</div>    
    )
}

export default index
