// // src/components/Contact.js
// import React from 'react';
// import SocialMediaIcons from './SocialMediaIcons';
// import data from './Data/data';
// import './Contact.css';

// const Contact = () => {
//   const { businessCardImage } = data;

//   return (
//     <div className="contact">
//       <h2>Contact Us</h2>
//       <div className="business-card">
//         <img src={businessCardImage} alt="Business Card" width="300" />
//       </div>


//       <div className="social-icons">
//         <SocialMediaIcons />
//       </div>
  
//     </div>
//   );
// };

// export default Contact;


// src/components/Contact.js
import React from 'react';
import SocialMediaIcons from './SocialMediaIcons';
import data from './Data/data';
import './Contact.css';

const Contact = () => {
  const { businessCard} = data;

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <div className="business-card">
        <img src={businessCard.image} alt={businessCard.title} width="300" />
      </div>

      <div className="social-icons">
        <SocialMediaIcons />
      </div>
    </div>
  );
};

export default Contact;
