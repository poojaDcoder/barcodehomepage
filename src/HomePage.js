import React from "react";
import { Link } from "react-scroll";
import "./homepage.css";
import logo from './logo.jpg';
import square2 from './square2.jpg';



const HomePage = () => {
  return (
    
    <div>
      <div className="navbar">
        <img src={logo} alt="logo" className="logo"/>
        <ul>
          {menuItems.map(menu => (
          <li>
          <Link to={menu.title} smooth={true} offset={501} duration={500}>{menu.title}</Link>
          
          </li>
          ))}
        </ul>
      </div>
      <main>

        {menuItems.map(menu => (
            <div className="content">
            <h1 id={menu.title}>Welcome to Barcode Generator</h1>
            <h4>DESIGN YOUR UNIQUE BARCODE!!</h4>
            <div>
            <img src={square2} alt="square2" className="square2"/></div>
            <Link to="/app">
              <button className="button-3">Create New Label </button>
            </Link>
            <div className="content1">
            <h1 id={menu.title}>Our Services</h1>
            <h3>Easy-to-Use Interface:</h3>
            <p>Our user-friendly website is designed with simplicity in mind. Whether you're a seasoned professional or a beginner, you'll find our barcode generator intuitive and straightforward to use. Just enter the data you want to encode, choose the barcode type, and hit the "Generate" button - it's that simple!</p>
            <h3>Wide Range of Barcode Types:</h3>
            <p>BarcodeGenius supports an extensive selection of barcode types, including UPC-A, UPC-E, EAN-13, EAN-8, Code 39, Code 128, QR Code, and many more. Whatever your specific requirements are, we've got you covered!</p>
            <h3>Customizable Options:</h3>
            <p>We understand that every business has unique needs. That's why BarcodeGenius allows you to customize your barcodes with various options. You can adjust the size, color, and even add text or a logo to your barcode. Make it stand out and represent your brand effortlessly!</p>
            
            
            
            
            
            </div>
            <div className="content2">
            <h1 id={menu.title}>AboutUs</h1>
            <p>Are you looking for a reliable and efficient way to create barcodes for your products,<br/> inventory, or business needs? Look no further! BarcodeGenius is here to simplify the process of barcode generation and provide you with high-quality, professional barcodes in just a few clicks.</p>
            </div>
            <div>
            <h1 id={menu.title}>Contact</h1>
            <h3>Contact Us - Get in Touch with Our Team</h3>
            <p>Welcome to our Contact page! We value your feedback, questions, and inquiries, and we're eager to hear from you. Whether you have a specific query, need assistance, or simply want to say hello, our team is here and ready to help.</p>
            <h4>Contact Options:</h4>
            <p><h6>1)Contact Form: Fill out our easy-to-use contact form directly on this page. Let us know your name, email address, and message, and we'll get back to you promptly.</h6></p>
            <h6>2)Email: If you prefer email communication, you can reach us at support@barcodegenius.com. Send us your inquiries, and we'll respond as quickly as possible.</h6>
            <h6>3)Email: If you prefer email communication, you can reach us at support@barcodegenius.com. Send us your inquiries, and we'll respond as quickly as possible.</h6>
            <h5>Operating Hours:</h5>
            <p>Our support team is available to assist you during our regular business hours from Monday to Friday, 9:00 AM to 6:00 PM (GMT). If you contact us outside these hours, don't worry; we'll respond to your message as soon as we're back online.</p>
            <h5>Your Privacy Matters:</h5>
            <p>Rest assured that all the information you share with us is treated with the utmost confidentiality. We respect your privacy and adhere to strict data protection policies, ensuring your personal information remains secure.</p>
            <h5>Feedback and Suggestions:</h5>
            <p>We value your feedback and suggestions to improve our services continually. If you have any ideas, comments, or suggestions, please feel free to share them with us. Your input is crucial to helping us deliver an exceptional experience for all our users.</p>
            <p>Thank you for choosing BarcodeGenerator. We look forward to hearing from you and providing the best possible support. Contact us today, and let's work together to make your barcode generation journey even better!</p>
            
            
            </div>
          </div>
        ))}
        
       
        
      </main>
      
        </div>


  )};
  const menuItems = [
    {
      id:1,
      title:"Home",
    },
    {
      id:2,
      title:"Services",
    },
    {
      id:3,
      title:"AboutUs",
    },
    {
      id:4,
      title:"Contact",
    },
  ];


export default HomePage;
