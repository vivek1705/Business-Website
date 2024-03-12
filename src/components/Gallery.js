// // Gallery.js
// import React from 'react';
// import data from './Data/data';
// import './Gallery.css'; 

// const Gallery = () => {
//   const { photos } = data;

//   return (
//     <section id="gallery">
//       <h1>Photos</h1>
//       <div className="gallery-container">
//         {photos.map((photos, index) => (
//           <div key={index} className="gallery-item">
//             <img src={photos.image} alt={`Photos ${index + 1}`} />
//             <p className="image-title">{photos.title}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Gallery;


// Gallery.js
import React, { useState } from 'react';
import data from './Data/data';
import './Gallery.css';

const Gallery = () => {
  const { photos } = data;
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section id="gallery">
      <h1>Photos</h1>
      <div className="gallery-container">
        {photos.slice(0, showAll ? photos.length : 5).map((photo, index) => (
          <div key={index} className="gallery-item">
            <img src={photo.image} alt={`Photos ${index + 1}`} />
            <p className="image-title">{photo.title}</p>
          </div>
        ))}
      </div>
      {showAll ? (
        <div className="close-button">
          <button onClick={toggleShowAll}>Close</button>
        </div>
      ) : (
        <div className="show-more-button">
          <button onClick={toggleShowAll}>See More Photos</button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
